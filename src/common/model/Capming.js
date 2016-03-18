'use strict';
/**
 * model
 */
export default class extends think.model.base {
	* addCamping (query) {
		let arr = [];
		for (let i = 0;i < 10;i++) {
			arr.push([]);
			for (let j = 0;j < 10;j++) {
				arr[i].push(0);
			}
		};
		let cid = yield this.add({
			Cuser1: query.Uid,
			Cuser2: query.oUid,
			Cstate: 0,
			Carr: JSON.stringify(arr)
		});
		return cid;
	}
}