/*
	mados client
	private/operate/modules/src/Room.jsx
*/

class ClassRooms extends React.Component {
	constructor(props){
		super(props);

		const classrooms = {};
		props.classroomList.forEach((classroom)=>{
			if(!classrooms[classroom.ownerId]){
				classrooms[classroom.ownerId] = {};
				classrooms[classroom.ownerId].ownerName = classroom.ownerName;
				classrooms[classroom.ownerId].roomList = [];
			}
			classrooms[classroom.ownerId].roomList.push(classroom);
		});

		this.state = {
			classrooms: classrooms
		}
	}

	render(){
		const inputStyle = {
			'display': 'none'
		}
		console.log(this.state.classrooms['iwasato'])
		return (React.createElement("div", {className: "classrooms-pack", ref: container=>this.container=container}, 
		
			Object.keys(this.state.classrooms).map((ownerId)=>{
				return(React.createElement("div", null, 
					React.createElement("h6", {class: "teacher-name"}, this.state.classrooms[ownerId].ownerName), 
					
						this.state.classrooms[ownerId].roomList.map((classroom)=>{
							return (React.createElement("div", null, 
								React.createElement("div", null, classroom.name), 
								React.createElement("div", null, classroom.id), 
								React.createElement("div", null, classroom.token)
							))
						}), 
					
					React.createElement("hr", null)
				))
			})
		
		));
	}
}

module.exports = ClassRooms