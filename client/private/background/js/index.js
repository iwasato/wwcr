/* electron */
const electron = require('electron');
const remote = electron.remote;


/* modules */
const localmodules = remote.getGlobal('localmodules');
const Bridge = require(localmodules.bridge);

var bridge = null;

window.onload = ()=>{
	bridge = new Bridge(electron);
	bridge.setLabel('background');

	bridge.on('change',(e,option)=>{
		if(option){
			if(option.type=='color'){
				document.body.style.backgroundColor = option.value;
				document.body.style.backgroundImage = null;
			} else {
				document.body.style.backgroundImage = option.value;
				document.body.style.backgroundColor = null;
			}
		} else {
			document.body.style.backgroundColor = 'rgba(0,0,0,0)';
		}
	});
}