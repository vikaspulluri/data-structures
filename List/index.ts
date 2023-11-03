import { logPerformance } from "../perf-hook";
import { randomArray } from "../Algos/DP/util";
import { CircularLinkedList } from "./circular-linked-list";
import { DoubleLinkedList } from "./double-linked-list";
import { SingleLinkedList } from "./single-linked-list";

export class LinkedList {
  sll(data) {
    const sll = new SingleLinkedList(data);
    sll.create([1,2,3,4]);
    sll.append(6);

    sll.display();

    sll.count();

    sll.insert(2,2);

    sll.display();

    console.log('middle element: ', sll.middle());

    const s1 = new SingleLinkedList(1);
    s1.create([2,3,4,5,6]);
    const s2 = new SingleLinkedList(8);
    s2.create([9,10,3,4,5,6]);
    console.log('intersection: ' + sll.intersection(s1, s2));

    let clone = sll.clone();
    console.log('cloned', clone);
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

  sll_clone() {
    const arr = randomArray(1000);
    const sll = new SingleLinkedList(1);
    sll.create(arr);

    logPerformance(sll.clone.bind(sll));
    logPerformance(sll.cloneWithMap.bind(sll));
    logPerformance(sll.cloneWithMapRec.bind(sll));
  }

  swap() {
    const sll = new SingleLinkedList(3);
    sll.create([5]);
    sll.display();
    sll.swap(1,2);
    sll.display();
  }
}

const list = new LinkedList();
// list.sll(5);
// list.dll(1);

// list.sll_clone();
list.swap();