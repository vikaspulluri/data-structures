import Node from './Node';

export default function SLL() {
  this.head = null;
}
// append at end of the list
SLL.prototype.add = function(x) {
  let node = new Node(x);
  if (!this.head) {
    this.head = node;
    return node;
  };
  let cur = this.head;
  while(cur.next) {
    cur = cur.next;
  }
  cur.next = node;
  return node;
}

// push at starting of the list
SLL.prototype.push = function(x) {
  let node = new Node(x);
  node.next = this.head;
}

SLL.prototype.delete = function(x) {
  if (!this.head) return;
  let cur = this.head, prev = null, next = cur.next;
  while(cur) {
    if (cur.data === x) {
      if (prev) {
        prev.next = next;
      } else {
        this.head = cur.next;
      }
      break;
    }
    prev = cur;
    cur = next;
    next = cur.next;
  }
}

SLL.prototype.size = function() {
  let count = 0, cur = this.head;
  while(cur) {
    count++;
    cur = cur.next;
  }
  return count;
}

SLL.prototype.print = function() {
  let cur = this.head, output = '';
  while(cur) {
    output += cur.data + '->';
    cur = cur.next;
  }
  output += null;
  console.log(output);
}
