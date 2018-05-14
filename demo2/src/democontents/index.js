import wwcdocuments from './wwcdocuments.json';
import navigation from './navigation.json';
import users from './users.json';
import groups from './groups.json';
import image from './image/index.js';
import video from './video/index.js';

export default (()=>{
	return {
		get navigation(){
			const meetings = wwcdocuments.result.meetings;
			navigation.root.list[0].next.list[3].next = {
				list: [],
				subtitle: '会議を選択する'
			}
			for(const meeting of meetings){
				const value = {
					label: meeting.name,
					next: {
						list: [],
						subtitle: '資料を選択する'
					}
				}
				const documents = meeting.docs;
				for(const doc of documents){
					if(doc.name){
						value.next.list.push({
							label: doc.name,
							iconurl: doc.thumburl
						});	
					}
				}
				navigation.root.list[0].next.list[3].next.list.push(value);
			}
			return navigation;
		},
		userList: users.userList,
		groupList: groups.groupList,
		image: image,
		video: video
	};
})();