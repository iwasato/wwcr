// electron
const electron = require('electron');
const remote = electron.remote;

const localmodules = remote.getGlobal('localmodules');
const Bridge = require(localmodules.bridge);

var bridge = null;

window.onload = ()=>{
	document.body.style.backgroundColor = decodeURIComponent(location.search.match(/color=(.*?)(&|$)/)[1]);

	bridge = new Bridge(electron);
	bridge.setLabel('background');

	bridge.on('change-color',(e,color)=>{
		document.body.style.backgroundColor = color;
	});
}