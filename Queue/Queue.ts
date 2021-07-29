import { yellow } from "../log";

export class Queue {
  private Q: any[];
  constructor() {
    this.Q = [];
  }
 
  enqueue(value) {
    this.Q.push(value);
  }

  dequeue() {
    return this.Q.shift();
    // OR
    // this.Q.splice(0,1);
    // OR
    // for(let i=1;i<this.Q.length;i++) {
    //   this.Q[i-1] = this.Q[i];
    // }
    // this.Q.pop();
  }

  isEmpty() {
    return this.Q.length === 0;
  }

  front() {
    return this.Q[0];
  }

  rear() {
    return this.Q[this.Q.length - 1];
  }

  size() {
    return this.Q.length;
  }

  display() {
    this.Q.forEach(val => {
      yellow(val);
    });
  }

}