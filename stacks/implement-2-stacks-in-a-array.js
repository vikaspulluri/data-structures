/*
Create a data structure twoStacks that represents two stacks. Implementation of
twoStacks should use only one array, i.e., both stacks should use the same array
for storing elements. Following functions must be supported by twoStacks.
push1(int x) –> pushes x to first stack
push2(int x) –> pushes x to second stack

pop1() –> pops an element from first stack and return the popped element
pop2() –> pops an element from second stack and return the popped element
*/

class TwoStacks {
  constructor() {
    this.arr = new Array(20);
    this.s1Ctr = 0;
    this.s2Ctr = this.arr.length - 1;
  }

  push1(ele) {
    if (this.s2Ctr > this.s1Ctr) {
      this.arr[this.s1Ctr] = ele;
      this.s1Ctr += 1;
      return this;
    } else {
      return 'Stackoverflow';
    }
  }

  push2(ele) {
    if (this.s2Ctr > this.s1Ctr) {
      this.arr[this.s2Ctr] = ele;
      this.s2Ctr -= 1;
      return this;
    } else {
      return 'Stackoverflow';
    }
  }

  pop1() {
    this.arr[this.s1Ctr-1] = void 0;
    this.s1Ctr--;
    return this;
  }

  pop2() {
    this.arr[this.s2Ctr+1] = void 0;
    this.s2Ctr++;
    return this;
  }

  print() {
    console.log(this.arr);
  }
}

const s = new TwoStacks();
s.push1(10).push2(20).push1(30).push2(40).push1(50).pop1().pop2().push2(60);
s.print();
