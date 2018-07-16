/* core modules */
const https = require('https');
const fs = require('fs');

const createServer = ({keyfile, certfile}, onRequest=()=>{})=>{
	const server = https.createServer({
		key: fs.readFileSync(keyfile),
		cert: fs.readFileSync(certfile)
	}, onRequest);

	return server;
}

module.exports = createServer;