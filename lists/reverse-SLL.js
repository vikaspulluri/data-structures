import SLL from './SLL';

let l = new SLL();
l.add(5);
l.add(3);
l.add(7);
l.add(9);
l.add(1);
l.delete(1);
l.print();

SLL.prototype.reverse = function() {
  if (!this.head) return;
  let cur = this.head, prev = null, next = null;
  while(cur) {
    next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
  }
  this.head = prev;
}
l.reverse()
l.print()
