import { blue } from "../log";
import { Node } from "./Node";

export class CircularLinkedList {
  head: Node;
  flag: number;
  constructor(val) {
    const node = new Node(val);
    this.head = node;
  }

  insert(pos: number, data: any) {
    const node = new Node(data);
    let tmp = this.head;
    if (pos === 0) {
      while(tmp.next !== this.head) {
        tmp = tmp.next;
      }
      tmp.next = node;
      node.next = this.head;
      this.head = node;
    } else {
      for(let i=0;i<pos-1;i++) {
        tmp = tmp.next;
      }
      node.next = tmp.next;
      tmp.next = node;
    }
  }

  delete(pos: number) {
    let tmp = this.head;
    if (pos === 1) {
      while(tmp.next !== this.head) {
        tmp = tmp.next;
      }
      let x = this.head.data;
      if (tmp === this.head) {
        this.head = null;
      } else {
        tmp.next = this.head.next;
        this.head = tmp;
      }
      return x;
    } else {
      // let prev = null;
      // for(let i=0;i<pos-1;i++) {
      //   prev = tmp;
      //   tmp = tmp.next;
      // }
      // prev.next = tmp.next;
      for(let i=0;i<pos-2;i++) {
        tmp = tmp.next;
      }
      let q = tmp.next;
      tmp.next = q.next;
      return tmp.data;
    }
    return tmp.data;
  }

  display() {
    let tmp = this.head;
    do {
      blue(tmp.data);
      tmp = tmp.next;
    } while (tmp !== this.head);
  }

  rdisplay(node = this.head) {
    if (node !== this.head || this.flag == 0) {
      blue(node.data);
      this.flag = 1;
      this.rdisplay(node.next);
    }
    this.flag = 0;
  }
}