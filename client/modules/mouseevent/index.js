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
	funcs.click = (x,y)=>{
		execSync(`${__dirname}/lib/click ${x} ${y}`);
	}
	funcs.drag = (x,y)=>{
		execSync(`${__dirname}/lib/drag ${x} ${y}`);
	}
	funcs.doubleclick = (x,y)=>{
		execSync(`${__dirname}/lib/click ${x} ${y}`);
		execSync(`${__dirname}/lib/doubleclick ${x} ${y}`);
	}

	return funcs
})();