import { SingleLinkedList } from "./single-linked-list";

export class LinkedList {
  sll(data) {
    return new SingleLinkedList(data);
  }
}

const list = new LinkedList();
const sll = list.sll(5);
sll.append(6);

sll.append(7);

sll.append(8);

sll.display();

sll.count();

sll.insert(2,2);

sll.display();