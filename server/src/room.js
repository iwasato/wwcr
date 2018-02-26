const mediasoupClient = require('mediasoup-client');

export default class Room extends mediasoupClient.Room {
	constructor(socket,id){
		super({
			requestTimeout: 8000
		});

		this.socket = socket;
		this.sendTransport = null;
		this.recvTransport = null;
		this.videoProducers = {}
		this.id = id;
		this.streams = {};
		this.streamInfoMap = {};
		super.on('request',this._onsendrequest);
		super.on('notify',this._onsendnotify);
		super.on('newpeer',this._onnewpeer);

		socket.addEventListener('message',(e)=>{
			const data = JSON.parse(e.data);
			switch(data.action){
				case 'mediasoup_notify':
				this._onreceivenotify(data.value.notification);
				break;
			}
		});

		window.addEventListener('beforeunload',(e)=>{
			super.leave();
		});
	}

	joinRoom(){
		return new Promise((resolve)=>{
			super.join(this.socket.userId,{device: mediasoupClient.getDeviceInfo(), userId: this.socket.userId, userName: this.socket.userName, rank: this.socket.rank})
			.then((peers)=>{
				this.sendTransport = super.createTransport('send',{media: 'SEND'});
				this.recvTransport = super.createTransport('recv',{media: 'RECV'});
				for(const peer of peers){
					this._onnewpeer(peer);
				}
				console.log(`%cjoin: %c${this.id}`,'color:green','color: magenta');
				resolve();
			});
		});
	}

	createRoom(){
		return new Promise((resolve)=>{
			super.join(this.socket.clientId,{device: mediasoupClient.getDeviceInfo()})
			.then((peers)=>{
				this.sendTransport = super.createTransport('send',{media: 'SEND'});
				this.recvTransport = super.createTransport('recv',{media: 'RECV'});
				for(const peer of peers){
					this._onnewpeer(peer);
				}
				console.log(`%cjoin: %c${this.id}`,'color:green','color: magenta');
				resolve();
			});
		});
	}

	addStream(stream, appData){
		console.log(`at: %c${this.id}\n	%cnew stream source: %c${appData.source}\n	%cnew stream number: %c${appData.windowNumber}`,'color: magenta', 'color: blue', 'color: magenta', 'color: blue', 'color: magenta');
		this.streams[`${appData.userId}.${appData.source}.${appData.windowNumber}.${appData.roomId}`] = stream;
		const videoTrack = stream.getVideoTracks()[0];
		const videoProducer = super.createProducer(videoTrack, {simulcast: false}, appData);

		videoProducer.send(this.sendTransport);

		this.videoProducers[appData.windowNumber] = videoProducer;
	}

	deleteStream(windowNumber){
	}

	searchStream({query,logic='and'}){
		const indexes = [];
		const keys = ['userId','source','number','roomId'];
		for(const key in query){
			indexes.push(keys.indexOf(key));
		}
		indexes.filter((index)=>{
			return index != -1;
		});

		var checkFunc = null;
		if(logic == 'or'){
			checkFunc = (bools)=>{
				return bools.some((bool)=>{
					return bool;
				});
			}
		} else {
			checkFunc = (bools)=>{
				return bools.every((bool)=>{
					return bool;
				});
			}
		}
		const streamIds = Object.keys(this.streams).filter((streamId)=>{
			const values = streamId.split('.');
			const bools = indexes.map((index)=>{
				return values[index] == query[keys[index]];
			});
			return checkFunc(bools);
		});

		return streamIds;
	}

	getStream(streamId){
		return this.streams[streamId];
	}

	onnewpeer(peer){}
	onclosepeer(peer){}
	onnewstream(stream,appData){}

	_onnewpeer(peer){
		peer.on('newconsumer',(consumer)=>{
			this._onnewconsumer(consumer);
		});
		peer.on('close',()=>{
			this.onclosepeer(peer);
		});
		peer.consumers.forEach((consumer)=>{
			this._onnewconsumer(consumer);
		});
		this.onnewpeer(peer);
	}

	_onnewconsumer(consumer){
		consumer.receive(this.recvTransport)
		.then((track)=>{
			const appData = consumer.appData;
			console.log(`at: %c${this.id}\n	%cnew stream source: %c${appData.source}\n	%cnew stream number: %c${appData.windowNumber}`,'color: magenta', 'color: blue', 'color: magenta', 'color: blue', 'color: magenta');
			const stream = new MediaStream();
			stream.addTrack(track);
			this.streams[`${appData.userId}.${appData.source}.${appData.windowNumber}.${appData.roomId}`] = stream;
			this.onnewstream(stream,appData);
		});
	}

	_onsendnotify(notification){
		console.log(`at: %c${this.id}\n	%cnotify: %c${notification.method}`,'color:magenta','color: orange','color: magenta');
		this.socket.send({
			action: 'mediasoup_notify',
			option: {
				notification: notification,
				roomId: this.id,
				userId: this.socket.userId
			}
		});
	}

	_onsendrequest(request,callback,errback){
		console.log(`at: %c${this.id || 'No ID'}\n	%crequest: %c${request.method}`,'color:magenta','color: blue','color: magenta');
		this.socket.sendSync({
			action: 'mediasoup_request',
			option: {
				roomId: this.id,
				userId: this.socket.userId,
				request: request
			}
		}).then(({response})=>{
			callback(response);
		}).catch(errback);
	}

	_onreceivenotify(notification){
		super.receiveNotification(notification);
	}
}