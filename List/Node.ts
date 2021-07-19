export class Node {
  data: any;
  next: Node;
  constructor(data: any) {
    this.data = data;
    this.next = null;
  }
}

export class DoubleNode {
  data: any;
  next: DoubleNode;
  prev: DoubleNode;
  constructor(data: any) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}