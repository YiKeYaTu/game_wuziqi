'use strict';
/**
 * model
 */
export default class extends think.model.base {
	* addUser (id) {
		let random = new Date().getTime();
	    let data = yield this.add({
	    	Uname: 'name' + random,
	    	Ustate: 0
	    });
	    return {
	    	Uid: data,
	    	Uname: 'name' + random
	    };
	}
	* changeUserName (data) {
		let inf = yield this.where({Uid: data.Uid}).find();
		if (inf.Uname != data.Uname) {
			yield this.where({Uid: data.Uid}).update({Uname: data.Uname});
		}
	}
	* getUserList (query) {
		let data = yield this
			.where(`Uid != ${query.Uid} AND Ustate = 0`)
			.select();
		return data;
	}
	* isFree (query) {
		let data = yield this.where(`Uid = ${query.Uid} OR Uid = ${query.oUid}`).select();
		return (data[0].Ustate == data[1].Ustate && data[0].Ustate== 0);
	}
	* setState (query) {
		let e = yield this
			.where(`Uid = ${query.Uid} OR Uid = ${query.oUid}`)
			.update({Ustate: 1});
	}
}