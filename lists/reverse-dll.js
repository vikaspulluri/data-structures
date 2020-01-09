import DLL from './DLL';

DLL.prototype.reverse = function() {
  if (!this.head || !this.head.next) return this.head;
  let cur = this.head, tmp = null;
  while (cur) {
    tmp = cur.prev;
    cur.prev = cur.next;
    cur.next = tmp;
    cur = cur.prev;
  }
  if (tmp) this.head = tmp.prev;
}

const dll = new DLL();
dll.append(2);
dll.append(4);
dll.append(8);
dll.append(10);
dll.print();
dll.reverse();
dll.print();
