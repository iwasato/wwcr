const ClassRoom = require('./ClassRoom.js');

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