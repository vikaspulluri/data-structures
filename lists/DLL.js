function DNode(x) {
  this.data = x;
  this.next = this.prev = null;
}

export default function DLL() {
  this.head = null;
}

DLL.prototype.append = function(x) {
  let node = new DNode(x);
  if (!this.head) {
    this.head = node;
    return;
  }
  let cur = this.head
  while(cur.next) {
    cur = cur.next;
  }
  cur.next = node;
  node.prev = cur;
}

DLL.prototype.delete = function(x) {
  if (!this.head) return;
  let prev = null, cur = this.head, next = null;
  while(cur) {
    prev = cur.prev;
    next = cur.next;
    if (cur.data === x) {
      if (!prev) { // cur is head element
        this.head = next;
        break;
      }
      if (!next) { // last element is to be deleted
        prev.next = null;
        break;
      }
      prev.next = next;
      next.prev = prev;
    }
    cur = next;
  }
}

DLL.prototype.print = function() {
  let cur = this.head, output = '';
  while (cur) {
    output += cur.data + '<=>'
    cur = cur.next;
  }
  output += 'null';
  console.log(output);
}

// let d = new DLL();
// d.append(1)
// d.append(3)
// d.append(5)
// d.append(7)
// d.append(9)
// d.delete(9)
//
// console.log(d)
