const ClassRoom = require('./js/ClassRoom.js');

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