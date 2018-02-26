/*
	mados client
	private/operate/modules/src/Group.jsx
*/

export default class GroupView extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			groupList: props.groupList,
			checked: 'all'
		}

		this.addGroup = this.addGroup.bind(this);
		this.deleteGroup = this.deleteGroup.bind(this);
		this._before_onchange = this._before_onchange.bind(this);
		this._before_oncontextmenu = this._before_oncontextmenu.bind(this);
	}

	/* public */
	addGroup(newgroup){
		this.state.groupList.push(newgroup);
		this.setState(this.state);
	}
	deleteGroup(groupId){
		const index = this.indexOf(groupId);
		if(index == -1){
			return;
		}
		this.state.groupList.splice(index,1);
		this.setState(this.state);
	}
	getGroup(groupId){
		return this.state.groupList[this.indexOf(groupId)];
	}
	setGroup(groupList){
		this.state.groupList = groupList;
		this.setState(this.state);
	}
	updateGroup(id,option){
		const group = this.getGroup(id);
		if(!group){
			return;
		}
		for(const key in group){
			const newvalue = option[key];
			group[key] = newvalue || group[key];
		}
		this.setState(this.state);
	}
	checkGroup(groupId){
		this.state.checked = groupId;
		this.setState(this.state);
	}
	indexOf(groupId){
		var index;
		for(index=0;index<this.state.groupList.length;index++){
			if(this.state.groupList[index].id == groupId){
				return index;
			}
		}
		return -1;
	}
	contains(groupId){
		return this.state.groupList.some(group=>{return group.id==groupId});
	}
	/* */

	/* private */
	_before_onchange(e){
		this.state.checked = e.target.id;
		this.setState(this.state);
		this.onchange(e);
	}
	_before_oncontextmenu(e){
		e.preventDefault();
		this.oncontextmenu(e);
		return false;
	}
	/* */

	/* override */
	onchange(e){}
	oncontextmenu(e){}
	/* */

	/* getter */
	get currentGroupId(){
		return this.state.checked; 
	}
	get currentGroupName(){
		return this.state.checked == 'all' ? 'すべて'  : this.getGroup(this.state.checked).name;
	}
	get groupList(){
		return this.state.groupList;
	}
	/* */

	render(){
		return (<div className="group-view">
			<div onContextMenu={this._before_oncontextmenu}>
				<input type="radio" name="group-view" id="all" onChange={this._before_onchange} checked={this.state.checked == 'all'} />
				<label for="all">
					<div>すべて</div>
				</label>
			</div>
		{
			this.state.groupList.map((group)=>{
				return(<div onContextMenu={this._before_oncontextmenu}>
					<input type="radio" name="group-view" id={group.id} onChange={this._before_onchange} checked={this.state.checked == group.id} />
					<label for={group.id}>
						<img src={group.iconurl}></img>
						<div>{group.name}</div>
					</label>
				</div>)
			})
		}
		</div>);
	}
}