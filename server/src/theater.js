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

const buttonPack = {
}

const inputPack = {
}

const elementPack = {
}

var componentPack = {
}


/* その他 */
var socket = null;
var bridge = null;
var room = null;
var windowList = null;
var background = null;
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
		const stream = room.getStream(from);
		console.log(stream);
		bridge.addStream(from,stream);
	}

	/* init element */
	for(const id in elementPack){
		elementPack[id] = document.getElementById(id);
	}

	/* init button */
	for(const id in buttonPack){
		buttonPack[id] = document.getElementById(id);
	}

	/* init input */
	for(const id in inputPack){
		inputPack[id] = document.getElementById(id);
	}

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
			case 'add-vw':
			data.value.options.forEach((option)=>{
				option.type = 'theater';
				createVirtualWindow(option);
			});
			break;
			case 'share-app':
			data.value.options.forEach((option)=>{
				option.type = 'share';
				createVirtualWindow(option);
			});
			break;
			case 'vw-mousedown':{
			const {point,windowNumber,type} = data.value;
			mouseeventHandler(type,point,windowNumber);
			} break;
		}
	}

	appman.watch();
	appman.on('loop',(_windowList)=>{
		windowList = _windowList.filter(isValid);
	});
	windowList = appman.getWindows().filter(isValid);

	background = createBackground();
}

/* 便利関数 */

// create
const createBackground = ()=>{
	const _background = new BrowserWindow({
		width: size.width,
		height: size.height,
		type: 'desktop',
		frame: false,
		show: true
	});
	_background.loadURL(`${localdocument.background}?color=${COLOR}`);
	_background.openDevTools();
	return _background;
}
const createVirtualWindow = (option)=>{
	const virtualWindow = new BrowserWindow({
		center: true,
		title: 'virtual window',
		width: 500,
		height: 500
	});
	virtualWindow.loadURL(`https://${location.hostname}:${location.port}/vw?streamId=${option.userId}.${option.source}.${option.windowNumber}.${option.roomId}&type=${option.type}`);
	virtualWindow.openDevTools();
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
const mouseeventHandler = (type,point,windowNumber)=>{
	switch(type){
		case 'click':
		click(point.x,point.y,windowNumber);
		break;

		case 'dragged':
		dragged(point.x,point.y,windowNumber);
		break;

		case 'doubleclick':
		doubleclick(point.x,point.y,windowNumber);
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
			roomId: room.id
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