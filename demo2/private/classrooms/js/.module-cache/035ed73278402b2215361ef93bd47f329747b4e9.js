const ClassRoom = require('./js/ClassRoom.js');
console.log(__dirname);

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