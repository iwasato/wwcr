/* electron */
const electron = require('electron');
const remote = electron.remote;

/* module path */
const localmodules = remote.getGlobal('localmodules');
const componentPack = require('./js/pack.js');

/* modules */
const fs = require('fs');
const path = require('path');
const Bridge = require(localmodules.bridge);

/* object */
var config = remote.getGlobal('config');
var classroomView = null;
var bridge = null;
var CLASSROOMLIST = [];
var USERID = decodeURIComponent(location.search.match(/id=(.*?)(&|$)/)[1]);
var USERNAME = decodeURIComponent(location.search.match(/name=(.*?)(&|$)/)[1]);
var RANK = decodeURIComponent(location.search.match(/rank=(.*?)(&|$)/)[1]);
var SERVERADDRESS = config['server-address'];

const popupSource = {
	'create-new-classroom': fs.readFileSync(path.join(__dirname,'..','popup','create-new-classroom.html')).toString(),
	'input-classroom-token': fs.readFileSync(path.join(__dirname,'..','popup','input-classroom-token.html')).toString()
}

/* domPack */
const domPack = {
	'user-account__icon': null,
	'user-account__name': null,
	'create-classroom__button': null,
	'reload-classrooms__button': null,
	'classrooms-pack': null,
	add: (id)=>{domPack[id] = document.getElementById(id)}
}

window.onload = ()=>{
	if(RANK != 'student'){
		document.body.classList.remove('is-student-page');
	}

	/* bridge */
	bridge = new Bridge(electron);
	bridge.setLabel('classrooms');
	bridge.on('classrooms',(e,classroomList)=>{
		CLASSROOMLIST = classroomList;
		classroomView.setClassroomList(CLASSROOMLIST);
	});
	bridge.on('add-classroom',(e,classroom)=>{
		CLASSROOMLIST.push(classroom);
		classroomView.setClassroomList(CLASSROOMLIST);
	});

	/* dom init */
	for(const id in domPack){
		if(domPack[id] == null){
			domPack[id] = document.getElementById(id);
		}
	}

	classroomView = componentPack.createClassroomView(domPack['classrooms-pack'],RANK);
	classroomView.onclick = (e)=>{
		const classroomInfo = {
			name: e.currentTarget.getAttribute('classroomname'),
			id: e.currentTarget.getAttribute('classroomid'),
			token: e.currentTarget.getAttribute('classroomtoken')
		}
		if(RANK=='teacher'){
			bridge.sendToMain('staffroom',{
				roomid: classroomInfo.id,
				roomname: classroomInfo.name,
				userid: USERID,
				username: USERNAME,
				rank: RANK
			});
		} else {
			swal({
				html: popupSource['input-classroom-token'],
				showConfirmButton: false,
				allowOutsideClick: false,
				onOpen: (swal2Element)=>{
					/* domPack */
					const domPackInSwal2 = {
						'classroom-name-view__h3': null,
						'classroom-token__input': null,
						'decision__button': null,
						'cancel__button': null
					}

					/* dom init */
					for(const id in domPackInSwal2){
						domPackInSwal2[id] = document.getElementById(id);
					}

					/* mdl init */
					componentHandler.upgradeElements(swal2Element);
					domPackInSwal2['classroom-name-view__h3'].innerText = classroomInfo.name;

					domPackInSwal2['decision__button'].onclick = ()=>{
						if(domPackInSwal2['classroom-token__input'].value != classroomInfo.token){
							domPackInSwal2['classroom-token__input'].parentNode.classList.add('is-invalid');
						} else {
							domPackInSwal2['classroom-token__input'].parentNode.classList.remove('is-invalid');
							swal.clickConfirm();
						}
					}

					domPackInSwal2['cancel__button'].onclick = ()=>{
						swal.clickCancel();
					}
				}
			}).then(()=>{
				bridge.sendToMain('theater',{
					roomid: classroomInfo.id,
					roomname: classroomInfo.name,
					userid: USERID,
					username: USERNAME,
					rank: RANK
				});
			}).catch(()=>{
			});
		}
	}

	/* init account info */
	domPack['user-account__icon'].src = `${SERVERADDRESS}/icon?type=user&id=${USERID}`;
	domPack['user-account__name'].innerText = USERNAME;

	domPack['create-classroom__button'].onclick = (e)=>{
		swal({
			html: popupSource['create-new-classroom'],
			showConfirmButton: false,
			allowOutsideClick: false,
			onOpen: (swal2Element)=>{
				/* domPack */
				const domPackInSwal2 = {
					'new-classroom-color-orangered__input': null,
					'new-classroom-color-royalblue__input': null,
					'new-classroom-color-darkorange__input': null,
					'new-classroom-color-lawngreen__input': null,
					'new-classroom-color-hotpink__input': null,
					'new-classroom-color-dimgray__input': null,
					'new-classroom-color-slateblue__input': null,
					'new-classroom-color-maroon__input': null,
					'new-classroom-name__input': null,
					'new-classroom-token__input': null,
					'new-classroom-color-preview__div': null,
					'new-classroom-create__button': null,
					'cancel__button': null
				}

				/* dom init */
				for(const id in domPackInSwal2){
					domPackInSwal2[id] = document.getElementById(id);
				}

				const invalidCheckBools = {
					'new-classroom-name__input': false,
					'new-classroom-token__input': false,
				}

				const confirmClickableUpdate = ()=>{
					const clickable = Object.values(invalidCheckBools).every((bool,index)=>{
						return bool;
					});
					if(clickable){
						domPackInSwal2['new-classroom-create__button'].removeAttribute('disabled');
					} else {
						domPackInSwal2['new-classroom-create__button'].setAttribute('disabled',true);
					}
				}

				/* mdl init */
				componentHandler.upgradeElements(swal2Element);

				domPackInSwal2['new-classroom-name__input'].onchange = (e)=>{
					const value = e.target.value || '';
					invalidCheckBools['new-classroom-name__input'] = value != '';
					confirmClickableUpdate();
				}

				domPackInSwal2['new-classroom-token__input'].onchange = (e)=>{
					invalidCheckBools['new-classroom-token__input'] = e.srcElement.validity.valid;
					confirmClickableUpdate();
				}

				domPackInSwal2['new-classroom-color-orangered__input'].onchange = (e)=>{
					domPackInSwal2['new-classroom-color-preview__div'].style.backgroundColor = e.target.getAttribute('color');
				}
				domPackInSwal2['new-classroom-color-royalblue__input'].onchange = (e)=>{
					domPackInSwal2['new-classroom-color-preview__div'].style.backgroundColor = e.target.getAttribute('color');
				}
				domPackInSwal2['new-classroom-color-darkorange__input'].onchange = (e)=>{
					domPackInSwal2['new-classroom-color-preview__div'].style.backgroundColor = e.target.getAttribute('color');
				}
				domPackInSwal2['new-classroom-color-lawngreen__input'].onchange = (e)=>{
					domPackInSwal2['new-classroom-color-preview__div'].style.backgroundColor = e.target.getAttribute('color');
				}
				domPackInSwal2['new-classroom-color-hotpink__input'].onchange = (e)=>{
					domPackInSwal2['new-classroom-color-preview__div'].style.backgroundColor = e.target.getAttribute('color');
				}
				domPackInSwal2['new-classroom-color-dimgray__input'].onchange = (e)=>{
					domPackInSwal2['new-classroom-color-preview__div'].style.backgroundColor = e.target.getAttribute('color');
				}
				domPackInSwal2['new-classroom-color-slateblue__input'].onchange = (e)=>{
					domPackInSwal2['new-classroom-color-preview__div'].style.backgroundColor = e.target.getAttribute('color');
				}
				domPackInSwal2['new-classroom-color-maroon__input'].onchange = (e)=>{
					domPackInSwal2['new-classroom-color-preview__div'].style.backgroundColor = e.target.getAttribute('color');
				}

				domPackInSwal2['cancel__button'].onclick = (e)=>{
					swal.clickCancel();
				}

				domPackInSwal2['new-classroom-create__button'].onclick = (e)=>{
					swal.clickConfirm();
					swal._value = {
						'name': domPackInSwal2['new-classroom-name__input'].value,
						'token': domPackInSwal2['new-classroom-token__input'].value,
						'color': domPackInSwal2['new-classroom-color-preview__div'].style.backgroundColor,
						'ownerid': USERID,
						'ownername': USERNAME
					}
				}
			}
		}).then(()=>{
			bridge.sendToMain('create-new-classroom',swal._value);
			delete swal._value;
		}).catch(()=>{
		});
	}

	domPack['reload-classrooms__button'].onclick = ()=>{
		bridge.sendToMain('get-classrooms',{
			id: RANK == 'teacher' ? USERID : undefined
		});
	}

	bridge.sendToMain('get-classrooms', {
		id: RANK == 'teacher' ? USERID : undefined
	});
}