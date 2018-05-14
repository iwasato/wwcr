const ClassRoom = require('./ClassRooms.js');

module.exports = (()=>{
	return {
		createClassroomView: (parent,classroomList=[])=>{
			return ReactDOM.render(
				React.createElement(ClassRoom, {classroomList: classroomList}),
				parent
			);
		}
	}
})();