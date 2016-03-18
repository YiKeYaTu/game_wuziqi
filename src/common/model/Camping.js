'use strict';
/**
 * model
 */
export default class extends think.model.base {
	* addCamping (query) {
		let cid = yield this.add({
			Cuser1: query.Uid,
			Cuser2: query.oUid,
			Cstate: 0
		});
		return cid;
	}
	* returnCampingInf () {
		
	}
}