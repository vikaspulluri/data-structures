/*
Create a data structure kStacks that represents k stacks. Implementation of kStacks
should use only one array, i.e., k stacks should use the same array for storing elements.
Following functions must be supported by kStacks.

push(int x, int sn) –> pushes x to stack number ‘sn’ where sn is from 0 to k-1
pop(int sn) –> pops an element from stack number ‘sn’ where sn is from 0 to k-1
*/
class KStacks {
  constructor(k, n) {
    this.k = k;
    this.n = n;
    this.arr = new Array(n).fill(0);
    this.top = new Array(k).fill(-1);
    this.free = 0;
  }

}
