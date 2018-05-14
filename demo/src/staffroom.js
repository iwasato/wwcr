/* demo */
import democontents from './democontents/index.js';
/* */

import popup from './popup/index.js';
import components from './components/components.jsx';

/*
	外部ファイル内で読み込んだモジュールを，わかりやすくするためにここでまた呼び出し．
*/
const remote = window.remote;
const BrowserWindow = window.BrowserWindow;
const appman = window.appman;

const buttonPack = {
	'back-toptool__button': null,
	'showdisplay-toptool__button': null,
	'navigation-toptool__button': null,
	'appsharing-toptool__button': null,
	'theater-toptool__button': null,
	'message-toptool__button': null,
	'videocall-toptool__button': null,
	'bell-toptool__button': null,
	'lock-toptool__button': null,
	'addgroup-toptool__button': null,
	'addgroup-ok__button': null,
	'addgroup-cancel__button': null,
	'editgroup-toggle__button': null,
	'showdisplay-itemtool__button': null,
	'navigation-itemtool__button': null,
	'appsharing-itemtool__button': null,
	'theater-itemtool__button': null,
	'message-itemtool__button': null,
	'videocall-itemtool__button': null,
	'bell-itemtool__button': null,
	'lock-itemtool__button': null,
	'addgroup-itemtool__button': null
}

const inputPack = {
	'itemsize-toptool__intput': null,
	'newgroup-name__input': null
}

const elementPack = {
	'item-view': null,
	'group-view': null,
	'add-group-box': null
}

var componentPack = {
	'item-view': null,
	'group-view': null
}


/* その他 */
var windowList = null;
var focusItemId = null;
const PROCESSID = remote.getGlobal('pid');
const ADDGROUPDISABLEDBUTTONLIST = ['navigation-toptool__button','appsharing-toptool__button','theater-toptool__button','message-toptool__button','videocall-toptool__button','bell-toptool__button','lock-toptool__button','addgroup-toptool__button']
const INVALID_APP_NAME = ['Window Server','Dock','通知センター','SystemUIServer','Spotlight','loginwindow','QuickLookUIService','日本語入力プログラム'];
const INVALID_WIN_NAME = ['(null)',''];
const INVALID_APP_LAYER = [24,25,103];
const POSITIONS_CLASS_NAMES = ["mdl-menu--bottom-left","mdl-menu--bottom-right","mdl-menu--top-left","mdl-menu--top-right"];

window.onload = ()=>{
	/* init element */
	for(const id in elementPack){
		elementPack[id] = document.getElementById(id);
	}

	/* init button */
	for(const id in buttonPack){
		buttonPack[id] = document.getElementById(id);
	}

	/* init input */
	for(const id in inputPack){
		inputPack[id] = document.getElementById(id);
	}

	/* init component */
	// group view
	componentPack['group-view'] = components.createGroupView(elementPack['group-view'],initGroups(democontents.groupList));
	componentPack['group-view'].onchange = (e)=>{
		const groupId = e.target.id;
		var theUserList = [];
		if(groupId == 'all'){
			theUserList = componentPack['item-view'].itemIdList;
		} else {
			const group = componentPack['group-view'].groupList.filter(group=>{return groupId==group.id})[0];
			theUserList = group.userIdList;
		}
		componentPack['item-view'].setItemList(theUserList);

		if(groupId == 'all'){
			buttonPack['editgroup-toggle__button'].setAttribute('disabled',true);
		} else  {
			buttonPack['editgroup-toggle__button'].removeAttribute('disabled');
		}
	}

	/* item view */
	componentPack['item-view'] = components.createItemView(elementPack['item-view'],inputPack['itemsize-toptool__intput'].value/100);
	democontents.userList.forEach(user=>{
		componentPack['item-view'].addItem(userToItem(user));
	});
	componentPack['item-view'].setItemList(componentPack['item-view'].itemIdList);
	componentPack['item-view'].onclick = (e)=>{
		createContextMenu(e);
	}

	// header button event
	buttonPack['back-toptool__button'].onclck = ()=>{
		
	}

	buttonPack['showdisplay-toptool__button'].onclick = ()=>{
		componentPack['item-view'].toggleAllContent();
	}

	buttonPack['navigation-toptool__button'].onclick = ()=>{
		popup.navigation(democontents.navigation)
		.then(value=>{
			switch(value){
				case 'filedist':
				popup.textForm('madosdist','ディレクトリ','ディレクトリの設定');
				break;
				case 'filecollect':
				popup.textForm('madoscollect','ディレクトリ','ディレクトリの設定');
				break;
				case 'addbookmark':
				popup.textForm('','URL','ブックマークの登録');
				break;
				case 'wwc-go-to-page':
				popup.sliderForm(1,'ページを入力');
				break;
				case 'startquestionnaire':
				popup.textForm('','URL','アンケートページのURLを入力');
				break;
			}
		});
	}

	buttonPack['appsharing-toptool__button'].onclick = ()=>{
		createAllWindowStream()
		.then(values=>{
			remote.getCurrentWindow().focus();
			return popup.windowList(values);
		}).then(values=>{
			console.log(values);
		}).catch(err=>{
			if(err){
				console.error(err);
			}
		});
	}

	buttonPack['theater-toptool__button'].onclick = ()=>{
		const tmpFocusItemId = focusItemId;
		const options = {
			root: {
				list: null,
				subtitle: 'スクリーンを選択'
			}
		}
		options.root.list = componentPack['item-view'].itemList.filter(user=>{
			return user.id == 'matatow' || user.id == 'aidaku';
		}).map(user=>{
			return {
				label: user.label,
				iconurl: user.iconurl,
				value: user.id
			}
		});
		popup.navigation(options,null,'シアター',false)
		.then(()=>{
			createAllWindowStream()
			.then(values=>{
				remote.getCurrentWindow().focus();
				return popup.windowList(values);
			}).then(values=>{
				console.log(values);
			}).catch(err=>{
				if(err){
					console.error(err);
				}
			});
		});
	}

	buttonPack['message-toptool__button'].onclick = ()=>{
		popup.message()
		.then(type=>{
			switch(type){
				case 'voice':
				popup.voiceMessage();
				break;
				case 'video':
				popup.videoMessage();
				break;
				case 'text':
				popup.textMessage();
				break;
			}
		});
	}

	buttonPack['videocall-toptool__button'].onclick = ()=>{
		popup.videoCall();
	}

	buttonPack['addgroup-toptool__button'].onclick = (e)=>{
		// 現在選択中のグループID
		const groupId = componentPack['group-view'].currentGroupId;
		// 現在選択中のグループIDを一時保存
		elementPack['add-group-box'].setAttribute('pre-group-id',groupId);
		// ボタンを操作禁止にする
		buttonDisabled();
		// item-viewをチェックボックモードに変更
		componentPack['item-view'].setInputType('checkbox');
		// 全員表示
		checkGroup('all');
		// グループ名入力フォームを消去
		inputPack['newgroup-name__input'].value = '';
		inputPack['newgroup-name__input'].parentNode.classList.remove('is-dirty');
		// グループ名入力フォームを表示
		elementPack['add-group-box'].classList.add('visible');
	}

	buttonPack['editgroup-toggle__button'].onclick = (e)=>{
		// 現在選択中のグループID
		const groupId = componentPack['group-view'].currentGroupId;
		// 現在選択中のグループ名
		const groupName = componentPack['group-view'].currentGroupName;
		// 現在選択中のグループIDを一時保存
		elementPack['add-group-box'].setAttribute('pre-group-id',groupId);
		// ボタンを操作禁止にする
		buttonDisabled();
		// item-viewをチェックボックモードに変更
		componentPack['item-view'].setInputType('checkbox');
		// 全員表示
		checkGroup('all');
		// グループ名入力フォームを現在選択中のグループ名にする
		inputPack['newgroup-name__input'].value = groupName;
		inputPack['newgroup-name__input'].parentNode.classList.add('is-dirty');
		// グループ名入力フォームを表示
		elementPack['add-group-box'].classList.add('visible');

		// 編集モードであることを明記
		elementPack['add-group-box'].classList.add('edit-mode');
		// 現在選択中のグループ内にいるユーザのID
		const currentUserIdList = groupId == 'all' ? userIdList : componentPack['group-view'].getGroup(groupId).userIdList;
		// 現在選択中のグループ内にいるユーザを選択状態にする
		currentUserIdList.forEach(userId=>{
			componentPack['item-view'].checkItem(userId);
		});
	}

	buttonPack['addgroup-ok__button'].onclick = (e)=>{
		// 保存していたグループIDを取得
		var preGroupId = elementPack['add-group-box'].getAttribute('pre-group-id');
		// 保存していた場所からは削除
		elementPack['add-group-box'].removeAttribute('pre-group-id');
		// 選択中のユーザID一覧を取得
		const userIdList = componentPack['item-view'].getCheckedItems().map((item)=>{
				return item.id;
		});
		// 入力されたグループ名を取得
		const name = inputPack['newgroup-name__input'].value;
		// グループオブジェクトを作成
		const group = groupToGroup({name,userIdList});
		// 場合分け
		if(elementPack['add-group-box'].classList.contains('edit-mode')){
			// 編集モードだった場合
			// まず編集モードを解除
			elementPack['add-group-box'].classList.remove('edit-mode');
			// グループ設定の更新
			componentPack['group-view'].updateGroup(preGroupId,group);
		} else {
			// 追加モードだった場合
			// グループを追加
			componentPack['group-view'].addGroup(group);
		}
		// 保存していたグループIDを更新
		preGroupId = group.id;

		// 後始末
		// グループ名入力フォームを閉じる
		elementPack['add-group-box'].classList.remove('visible');
		// グループを選択
		checkGroup(preGroupId);
		// ボタンを操作可能にする
		buttonEnabled();
		// item-viewをボタンモードに変更
		componentPack['item-view'].setInputType('button');
	}

	buttonPack['addgroup-cancel__button'].onclick = (e)=>{
		// 保存していたグループIDを取得
		var preGroupId = elementPack['add-group-box'].getAttribute('pre-group-id');
		// 保存していた場所からは削除
		elementPack['add-group-box'].removeAttribute('pre-group-id');

		// 場合分け
		if(elementPack['add-group-box'].classList.contains('edit-mode')){
			// 編集モードだった場合
			// まず編集モードを解除
			elementPack['add-group-box'].classList.remove('edit-mode');
		} else {
			// 追加モードだった場合
			// 何もしない
		}

		// 後始末
		// グループ名入力フォームを閉じる
		elementPack['add-group-box'].classList.remove('visible');
		// グループを選択
		checkGroup(preGroupId);
		// ボタンを操作可能にする
		buttonEnabled();
		// item-viewをボタンモードに変更
		componentPack['item-view'].setInputType('button');
	}

	inputPack['itemsize-toptool__intput'].oninput = (e)=>{
		componentPack['item-view'].setScale(e.target.value/100);
	}


	// context menu button event
	buttonPack['showdisplay-itemtool__button'].onclick = (e)=>{
		componentPack['item-view'].toggleEachContent(focusItemId);
	}
	buttonPack['navigation-itemtool__button'].onclick = (e)=>{
		popup.navigation(democontents.navigation)
		.then(value=>{
			switch(value){
				case 'filedist':
				popup.textForm('madosdist','ディレクトリ','ディレクトリの設定');
				break;
				case 'filecollect':
				popup.textForm('madoscollect','ディレクトリ','ディレクトリの設定');
				break;
				case 'addbookmark':
				popup.textForm('','URL','ブックマークの登録');
				break;
				case 'wwc-go-to-page':
				popup.sliderForm(1,'ページを入力');
				break;
			}
		});
	}
	buttonPack['appsharing-itemtool__button'].onclick = (e)=>{
		createAllWindowStream()
		.then(values=>{
			remote.getCurrentWindow().focus();
			return popup.windowList(values);
		}).then(values=>{
			console.log(values);
		}).catch(err=>{
			if(err){
				console.error(err);
			}
		});
	}
	buttonPack['theater-itemtool__button'].onclick = (e)=>{
		const tmpFocusItemId = focusItemId;
		const options = {
			root: {
				list: null,
				subtitle: 'スクリーンを選択'
			}
		}
		options.root.list = componentPack['item-view'].itemList.filter(user=>{
			return user.id == 'matatow' || user.id == 'aidaku';
		}).map(user=>{
			return {
				label: user.label,
				iconurl: user.iconurl,
				value: user.id
			}
		});
		popup.navigation(options,null,'シアター',false)
		.then(()=>{
			createAllWindowStream()
			.then(values=>{
				remote.getCurrentWindow().focus();
				return popup.windowList(values);
			}).then(values=>{
				console.log(values);
			}).catch(err=>{
				if(err){
					console.error(err);
				}
			});
		});
	}
	buttonPack['message-itemtool__button'].onclick = (e)=>{
		popup.message()
		.then(type=>{
			switch(type){
				case 'voice':
				popup.voiceMessage();
				break;
				case 'video':
				popup.videoMessage();
				break;
				case 'text':
				popup.textMessage();
				break;
			}
		});
	}
	buttonPack['videocall-itemtool__button'].onclick = (e)=>{
		popup.videoCall();
	}
	buttonPack['bell-itemtool__button'].onclick = (e)=>{

	}
	buttonPack['lock-itemtool__button'].onclick = (e)=>{

	}
	buttonPack['addgroup-itemtool__button'].onclick = (e)=>{
		const tmpFocusItemId = focusItemId;
		const options = {
			root: {
				list: null
			},
			subtitle: 'グループを選択'
		}
		options.root.list = componentPack['group-view'].groupList.map(group=>{
			return {
				label: group.name,
				iconurl: group.iconurl,
				value: group.id
			}
		});
		const name = componentPack['item-view'].getItem(tmpFocusItemId).label;
		popup.navigation(options,null,`${name}をグループへ追加`,false)
		.then(value=>{
			const group = componentPack['group-view'].getGroup(value);
			if(group.userIdList.indexOf(tmpFocusItemId)!=-1){
				return;
			}
			group.userIdList.push(tmpFocusItemId);
			componentPack['group-view'].updateGroup(group.id,group);
		});
	}

	appman.watch();
	appman.on('loop',(_windowList)=>{
		windowList = _windowList.filter(isValid);
	});
}

/* 便利関数 */
// set
const checkGroup = (groupId)=>{
	if(groupId=='all'){
		componentPack['group-view'].checkGroup('all');
		componentPack['item-view'].setItemList(componentPack['item-view'].itemIdList);
		buttonPack['editgroup-toggle__button'].setAttribute('disabled',true);
	} else {
		const group = componentPack['group-view'].getGroup(groupId);
		componentPack['group-view'].checkGroup(groupId);
		componentPack['item-view'].setItemList(group.userIdList);
		buttonPack['editgroup-toggle__button'].removeAttribute('disabled');
	}
}

// layout
const buttonDisabled = ()=>{
	ADDGROUPDISABLEDBUTTONLIST.forEach((elementId)=>{
		buttonPack[elementId].setAttribute('disabled',true);
	});
}
const buttonEnabled = ()=>{
	ADDGROUPDISABLEDBUTTONLIST.forEach((elementId)=>{
		buttonPack[elementId].removeAttribute('disabled');
	});
}

// create
const createRandomId = ()=>{
	return Math.floor(100000*Math.random()).toString(16);
}
const createIdfromString = (str)=>{
	Math.seedrandom(str);
	const id = createRandomId();
	Math.seedrandom();
	return id;
}
const createIconWithChar = (str)=>{
	const icon = document.createElement('canvas');
	icon.width = 64;
	icon.height = 64;
	const iconctx = icon.getContext('2d');
	iconctx.fillStyle = "rgb("+(~~(256*Math.random()))+","+(~~(256*Math.random()))+","+(~~(256 *Math.random()))+")";
	iconctx.beginPath();
	iconctx.arc(32,32,32,0,Math.PI*2,true);
	iconctx.fill();
	iconctx.textAlign = 'center';
	iconctx.font = `48px 'ヒラギノ角ゴ Pro W3'`;
	iconctx.fillStyle = 'white';
	iconctx.fillText(str[0],32,49);
	return icon.toDataURL();
}
const createAllWindowStream = ()=>{
	return new Promise((resolve,reject)=>{
		const valueList = [];
		const length = windowList.length;
		windowList.forEach(win=>{
			createWindowStream(win.number)
			.then(stream=>{
				valueList.push({
					stream: stream,
					name: win.ownerName,
					number: win.number
				});
				if(valueList.length==length){
					resolve(valueList);
				}
			}).catch(err=>{
				reject(err);
			});
		});
	});
}
const createWindowStream = (windowNumber)=>{
	return new Promise((resolve,reject)=>{
		navigator.getUserMedia({
			audio: false,
			video: {
				mandatory: {
					chromeMediaSource: 'desktop',
					chromeMediaSourceId: `window:${windowNumber}`,
					minWidth: 0,
					minHeight: 0,
					maxWidth: window.parent.screen.width,
					maxHeight: window.parent.screen.height
				}
			}
		},(stream)=>{
			resolve(stream);
		},(err)=>{
			reject(err);
		});
	});
}
const createContextMenu = (e)=>{
	const menu = document.getElementById('context-menu__item-content');
	var menuWidth = menu.clientWidth;
	var menuHeight = menu.clientHeight;
	var isToRight = window.innerWidth < e.pageX + menuWidth && 0 < e.pageX - menuWidth;
	var isToTop = window.innerHeight < e.pageY + menuHeight && 0 < e.pageY - menuHeight;
	var clazz;
	if (isToRight && isToTop) {
		clazz = "mdl-menu--top-right";
	} else if (isToRight) {
		clazz = "mdl-menu--bottom-right";
	} else if (isToTop) {
		clazz = "mdl-menu--top-left";
	} else {
		clazz = "mdl-menu--bottom-left";
	}

	var container = menu.parentNode;
	var outline = menu.previousSibling;
	container.style.top = "";
	container.style.left = "";
	for (var j = 0; j < POSITIONS_CLASS_NAMES.length; j++) {
		outline.classList.remove(POSITIONS_CLASS_NAMES[j]);
		menu.classList.remove(POSITIONS_CLASS_NAMES[j]);
	}

	outline.classList.add(clazz);
	menu.classList.add(clazz);

	// 表示中のコンテキスト メニューを非表示にするための要素
	var hideTrigger = document.createElement("div");
	hideTrigger.addEventListener('click',(e)=>{
		focusItemId = null;
	});
	document.body.appendChild(hideTrigger);
	hideTrigger.click();

	var id = setInterval(function () {
	// コンテキスト メニューが非表示になるまで待機
		if (!container.classList.contains('is-visible')) {
			clearInterval(id);
			document.body.removeChild(hideTrigger);

			// コンテキスト メニューの表示のトリガーとなる DIV 要素を移動させる
			var showTrigger = document.getElementById('context-menu__item');
			showTrigger.style.left = (e.pageX+0.5) + 'px';
			showTrigger.style.top = (e.pageY+0.5) + 'px';

			// コンテキスト メニューを表示する
			showTrigger.click();
			focusItemId = e.targetItem.id;
		}
	},50);
}

// check
const isValid = (win)=>{
	return win.alpha != 0 && win.layer > -1 && win.bounds.width*win.bounds.height > 1 && INVALID_APP_NAME.indexOf(win.ownerName) == -1 && INVALID_APP_LAYER.indexOf(win.layer) == -1 && INVALID_WIN_NAME.indexOf(win.name) == -1 && win.ownerPID != PROCESSID;
}

// convert
const userToItem = (user)=>{
	return {
		label: user.name,
		id: user.id,
		withStar: user.rank == 'teacher',
		iconurl: user.iconurl || createIconWithChar(user.name),
		screenurl: democontents.image.test,
		checked: false,
		downercontent: false
	}
}
const groupToGroup = (group)=>{
	return {
		name: group.name,
		id: createIdfromString(group.name),
		userIdList: group.userIdList,
		iconurl: createIconWithChar(group.name)
	}
}

// init
const initUsers = (userList)=>{
	const _userList = [];
	userList.forEach((user)=>{
		_userList.push(userToItem(user));
	});

	return _userList;
}
const initGroups = (groupList)=>{
	const _groupList = [];
	groupList.forEach((group)=>{
		_groupList.push(groupToGroup(group));
	})

	return _groupList;
}