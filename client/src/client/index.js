/* core modules */
const fs = require('fs');

/* third party modules */
const ws = require('ws');

/* local modules */

/* define */
const config = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
console.log(config);

/* variables */
let socket = null;

/* func: コールバック */

/* func: 初期化系 */
const socketinit = ()=>{
	socket = new ws('wss://'+config["server-domain"]);
	return new Promise((resolve)=>{
		socket.onopen = resolve;
	});
}

/* main */
socketinit().then(()=>{
});