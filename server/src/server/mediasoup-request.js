const mediasoupRequest = (rtcsServer,request,roomId,userId)=>{
	switch(request.method) {
		case 'queryRoom': {
			const room = rtcsServer.getRoom(roomId) || rtcsServer.createRoom(roomId);
			return room.receiveRequest(request);

		} break;

		case 'join': {
			const room = rtcsServer.getRoom(roomId);
			return room.receiveRequest(request);
		} break;

		default: {
			const room = rtcsServer.getRoom(roomId);
			const peer = room.getPeerByName(userId);
			return peer.receiveRequest(request);
		} break;
	}
}

module.exports = mediasoupRequest;
