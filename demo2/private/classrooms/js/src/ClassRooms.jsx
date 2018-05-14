/*
	mados client
	private/operate/modules/src/Room.jsx
*/

class ClassRooms extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			classrooms: {}
		}

		this._before_onclick = this._before_onclick.bind(this);
	}

	setClassroomList(classroomList){
		const classrooms = {}
		classroomList.forEach((classroom)=>{
			if(!classrooms[classroom.ownerid]){
				classrooms[classroom.ownerid] = {};
				classrooms[classroom.ownerid].ownername = classroom.ownername;
				classrooms[classroom.ownerid].roomList = [];
			}
			classrooms[classroom.ownerid].roomList.push(classroom);
		});
		this.setState({classrooms});
	}

	onclick(e){}

	_before_onclick(e){
		e.persist();
		this.onclick(e);
	}

	render(){
		const style = this.props.rank == 'teacher' ? {} : {'display': 'none'};
		const style2 = this.props.rank == 'teacher' ? {'display': 'none'} : {};
		return (<div className="classrooms-pack" ref={container=>this.container=container}>
		{
			Object.keys(this.state.classrooms).map((ownerid)=>{
				return(<div class="classrooms-row">
					<h4 style={style2} class="teacher-name">{this.state.classrooms[ownerid].ownername}</h4>
					<div class="classroom-pack">
						{
							this.state.classrooms[ownerid].roomList.map((classroom)=>{
								const themecolorStyle = {
									'background-color': classroom.color
								}
								return (<label class="classroom" for={`classroom-${classroom.id}`}>
									<input className="with-label" onClick={this._before_onclick} classroomname={classroom.name} classroomid={classroom.id} classroomtoken={classroom.token} id={`classroom-${classroom.id}`} />
									<div class="theme-color" style={themecolorStyle} ></div>
									<h6 class="classroom-name">{classroom.name}</h6>
									<hr/>
									<div class="classroom-token" style={style}><img src="./img/1707-key@3x.png"/>{classroom.token}</div>
									<div class="classroom-id"><img src="./img/1532-info@3x.png"/>{classroom.id}</div>
								</label>)
							})
						}
					</div>
					<hr class="float-cancel-hr" />
				</div>)
			})
		}
		</div>);
	}
}

module.exports = ClassRooms