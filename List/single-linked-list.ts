import { Stack } from "../Stack/Stack";
import { blue, green, yellow } from "../log";
import { Node } from "./Node";

export class SingleLinkedList {
  head: Node;
  constructor(data: any) {
    this.head = new Node(data);
  }

  create(arr: any[]) {
    let cur = this.head;
    for(let i = 0; i<arr.length;i++) {
      let node = new Node(arr[i]);
      cur.next = node;
      cur = cur.next;
    }
  }

  append(data) {
    let cur = this.head;
    while(cur.next) {
      cur = cur.next;
    }
    const node = new Node(data);
    cur.next = node;
  }

  insert(data, position: number) {
    if (position <= 0) return 'Invalid position';
    if (this.isSorted()) return this.insert_sorted(data);
    if (position === 1) { // first node
      let node = new Node(data);
      node.next = this.head;
      this.head = node;
    } else {
      let cur = this.head;
      for(let i=0; i<position-1 && cur; i++) {
        cur = cur.next;
      }
      if (cur) {
        let node = new Node(data);
        node.next = cur.next;
        cur.next = node;
      }
    }
  }

  insert_sorted(data) {
    let prev = null, cur = this.head;
    while(cur && cur.data < data) {
      prev = cur;
      cur = cur.next;
    }
    let node = new Node(data);
    node.next = cur;
    prev ? prev.next = node : this.head = node; // whether it is first node or not
  }

  display() {
    let tmp = this.head;
    while(tmp !== null) {
      process.stdout.write(`${tmp.data}, `);
      tmp = tmp.next;
    }
    console.log('');
  }

  rdisplay(node = this.head) {
    if (node !== null) {
      green(node.data);
      this.rdisplay(node.next);
    }
  }

  reverse_display(node = this.head) {
    if (node !== null) {
      this.reverse_display(node.next);
      blue(node.data);
    }
  }

  count() {
    let tmp = this.head;
    let count = 0;
    while(tmp) {
      tmp = tmp.next;
      count++;
    }
    console.log(count);
    return count;
  }

  rcount(node = this.head) {
    if (!node) return 0;
    return this.rcount(node.next) + 1;
  }

  sum() {
    let tmp = this.head;
    let sum = 0;
    while(tmp) {
      sum += tmp.data;
      tmp = tmp.next;
    }
    return sum;
  }

  rsum(node = this.head) {
    if (!node) return 0;
    return node.data + this.rsum(node.next)
  }

  max() {
    let tmp = this.head;
    let max = tmp.data;
    while(tmp) {
      if (tmp.data > max) max = tmp.data;
      tmp = tmp.next;
    }
    return max;
  }

  rmax(node = this.head) {
    let x = 0;
    if (!node) return 0;
    x = this.rmax(node.next);
    return x > node.data ? x : node.data;
  }

  search(key) {
    let tmp = this.head;
    while(tmp) {
      if (tmp.data === key) return tmp;
      tmp = tmp.next;
    }
    return null;
  }

  rsearch(node = this.head, key) {
    if (node === null) return null;
    if (node.data === key) return node;
    return this.rsearch(node.next, key);
  }

  // moves the searched key to front of the list, so that for further queries, it will be fast
  opt_search(key) {
    let tmp = this.head, prev = null;
    while(tmp) {
      if (tmp.data === key) {
        prev.next = tmp.next;
        tmp.next = this.head;
        this.head = tmp;
        return this.head;
      }
      prev = tmp;
      tmp = tmp.next;
    }
    return null;
  }

  delete(position: number) {
    if (position <= 0) return 'Invalid position';
    let cur = this.head; let prev = null;
    let data;
    for(let i=0; i<position-1;i++) {
      prev = cur;
      cur = cur.next;
    }
    if (prev) {
      prev.next = cur.next;
      data = cur.data;
    } else { // position = 1
      data = this.head.data;
      this.head = null;
    }
    return data;
  }

  isSorted() {
    let cur = this.head;
    let x = cur.data;
    while(cur) {
      if (cur.data < x) { // ascending order
        return false;
      }
      x = cur.data;
      cur = cur.next;
    }
    return true;
  }

  removeDuplicates() {
    let cur = this.head, next = cur.next;
    while(next !== null) {
      if (cur.data !== next.data) {
        cur = next;
        next = next.next;
      } else {
        cur.next = next.next;
        next = cur.next;
      }
    }
  }

  reverse() {
    let p = this.head, q = null, r = null;
    while(p) {
      r = q;
      q = p;
      p = p.next;

      q.next = r;
    }
    this.head = q;
  }

  r_reverse(q = null, p = this.head) {
    if (p) {
      this.r_reverse(p, p.next);
      p.next = q;
    } else {
      this.head = q;
    }
  }

  concat(list1 = this, list2: SingleLinkedList) {
    let tmp = list1.head;
    while(tmp.next) {
      tmp = tmp.next;
    }
    tmp.next = list2.head;
  }

  merge(list1: SingleLinkedList = this, list2: SingleLinkedList) {
    let p = list1.head, q = list2.head;
    let last, third;
    if (p.data <= q.data) {
      third = last = p;
      p = p.next;
      third.next = null;
    } else {
      third = last = q;
      q = q.next;
      third.next = null;
    }
    while(p && q) {
      if (p.data <= q.data) {
        last.next = p;
        last = p;
        p = p.next;
        last.next = null;
      } else {
        last.next = q;
        last = q;
        q = q.next;
        last.next = null;
      }
    }
    if (p) last.next = p;
    if (q) last.next = q;
  }

  /**
   * Floyds cycle - finding algorithm
   * wont work for duplicated nodes
   * @returns 
   */
  hasLoop() {
    let p = this.head, q = p;
    while(p && q && p !== q) {
      p = p.next;
      q = q.next;
      if (q) q = q.next; // moving 2 steps ahead
    }
    return p === q;
  }

  hasLoop2(head = this.head) {
    while (head) {
            
      if (head.data === -1) return true;
      
      head.data = -1;
      head = head.next;
    }
    return false;
  }

  middle() {
    let tmp = this.head;
    let p = this.head;
    while(tmp) {
      tmp = tmp.next;
      if (tmp) tmp = tmp.next;
      if (tmp) p = p.next;
    }
    return p.data;
  }

  middle2(node = this.head) {
    let count = 0;
    let mid = node;
    while (node) {
        if (count % 2 === 1) {
            mid = mid.next;
        }
        count++;
        node = node.next;
    }
    return mid.data;
  }

  intersection(list1: SingleLinkedList, list2: SingleLinkedList) {
    const stack1 = new Stack();
    const stack2 = new Stack();
    let p = list1.head;
    let q = list2.head;
    while(p) {
      stack1.push(p.data);
      p = p.next;
    }
    while(q) {
      stack2.push(q.data);
      q = q.next;
    }
    while(stack1.top() === stack2.top()) {
      p = stack1.pop();
      stack2.pop();
    }
    return p;
  }

  removeLoop(head) {
    //your code here
    const node = this.getLoopNode(head);
    if (node) {
        node.next = null;
    }
  }
    
  getLoopNode(head) {
    let prev = head;
    while(head) {
        if (head.visited) return prev;
        head.visited = true;
        prev = head;
        head = head.next;
    }
    return head;
  }

  clone() {
    let prev = new Node(null);
    let newHead = prev;
    let current = this.head;
    while (current) {
      let tmp = new Node(current.data);
      prev.next = tmp;
      prev = prev.next;
      current = current.next;
    }
    return newHead.next;
  }

  cloneWithMap(head = this.head) {
    if (!head) return null;
    const oldToNewMap = new Map([
        [null, null]
    ]);

    let cur = head;
    while (cur) {
        let copy = new Node(cur.data);
        oldToNewMap.set(cur, copy);
        cur = cur.next;
    }
    cur = head;
    while (cur) {
        const copy = oldToNewMap.get(cur);
        // copy.random = oldToNewMap.get(cur.random);
        copy.next = oldToNewMap.get(cur.next);
        cur = cur.next;
    }
    return oldToNewMap.get(head);
  };

  cloneWithMapRec() {
    const map = new Map();
    function cloner(node) {
      if (!node) return null;

      if (map.has(node)) return map.get(node);

      const copy = new Node(node.data);
      map.set(node, copy);

      copy.next = cloner(node.next);
      return copy;
    }
    return cloner(this.head);
  }
  
  swap(x, y) {
    
    if (x === y) return this.head;

    let px = null, cx = null, py = null, cy = null, count = 1;
    let cur = this.head;
    let prev = null;
    while (cur) {
      if (count === x) {
        cx = cur;
        px = prev;
      } else if (count === y) {
        cy = cur;
        py = prev;
      }
      count++;
      prev = cur;
      cur = cur.next;
    }

    if (!cx || !cy) return this.head;

    // x is head
    if (px === null) {
      this.head = cy;
    } else {
      px.next = cy;
    }

    // y is head
    if (py === null) {
      this.head = cx;
    } else {
      py.next = cx;
    }

    let tmp = cx.next;
    cx.next = cy.next;
    cy.next = tmp;

    return this.head;
  }
}
