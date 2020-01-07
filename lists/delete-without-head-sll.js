import SLL from './SLL';

SLL.prototype.deleteWithoutHead = function(node) {
  let tmp = node, next = node.next;
  if (!next) { // can't delete last element
    node = null;
    return;
  }
  node.data = next.data;
  node.next = next.next;
}

let l = new SLL();
l.add(5);
l.add(3);
let n = l.add(7);
l.add(9);
l.add(1);
l.deleteWithoutHead(n);
l.print();
