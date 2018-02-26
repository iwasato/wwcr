/*
	application: index.js
	iwasato@toralab.org
*/

/* import core modules */
	const childprocess = require('child_process');
/* */

/* global variables */
	const execSync = childprocess.execSync;
/* */

module.exports = (()=>{
	const funcs = {};
	funcs.input = (keyCode)=>{
		execSync(`${__dirname}/lib/input ${keyCode}`);
	}

	return funcs
})();