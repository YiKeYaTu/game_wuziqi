'use strict';

import Base from './base.js';

export default class extends Base {
	* getcapminginfAction () {
		let Cid = this.http.query.Cid,
			Uid = this.http.query.Uid;
		let res = {};
		let model = this.model('Capming');
		if (!Cid) {
			let data = yield model.where(`Cuser1 = ${Uid} OR Cuser2 = ${Uid}`).find();
			res.Cid = data.Cid;
		} else {
			let data = yield model.where({Cid: Cid}).find();
			res.Carr = data.Carr;
			if (Uid == data.Cuser1) {
				res.Color = 0;
				if (data.Cstate == 0) {
					res.Action = 1;
				}
			} else if (Uid == data.Cuser2) {
				res.Color = 1;
				if (data.Cstate == 1) {
					res.Action =1;
				}
			}
		}
		this.http.res.end(JSON.stringify(res));	
	}
	* setstateAction () {
		let inf = this.http.query;
		inf.x = parseInt(inf.x);
		inf.y = parseInt(inf.y);
		let cinf = {};
		let model = this.model('Capming');
		let data = yield model.where({Cid: inf.Cid}).find();
		let arr = JSON.parse(data.Carr);
		if (inf.Uid == data.Cuser1) {
			cinf.Cstate = 1;
			cinf.Cmesh = 1;
		} else if (inf.Uid == data.Cuser2) {
			cinf.Cstate = 0;
			cinf.Cmesh = 2;
		}
		if (arr[inf.y][inf.x] == 0) {
			cinf.res = 1;
			arr[inf.y][inf.x] = cinf.Cmesh;
			cinf.jud = jud(arr,{
				Cmesh: cinf.Cmesh,
				x: inf.y,
				y: inf.x
			})
			yield model.where({Cid: inf.Cid}).update({Cstate: cinf.Cstate});
			yield model.where({Cid: inf.Cid}).update({Carr: JSON.stringify(arr)});
		} else {
			cinf.res = 0;
		}
		this.http.res.end(JSON.stringify(cinf));
	}
}
function jud (arr,cinf) {
	let count = 1;
	let i = 1;
	let j = 1;
	let temp;
	let c1 = l();
	let c2 = t();
	let c3 = lt();
	let c4 = rt();
	if (c1 >= 5 || c2 >= 5 || c3 >= 5 || c4 >= 5) {
		return 1;
	} else {
		return 0;
	}
	function l () {
		if (!arr[cinf.x] || !arr[cinf.x][cinf.y - i] || arr[cinf.x][cinf.y - i] != cinf.Cmesh) {
			i = 1;
			return r();
		} else {
			i++;
			count++;
			return l();
		}
	}
	function r () {
		if (!arr[cinf.x] || !arr[cinf.x][cinf.y + i] || arr[cinf.x][cinf.y + i] != cinf.Cmesh) {
			i = 1;
			temp = count;
			count = 1;
			return temp;
		} else {
			i++;
			count++;
			return r();
		}
	}
	function t () {
		if (!arr[cinf.x - i] || !arr[cinf.x - i][cinf.y] || arr[cinf.x - i][cinf.y] != cinf.Cmesh) {
			i = 1;
			return b();
		} else {
			i++;
			count++;
			return t();
		}
	}
	function b () {
		if (!arr[cinf.x + i] || !arr[cinf.x + i][cinf.y] || arr[cinf.x + i][cinf.y] != cinf.Cmesh) {
			i = 1;
			temp = count;
			count = 1;
			return temp;
		} else {
			i++;
			count++;
			return b();
		}
	}
	function lt () {
		if (!arr[cinf.x - i] || !arr[cinf.x - i][cinf.y - j] || arr[cinf.x - i][cinf.y - j] != cinf.Cmesh) {
			i = 1;
			j = 1;
			return rb();
		} else {
			i++;
			j++;
			count++;
			return lt();
		}
	}
	function rb () {
		if (!arr[cinf.x + i] || !arr[cinf.x + i][cinf.y + j] || arr[cinf.x + i][cinf.y + j] != cinf.Cmesh) {
			i = 1;
			j = 1;
			temp = count;
			count = 1;
			return temp;
		} else {
			i++;
			j++;
			count++;
			return rb();
		}
	}
	function rt () {
		if (!arr[cinf.x + i] || !arr[cinf.x + i][cinf.y - j] || arr[cinf.x + i][cinf.y - j] != cinf.Cmesh) {
			i = 1;
			j = 1;
			return lb();
		} else {
			i++;
			j++;
			count++;
			return rt();
		}
	}
	function lb () {
		if (!arr[cinf.x - i] || !arr[cinf.x - i][cinf.y + j] || arr[cinf.x - i][cinf.y + j] != cinf.Cmesh) {
			i = 1;
			j = 1;
			temp = count;
			count = 1;
			return temp;;
		} else {
			i++;
			j++;
			count++;
			return lb();
		}
	}
}