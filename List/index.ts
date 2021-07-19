import { CircularLinkedList } from "./circular-linked-list";
import { DoubleLinkedList } from "./double-linked-list";
import { SingleLinkedList } from "./single-linked-list";

export class LinkedList {
  sll(data) {
    const sll = new SingleLinkedList(data);
    sll.create([1,2,3,4]);
    sll.append(6);

    sll.append(7);

    sll.append(8);

    sll.display();

    sll.count();

    sll.insert(2,2);

    sll.display();
  }

  cll(data) {
    return new CircularLinkedList(data);
  }

  dll(data) {
    const dll = new DoubleLinkedList(data);
    dll.create([2,3,4,5]);
    // dll.display();
    dll.insert(5, 10);
    dll.delete(3);
    dll.display();
    dll.reverse();
    dll.display();
  }
}

const list = new LinkedList();
// list.sll(5);
list.dll(1);