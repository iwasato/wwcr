/* import third-party */
const electron = require('electron');

/* path */
const localmodules = electron.remote.getGlobal('localmodules');

/* import local module */
const Bridge = require(localmodules.bridge);

/* module */
// local
var bridge = null;
var TYPE = decodeURIComponent(location.search.match(/type=(.*?)(&|$)/)[1]);
var clickedFlg = false;

/* element */
var video = null;

window.onload = ()=>{
	video = document.getElementById('main-video');

	bridge = new Bridge(electron);
	bridge.setLabel(decodeURIComponent(location.search.match(/streamId=(.*?)(&|$)/)[1]));
	bridge.p2pConnect('parent');
	bridge.onaddstream = (from,stream)=>{
		video.srcObject = stream;
		video.play();
	};

	if(TYPE=='share-app'){
		video.addEventListener('mouseup',(e)=>{
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
				y = (e.clientY-offsetY)/height;
			} else {
				const rate = bounds.height/video.videoHeight;
				const width = video.videoWidth*rate;
				const height = bounds.height;
				const offsetX = (bounds.width-width)/2;
				const offsetY = 0;
				x = (e.clientX-offsetX)/width;
				y = (e.clientY-offsetY)/height;
			}
			if(clickedFlg){
				bridge.send('parent','vw-mouseevent',{
					type: 'click',
					x: x,
					y: y
				});
				clickedFlg = false;
				return;
			}
			clickedFlg = true;
			setTimeout(()=>{
				bridge.send('parent','vw-mouseevent',{
					type: 'doubleclick',
					x: x,
					y: y
				});
				clickedFlg = false;
			},300);
		});
	}
}