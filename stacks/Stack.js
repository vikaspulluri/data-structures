class Stack {
	constructor() {
		this.items = [];
	}

	push(item) {
		this.items.push(item);
	}

	pop() {
		if (this.items.length === 0) { return 'Underflow'; }
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	printStack() {
		let dup = this.items.slice();
		return dup.join(' ');
	}
}