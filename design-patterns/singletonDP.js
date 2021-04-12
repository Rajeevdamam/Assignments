class Single {
	constructor() {
		if (Single.instance === null) {
			this.arr = [];
			Single.instance = this;
		}
		return Single.instance;
	}

	add(msg) {
		this.arr.push(msg);
		console.log(msg);
	}
	size() {
		console.log("size:", this.arr.length);
	}
}

const singleTon = new Single();
Object.freeze(singleTon);
export default singleTon;
