/*
	wwb-server:server.js
*/

/* import core modules */
const path = require('path');
const os = require('os');
const https = require('https');
const http = require('http');
const fs = require('fs');

/* import third-party modules */
const express = require('express');
const ws = require('ws');
const mediasoup = require('mediasoup');
const sqlite3 = require('sqlite3');
const base64 = require('urlsafe-base64');
require('colors');

/* path */
const document = {
	staffroom: path.join(__dirname,'public','staffroom','index.html'),
	theater: path.join(__dirname,'public','staffroom','index.html')
}

/* server config */
const config = require(path.join(__dirname,'config.json'));

/* hostname */
var hostname = os.hostname();

/* tls file path */
const keyfile = path.join(__dirname,'tls',config.tls[hostname],'privkey.pem')
const certfile = path.join(__dirname,'tls',config.tls[hostname],'cert.pem');

/* router */
const router = express.Router();
router.get('/',(req,res)=>{
	switch(req.query.process){
		case 'login':
		login(req.query.id,req.query.password)
		.then(account=>{
			res.json({
				result: true,
				account: account
			});
		}).catch(err=>{
			console.error(req.query);
			res.json({
				result: false
			});
		});
		break;
		case 'getclassrooms':
		getClassrooms(req.query.id)
		.then(classrooms=>{
			res.json({
				result: true,
				classrooms: classrooms
			});
		}).catch(err=>{
			console.error(err);
			res.json({
				result: false
			});
		});
		break;
		case 'createclassroom':
		createClassroom(req.query.name,req.query.token,req.query.ownerid,req.query.color,req.query.ownername)
		.then(classroom=>{
			res.json({
				result: true,
				classroom: classroom
			})
		}).catch(err=>{
			result: false
		});
		break;
	}
});
router.get('/staffroom',(req,res)=>{
	res.sendFile(document.staffroom);
});
router.get('/theater',(req,res)=>{
	res.sendFile(document.theater);
});
router.get('/icon',(req,res)=>{
	res.sendFile(path.join(__dirname,'public','icon',req.query.type,`${req.query.id}.png`));
});

const https_exapp = express();
https_exapp.use(express.static(path.join(__dirname,'public')));
https_exapp.use('/',router);
https_exapp.set('port',config.port.https);

const http_exapp = express();
http_exapp.use(express.static(path.join(__dirname,'public')));
http_exapp.use('/',router);
http_exapp.set('port',config.port.http);

/* https server */
const httpsServer = https.createServer({
	key: fs.readFileSync(keyfile),
	cert: fs.readFileSync(certfile)
},https_exapp);
const httpServer = http.createServer(http_exapp);

/* database */
const usersDB = new sqlite3.Database('./db/users.sqlite3');
const login = (id,password)=>{
	return new Promise((resolve,reject)=>{
		usersDB.serialize(()=>{
			usersDB.each(`select * from account where id='${id}' and password='${password}'`,(err,res)=>{
				resolve(res);
			},(err,count)=>{
				if(err){
					reject(err);
				} else {
					if(count == 0){
						reject();
					}
				}
			});
		});
	});
}

const classroomsDB = new sqlite3.Database('./db/classrooms.sqlite3');
const getClassrooms = (ownerId)=>{
	return new Promise((resolve,reject)=>{
		classroomsDB.serialize(()=>{
			const query = ownerId ? `select * from rooms where ownerId='${ownerId}'` : 'select * from rooms'
			classroomsDB.all(query,(err,res)=>{
				if(err){
					reject();
					return;
				}
				resolve(res);
			});
		});
	});
}
const getClassroomOwner = (roomId)=>{
	return new Promise((resolve,reject)=>{
		usersDB.serialize(()=>{
			usersDB.each(`select * from rooms where id='${id}'`,(err,res)=>{
				resolve({
					id: res.ownerid
				});
			},(err,count)=>{
				if(err){
					reject(err);
				} else {
					if(count != 1){
						reject();
					}
				}
			});
		});
	});
}
const createClassroom = (name,token,ownerid,color,ownername)=>{
	const id = createId();
	const date = new Date();
	const timestamp = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
	return new Promise((resolve,reject)=>{
		classroomsDB.serialize(()=>{
			classroomsDB.run('insert into rooms values($id,$token,$name,$timestamp,$ownerId,$ownerName,$color)',[id,token,name,timestamp,ownerid,ownername,color],(err)=>{
				if(err){
					reject();
				}
				resolve({
					id: id,
					name: name,
					token: token,
					ownerid: ownerid,
					color: color,
					ownername: ownername
				});
			});
		});
	});
}





const wssServer = new ws.Server({
	server: httpsServer
});
const wsServer = new ws.Server({
	server: httpServer
});

const rtcServer = mediasoup.Server({
	dtlsPrivateKeyFile: keyfile,
	dtlsCertificateFile: certfile
});

var clients = {};
var rooms = {};
var vws = {};

const onconnection = (socket)=>{
	socket.on('message',(message)=>{
		const {handlerId,body,sync,returnSync,value} = JSON.parse(message);
		if(returnSync){
			messageHandler[handlerId](value);
			delete messageHandler[handlerId];
			return;
		}
		const _value = onmessage(socket,body);
		if(sync){
			if(!_value.then){
				send(socket,body.action,handlerId,_value,true);
				return;
			}

			_value.then((returnValue)=>{
				send(socket,body.action,handlerId,returnValue,true);
			});
		}
	});

	socket.on('error',()=>{
	});
}

wssServer.on('connection',onconnection);
wsServer.on('connection',onconnection);

const send = (socket,action,handlerId,value,returnSync=false)=>{
	socket.send(JSON.stringify({
		action: action,
		handlerId: handlerId,
		value: value,
		returnSync: returnSync
	}));
}

const onmessage = (socket,{action,option})=>{
	switch(action){
		case 'mediasoup_request': {
			return onmediasouprequest(option);
		} break;

		case 'mediasoup_notify': {
			onmediasoupnotify(option);
		} break;

		case 'share-app': {
			option.windowNumberList.forEach(windowNumber=>{
				console.log('share app:'.bgYellow+` ${windowNumber}`.magenta+`(${option.userId} -> ${option.target})`);
				console.log('	room: '.green+`${option.roomId}`.magenta+'\n');
				const streamId = `${option.userId}.${option.source}.${windowNumber}.${option.roomId}`;
				vws[option.roomId][streamId].push(option.target);
			});
			send(clients[option.target],'share-app',null,option);
		} break;

		case 'theater': {
			option.windowNumberList.forEach(windowNumber=>{
				console.log('theater app:'.bgYellow+` ${windowNumber}`.magenta+`(${option.userId} -> ${option.target})`);
				console.log('	room: '.green+`${option.roomId}`.magenta+'\n');
				const streamId = `${option.userId}.${option.source}.${windowNumber}.${option.roomId}`;
			});
			send(clients[option.target],'theater',null,option);
		} break;

		case 'socket-init': {
			console.log('conected:'.bgGreen+` ${option.userId}`.magenta);
			clients[option.userId] = socket;
			return true;
		} break;

		case 'vw-mouseevent': {
			console.log(`mouseevent vw:`.bgYellow+` ${option.windowNumber}`.magenta+`( -> ${option.target})`);
			console.log('	room: '.green+`${option.roomId}`.magenta+'\n');
			send(clients[option.target],'vw-mouseevent',null,option);
		} break;

		case 'vw-point': {
			console.log(`point vw:`.bgYellow+` ${option.windowNumber}`.magenta+`( -> ${option.target})`);
			console.log('	room: '.green+`${option.roomId}`.magenta+'\n');
			vws[option.roomId][option.streamId].forEach(userId=>{
				send(clients[userId],'vw-point',null,option);
			});
		} break;

		case 'vw-close': {
			console.log('close vw:'.bgYellow+` ${option.windowNumber}`.magenta+`(${option.ownerId} -> ${option.userId})`);
			console.log('	room: '.green+`${option.roomId}`.magenta+'\n');
			const streamId = option.streamId;
			if(!vws[option.roomId] || !vws[option.roomId][streamId]){
				return;
			}
			const index = vws[option.roomId][streamId].indexOf(option.userId);
			if(index!=-1){
				vws[option.roomId][streamId].splice(index,1);
			}
		} break;

		case 'as-publicscreen': {
			console.log(`as publicscreen:`.bgYellow+` ${option.userId}`.magenta);
			console.log('	room: '.green+`${option.roomId}`.magenta+'\n');
			getClassroomOwner(option.roomId)
			.then(result=>{
				const socket = clients[result.id];
				if(!socket){
					return;
				}
				send(socket,'as-publicscreen',null,option);
			}).catch(()=>{
				console.log('error');
			});
		} break;
	}
}

const onmediasouprequest = (option)=>{
	switch(option.request.method){
		case 'queryRoom':
		return onqueryroom(option);
		break;

		case 'join':
		return onjoin(option);
		break;

		default:
		return onotherrequest(option);
		break;
	}
}
const onmediasoupnotify = (option)=>{
	const room = rooms[option.roomId];
	const peer = room.getPeerByName(option.userId);
	peer.receiveNotification(option.notification);
}
const onqueryroom = (option)=>{
	console.log('from: '.blue+`${option.userId}`.magenta);
	console.log('	action: '.blue+`${option.request.method}`.magenta+'\n');
	return new Promise((resolve)=>{
		const room = rooms[option.roomId] || createRoom(option.roomId);
		room.receiveRequest(option.request)
		.then((response)=>{
			resolve({
				response: response
			});
		}).catch((err)=>{
			console.log('不明なエラー: queryRoom'.red);
		});
	});
}
const onjoin = (option)=>{
	console.log('from: '.blue+`${option.userId}`.magenta);
	console.log('	action: '.blue+`${option.request.method}`.magenta+'\n');
	return new Promise((resolve)=>{
		const room = rooms[option.roomId];
		room.receiveRequest(option.request)
		.then((response)=>{
			console.log('joined: '.green+`${option.userId}`.magenta);
			console.log('	room: '.green+`${option.roomId}`.magenta+'\n');
			resolve({
				response: response
			});

			const peer = room.getPeerByName(option.userId);
			peer.on('notify',(notification)=>{
				send(clients[option.userId],'mediasoup_notify',null,{
					notification: notification
				});
			});
			peer.on('close',()=>{
				console.log('closed: '.cyan+`${option.userId}`.magenta);
				console.log('	room: '.cyan+`${option.roomId}`.magenta);
				console.log('		leave: '.cyan+`${room.peers.length}`.magenta+'\n');
				delete clients[option.userId];
				if(room.peers.length == 0){
					room.close();
					delete vws[option.roomId];
					delete rooms[option.roomId];
					console.log('closed : '.cyan+`${option.roomId}`.magenta);
				}
			});
			peer.on('newproducer',({appData})=>{
				console.log('add stream: '.yellow+`${appData.userId}(${appData.windowNumber})`.magenta+'');
				console.log('	room: '.green+`${appData.roomId}`.magenta+'\n');
				const streamId = `${appData.userId}.${appData.source}.${appData.windowNumber}.${appData.roomId}`;
				vws[appData.roomId][streamId] = [];
			});
		}).catch((err)=>{
			console.log('不明なエラー: join'.red);
		})
	});
}
const onotherrequest = (option)=>{
	return new Promise((resolve)=>{
		const room = rooms[option.roomId];
		const peer = room.getPeerByName(option.userId);
		peer.receiveRequest(option.request)
		.then((response)=>{
			resolve({
				response: response
			});
		}).catch((err)=>{
			console.log(`不明なエラー: ${err.toString()}`.red);
		});
	})
}

// 便利関数
const createId = ()=>{
	return new Date().getTime().toString(16)  + Math.floor(1000*Math.random()).toString(16);
}
const createRoom = (id)=>{
	const newRoom = rtcServer.Room([
		{
			kind       : 'audio',
			name       : 'opus',
			clockRate  : 48000,
			channels   : 2,
			parameters :
			{
				useinbandfec : 1
			}
		},
		{
			kind      : 'video',
			name      : 'VP8',
			clockRate : 90000
		}
	]);

	rooms[id] = newRoom;
	vws[id] = {};
	return newRoom;
}

/* start */
httpsServer.listen(config.port.https);
httpServer.listen(config.port.http);