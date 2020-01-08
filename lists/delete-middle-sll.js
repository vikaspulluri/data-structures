import SLL from './SLL';

SLL.prototype.deleteMiddle = function() {
  if (this.head === null) return null;
  if (this.head.next === null) {this.head = null; return this.head;}
  let [slow, prev, fast] = new Array(3).fill(this.head);
  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow
    slow = slow.next
  }
  prev.next = slow.next;
}
let l = new SLL();
l.add(5);
l.add(3);
l.add(7);
l.add(9);
l.add(1);
l.deleteMiddle();
l.print();
