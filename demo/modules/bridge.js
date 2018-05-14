/*
	mados-app: bridge.js
	iwasato@toralab.org
*/

class Bridge {
	constructor(electron){

		if(process.type == 'renderer'){
			this.ipcRenderer = this._initIpcRenderer(electron.ipcRenderer);
			this.id = electron.remote.getCurrentWindow().id;
			this._peerConnectionMap = {};
			this._clientMap = {};
			this._colleagueList = [];
			this.label = null;
			window.addEventListener('beforeunload',(e)=>{
				this.ipcRenderer.send('release',{
					label: this.label
				});
			},{
				once: true
			});
		} else if(process.type == 'browser'){
			this._winMap = {};
			this._relayMap = {};
			this._returnHandlerMap = {};
			this.ipcMain = this._initIpcMain(electron.ipcMain);
			this._getWindowFromId = electron.BrowserWindow.fromId;
		}
		
		this._messageHandler = {};
	}

	/* public */
	p2pConnect(label){
		return new Promise((resolve)=>{
			if(!this.ipcRenderer){
				reject();
				return;
			}

			const peerConnection = new RTCPeerConnection([{
				iceServers: []
			}]);
			peerConnection.label = label;
			peerConnection._connectedHandler = ()=>{
				resolve(label);
			}

			this._peerConnectionMap[label] = peerConnection;
			peerConnection.createOffer()
			.then((sdp)=>{
				return peerConnection.setLocalDescription(sdp);
			}).then(()=>{
				this.ipcRenderer.send('dispatch_p2p',{
					label: {
						from: this.label,
						to: peerConnection.label
					},
					channel: 'offer',
					value: {
						sdp: peerConnection.localDescription.sdp,
						type: peerConnection.localDescription.type
					}
				});
			});

			peerConnection.onicecandidate = (e)=>{
				if(e.candidate){
					this.ipcRenderer.send('dispatch_p2p',{
						label: {
							from: this.label,
							to: peerConnection.label
						},
						channel: 'ice',
						value: {
							candidate: e.candidate.candidate,
							sdpMLineIndex: e.candidate.sdpMLineIndex,
							sdpMid: e.candidate.sdpMid
						}
					});
				}
			}

			peerConnection.onaddstream = (e)=>{
				this.onaddstream(peerConnection.label,e.stream);
			}

			peerConnection.onnegotiationneeded = (e)=>{
				peerConnection.createOffer()
				.then((sdp)=>{
					return peerConnection.setLocalDescription(sdp);
				}).then(()=>{
					this.ipcRenderer.send('dispatch_p2p',{
						label: {
							from: this.label,
							to: peerConnection.label
						},
						channel: 'offer',
						value: {
							sdp: peerConnection.localDescription.sdp,
							type: peerConnection.localDescription.type
						}
					});
				});
			}
		});
	}

	/* public */
	addStream(label,stream){
		if(!this.ipcRenderer || !this._peerConnectionMap[label]){
			return;
		}

		const peerConnection = this._peerConnectionMap[label];
		peerConnection.addStream(stream);
	}

	/* public */
	setLabel(label){
		if(!this.ipcRenderer){
			return;
		}

		this.label = label;
		this._colleagueList = this.ipcRenderer.sendSync('bridge',{
			label, id: this.id
		});
	}

	/* public */
	setClient(label,client){
		if(!this.ipcRenderer){
			return;
		}

		this._clientMap[label] = client;
		this.ipcRenderer.sendSync('relay',{
			label: {
				host: this.label,
				client: label
			}
		});
	}

	/* public */
	send(label,channel,value){
		if(!this.ipcRenderer && !this.ipcMain){
			return;
		}

		if(this.ipcMain){
			if(this._relayMap[label] && this._winMap[this._relayMap[label]]){
				this._winMap[this._relayMap[label]].send('dispatch_message',{
					label: {
						from: 'mainProcess',
						client: label
					},
					channel,value
				});

				return;
			}

			if(!this._winMap[label]){
				return;
			}

			this._winMap[label].send('message',{from: 'mainProcess',channel,value});
		} else {
			this.ipcRenderer.send('dispatch_message',{
				label: {from: this.label, to: label},channel,value
			});
		}
	}

	/* public */
	sendSync(label,channel,value){
		if(!this.ipcRenderer){
			return;
		}

		const timeStamp = (new Date()).getTime().toString();

		return this.ipcRenderer.sendSync('dispatch_message_sync',{
			label: {from: this.label, to: label},channel,value,timeStamp
		});
	}

	/* public */
	sendToMain(channel,value){
		if(!this.ipcRenderer){
			return;
		}

		this.ipcRenderer.send('message',{
			from: this.label,channel,value
		});
	}

	/* public */
	sendSyncToMain(channel,value){
		if(!this.ipcRenderer){
			return;
		}

		return this.ipcRenderer.sendSync('message_sync',{
			from: this.label,channel,value
		});
	}

	/* public */
	on(channel,callback){
		this._messageHandler[channel] = callback;
	}

	/* public */
	off(channel){
		delete this._messageHandler[channel];
	}

	/* public */
	getLabels(){
		if(!this.ipcRenderer){
			return;
		}

		return this.ipcRenderer.sendSync('getter',{
			target: 'all_labels'
		});
	}

	/* public */
	broadcast(channel,value){
		if(this._relayMap){
			for(const label in this._relayMap){
				if(this._winMap[this._relayMap[label]]){
					this._winMap[this._relayMap[label]].send('dispatch_message',{
						label: {
							from: 'mainProcess',
							client: label
						},
						channel,value
					});
				}
			}
		}

		if(this._winMap){
			for(const label in this._winMap){
				this._winMap[label].send('message',{
					from: 'mainProcess',
					channel,value
				})
			}
		}

		if(this.ipcRenderer){
			this.ipcRenderer.send('message',{
				from: this.label,
				channel,value
			});
		}

		if(this._colleagueList){
			for(const label of this._colleagueList){
				this.ipcRenderer.send('dispatch_message',{
					label: {from: this.label, to: label},channel,value
				});
			}
		}

		if(this._clientMap){
			for(const label in this._clientMap){
				this.ipcRenderer.send('dispatch_message',{
					label: {from: this.label, to: label},channel,value
				});
			}
		}
	}

	/* override */
	onaddpeer(from){}

	/* override */
	onaddstream(from,stream){}

	/* override */
	onaddwindow(label){}

	/* private */
	_getWindowFromId(){}

	/* private */ 
	_initIpcMain(ipc){
		ipc.on('bridge',(e,{label,id})=>{
			if(this._relayMap[label] && !this._winMap[this._relayMap[label]]){
				this._winMap[this._relayMap[label]] = this._getWindowFromId(id);
			} else {
				this._winMap[label] = this._getWindowFromId(id);
			}
			e.returnValue = Object.keys(this._winMap);

			for(const _label in this._relayMap){
				if(label.client != _label){
					this._winMap[this._relayMap[_label]].send('dispatch_notification',{
						action: 'add_window',
						value: label,
						client: _label
					});
				}
			}

			for(const _label in this._winMap){
				if(label != _label){
					this._winMap[_label].send('notification',{
						action: 'add_window',
						value: label
					});
				}
			}
		});

		ipc.on('relay',(e,{label})=>{
			this._relayMap[label.client] = label.host;
			e.returnValue = true;

			for(const _label in this._winMap){
				if(label != _label){
					this._winMap[_label].send('notification',{
						action: 'add_window',
						value: label
					});
				}
			}
		});

		ipc.on('release',(e,{label})=>{
			if(this._relayMap[label]){
				delete this._relayMap[label];
			}
			if(this._winMap[label]){
				delete this._winMap[label];
			}
		});

		ipc.on('dispatch_message',(e,{label,channel,value})=>{
			if(this._relayMap[label.to] && this._winMap[this._relayMap[label.to]]){
				this._winMap[this._relayMap[label.to]].send('dispatch_message',{
					label: {
						from: label.from,
						client: label.to
					},
					channel,value
				});

				return;
			}

			if(!this._winMap[label.to]){
				return;
			}

			this._winMap[label.to].send('message',{from: label.from,channel,value});
		});

		ipc.on('dispatch_message_sync',(e,{label,channel,value,timeStamp})=>{
			this._returnHandlerMap[timeStamp] = (returnValue)=>{
				e.returnValue = returnValue;
			}

			if(this._relayMap[label.to] && this._winMap[this._relayMap[label.to]]){
				this._winMap[this._relayMap[label.to]].send('dispatch_message_sync',{
					label: {
						from: label.from,
						client: label.to
					},
					channel,value,timeStamp
				})

				return;
			}

			if(!this._winMap[label.to]){
				return;
			}

			this._winMap[label.to].send('message_sync',{from: label.from,channel,value,timeStamp});
		});

		ipc.on('message',(e,{from,channel,value})=>{
			if(!this._messageHandler[channel]){
				return;
			}

			e.from = from;
			this._messageHandler[channel](e,value);
		});

		ipc.on('message_sync',(e,{from,channel,value})=>{
			if(!this._messageHandler[channel]){
				e.returnValue = false;
			}

			e.from = from;
			const returnValueOrCallback = this._messageHandler[channel](e,value);
			if(returnValueOrCallback.then){
				returnValueOrCallback.then((returnValue)=>{
					e.returnValue = returnValue;
				});
			} else {
				e.returnValue = returnValueOrCallback;
			}
		});

		ipc.on('message_sync_return',(e,{value,timeStamp})=>{
			if(!this._returnHandlerMap[timeStamp]){
				return;
			}

			this._returnHandlerMap[timeStamp](value);
			delete this._returnHandlerMap[timeStamp];
		});

		ipc.on('dispatch_p2p',(e,{label,channel,value})=>{
			if(this._relayMap[label.to] && this._winMap[this._relayMap[label.to]]){
				this._winMap[this._relayMap[label.to]].send('dispatch_p2p',{
					label: {
						from: label.from,
						client: label.to
					},
					channel,value
				});

				return;
			}

			if(!this._winMap[label.to]){
				return;
			}

			this._winMap[label.to].send('p2p',{from: label.from,channel,value});
		});

		ipc.on('getter',(e,{target})=>{
			switch(target){
				case 'all_labels':
				e.returnValue = Object.keys(this._winMap);
				break;

				default:
				e.returnValue = null;
				break;
			}
		});

		return ipc;
	}

	/* private */ 
	_initIpcRenderer(ipc){
		ipc.on('message',(e,{from,channel,value})=>{
			if(!this._messageHandler[channel]){
				return;
			}

			e.from = from;
			this._messageHandler[channel](e,value);
		});

		ipc.on('message_sync',(e,{from,channel,value,timeStamp})=>{
			if(!this._messageHandler[channel]){
				this.ipcRenderer.send('message_sync_return',{
					value: false,
					timeStamp
				})
				return;
			}

			e.from = from;
			const returnValueOrCallback = this._messageHandler[channel](e,value);
			if(returnValueOrCallback.then){
				returnValueOrCallback.then((returnValue)=>{
					this.ipcRenderer.send('message_sync_return',{
						value: returnValue,
						timeStamp
					});
				});

				return;
			} else {
				this.ipcRenderer.send('message_sync_return',{
					value: returnValueOrCallback,
					timeStamp
				});
			}
		});

		ipc.on('dispatch_message_sync',(e,{label,channel,value,timeStamp})=>{
			if(!this._clientMap[label.client]){
				this.ipcRenderer.send('message_sync_return',{
					value: false,
					timeStamp
				});
				return;
			}

			this._clientMap[label.client].send('message_sync',{
				label: label.from,
				channel,value,timeStamp
			});
		});

		ipc.on('dispatch_notification',(e,{action,value,client})=>{
			if(!this._clientMap[client]){
				return;
			}

			this._clientMap[client].send('notification',{action,value});
		});

		ipc.on('dispatch_message',(e,{label,channel,value})=>{
			if(!this._clientMap[label.client]){
				return;
			}

			this._clientMap[label.client].send('message',{from: label.from,channel,value});
		});

		ipc.on('dispatch_p2p',(e,{label,channel,value})=>{
			if(!this._clientMap[label.client]){
				return;
			}

			this._clientMap[label.client].send('p2p',{from: label.from,channel,value});
		});

		ipc.on('p2p',(e,{from,channel,value})=>{
			if(!this.ipcRenderer){
				return;
			}

			switch(channel){
				case 'offer': {
				const remoteDescription = value;
				if(!this._peerConnectionMap[from]){
					const peerConnection = new RTCPeerConnection([{
						iceServers: []
					}]);

					peerConnection.label = from;

					peerConnection.onicecandidate = (e)=>{
						if(e.candidate){
							this.ipcRenderer.send('dispatch_p2p',{
								label: {
									from: this.label,
									to: peerConnection.label
								},
								channel: 'ice',
								value: {
									candidate: e.candidate.candidate,
									sdpMLineIndex: e.candidate.sdpMLineIndex,
									sdpMid: e.candidate.sdpMid
								}
							});
						}
					}

					peerConnection.onaddstream = (e)=>{
						this.onaddstream(peerConnection.label,e.stream);
					}

					peerConnection.onnegotiationneeded = (e)=>{
						peerConnection.createOffer()
						.then((sdp)=>{
							return peerConnection.setLocalDescription(sdp);
						}).then(()=>{
							this.ipcRenderer.send('dispatch_p2p',{
								label: {
									from: this.label,
									to: peerConnection.label
								},
								channel: 'offer',
								value: {
									sdp: peerConnection.localDescription.sdp,
									type: peerConnection.localDescription.type
								}
							});
						});
					}

					peerConnection._connectedHandler = ()=>{
						this.onaddpeer(peerConnection.label);
					}

					this._peerConnectionMap[from] = peerConnection;
				}

				const peerConnection = this._peerConnectionMap[from];
				peerConnection.setRemoteDescription(new RTCSessionDescription(remoteDescription))
				.then(()=>{
					return peerConnection.createAnswer();
				}).then((localDescription)=>{
					return peerConnection.setLocalDescription(localDescription);
				}).then(()=>{
					this.ipcRenderer.send('dispatch_p2p',{
						label: {
							from: this.label,
							to: from
						},
						channel: 'answer',
						value: {
							sdp: peerConnection.localDescription.sdp,
							type: peerConnection.localDescription.type
						}
					});
				});

				} break;

				case 'answer': {
				const remoteDescription = value;
				const peerConnection = this._peerConnectionMap[from];
				peerConnection.setRemoteDescription(new RTCSessionDescription(remoteDescription))
				.then(()=>{
					peerConnection._connectedHandler();
				});

				this.ipcRenderer.send('dispatch_p2p',{
					label: {
						from: this.label,
						to: from,
						value: null
					},
					channel: 'connected'
				});

				} break;

				case 'ice':
				const candidate = value;
				const peerConnection = this._peerConnectionMap[from];
				peerConnection.addIceCandidate(new RTCIceCandidate(candidate));

				break;

				case 'connected': {
					const peerConnection = this._peerConnectionMap[from];
					peerConnection._connectedHandler();
				}
			}
		});

		ipc.on('notification',(e,{action,value})=>{
			switch(action){
				case 'add_window':
				this._colleagueList.push(value);
				this.onaddwindow(value);
				break;
			}
		});

		return ipc;
	}
}

module.exports = Bridge;