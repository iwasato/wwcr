export default class EasySocket extends WebSocket {
	constructor(url){
		super(url || `${location.protocol=='https'?'wss':'ws'}://${location.host}`);
		
		this.messageHandler = {}
		this.addEventListener('message',(e)=>{
			const data = JSON.parse(e.data);
			if(!data.returnSync && !data.sync){
				return;
			}

			if(data.sync){
				const value = this.onsyncmessage(e);
				if(!value.then){
					this.returnSync(value,data.handlerId);
				} else {
					value.then((returnValue)=>{
						this.returnValue(returnValue,data.handlerId);
					});
				}
			} else {
				this.messageHandler[data.handlerId](data.value);
				delete this.messageHandler[data.handlerId];
			}
			e.stopImmediatePropagation();
		});
	}

	onsyncmessage(){}

	send(data){
		super.send(JSON.stringify({
			sync: false,
			body: data
		}));
	}

	sendSync(data){
		return new Promise((resolve)=>{
			const handlerId = this._handlerId();
			super.send(JSON.stringify({
				handlerId: handlerId,
				sync: true,
				body: data
			}));

			this.messageHandler[handlerId] = (data)=>{
				resolve(data)
			};
		});
	}

	returnSync(value,handlerId){
		super.send(JSON.stringify({
			returnSync: true,
			value: value,
			handlerId: handlerId
		}));
	}

	_handlerId(){
		var id = new Date().getTime().toString(16)  + Math.floor(1000*Math.random()).toString(16);
		if(this.messageHandler[id]){
			id = id+'0'
		}
		return id;
	}
}