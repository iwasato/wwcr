const input = require('./');
setTimeout((()=>{
	loop(0);
}),2000)
const loop = (count)=>{
	if(count > 300){
		return;
	}
	setTimeout(()=>{
		each(count++);
		loop(count);
	},600)
}
const each = (num)=>{
	input.input(num);
	console.log(num);
}