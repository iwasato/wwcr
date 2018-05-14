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

/* electron module */
const {app,BrowserWindow,Tray,Menu,MenuItem,net} = electron;

/* その他 */
var config = require('./config.json');
var window = null;

/* 便利関数 */
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


/* app event */
app.on('ready',()=>{
	/* global var */
	global.localmodules = {
		appman: path.join(__dirname,'modules','appman'),
		bridge: path.join(__dirname,'modules','bridge')
	}
	global.pid = process.pid;
	global.config = config;

	// bridge
	bridge = new Bridge(electron);
	bridge.on('config-update',(e,newconfig)=>{
		config = newconfig;
		fs.writeFileSync(`${__dirname}/config.json`,JSON.stringify(newconfig,null,'\t'));
	});
	bridge.on('login',(e,value)=>{
		value.process = 'login';
		get(config['server-address'],value)
		.then(value=>{
			if(value.result){
				window.loadURL(makeURL(`file://${__dirname}/private/classrooms/index.html`,value.account));
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
		window.loadURL(makeURL(`${config['server-address']}/staffroom`,value));
		window.setSize(1580,700,true);
		window.setMinimumSize(1580,800);
	});

	// ウィンドウ生成
	// createWindow(`file://${__dirname}/private/login/index.html`);
	// createWindow(makeURL(`file://${__dirname}/private/classrooms/index.html`,iwasato))
	createWindow(makeURL(`file://${__dirname}/private/staffroom/index.html`,iwasato));
});
app.on('certificate-error',(event,webContents,url,error,certificate,callback)=>{
	event.preventDefault();
	callback(true);
});
app.on('closed',(e)=>{
});