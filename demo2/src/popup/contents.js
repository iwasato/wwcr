import test from './test.html';
import navigation from './navigation.html';
import message from './message.html';
import voicemessage from './voicemessage.html';
import videomessage from './videomessage.html';
import textmessage from './textmessage.html';
import videocall from './videocall.html';
import windowlist from './windowlist.html';
import textform from './textform.html';
import sliderform from './sliderform.html';

export default (()=>{
	const swal2contentPack = {
		test: test,
		navigation: navigation,
		message: message,
		voicemessage: voicemessage,
		videomessage: videomessage,
		textmessage: textmessage,
		videocall: videocall,
		windowlist: windowlist,
		textform: textform,
		sliderform: sliderform
	};

	return swal2contentPack;
})();