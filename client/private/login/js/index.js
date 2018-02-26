/* electron */
const electron = require('electron');
const remote = electron.remote;
const BrowserWindow = remote.BrowserWindow;
const net = remote.net;


/* modules */
const localmodules = remote.getGlobal('localmodules');
const fs = require('fs');
const path = require('path');
const Bridge = require(localmodules.bridge);

/* その他 */
var bridge = null;
var config = remote.getGlobal('config');
const popupsource = {
	'setting-local-info': fs.readFileSync(path.join(__dirname,'../','popup','setting-local-info.html')).toString(),
	'create-new-account': fs.readFileSync(path.join(__dirname,'../','popup','create-new-account.html')).toString()
}
var SERVERADDRESS = config['server-address'];
var AUTOENTERCLASSROOM = config['auto-enter-classroom'];

/* domPack */
const domPack = {
	'login__button': null,
	'account-id__input': null,
	'account-password__input': null,
	'show-setting-popup__button': null,
	'create-new-account__button': null,
	add: (id)=>{domPack[id] = document.getElementById(id)}
}

window.onload = ()=>{
	/* bridge */
	bridge = new Bridge(electron);
	bridge.setLabel('login');

	/* dom init */
	for(const id in domPack){
		if(domPack[id] == null){
			domPack[id] = document.getElementById(id);
		}
	}

	domPack['login__button'].onclick = (e)=>{
		const id = domPack['account-id__input'].value;
		const password = domPack['account-password__input'].value;
		bridge.sendToMain('login',{
			id: id,
			password: password
		});
	}

	domPack['show-setting-popup__button'].onclick = (e)=>{
		swal({
			html: popupsource['setting-local-info'],
			showConfirmButton: false,
			allowOutsideClick: false,
			onOpen: (swal2Element)=>{
				/* domPack */
				const domPackInSwal2 = {
					'server-address__input': null,
					'auto-enter-classroom__input': null,
					'classroom-id__input': null,
					'cancel__button': null,
					'apply__button': null
				}

				/* dom init */
				for(const id in domPackInSwal2){
					domPackInSwal2[id] = document.getElementById(id);
				}

				/* mdl init */
				componentHandler.upgradeElements(swal2Element);


				if(SERVERADDRESS != ''){
					domPackInSwal2['server-address__input'].value = SERVERADDRESS;
					domPackInSwal2['server-address__input'].parentNode.classList.add('is-dirty');
				}

				if(AUTOENTERCLASSROOM.value){
					domPackInSwal2['auto-enter-classroom__input'].checked = true;
					domPackInSwal2['auto-enter-classroom__input'].parentNode.classList.add('is-checked');
					if(AUTOENTERCLASSROOM['classroom-id'] != ''){
						domPackInSwal2['classroom-id__input'].value = AUTOENTERCLASSROOM['classroom-id'];
						domPackInSwal2['classroom-id__input'].parentNode.classList.add('is-dirty');
					}
				}

				/* event */
				domPackInSwal2['auto-enter-classroom__input'].onchange = (e)=>{
					if(e.target.checked){
						domPackInSwal2['classroom-id__input'].removeAttribute('disabled');
					} else {
						domPackInSwal2['classroom-id__input'].setAttribute('disabled', true);
					}
				}

				domPackInSwal2['cancel__button'].onclick = (e)=>{
					swal.clickCancel();
				}

				domPackInSwal2['apply__button'].onclick = (e)=>{
					swal.clickConfirm();
					swal._value = {
						'server-address': domPackInSwal2['server-address__input'].value || '',
						'auto-enter-classroom': domPackInSwal2['auto-enter-classroom__input'].checked,
						'classroom-id': domPackInSwal2['classroom-id__input'].value || ''
					}
				}
			}
		}).then(()=>{
			console.log('データを更新する');
			SERVERADDRESS = swal._value['server-address'];
			AUTOENTERCLASSROOM = {
				'value': swal._value['auto-enter-classroom'],
				'classroom-id': swal._value['classroom-id']
			};
			config = {
				'server-address': SERVERADDRESS,
				'auto-enter-classroom': AUTOENTERCLASSROOM
			};
			bridge.sendToMain('config-update',config);
			delete swal._value;
		}).catch(()=>{
			console.log('更新キャンセル');
		});
	}

	domPack['create-new-account__button'].onclick = (e)=>{
		swal({
			html: popupsource['create-new-account'],
			showConfirmButton: false,
			allowOutsideClick: false,
			onOpen: (swal2Element)=>{
				/* domPack */
				const domPackInSwal2 = {
					'new-account-name__input': null,
					'new-account-id__input': null,
					'new-account-password__input': null,
					'new-account-password-confirm__input': null,
					'new-account-as-teacher__input': null,
					'new-account-create__button': null,
					'cancel__button': null
				}

				/* dom init */
				for(const id in domPackInSwal2){
					domPackInSwal2[id] = document.getElementById(id);
				}

				bridge.on('id-exists-check-result',(e,{result})=>{
					if(!result){
						domPackInSwal2['new-account-id__input'].parentNode.classList.remove('is-invalid');
					} else {
						domPackInSwal2['new-account-id__input'].parentNode.classList.add('is-invalid');
					}
					invalidCheckBools['new-account-id__input'] = !result;
					confirmClickableUpdate();
				});

				const invalidCheckBools = {
					'new-account-name__input': false,
					'new-account-id__input': false,
					'new-account-password__input': false,
					'new-account-password-confirm__input': false
				}

				const confirmClickableUpdate = ()=>{
					const clickable = Object.values(invalidCheckBools).every((bool,index)=>{
						return bool;
					});
					if(clickable){
						domPackInSwal2['new-account-create__button'].removeAttribute('disabled');
					} else {
						domPackInSwal2['new-account-create__button'].setAttribute('disabled',true);
					}
				}

				domPackInSwal2['new-account-name__input'].onchange = (e)=>{
					const value = e.target.value || '';
					if(value != ''){
						invalidCheckBools['new-account-name__input'] = true;
					} else {
						invalidCheckBools['new-account-name__input'] = false;
					}

					confirmClickableUpdate();
				}

				domPackInSwal2['new-account-id__input'].onchange = (e)=>{
					if(e.srcElement.validity.valid){
						e.target.classList.add('fit-pattern');
					} else {
						e.target.classList.remove('fit-pattern');
					}
					invalidCheckBools['new-account-id__input'] = e.srcElement.validity.valid;
					confirmClickableUpdate();
				}

				domPackInSwal2['new-account-password__input'].onchange = (e)=>{
					invalidCheckBools['new-account-password__input'] = e.srcElement.validity.valid;

					confirmClickableUpdate();
				}

				domPackInSwal2['new-account-password-confirm__input'].onchange = (e)=>{
					if(e.target.value == domPackInSwal2['new-account-password__input'].value){
						invalidCheckBools['new-account-password-confirm__input'] = true;
						e.target.parentNode.classList.remove('is-invalid');
					} else {
						invalidCheckBools['new-account-password-confirm__input'] = false;
						e.target.parentNode.classList.add('is-invalid');
					}

					confirmClickableUpdate();
				}

				/* mdl init */
				componentHandler.upgradeElements(swal2Element);

				domPackInSwal2['cancel__button'].onclick = (e)=>{
					swal.clickCancel();
				}

				domPackInSwal2['new-account-create__button'].onclick = (e)=>{
					swal.clickConfirm();
					swal._value = {
						'name': domPackInSwal2['new-account-name__input'].value,
						'id': domPackInSwal2['new-account-id__input'].value,
						'password': domPackInSwal2['new-account-password__input'].value,
						'as-teacher': domPackInSwal2['new-account-as-teacher__input'].checked
					}
				}
			}
		}).then(()=>{
			console.log('アカウントを作成する');
			delete swal._value;
		}).catch(()=>{
			console.log('作成キャンセル');
		});
	}
}