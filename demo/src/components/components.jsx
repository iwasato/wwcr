/* import local modules */
import GroupView from './GroupView.jsx';
import ItemView from './ItemView.jsx';

const components = {
	createGroupView: (parent,groupList={})=>{
		return ReactDOM.render(
			<GroupView groupList={groupList}></GroupView>,
			parent
		);
	},
	createItemView: (parent,scale=0.07,downercontent=false)=>{
		return ReactDOM.render(
			<ItemView scale={scale} downercontent={downercontent}></ItemView>,
			parent
		);
	}
}
export default components;