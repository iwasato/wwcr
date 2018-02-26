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
	funcs.getWindows = ()=>{
		return JSON.parse(execSync(__dirname+'/lib/applications').toString()).windows;
	}
	funcs.getImage = (x,y,width,height,number)=>{
		return {
			x,y,width,height,
			dataURL: execSync(__dirname+'/lib/image '+x+' '+y+' '+width+' '+height+' '+number).toString()
		}
	}
	funcs.getScreenImage = ()=>{
		return execSync(__dirname+'/lib/desktop').toString();
	}

	return funcs
})();