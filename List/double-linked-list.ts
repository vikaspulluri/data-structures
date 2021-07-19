import { blue } from "../log";
import { DoubleNode } from "./Node";

export class DoubleLinkedList {
  head: DoubleNode;
  constructor(data) {
    const node = new DoubleNode(data);
    this.head = node;
    this.head.next = this.head.prev = null;
  }

  create(values: number[]) {
    let tmp = this.head;
    for(let i=0;i<values.length;i++) {
      let node = new DoubleNode(values[i]);
      tmp.next = node;
      node.prev = tmp;
      node.next = null;
      tmp = node;
    }
  }

  insert(pos: number, data: any) {
    let tmp = this.head;
    let node = new DoubleNode(data);
    if (pos === 0) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      for(let i=0;i<pos - 1;i++) {
        tmp = tmp.next;
      }
      let nextNode = tmp.next;
      if (nextNode) {
        node.next = nextNode;
        nextNode.prev = node;
      } else { // last node
        node.next = null;
      }
      tmp.next = node;
      node.prev = tmp;
    }
  }

  delete(pos: number) {
    let tmp = this.head;
    if (pos === 1) {
      this.head = tmp.next;
      this.head.prev = null;
      
    } else {
      for(let i=0;i<pos-1;i++) {
        tmp = tmp.next;
      }
      let prev = tmp.prev;
      let next = tmp.next;
      prev.next = next;
      next.prev = prev;
    }
    return tmp.data;
  }

  reverse() {
    let p = this.head;
    while(p) {
      let tmp = p.next;
      p.next = p.prev;
      p.prev = tmp;
      p = p.prev;
      if (p && p.next === null) {
        this.head = p;
      }
    }

  }

  display() {
    let tmp = this.head;
    while(tmp !== null) {
      blue(tmp.data);
      tmp = tmp.next;
    }
  }
}