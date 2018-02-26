/* domPack */
const domPack = {
	'pointer-tool__input': null,
	'memo-tool__input': null,
	add: (id)=>{domPack[id] = document.getElementById(id)}
}

window.onload = ()=>{
	/* dom init */
	for(const id in domPack){
		if(domPack[id] == null){
			domPack[id] = document.getElementById(id);
		}
	}

	domPack['pointer-tool__input'].onclick = (e)=>{

	}

	domPack['memo-tool__input'].onclick = (e)=>{
		
	}
}