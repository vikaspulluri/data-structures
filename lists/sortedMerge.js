import SLL from './SLL';
/*
Write a SortedMerge() function that takes two lists, each of which is sorted in increasing order,
and merges the two together into one list which is in increasing order.
SortedMerge() should return the new list. The new list should be made by splicing together the nodes of the first two lists.
*/

function sortedMerge(headA, headB) {
  let newHead = null, lp = null, n1 = headA, n2 = headB;
  while(n1) {
    if (!n2) break;
    if (n1.data < n2.data) {
      if (lp) {
        lp.next = n1;
        lp = n1
      } else {
        newHead = n1;
        lp = n1;
      }
      n1 = n1.next;
    } else {
      if (lp) {
        lp.next = n2;
        lp = n2
      } else {
        newHead = n2;
        lp = n2;
      }
      n2 = n2.next;
    }
  }
  let rem = n1 ? n1 : n2 ? n2 : null;
  while(rem) {
    lp.next = rem;
    lp = rem;
    rem = rem.next;
  }
  return newHead;
}

function sortedMergeInplace(headA, headB) {
  if (!headA) return headB
  if (!headB) return headA
  if (headA.data < headB.data) {
    headA.next = sortedMergeInplace(headA.next, headB);
    return headA;
  } else {
    headB.next = sortedMergeInplace(headA, headB.next);
    return headB;
  }
}

let s1 = new SLL();
s1.add(5)
s1.add(7)
s1.add(9)
let s2 = new SLL();
s2.add(1)
s2.add(6)
s2.add(11)
s2.add(12);
let h = sortedMergeInplace(s1.head, s2.head);
console.log(h);
