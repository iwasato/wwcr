/*
	mados-app: appman.js
	iwasato@toralab.org
*/

/* import local modules */
	const application = require("./application");
/* */

module.exports=(()=>{
	const appman = {};
	appman.callback = {
		resize: ()=>{},
		opened: ()=>{},
		closed: ()=>{},
		reposi: ()=>{},
		activate: ()=>{},
		loop: ()=>{}
	}
	appman.eventID = null;
	appman.stopFlag = false;
	appman.on = (event,callback)=>{
		if(appman.callback[event]){
			appman.callback[event] = callback;
		}
	}
	appman.watch = ()=>{
		appman.currentWindows = {};
		application.getWindows().map((win)=>{
			appman.currentWindows[win.number] = win;
		});
		appman._loopFunc();
	}
	appman.stop = ()=>{
		appman.stopFlag = true;
	}
	appman.getScreenImage = ()=>{
		return application.getScreenImage();
	}
	appman.getWindows = ()=>{
		return application.getWindows();
	}
	appman.getImage = (x,y,width,height,number)=>{
		return application.getImage(x,y,width,height,number);
	}
	appman.getNumbers = ()=>{
		return application.getNumbers();
	}
	appman._loopFunc = ()=>{
		const preWindows = appman.currentWindows;
		const windows = {};
		const windowList = application.getWindows();
		windowList.map((win)=>{
			windows[win.number] = win;
		});
		for(const number in windows){
			if(!preWindows[number]){
				appman.callback['opened'](windows[number]);
			} else if(windows[number].bounds.width != preWindows[number].bounds.width || windows[number].bounds.height != preWindows[number].bounds.height){
				if(windows[number].bounds.x != preWindows[number].bounds.x || windows[number].bounds.y != preWindows[number].bounds.y){
					appman.callback['reposi'](windows[number]);
				}
				delete preWindows[number];
				appman.callback['resize'](windows[number]);
			} else if(windows[number].bounds.x != preWindows[number].bounds.x || windows[number].bounds.y != preWindows[number].bounds.y){
				delete preWindows[number];
				appman.callback['reposi'](windows[number]);
			} else {
				delete preWindows[number];
			}
		}

		for(const number in preWindows){
			appman.callback['closed'](preWindows[number]);
		}

		appman.currentWindows = windows;
		if(appman.stopFlag){
			appman.stopFlag = false;
			clearTimeout(appman.eventID);
			appman.eventID = null;
		} else {
			appman.eventID = setTimeout(()=>{
				appman._loopFunc();
			},100)
		}
		appman.callback['loop'](windowList);
	}

	return appman;
})();