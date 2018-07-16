const login = (db,id,password)=>{
	return new Promise((resolve,reject)=>{
		db.get('account',{id,password})
		.then((result)=>{
			resolve(result != null);
		});
	});
}

module.exports = login;