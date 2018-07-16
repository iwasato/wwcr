/* core modules */
const fs = require('fs');

/* third party modules */
const express = require('express');
const seedrandom = require('seedrandom');

/* local modules */
const Database = require('./../modules/db');
const https = require('./../modules/https');
const wss = require('./../modules/wss');
const rtcs = require('./../modules/rtcs');

/* define */
const config = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
/*
	keyfile    : string
	certfile   : string
	port       : integer
	database   : string
*/

/* variables */
let db = null;
let exapp = null;
let httpsServer = null;
let wssServer = null;
let rtcsServer = null;

/* func: 機能ごと */
const login = require('./login.js');
const send = require('./send.js');
const mediasoupRequest = require('./mediasoup-request.js');

/* func: コールバック */
// コネクション確立時のコールバック
const onconnection = (connection)=>{
	connection.on('error',(err)=>{

	});

	connection.on('close',(err)=>{

	});

	connection.on('message',(message)=>{
		const data = JSON.parse(message);
		switch(data.command){
			case 'initialize':
			connection.id = seedrandom(data.id+','+data.password);
			send(connection,{
				id: connection.id
			});

			break;

			case 'mediasoup-request':
			break;

			case 'mediasoup-notify':
			break;

			default:
			break;
		}
	});
}

/* func: 初期化系 */
// データベースの初期化
const dbinit = ()=>{
	db = new Database(config.database);
	return new Promise((resolve)=>{
		db.tables().then((tables)=>{
			const tasks = [];

			if(tables.indexOf('account') == -1) {
				tasks.push(db.createTable('account',{
					id: 'text',
					password: 'text'
				}));
			}

			if(tables.indexOf('room') == -1) {
				tasks.push(db.createTable('room',{
					token: 'text',
					password: 'text',
					members: 'text',
					groups: 'text'
				}));
			}

			Promise.all(tasks).then(resolve);
		});
	});
}





// リクエストのコールバックの初期化
const requestinit = ()=>{
	const router = express.Router();
	router.get('/',(req,res)=>{
		switch(req.query.process) {
			case 'login':
			login(db,req.query.id,req.query.password)
			.then((result)=>{
				res.json({
					result
				});
			});
			break;
		}
	});

	exapp = express();
	exapp.use('/',router);
}





// サーバの初期化
const serverinit = ()=>{
	/* init servers */
	httpsServer = https({
		keyfile: config.keyfile,
		certfile: config.certfile
	},exapp);
	wssServer = wss(httpsServer);

	/* listen */
	httpsServer.listen(config.port);
}

/* main */
dbinit().then(()=>{
	requestinit();
	serverinit();
});