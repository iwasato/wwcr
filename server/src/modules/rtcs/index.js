/* third party modules */
const mediasoup = require('mediasoup');

class RTCServer extends mediasoup.Server {
	constructor(options) {
		super(options);

		this.rooms = {};
	}

	createRoom(id) {
		const codecs = [
			{
				kind       : 'audio',
				name       : 'opus',
				clockRate  : 48000,
				channels   : 2,
				parameters :
				{
					useinbandfec : 1
				}
			},
			{
				kind      : 'video',
				name      : 'VP8',
				clockRate : 90000
			}
		];

		const room = this.Room(codecs);
		this.rooms[id] = room;

		return room;
	}

	getRoom(id) {
		return this.rooms[id];
	}
}

const createRTCServer = ({keyfile,certfile})=>{
	const server = new RTCServer({
		dtlsPrivateKeyFile: keyfile,
		dtlsCertificateFile: certfile
	});
}

module.exports = createRTCServer;