const ClassRoom = require('./ClassRooms.js');

module.exports = (()=>{
	return {
		createClassroomView: (parent,rank='teacher')=>{
			return ReactDOM.render(
				React.createElement(ClassRoom, {rank: rank}),
				parent
			);
		}
	}
})();