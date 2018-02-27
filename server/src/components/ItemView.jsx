export default class ItemView extends React.Component {
	constructor(props){
		super(props);

		this._before_onclick = this._before_onclick.bind(this);
		this._before_onchange = this._before_onchange.bind(this);
		this.MAX_ITEMWIDTH = 1024;
		this.MAX_ITEMHEIGHT = 768;
		this.state = {
			itemList: [],
			visibleItemIdList: [],
			downercontent: props.downercontent,
			inputType: 'button',
			scale: props.scale
		}
	}

	/* public */
	addItem(newitem){
		this.state.itemList.push(newitem);
		this.setState(this.state);
	}
	deleteItem(itemId){
		const index = this.indexOf(itemId);
		if(index == -1){
			return;
		}
		this.state.itemList.splice(index,1);
		this.setState(this.state);
	}
	setAllItem(){
		this.state.visibleItemIdList = this.itemIdList;
		this.setState(this.state);
	}
	getItem(itemId){
		return this.state.itemList[this.indexOf(itemId)];
	}
	checkItem(itemId){
		this.getItem(itemId).checked = true;
		this.setState(this.state);
	}
	uncheckItem(itemId){
		this.getItem(itemId).checked = false;
		this.setState(this.state);
	}
	setInputType(type){
		this.state.inputType = type;
		for(const item of this.state.itemList){
			item.checked = false;
		}
		this.setState(this.state);
	}
	toggleEachContent(itemId){
		const item = this.getItem(itemId);
		item.downercontent = !item.downercontent;
		this.setState(this.state);
	}
	toggleAllContent(){
		this.state.downercontent = !this.state.downercontent;
		this.setState(this.state);
	}
	setItemList(itemList){
		this.state.visibleItemIdList = itemList;
		this.setState(this.state);
	}
	setScale(scale){
		this.state.scale = scale;
		this.setState(this.state);
	}
	getCheckedItems(){
		return this.state.itemList.filter((item)=>{
			return item.checked;
		});
	}
	indexOf(itemId){
		var index;
		for(index=0;this.state.itemList.length;index++){
			if(this.state.itemList[index].id == itemId){
				return index;
			}
		}
		return -1;
	}
	contains(itemId){
		return this.state.itemList.some(item=>{return item.id==itemId});
	}
	/* */

	/* private */
	_before_onclick(e){
		if(this.state.inputType == 'checkbox'){
			return;
		}
		e.persist();
		e.targetItem  = this.getItem(e.currentTarget.getAttribute('item-id'));
		this.onclick(e);
	}
	_before_onchange(e){
		if(this.state.inputType == 'button'){
			return;
		}
		e.persist();
		this.getItem(e.currentTarget.getAttribute('item-id')).checked = e.target.checked;
		this.setState(this.state);
		this.onchange(e);
	}
	_onvideoref(video,srcObject){
	}
	/* */

	/* override */
	onclick(e){}
	onchange(e){}
	/* */

	/* getter */
	get itemList(){
		return this.state.itemList;
	}
	get itemIdList(){
		return this.state.itemList.map(item=>{return item.id});
	}
	get currentItemIdList(){
		return this.state.visibleItemIdList;
	}
	/* */

	render(){
		/* element tree */ /*
		div[itemview]: {
			div[outer] {
				input[checkbox]: ''
				label[inner]: {
					div[uppercontent]: {
						i[backstar]: '',
						img[icon]: {
							span[label]: ''
						}
					},
					div[downercontent]: {
						img[image]: '',
						video[video]: ''
					}
				}
			}
		}
		*/
		const itemWidth = this.MAX_ITEMWIDTH*this.state.scale;
		const itemHeight = this.MAX_ITEMHEIGHT*this.state.scale;

		const style = {
			label: {
				long: {
					'display': 'inline-block',
					'width': `${itemWidth}px`,
					'margin-left': '5px',
					'overflow-x': 'hidden',
					'white-space': 'nowrap',
					'text-overflow': 'ellipsis'
				},
				short: {
					'display': 'inline-block',
					'width': '100px',
					'margin-left': '5px',
					'overflow-x': 'hidden',
					'white-space': 'nowrap',
					'text-overflow': 'ellipsis'
				}
			},
			downercontent: {
				'display': 'block',
				'width': `${itemWidth}px`,
				'height': `${itemHeight}px`,
				'margin': '0 auto'
			},
			invisible: {
				'display': 'none'
			}
		}

		return (<div className="itemview">
		{
			this.state.itemList.map((item)=>{
				return(<div className="outer" style={this.state.visibleItemIdList.indexOf(item.id)==-1 ? style.invisible : {}}>
					<input type="checkbox" onChange={this._before_onchange} checked={item.checked} item-id={item.id} id={'item-'+item.id} disabled={this.state.inputType == 'button'} className="checkbox" />
					<label onClick={this._before_onclick} for={'item-'+item.id} item-id={item.id} className="inner">
						<div className="uppercontent">
							<i className={item.withStar ? "material-icons backstar" : "invisible"}>star_rate</i>
							<img src={item.iconurl} className={this.state.downercontent || item.downercontent ? "invisible" : "icon"}></img><span style={this.state.downercontent || item.downercontent ? style.label.long : style.label.short}>{item.label}</span>
						</div>
						<div className="downercontent" style={this.state.downercontent || item.downercontent ? style.downercontent : style.invisible}>
							<video ref={video=>{if(video && !video.srcObject){video.srcObject=item.srcObject;}}} className="video"></video>
						</div>
					</label>
				</div>)
			})
		}
		</div>);
	}
}