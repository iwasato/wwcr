import contents from './contents.js';

export default (()=>{
	const popup = {
		test: ()=>{
			return swal({
				html: contents.test,
				showCancelButton: true
			});
		},
		navigation: (tree,next,title='ナビゲーション',withprevFlg=true)=>{
			return new Promise((resolve,reject)=>{
				swal({
					html: contents.navigation,
					showConfirmButton: false,
					showCancelButton: false,
					onOpen: (swalElement)=>{
						swalElement.getElementsByClassName('title')[0].innerText = title;
						componentHandler.upgradeElements(swalElement);
						const cancelButton = swalElement.getElementsByClassName('cancel-button')[0];
						const showPrevButton = swalElement.getElementsByClassName('show-prev__button')[0];
						const subtitleFrame = swalElement.getElementsByClassName('navigation-subtitle')[0];
						const listFrames = swalElement.getElementsByClassName('list-frame');
						const indexList = [];

						const setListItem = (subtitle,optionList)=>{
							subtitleFrame.innerText = subtitle;
							for(var i=0;i<optionList.length;i++){
								const item = createItem(optionList[i],i);
								currentListFrame.getElementsByTagName('UL')[0].appendChild(item);
							}
						}

						const createItem = (option,index)=>{
							var callback = (value)=>{
								swal.clickConfirm();
								resolve(value);
							};
							const item = document.createElement('li');
							item.className = 'mdl-list__item';

							const span = document.createElement('span');
							span.className = 'mdl-list__item-primary-content';

							if(option.iconurl){
								const div = document.createElement('div');
								div.className = 'row-icon-frame';
								const img = document.createElement('img');
								img.className = 'row-icon';
								img.src = option.iconurl;
								div.appendChild(img);
								span.appendChild(div);
							}
							const text = document.createTextNode(option.label);
							span.appendChild(text);
							if(option.next){
								const i = document.createElement('i');
								i.className = 'material-icons';
								i.innerText = 'keyboard_arrow_right';
								span.appendChild(i);
								callback = ()=>{
									indexList.push(index);
									shownextlistframe();
								};
							}
							item.appendChild(span);
							item.addEventListener('click',(e)=>{
								callback(option.value);
							});

							return item;
						}

						const showprevlistframe = ()=>{
							indexList.pop();
							current = tree.root;
							for(const index of indexList){
								current = current.list[index].next;
							}
							prevListFrame.getElementsByTagName('UL')[0].innerHTML = '';
							currentListFrame.className = 'list-frame next animation';
							prevListFrame.className = 'list-frame current animation';
							nextListFrame.className = 'list-frame prev';
							const tmp = currentListFrame;
							currentListFrame = prevListFrame;
							prevListFrame = nextListFrame;
							nextListFrame = tmp;
							setListItem(current.subtitle,current.list);
							if(indexList.length == 0){
								showPrevButton.setAttribute('disabled',true);
							}
						}

						const shownextlistframe = ()=>{
							current = current.list[indexList[indexList.length-1]].next;
							nextListFrame.getElementsByTagName('UL')[0].innerHTML = '';
							currentListFrame.className = 'list-frame prev animation';
							nextListFrame.className = 'list-frame current animation';
							prevListFrame.className = 'list-frame next';
							const tmp = currentListFrame;
							currentListFrame = nextListFrame;
							nextListFrame = prevListFrame;
							prevListFrame = tmp;
							setListItem(current.subtitle,current.list);
							showPrevButton.removeAttribute('disabled');
						}

						var prevListFrame = listFrames[0];
						var currentListFrame = listFrames[1];
						var nextListFrame = listFrames[2];

						var current = tree.root;
						setListItem(current.subtitle,current.list);

						if(!withprevFlg){
							showPrevButton.classList.add('invisible');
						}
						showPrevButton.onclick = showprevlistframe;
						cancelButton.onclick = ()=>{
							swal.clickCancel();
							reject();
						};
					}
				});
			});
		},
		message: (title='メッセージ')=>{
			return new Promise((resolve,reject)=>{
				swal({
					html: contents.message,
					showCancelButton: false,
					showConfirmButton: false,
					onOpen: (swalElement)=>{
						swalElement.getElementsByClassName('title')[0].innerText = title;
						const cancelButton = swalElement.getElementsByClassName('cancel-button')[0];
						const voiceButton = swalElement.getElementsByClassName('voice-message__button')[0];
						const videoButton = swalElement.getElementsByClassName('video-message__button')[0];
						const textButton = swalElement.getElementsByClassName('text-message__button')[0];
						componentHandler.upgradeElements(swalElement);
						document.activeElement.blur();

						voiceButton.onclick = ()=>{
							swal.clickConfirm();
							resolve('voice');
						}

						videoButton.onclick = ()=>{
							swal.clickConfirm();
							resolve('video');
						}

						textButton.onclick = ()=>{
							swal.clickConfirm();
							resolve('text');
						}

						cancelButton.onclick = ()=>{
							swal.clickCancel();
							reject();
						};

						document.activeElement.blur();
					}
				});
			});
		},
		voiceMessage: (title='ボイスメッセージ')=>{
			return new Promise((resolve,reject)=>{
				swal({
					html: contents.voicemessage,
					showCancelButton: false,
					showConfirmButton: false,
					onOpen: (swalElement)=>{
						swalElement.getElementsByClassName('title')[0].innerText = title;
						const cancelButton = swalElement.getElementsByClassName('cancel-button')[0];
						const sendButton = swalElement.getElementsByClassName('send-button')[0];
						componentHandler.upgradeElements(swalElement);

						cancelButton.onclick = reject;
						sendButton.onclick = ()=>{
							resolve();
						}
						document.activeElement.blur();
					}
				})
			});
		},
		videoMessage: (title='ビデオメッセージ')=>{
			return new Promise((resolve,reject)=>{
				swal({
					html: contents.videomessage,
					showCancelButton: false,
					showConfirmButton: false,
					onOpen: (swalElement)=>{
						swalElement.getElementsByClassName('title')[0].innerText = title;
						// const sourceSet = swalElement.getElementsByClassName('video-source-list')[0].getElementsByTagName('LI');
						// const sourceInput = swalElement.getElementsByClassName('swal2-content__videomessage-source__input')[0];
						const videoPreview = swalElement.getElementsByClassName('videomessage-preview')[0];
						const cancelButton = swalElement.getElementsByClassName('cancel-button')[0];
						const sendButton = swalElement.getElementsByClassName('send-button')[0];
						componentHandler.upgradeElements(swalElement);

						// const getDesktopStream = ()=>{
						// 	return new Promise((resolve,reject)=>{
						// 		navigator.getUserMedia({
						// 			audio: false,
						// 			video: {
						// 				mandatory: {
						// 					chromeMediaSource: 'screen',
						// 					minWidth: window.parent.screen.width,
						// 					minHeight: window.parent.screen.height,
						// 					maxWidth: window.parent.screen.width,
						// 					maxHeight: window.parent.screen.height
						// 				}
						// 			}
						// 		},resolve,reject);
						// 	});
						// }

						const getVideocamStream = ()=>{
							return new Promise((resolve,reject)=>{
								navigator.getUserMedia({
									audio: true,
									video: true
								},resolve,reject);
							});
						}

						// const onchangesource = (value)=>{
						// 	switch(value){
						// 		case 'desktop':
						// 		getDesktopStream()
						// 		.then((stream)=>{
						// 			videoPreview.srcObject = stream;
						// 		});
						// 		break;

						// 		case 'videocam':
						// 		getVideocamStream()
						// 		.then((stream)=>{
						// 			videoPreview.srcObject = stream;
						// 		});
						// 		break;
						// 	}
						// }

						// for(const source of sourceSet){
						// 	source.addEventListener('click',(e)=>{
						// 		sourceInput.value = source.innerText;
						// 		onchangesource(source.getAttribute('value'));
						// 	});
						// }

						const stopStream = ()=>{
							if(stream){
								stream.getVideoTracks()[0].stop();
								stream.getAudioTracks()[0].stop();
							}
						}				

						var stream = null;
						cancelButton.onclick = ()=>{
							swal.clickCancel();
							stopStream();
							reject();
						};
						sendButton.onclick = ()=>{
							swal.clickConfirm();
							stopStream();
							resolve();
						}
						document.activeElement.blur();

						getVideocamStream()
						.then((_stream)=>{
							stream = _stream;
							videoPreview.srcObject = stream;
						}).catch((err)=>{
							console.log(err);
						})
					}
				})
			});
		},
		textMessage: (title='テキストメッセージ')=>{
			return new Promise((resolve,reject)=>{
				swal({
					html: contents.textmessage,
					showCancelButton: false,
					showConfirmButton: false,
					onOpen: (swalElement)=>{
						swalElement.getElementsByClassName('title')[0].innerText = title;
						const quill = new Quill('#swal2-content__textmessage-editor-container__div',{
							modules: {
								toolbar: '#swal2-content__textmessage-toolbar-container__div'
							},
							theme: 'snow'
						});

						const cancelButton = swalElement.getElementsByClassName('cancel-button')[0];
						const sendButton = swalElement.getElementsByClassName('send-button')[0];
						componentHandler.upgradeElements(swalElement);

						cancelButton.onclick = ()=>{
							swal.clickCancel();
							reject();
						};
						sendButton.onclick = ()=>{
							swal.clickConfirm();
							resolve();
						}
						document.activeElement.blur();
					}
				})
			})
		},
		videoCall: (title="ビデオ通話")=>{
			return new Promise((resolve,reject)=>{
				swal({
					html: contents.videocall,
					showCancelButton: false,
					showConfirmButton: false,
					onOpen: (swalElement)=>{
						swalElement.getElementsByClassName('title')[0].innerText = title;
						const videoPreview = swalElement.getElementsByClassName('videocall-preview')[0];
						const sendingInput = document.getElementById('swal2-content__videocall-sending__input');
						const cancelButton = swalElement.getElementsByClassName('cancel-button')[0];

						componentHandler.upgradeElements(swalElement);

						const getVideocamStream = ()=>{
							return new Promise((resolve,reject)=>{
								navigator.getUserMedia({
									audio: true,
									video: true
								},resolve,reject);
							});
						}

						const stopStream = ()=>{
							if(stream){
								stream.getVideoTracks()[0].stop();
								stream.getAudioTracks()[0].stop();
							}
						}

						cancelButton.onclick = ()=>{
							swal.clickCancel();
							stopStream();
							reject();
						};

						var stream = null;
						getVideocamStream()
						.then((_stream)=>{
							stream = _stream;
							videoPreview.srcObject = stream;
						}).catch((err)=>{
							console.log(err);
						});

						document.activeElement.blur();
					}
				})
			})
		},
		windowList: (windowList,title='アプリケーションを選択')=>{
			return new Promise((resolve,reject)=>{
				swal({
					html: contents.windowlist,
					showCancelButton: false,
					showConfirmButton: false,
					onOpen: (swalElement)=>{
						swalElement.getElementsByClassName('title')[0].innerText = title;
						const windowListFrame = swalElement.getElementsByClassName('window-list-frame')[0];
						const okButton = swalElement.getElementsByClassName('ok-button')[0];
						const cancelButton = swalElement.getElementsByClassName('cancel-button')[0];
						componentHandler.upgradeElements(swalElement);

						const checkboxes = [];

						const setListItem = (options)=>{
							options.forEach(option=>{
								const item = createWindowItem(option);
								checkboxes.push(item.getElementsByClassName('window-outer__input')[0]);
								windowListFrame.appendChild(item);
							});
						}

						const createWindowItem = (option)=>{
							const div = document.createElement('div');
							div.className = 'window-outer';

							const input = document.createElement('input');
							input.className = 'window-outer__input'
							input.type = 'checkbox';
							input.setAttribute('id',`swal2-content__stream-${option.number}__input`);
							input.setAttribute('window-number',option.number);

							const label = document.createElement('label');
							label.className = 'window-stream-frame';
							label.setAttribute('for',input.getAttribute('id'));

							const video = document.createElement('video');
							video.className = 'window-stream';
							video.srcObject = option.stream;
							video.play();

							label.appendChild(video);
							div.appendChild(input);
							div.appendChild(label);
							return div;
						}

						setListItem(windowList);

						cancelButton.onclick = ()=>{
							swal.clickCancel();
							reject();
						};

						okButton.onclick = ()=>{
							swal.clickConfirm();
							resolve(checkboxes.filter(checkbox=>{
								return checkbox.checked;
							}).map(checkbox=>{
								return {
									number: checkbox.getAttribute('window-number')
								};
							}));
						}

						document.activeElement.blur();
					}
				})
			});
		},
		textForm: (init='',placeholder,title="入力")=>{
			return new Promise((resolve,reject)=>{
				swal({
					html: contents.textform,
					showCancelButton: false,
					showConfirmButton: false,
					onOpen: (swalElement)=>{
						swalElement.getElementsByClassName('title')[0].innerText = title;
						const placeHolder = swalElement.getElementsByClassName('mdl-textfield__label')[0];
						const textInput = swalElement.getElementsByClassName('mdl-textfield__input')[0];
						const okButton = swalElement.getElementsByClassName('ok-button')[0];
						const cancelButton = swalElement.getElementsByClassName('cancel-button')[0];
						componentHandler.upgradeElements(swalElement);
						if(init && init!=''){
							textInput.value = init;
							textInput.parentNode.classList.add('is-dirty');
						}

						if(placeholder){
							placeHolder.innerText = placeholder;
						}

						cancelButton.onclick = ()=>{
							swal.clickCancel();
							reject();
						};

						okButton.onclick = ()=>{
							swal.clickConfirm();
							resolve(textInput.value);
						}
					}
				});
			});
		},
		sliderForm: (init=1,title="入力",min=1,max=25)=>{
			return new Promise((resolve,reject)=>{
				swal({
					html: contents.sliderform,
					showCancelButton: false,
					showConfirmButton: false,
					onOpen: (swalElement)=>{
						swalElement.getElementsByClassName('title')[0].innerText = title;
						const slider = document.getElementById('swal2-content-pageslider__input');
						const pagenumber = document.getElementById('swal2-content-pagenumber__input');
						const okButton = swalElement.getElementsByClassName('ok-button')[0];
						const cancelButton = swalElement.getElementsByClassName('cancel-button')[0];

						slider.setAttribute('min',min);
						slider.setAttribute('max',max);
						slider.setAttribute('value',init);
						slider.oninput = (e)=>{
							pagenumber.value = e.target.value;
							okButton.removeAttribute('disabled');
						}

						pagenumber.value = init;
						pagenumber.parentNode.classList.add('is-dirty');
						pagenumber.oninput = (e)=>{
							if(pagenumber.parentNode.classList.contains('is-invalid')){
								okButton.setAttribute('disabled', true);
							} else {
								okButton.removeAttribute('disabled');
								const num = parseInt(pagenumber.value);
								if(num < min){
									pagenumber.value = min;
								} else if(num > max){
									pagenumber.value = max;
								}
							}
						}

						componentHandler.upgradeElements(swalElement);

						cancelButton.onclick = ()=>{
							swal.clickCancel();
							reject();
						};

						okButton.onclick = ()=>{
							swal.clickConfirm();
							resolve();
						}
					}
				});
			});
		}
	}

	return popup;
})();