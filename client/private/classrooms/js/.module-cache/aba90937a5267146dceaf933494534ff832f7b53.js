/*
	mados client
	private/operate/modules/src/Room.jsx
*/

class ClassRooms extends React.Component {
	constructor(props){
		super(props);

		const classrooms = {};
		console.log(props.classroomList);
		props.classroomList.forEach((classroom)=>{
			if(!classrooms[classroom.ownerId]){
				classrooms[classroom.ownerId] = [];
			}
			classrooms[classroom.ownerId].push(classroom);
		});

		this.state = {
			classrooms: classrooms
		}
	}

	render(){
		const inputStyle = {
			'display': 'none'
		}

		return (React.createElement("div", {className: "classrooms-pack", ref: container=>this.container=container}, 
		
			Object.keys(this.state.classrooms).map((ownerId)=>{
				return(React.createElement("div", null, 
					React.createElement("h6", null, this.state.classrooms[ownerId].ownerName), 
					
						this.state.classrooms[ownerId].map((classroom)=>{
							return (React.createElement("div", null, 
								classroom.name
							))
						}), 
					
					React.createElement("hr", null)
				))
			})
		
		));
	}
}

module.exports = ClassRooms