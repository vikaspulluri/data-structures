/*
Design a stack with operations on middle element
How to implement a stack which will support following operations in O(1) time complexity?
1) push() which adds an element to the top of stack.
2) pop() which removes an element from top of stack.
3) findMiddle() which will return middle element of the stack.
4) deleteMiddle() which will delete the middle element.
Push and pop are standard stack operations.
*/

class DLLNode {
	constructor(data) {
		this.data = data;
		this.next = null;
		this.prev = null;
	}
}
class Stack {
	constructor() {
		this.count = 0;
		this.head = null;
		this.mid = null;
	}

	push(data) {
		let node = new DLLNode(data);

		if (this.head === null) { // stack is empty
			node.prev = null;
			node.next = null;
			this.head = node;
		} else {
			node.prev = this.head;
			this.head.next = node;
			this.head = node;
			node.next = null;
		}
		this.count++;

		// track mid node
		if (this.count === 1) {
			this.mid = node;
		} else {

			if (this.count % 2 == 1) {
				let old = this.mid;
				this.mid = old.next;
			}
		}
	}

	pop() {
		if (this.head === null) {
			return 'stackunderflow';
		}
		let data = this.head.data;
		this.head = this.head.prev;
		if (!this.head === null) {
			this.head.next = null;
		}

		this.count--;

		if (this.count % 2 == 0 && this.mid) {
			this.mid = this.mid.prev;
		}
		return data;
	}

	printStack() {
		console.dir(this.mid);
		console.dir(this.head);
	}
}