export class Stack {
  private stack = [];
  push(data) {
    this.stack.push(data);
  }

  pop() {
    return this.stack.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  size() {
    return this.stack.length;
  }
}