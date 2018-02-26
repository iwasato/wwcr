const ClassRoom = require('./ClassRooms.js');

module.exports = (()=>{
	return {
		createClassroomView: (parent,classroomList=[],rank='teacher')=>{
			return ReactDOM.render(
				React.createElement(ClassRoom, {classroomList: classroomList, rank: rank}),
				parent
			);
		}
	}
})();