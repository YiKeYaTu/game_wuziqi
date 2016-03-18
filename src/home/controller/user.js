'use strict';

import Base from './base.js';

export default class extends Base {

	* sendunameAction () {
		let data = this.http.query;
		let model = this.model('User');
		yield model.changeUserName(data);
		this.http.res.end('{status: 200}');
	}
	* getuserAction () {
		let data = yield this.model('User').getUserList(this.http.query);
		this.http.res.end(JSON.stringify(data));
	}
	* capmingAction () {
		let query = this.http.query;
		let b = yield this.model('User').isFree(query);
		let cid;
		if (b) {
			yield this.model('User').setState(query);
			cid = yield this.model('Capming').addCamping(query);
		}
		this.http.res.end(JSON.stringify({
			succ: b.toString(),
			cid: cid
		}));
	}
}