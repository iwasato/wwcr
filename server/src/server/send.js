const send = (connection,data)=>{
	connection.send(JSON.stringify(data));
}

module.exports = send;