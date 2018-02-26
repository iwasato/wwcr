/* import third-party */
const electron = require('electron');

/* path */
const localmodules = electron.remote.getGlobal('localmodules');

/* import local module */
const Bridge = require(localmodules.bridge);

/* module */
// local
var bridge = null;
const TYPE = decodeURIComponent(location.search.match(/type=(.*?)(&|$)/)[1]);
const STREAMID = decodeURIComponent(location.search.match(/streamId=(.*?)(&|$)/)[1]);
var info = STREAMID.split('.');
const OWNERID = info[0];
const SOUSRCE = info[1];
const WINDOWNUMBER = info[2];
const ROOMID = info[3];
var clickedFlg = false;
var pointFlg = false;
var forEachEndFlg = false;
var startX,startY = null;
var mousedownFlg = false;
var mouseEventList = [];
var pointEventList = [];
var pointerInput = null;
var point = null;
const POINTURL = 'data:image/png;base64,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';

/* element */
var video = null;

/* virtual window infor */


window.onload = ()=>{
	video = document.getElementById('main-video');
	pointerInput = document.getElementById('tool-pointer__input');
	point = document.getElementById('point');

	pointerInput.onchange = (e)=>{
		mouseEventList = [];
		pointFlg = e.target.checked;
	}

	bridge = new Bridge(electron);
	bridge.setLabel(STREAMID);
	bridge.p2pConnect('parent');
	bridge.onaddstream = (from,stream)=>{
		video.srcObject = stream;
		video.play();
	};
	bridge.on('vw-point',(e,_pointEventList)=>{
		pointEventList = pointEventList.concat(_pointEventList);
		if(forEachEndFlg){
			return;
		}
		forEachEndFlg = true;
		pointEventList.forEach(({x,y,type})=>{
			const bounds = video.getBoundingClientRect();
			var _x = bounds.width*x;
			var _y = bounds.height*y;
			switch(type){
				case 'mousedown':
				point.classList.add('visible');
				case 'mousemove':
				point.style.left = (_x-37)+'px';
				point.style.top = (_y-37)+'px';
				break;
				case 'mouseup':
				point.classList.remove('visible');
				break;
			}
		});
		pointEventList = [];
		forEachEndFlg = false;
	});

	if(TYPE=='share'){
		const eToXY = (e)=>{
			const bounds = video.getBoundingClientRect();
			const arc1 = bounds.height/bounds.width;
			const arc2 = video.videoHeight/video.videoWidth;
			var x,y = null;
			if(arc1 > arc2){
				const rate = bounds.width/video.videoWidth;
				const width = bounds.width;
				const height = video.videoHeight*rate;
				const offsetX = 0;
				const offsetY = (bounds.height-height)/2;
				x = (e.clientX-offsetX)/width;
				y = ((pointFlg ? e.clientY : e.clientY-80)-offsetY)/height;
			} else {
				const rate = bounds.height/video.videoHeight;
				const width = video.videoWidth*rate;
				const height = bounds.height;
				const offsetX = (bounds.width-width)/2;
				const offsetY = 0;
				x = (e.clientX-offsetX)/width;
				y = ((pointFlg ? e.clientY : e.clientY-80)-offsetY)/height;
			}
			return {x,y};
		}
		const onmousemove = (e)=>{
			const {x,y} = eToXY(e);
			mouseEventList.push({
				type: 'mousemove',
				x: x,
				y: y
			});
		}
		video.addEventListener('timeupdate',(e)=>{
			if(mouseEventList.length == 0){
				return;
			}
			if(pointFlg){
				bridge.send('parent','vw-point',{
					pointEventList: mouseEventList
				});
				mouseEventList = [];
				return;
			}
			if(mouseEventList.length > 0){
				bridge.send('parent','vw-mouseevent',{
					mouseEventList: mouseEventList
				});
				mouseEventList = [];
			}
		});
		video.addEventListener('mousedown',(e)=>{
			const {x,y} = eToXY(e);
			startX = x;
			startY = y;
			mouseEventList.push({
				type: 'mousedown',
				x: x,
				y: y
			});
			video.addEventListener('mousemove',onmousemove);
			// bridge.send('parent','vw-mouseevent',{
			// 	type: 'mousedown',
			// 	x: x,
			// 	y: y
			// });
		});
		video.addEventListener('mouseup',(e)=>{
			video.removeEventListener('mousemove',onmousemove);
			const {x,y} = eToXY(e);
			mouseEventList.push({
				type: 'mouseup',
				x: x,
				y: y
			});
			if(clickedFlg){
				mouseEventList.push({
					type: 'doubleclick',
					x: x,
					y: y
				});
				// bridge.send('parent','vw-mouseevent',{
				// 	type: 'doubleclick',
				// 	x: x,
				// 	y: y
				// });
				clickedFlg = false;
				return;
			}
			clickedFlg = true;
			setTimeout(()=>{
				if(clickedFlg){
					mouseEventList.push({
						type: 'click',
						x: x,
						y: y
					});
					// bridge.send('parent','vw-mouseevent',{
					// 	type: 'click',
					// 	x: x,
					// 	y: y
					// });
					clickedFlg = false;
				}
			},300);
		});
	}
}