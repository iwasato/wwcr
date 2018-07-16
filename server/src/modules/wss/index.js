/* third party modules */
const ws = require('ws');

const createServer = (httpsServer,onconnection)=>{
	const server = new ws.Server({
		server: httpsServer
	});
	server.on('connection',onconnection);

	return server;
}

module.exports = createServer;