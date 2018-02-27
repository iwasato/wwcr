import Socket from './socket.js';
import Room from './room.js';

/*
	外部ファイル内で読み込んだモジュールを，わかりやすくするためにここでまた呼び出し．
*/
const electron = window.electron;
const remote = window.remote;
const BrowserWindow = window.BrowserWindow;
const appman = window.appman;
const Bridge = window.Bridge;
const size = remote.screen.getPrimaryDisplay().size;
const mouseevent = window.mouseevent;
const initConfig = window.initConfig;

/* その他 */
var socket = null;
var bridge = null;
var room = null;
var windowList = null;
var forwardcover = null;
var ROOMID = decodeURIComponent(location.search.match(/roomid=(.*?)(&|$)/)[1]);
var ROOMNAME = decodeURIComponent(location.search.match(/roomname=(.*?)(&|$)/)[1]);
var USERID = decodeURIComponent(location.search.match(/userid=(.*?)(&|$)/)[1]);
var USERNAME = decodeURIComponent(location.search.match(/username=(.*?)(&|$)/)[1]);
var RANK = decodeURIComponent(location.search.match(/rank=(.*?)(&|$)/)[1]);
const PROCESSID = remote.getGlobal('pid');
const INVALID_APP_NAME = ['Window Server','Dock','通知センター','SystemUIServer','Spotlight','loginwindow','QuickLookUIService','日本語入力プログラム'];
const INVALID_WIN_NAME = ['(null)',''];
const INVALID_APP_LAYER = [24,25,103];
var COLOR = 'white';

window.onload = ()=>{
	bridge = new Bridge(electron);
	bridge.setLabel('parent');
	bridge.onaddpeer = (from)=>{
		const valueList = from.split('.');
		const streamId = valueList[0]+'.'+valueList[1]+'.'+valueList[2]+'.'+valueList[3];
		const stream = room.getStream(streamId);
		bridge.addStream(from,stream);
	}
	bridge.on('vw-mouseevent',(e,{mouseEventList})=>{
		const values = e.from.split('.');
		const target = values[0];
		const windowNumber = values[2];
		socket.send({
			action: 'vw-mouseevent',
			option: {
				target: target,
				windowNumber: windowNumber,
				mouseEventList: mouseEventList,
				userId: USERID
			}
		});
	});
	bridge.on('vw-point',(e,{pointEventList})=>{
		const values = e.from.split('.');
		const target = values[0];
		const windowNumber = values[2];
		socket.send({
			action: 'vw-point',
			option: {
				roomId: ROOMID,
				target: target,
				pointEventList: pointEventList,
				streamId: e.from,
				userId: USERID
			}
		});
	});
	bridge.on('as-publicscreen',(e,value)=>{
		socket.send({
			action: 'as-publicscreen',
			option: {
				roomId: ROOMID,
				userId: USERID,
				value: value
			}
		})
	});

	/* init component */

	socket = new Socket();
	socket.onopen = ()=>{
		socket.userId = USERID;
		socket.userName = USERNAME;
		socket.rank = RANK;
		socket.sendSync({
			action: 'socket-init',
			option: {
				userId: USERID
			}
		}).then(()=>{
			initRoom();
		});
	}
	socket.onmessage = (e)=>{
		const data = JSON.parse(e.data);
		switch(data.action){
			case 'add-vw': {
				data.value.options.forEach((option)=>{
					option.type = 'theater';
					createVirtualWindow(option);
				}); 
			} break;
			case 'share-app':{
				data.value.windowNumberList.forEach((windowNumber)=>{
					const option = {
						source: data.value.source,
						userId: data.value.userId,
						roomId: data.value.roomId,
						windowNumber: windowNumber,
						type: 'share'
					}
					createVirtualWindow(option);
				});
			} break;
			case 'theater':{
				data.value.windowNumberList.forEach((windowNumber)=>{
					const option = {
						source: data.value.source,
						userId: data.value.userId,
						roomId: data.value.roomId,
						windowNumber: windowNumber,
						type: 'theater'
					}
					// createVirtualWindow(option);
					const loop = ()=>{
						if(count<MAXNUM+1){
							createVirtualWindowDebug(option);
							setTimeout(()=>{
								loop();
							},1000);
						}
					}
					loop();
				});
			} break;
			case 'vw-mouseevent': {
				const {mouseEventList,windowNumber} = data.value;
				mouseEventList.forEach((value)=>{
					if(value.type=='keyinput'){
						keyeventHandler(value.key);
					} else {
						mouseeventHandler(value.type,value.x,value.y,windowNumber);
					}
				});
			} break;
			case 'vw-point': {
				const {pointEventList,streamId} = data.value;
				bridge.send(streamId,'vw-point',pointEventList);
			}
		}
	}

	appman.watch();
	appman.on('loop',(_windowList)=>{
		windowList = _windowList.filter(isValid);
	});
	windowList = appman.getWindows().filter(isValid);
}

/* 便利関数 */

// create
const createVirtualWindow = (option)=>{
	const streamId = `${option.userId}.${option.source}.${option.windowNumber}.${option.roomId}`;
	const virtualWindow = new BrowserWindow({
		center: true,
		title: 'virtual window',
		width: 500,
		height: 500
	});
	virtualWindow.loadURL(`${location.protocol}//${location.host}/vw?streamId=${streamId}&type=${option.type}`);
	virtualWindow.on('closed',()=>{
		socket.send({
			action: 'vw-close',
			option: {
				streamId: streamId,
				roomId: option.roomId,
				userId: USERID,
				ownerId: option.userId,
				windowNumber: option.windowNumber
			}
		});
	});
}
const createScreenStream = ()=>{
	return new Promise((resolve,reject)=>{
		navigator.getUserMedia({
			audio: false,
			video: {
				mandatory: {
					chromeMediaSource: 'screen',
					minWidth: size.width,
					minHeight: size.height,
					maxWidth: size.width,
					maxHeight: size.height
				}
			}
		},(stream)=>{
			resolve(stream);
		},(err)=>{
			reject(err);
		});
	});
}
const createAllWindowStream = ()=>{
	return new Promise((resolve,reject)=>{
		const valueList = [];
		const length = windowList.length;
		windowList.forEach(win=>{
			createWindowStream(win.number)
			.then(stream=>{
				valueList.push({
					stream: stream,
					name: win.ownerName,
					number: win.number
				});
				if(valueList.length==length){
					resolve(valueList);
				}
			}).catch(err=>{
				reject(err);
			});
		});
	});
}
const createWindowStream = (windowNumber)=>{
	return new Promise((resolve,reject)=>{
		navigator.getUserMedia({
			audio: false,
			video: {
				mandatory: {
					chromeMediaSource: 'desktop',
					chromeMediaSourceId: `window:${windowNumber}`,
					minWidth: 0,
					minHeight: 0,
					maxWidth: window.parent.screen.width,
					maxHeight: window.parent.screen.height
				}
			}
		},(stream)=>{
			resolve(stream);
		},(err)=>{
			reject(err);
		});
	});
}

// check
const isValid = (win)=>{
	return win.alpha != 0 && win.layer > -1 && win.bounds.width*win.bounds.height > 1 && INVALID_APP_NAME.indexOf(win.ownerName) == -1 && INVALID_APP_LAYER.indexOf(win.layer) == -1 && INVALID_WIN_NAME.indexOf(win.name) == -1 && win.ownerPID != PROCESSID;
}

// mouseevent
const keyeventHandler = (key)=>{
	keyevent.input(key);
}
const mouseeventHandler = (type,x,y,windowNumber)=>{
	switch(type){
		case 'click':
		click(x,y,windowNumber);
		break;

		case 'mousemove':
		dragged(x,y,windowNumber);
		break;

		case 'doubleclick':
		doubleclick(x,y,windowNumber);
		break;

		case 'mousedown':
		mousedown(x,y,windowNumber);
		break;

		case 'mouseup':
		mouseup(x,y,windowNumber);
		break;
	}
}
const click = (xrate,yrate,windowNumber)=>{
	const targetBounds = appman.getWindows().filter((win)=>{
		return win.number == parseInt(windowNumber);
	})[0].bounds;
	const x = targetBounds.x+targetBounds.width*xrate;
	const y = targetBounds.y+targetBounds.height*yrate;
	mouseevent.click(x,y);
}
const dragged = (xrate,yrate,windowNumber)=>{
	const targetBounds = appman.getWindows().filter((win)=>{
		return win.number == parseInt(windowNumber);
	})[0].bounds;
	const x = targetBounds.x+targetBounds.width*xrate;
	const y = targetBounds.y+targetBounds.height*yrate;
	mouseevent.drag(x,y);
}
const doubleclick = (xrate,yrate,windowNumber)=>{
	const targetBounds = appman.getWindows().filter((win)=>{
		return win.number == parseInt(windowNumber);
	})[0].bounds;
	const x = targetBounds.x+targetBounds.width*xrate;
	const y = targetBounds.y+targetBounds.height*yrate;
	mouseevent.doubleclick(x,y);	
}
const mousedown = (xrate,yrate,windowNumber)=>{
	const targetBounds = appman.getWindows().filter((win)=>{
		return win.number == parseInt(windowNumber);
	})[0].bounds;
	const x = targetBounds.x+targetBounds.width*xrate;
	const y = targetBounds.y+targetBounds.height*yrate;
	mouseevent.mousedown(x,y);	
}
const mouseup = (xrate,yrate,windowNumber)=>{
	const targetBounds = appman.getWindows().filter((win)=>{
		return win.number == parseInt(windowNumber);
	})[0].bounds;
	const x = targetBounds.x+targetBounds.width*xrate;
	const y = targetBounds.y+targetBounds.height*yrate;
	mouseevent.mouseup(x,y);	
}

// webrtc
const initRoom = ()=>{
	room = new Room(socket,ROOMID,null);
	room.onnewpeer = (peer)=>{
	}
	room.onnewstream = (stream,appData)=>{
	}
	room.joinRoom()
	.then(()=>{
		return createScreenStream();
	}).then((stream)=>{
		room.addStream(stream,{
			source: 'screen',
			userId: USERID,
			userName: USERNAME,
			roomId: room.id,
			aspublicscreen: initConfig['as-publicscreen']
		});
		createAllWindowStream()
		.then(values=>values.map(value=>{
			room.addStream(value.stream,{
				source: 'window',
				userId: USERID,
				userName: USERNAME,
				windowNumber: value.number,
				roomId: room.id
			});
		}));
	});
}








































var _stream_ = null;
var count = 0;
const MARGIN = 40;
const YNUM = 4;
const XNUM = 4;
const MAXNUM = XNUM*YNUM;
const WIDTH = (size.width-MARGIN)/XNUM-MARGIN;
const HEIGHT = (size.height-22-MARGIN)/YNUM-MARGIN;
console.log(WIDTH,HEIGHT);
const createVirtualWindowDebug = (option)=>{
	const streamId = `${option.userId}.${option.source}.${option.windowNumber}.${option.roomId}.${count}`;
	const virtualWindow = new BrowserWindow({
		center: true,
		title: 'virtual window',
		width: WIDTH,
		height: HEIGHT,
		x: MARGIN+(count%XNUM)*(WIDTH+MARGIN),
		y: 22+MARGIN+parseInt(count/XNUM)*(HEIGHT+MARGIN)
	});
	virtualWindow.loadURL(`${location.protocol}//${location.host}/vw?streamId=${streamId}&type=${option.type}`);
	virtualWindow.on('closed',()=>{
		socket.send({
			action: 'vw-close',
			option: {
				streamId: streamId,
				roomId: option.roomId,
				userId: USERID,
				ownerId: option.userId,
				windowNumber: option.windowNumber
			}
		});
	});
	count++;
}