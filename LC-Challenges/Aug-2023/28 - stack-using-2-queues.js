class MyQueue {
  rear = null;
  front = null;
  size = 0;
  constructor() { }

  enqueue(data) {
    const node = new Node(data);
    this.size++;
    if (!this.front) {
      this.front = node;
      this.rear = node;
      return;
    }
    node.next = this.rear;
    this.rear = node;
  }

  dequeue() {
    if (this.isEmpty()) return;
    let tmp = this.rear;
    let prev = null;
    while (tmp.next) {
      prev = tmp;
      tmp = tmp.next;
    }
    if (prev) prev.next = null;
    this.size--;
    this.front = prev;
    return tmp.data;
  }

  isEmpty() {
    return this.size === 0;
  }

}

class Node {
  constructor(data) {
    this.next = null;
    this.data = data;
  }
}

let q = new MyQueue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
// console.log(q.dequeue(), q.dequeue(), q.size);


var MyStack = function () {
  this.q1 = new MyQueue();
  this.q2 = new MyQueue();
};

/** 
* @param {number} x
* @return {void}
*/
MyStack.prototype.push = function (x) {
  this.q1.enqueue(x);
};

/**
* @return {number}
*/
MyStack.prototype.pop = function () {
  if (this.q1.isEmpty()) return -1;
  while (this.q1.size > 1) {
    this.q2.enqueue(this.q1.dequeue());
  }
  const popped = this.q1.dequeue();
  [this.q1, this.q2] = [this.q2, this.q1];
  return popped;
};

/**
* @return {number}
*/
MyStack.prototype.top = function () {
  if (this.q1.isEmpty()) return -1;
  return this.q1.rear.data;
};

/**
* @return {boolean}
*/
MyStack.prototype.empty = function () {
  return this.q1.isEmpty();
};

const s = new MyStack();
s.push(1);
s.push(2);

console.log(s.top(), s.pop());