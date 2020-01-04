/*
	Design a Data Structure SpecialStack that supports all the stack operations like
	push(), pop(), isEmpty(), isFull() and an additional operation getMin() which should
	 return minimum element from the SpecialStack. All these operations of SpecialStack
	 must be O(1). To implement SpecialStack, you should only use standard Stack data structure
	  and no other data structure like arrays, list, .. etc.

	Solution: since js don't have Stack built-in, im using arrays
*/

class SpecialStack {

	constructor() {
		this.s1 = [];
		this.s2 = [];
	}

	push(ele) {
		this.s1.push(ele);

		let size = this.s2.length;
		if (size === 0) {
			this.s2.push(ele);
			return;
		}
		this.s2[size - 1] > ele ? this.s2.push(ele) : this.s2.push(this.s2[size - 1]);
	}

	pop() {
		let size = this.s1.length;
		let res = this.s1[size - 1];
		this.s1.pop();
		this.s2.pop();
		return res;
	}

	getMin() {
		let size = this.s2.length;
		if (size === 0) { return 'Stack is empty'; }
		return this.s2[size - 1];
	}
}
