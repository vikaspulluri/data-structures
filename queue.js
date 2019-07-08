/*
implement queue using stack
*/

class Queue {
	constructor() {
		this.s1 = [];
		this.s2 = [];
	}

	enQueue(elem) {

		// copying all elems to stack 2 till s1 gets empty
		while (this.s1.length > 0) {
			let i = this.s1[this.s1.length - 1];
			this.s2.push(this.s1[i]);
			this.s1.pop();
			i--;
		}

		// add the element
		this.s1.push(elem);

		// copy back all elems from s2 to s1
		for (let i = this.s2.length - 1; i >= 0; i--) {
			this.s1.push(this.s2[i]);
		}
	}

	deQueue() {
		let size = this.s1.length;
		if (size === 0) { return 'Q is empty'; }
		let x = this.s1[size-1];
		this.s1.pop();
		return x;
	}
}