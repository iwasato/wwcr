/* electron */
const electron = require('electron');
const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;


/* modules */
const localmodules = remote.getGlobal('localmodules');
const Bridge = require(localmodules.bridge);

// config
const config = remote.getGlobal('config');

// input pack
const inputPack = {
	'as-publicscreen': null,
	'edit-background': null,
	'white': null,
	'red': null,
	'blue': null,
	'green': null,
	'black': null,
	'1': null,
	'2': null,
	'3': null,
	'4': null
}

// element pack
const elementPack = {
	'background': null
}

// value pack
const valuePack = {
	'white': '#ffffff',
	'red': '#f44336',
	'blue': '#00b0ff',
	'green': '#76ff03',
	'black': '#212121',
	'1': `url(./img/theater1.png)`,
	'2': `url(./img/theater2.png)`,
	'3': `url(./img/theater3.jpg)`,
	'4': `url(./img/theater4.png)`
}

var bridge = null;
const INITASPUBLICVALUE = config['as-publicscreen'];
const INITEDITBACKGROUNDVALUE = config['edit-background'];
const inputIdList = ['white','red','blue','green','black','1','2','3','4'];

window.onload = ()=>{
	bridge = new Bridge(electron);
	bridge.setLabel('setting');

	// init input
	for(const id in inputPack){
		inputPack[id] = document.getElementById(id);
	}

	// init element
	for(const id in elementPack){
		elementPack[id] = document.getElementById(id);
	}

	if(INITASPUBLICVALUE){
		inputPack['as-publicscreen'].setAttribute('checked',true);
		inputPack['as-publicscreen'].parentNode.classList.add('is-dirty');
	}
	if(INITEDITBACKGROUNDVALUE){
		elementPack['background'].classList.remove('disabled');
		inputPack['edit-background'].setAttribute('checked',true);
		inputPack['edit-background'].parentNode.classList.add('is-dirty');
		inputIdList.forEach(id=>{
			if(id==INITEDITBACKGROUNDVALUE){
				inputPack[id].setAttribute('checked',true);
			} else {
				inputPack[id].removeAttribute('checked');
			}
		});
		bridge.sendToMain('change-background',{
			type: inputPack[INITEDITBACKGROUNDVALUE].getAttribute('background-type'),
			value: valuePack[INITEDITBACKGROUNDVALUE]
		});
	}

	inputPack['as-publicscreen'].onchange = (e)=>{
		bridge.sendToMain('config-update', {
			'as-publicscreen': e.target.checked
		});
		bridge.send('parent','as-publicscreen', e.target.checked);
	}
	inputPack['edit-background'].onchange = (e)=>{
		if(e.target.checked){
			elementPack['background'].classList.remove('disabled');
			const checked = document.querySelector('.rect input:checked');
			bridge.sendToMain('change-background',{
				type: checked.getAttribute('background-type'),
				value: valuePack[checked.getAttribute('id')]
			});
			bridge.sendToMain('config-update', {
				'edit-background': checked
			})
		} else {
			elementPack['background'].classList.add('disabled');
			bridge.sendToMain('change-background', null);
			bridge.sendToMain('config-update', {
				'edit-background': null
			});
		}
	}

	inputPack['white'].onchange = (e)=>{
		bridge.sendToMain('change-background',{
			type: e.target.getAttribute('background-type'),
			value: valuePack[e.target.getAttribute('id')]
		});
		bridge.sendToMain('config-update', {
			'edit-background': e.target.getAttribute('id')
		})
	}
	inputPack['red'].onchange = (e)=>{
		bridge.sendToMain('change-background',{
			type: e.target.getAttribute('background-type'),
			value: valuePack[e.target.getAttribute('id')]
		});
		bridge.sendToMain('config-update', {
			'edit-background': e.target.getAttribute('id')
		})
	}
	inputPack['blue'].onchange = (e)=>{
		bridge.sendToMain('change-background',{
			type: e.target.getAttribute('background-type'),
			value: valuePack[e.target.getAttribute('id')]
		});
		bridge.sendToMain('config-update', {
			'edit-background': e.target.getAttribute('id')
		})
	}
	inputPack['green'].onchange = (e)=>{
		bridge.sendToMain('change-background',{
			type: e.target.getAttribute('background-type'),
			value: valuePack[e.target.getAttribute('id')]
		});
		bridge.sendToMain('config-update', {
			'edit-background': e.target.getAttribute('id')
		})
	}
	inputPack['black'].onchange = (e)=>{
		bridge.sendToMain('change-background',{
			type: e.target.getAttribute('background-type'),
			value: valuePack[e.target.getAttribute('id')]
		});
		bridge.sendToMain('config-update', {
			'edit-background': e.target.getAttribute('id')
		})
	}
	inputPack['1'].onchange = (e)=>{
		bridge.sendToMain('change-background',{
			type: e.target.getAttribute('background-type'),
			value: valuePack[e.target.getAttribute('id')]
		});
		bridge.sendToMain('config-update', {
			'edit-background': e.target.getAttribute('id')
		})
	}
	inputPack['2'].onchange = (e)=>{
		bridge.sendToMain('change-background',{
			type: e.target.getAttribute('background-type'),
			value: valuePack[e.target.getAttribute('id')]
		});
		bridge.sendToMain('config-update', {
			'edit-background': e.target.getAttribute('id')
		})
	}
	inputPack['3'].onchange = (e)=>{
		bridge.sendToMain('change-background',{
			type: e.target.getAttribute('background-type'),
			value: valuePack[e.target.getAttribute('id')]
		});
		bridge.sendToMain('config-update', {
			'edit-background': e.target.getAttribute('id')
		})
	}
	inputPack['4'].onchange = (e)=>{
		bridge.sendToMain('change-background',{
			type: e.target.getAttribute('background-type'),
			value: valuePack[e.target.getAttribute('id')]
		});
		bridge.sendToMain('config-update', {
			'edit-background': e.target.getAttribute('id')
		})
	}
}