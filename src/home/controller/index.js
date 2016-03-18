'use strict';

import Base from './base.js';

export default class extends Base {

	*indexAction () {
		let model = this.model("User");
		let Uid = yield this.session('Uid');
		let Uname;
		if (!Uid) {	
			let data = yield model.addUser();	
			Uname = data.Uname;
			Uid = data.Uid;
			yield this.session('Uid',data.Uid);
		} else {
			Uname = (yield model.where({Uid: Uid}).find()).Uname;
		}
		indexDisplaySessionInf(this,{
			Uname: Uname,
			Uid: Uid
		});
		return this.display();
	}

}
function indexDisplaySessionInf (self,data) {
	for (var key in data) {
		self[key] = data[key];
	}
}