/*
Design a Data Structure SpecialStack that supports all the stack operations like
push(), pop(), isEmpty(), isFull() and an additional operation getMin() which should
return minimum element from the SpecialStack. All these operations of SpecialStack must be O(1).
To implement SpecialStack, you should only use standard Stack data structure and no other data
structure like arrays, list, .. etc.
*/

class SpecialStack {
  constructor() {
    this.s = [];
    this.min = Infinity;
  }

  push(x) {
    if (this.isEmpty()) {
      this.s.push(x);
      this.min = x;
    } else if ( x > this.min) {
      this.s.push(x);
    } else {
      // insert 2X-min into stack
      let y = (2 * x) - this.min;
      this.s.push(y);
      this.min = x;
    }
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return 'stackunderflow';
    }
    let y = this.s.pop();
    if (y < this.min) {
      // 2M-Y
      this.min = (2 * this.min) - y;
    }
    return y;
   }

  isEmpty() {
    return this.s.length === 0;
  }

  isFull() {}

  getMin() {
    return this.min;
  }
}

const s = new SpecialStack();
s.push(5).push(4).push(8).push(2).pop();
console.log('Min element: ', s.getMin());
