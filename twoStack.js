/*
Create a data structure twoStacks that represents two stacks. Implementation of twoStacks should
use only one array, i.e., both stacks should use the same array for storing elements. 
Following functions must be supported by twoStacks.
push1(int x) –> pushes x to first stack
push2(int x) –> pushes x to second stack

pop1() –> pops an element from first stack and return the popped element
pop2() –> pops an element from second stack and return the popped element

Implementation of twoStack should be space efficient.
*/

class TwoStacks {

	constructor(n) {
		this.size = n;
		this.s = new Array(n);
		this.top1 = -1;
		this.top2 = this.size;
	}

	push1(x) {
		if (this.top2 - 1 > this.top1) { 
			this.top1++;
			this.s[this.top1] = x;
		} else {
			return 'Stackoverflow';
		}
	}

	push2(x) {
		if (this.top2 - 1 > this.top1) { 
			this.top2++;
			this.s[this.top2] = x;
		} else {
			return 'Stackoverflow';
		}
	}

	pop1() {
		if (this.top1 === -1) { return 'stackunderflow'; }
		let x = this.s[this.top1];
		this.top1--;
		return x;
	}

	pop2() {
		if (this.top2 === this.size) { return 'stackunderflow'; }
		let x = this.s[this.top2];
		this.top2--;
		return x;
	}
}