/* core modules */
const fs = require('fs');

/* define */
const __rootdir = process.cwd();

const onRequest = (req,res)=>{
	fs.readFile((__rootdir+'/public'+(req.url == '/' ? req.url+'index.html' : req.url)), (err, result)=>{
		if(err) {
			res.writeHead(404);
			res.end();
			return;
		}

		res.writeHead(200);
		res.write(result.toString());
		res.end();
	});
}

module.exports = onRequest;