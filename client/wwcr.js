/*
	mados client
	index.js
*/

/* core */
const path = require('path');
const url = require('url');
const fs = require('fs');

/* local */
const Bridge = require('./modules/bridge');

/* third party */
const electron = require('electron');
const request = require('request');
require('colors');

/* electron module */
const {app,BrowserWindow,Tray,Menu,MenuItem,net} = electron;

/* その他 */
var config = require('./config.json');
var window = null;
var setting = null;
var background = null;
var size = null;
var tray = null;
var forceCloseFlg = false;

/* 便利関数 */
const createBackground = (url)=>{
	background = new BrowserWindow({
		width: size.width,
		height: size.height,
		type: 'desktop',
		frame: false,
		show: true
	});
	background.loadURL(url);
	background.on('closed',(e)=>{
		background = null;
	});
}
const settingWindow = (url)=>{
	setting = new BrowserWindow({
		center: true,
		width: 400,
		height: 500,
		resizable: true,
		useContentSize: true,
		titleBarStyle: 'hidden',
		show: false
	});
	setting.on('close',(e)=>{
		if(!forceCloseFlg){
			e.preventDefault();
			setting.hide();
		}
	});
	setting.on('closed',(e)=>{
		setting = null;
	});
	setting.loadURL(decodeURIComponent(url));
}
const createWindow = (url)=>{
	window = new BrowserWindow({
		center: true,
		width: 800,
		height: 600,
		minWidth: 800,
		minHeight: 600,
		maximizable: false,
		useContentSize: true,
		titleBarStyle: 'hidden',
		show: false
	});
	window.on('closed',(e)=>{
		stafroom = null;
	});
	window.loadURL(decodeURIComponent(url));
	window.once('ready-to-show',(e)=>{
		window.show();
	},{
		once: true
	});

	// debug
	window.webContents.openDevTools();
}
const makeURL = (_url,query)=>{
	var url = `${_url}?`;
	for(const key in query){
		url += `${key}=${query[key]}&`
	}
	url = decodeURIComponent(url.substring(0,url.length-1));

	return url;
}
const get = (_url,query)=>{
	const url = makeURL(_url,query);
	return new Promise((resolve,reject)=>{
		const request = net.request(url);
		var data = '';
		request.on('response',(res)=>{
			res.on('data',(chunk)=>{
				data += chunk;
			});
			res.on('end',()=>{
				resolve(JSON.parse(data));
			});
		});
		request.on('error',(error)=>{
			resolve({
				result: false,
				message: 'CONNECTINGEXCEPTION'
			});
		});
		request.end();
	});
}

/* debug */
const iwasato = {
	id: 'iwasato',
	password: 'Pad:8931',
	rank: 'teacher',
	name: '岩田 知'
}
const moroz = {
	id: 'moroz',
	password: 'Pad:8931',
	rank: 'student',
	name: '両角貴弘'
}


/* app event */
app.on('ready',()=>{
	/* global var */
	global.localmodules = {
		appman: `${__dirname}/modules/appman`,
		bridge: `${__dirname}/modules/bridge`,
		mouseevent: `${__dirname}/modules/mouseevent`,
		keyevent: `${__dirname}/modules/keyevent`
	}
	global.pid = process.pid;
	global.config = config;
	global.localdocument = {
		background: `file://${__dirname}/private/background/index.html`,
		forwardcover: `file://${__dirname}/private/forwardcover/index.html`,
		toolpad: `file://${__dirname}/private/toolpad/index.html`,
		login: `file://${__dirname}/private/login/index.html`,
		classrooms: `file://${__dirname}/private/classrooms/index.html`,
		get staffroom(){
			return `${config['server-address']}/staffroom`;
		},
		get theater(){
			return `${config['server-address']}/theater`;
		},
		setting: `file://${__dirname}/private/setting/index.html`
	}

	size = electron.screen.getPrimaryDisplay().size;

	// bridge
	bridge = new Bridge(electron);
	bridge.on('config-update',(e,newconfig)=>{
		for(const key in newconfig){
			config[key] = newconfig[key];
		}
		fs.writeFileSync(`${__dirname}/config.json`,JSON.stringify(config,null,'\t'));
	});
	bridge.on('change-background',(e,option)=>{
		bridge.send('background','change',option);
	});
	bridge.on('login',(e,value)=>{
		value.process = 'login';
		get(config['server-address'],value)
		.then(value=>{
			if(value.result){
				window.setOpacity(1.0);
				window.loadURL(makeURL(localdocument.classrooms,value.account));
			}
		});
	});
	bridge.on('get-classrooms',(e,value)=>{
		var value = value;
		value.process='getclassrooms';
		get(config['server-address'],value)
		.then(value=>{
			if(value.result){
				bridge.send('classrooms','classrooms',value.classrooms);
			}
		})
	});
	bridge.on('create-new-classroom',(e,value)=>{
		var value = value;
		value.process='createclassroom';
		get(config['server-address'],value)
		.then(value=>{
			if(value.result){
				bridge.send('classrooms','add-classroom',value.classroom);
			}
		})
	});
	bridge.on('staffroom',(e,value)=>{
		window.loadURL(makeURL(localdocument.staffroom,value));
		window.setOpacity(1.0);
	});
	bridge.on('theater',(e,value)=>{
		window.loadURL(makeURL(localdocument.theater,value));
		window.setOpacity(0);
		window.setIgnoreMouseEvents(true);
	});

	tray = new Tray(`${__dirname}/img/tray.png`);
	const menu = new Menu();
	const item = new MenuItem({
		label: '設定画面',
		click: ()=>{
			if(setting){
				setting.show();
			}
		}
	});
	menu.append(item);
	tray.setContextMenu(menu);

	// ウィンドウ生成
	settingWindow(localdocument.setting);
	createBackground(localdocument.background);
	createWindow(makeURL(localdocument.login));
	// createWindow(makeURL(`file://${__dirname}/private/classrooms/index.html`,moroz));


	// createWindow('http://localhost:3001/theater?rank=student&roomid=demo&roomname=テスト５&userid=moroz&username=両角 貴弘');
	// window.setSize(size.width,size.height);
	// window.setOpacity(0);
	// window.setIgnoreMouseEvents(true);
	// window.setFocusable(false);
	// window.setAlwaysOnTop(true,'floating');

});
app.on('certificate-error',(event,webContents,url,error,certificate,callback)=>{
	event.preventDefault();
	callback(true);
});
app.on('before-quit',(e)=>{
	forceCloseFlg = true;
});
app.on('closed',(e)=>{
});