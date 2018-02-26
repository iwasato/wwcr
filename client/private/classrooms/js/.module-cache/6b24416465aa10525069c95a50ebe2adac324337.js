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
		console.log(this.state.classrooms['iwasato'])
		return (React.createElement("div", {className: "classrooms-pack", ref: container=>this.container=container}, 
		
			Object.keys(this.state.classrooms).map((ownerId)=>{
				return(React.createElement("div", {class: "classrooms-row"}, 
					React.createElement("h4", {class: "teacher-name"}, this.state.classrooms[ownerId].ownerName), 
					React.createElement("div", {class: "classroom-pack"}, 
						
							this.state.classrooms[ownerId].roomList.map((classroom)=>{
								const themecolorStyle = {
									'background-color': classroom.color
								}
								return (React.createElement("div", {class: "classroom"}, 
									React.createElement("div", {class: "theme-color", style: themecolorStyle}), 
									React.createElement("h6", {class: "classroom-name"}, classroom.name), 
									React.createElement("hr", null), 
									React.createElement("div", {class: "classroom-token"}, React.createElement("img", {src: "./img/1707-key@3x.png"}), classroom.token), 
									React.createElement("div", {class: "classroom-id"}, React.createElement("img", {src: "./img/1532-info@3x.png"}), classroom.id)
								))
							})
						
					), 
					React.createElement("hr", {class: "float-cancel-hr"})
				))
			})
		
		));
	}
}

module.exports = ClassRooms