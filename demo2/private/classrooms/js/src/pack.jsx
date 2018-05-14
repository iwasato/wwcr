const ClassRoom = require('./ClassRooms.js');

module.exports = (()=>{
	return {
		createClassroomView: (parent,rank='teacher')=>{
			return ReactDOM.render(
				<ClassRoom rank={rank}></ClassRoom>,
				parent
			);
		}
	}
})();