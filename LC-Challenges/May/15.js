// 1721. Swapping Nodes in a Linked List

var swapNodes = function (head, k) {
  let lp = head, rp = head;
  for (let i = 1; i < k; i++) {
    rp = rp.next;
  }
  let tmp = rp;
  while (tmp.next) {
    tmp = tmp.next;
    lp = lp.next;
  }
  const dummy = lp.val;
  lp.val = rp.val;
  rp.val = dummy;
  return head;
};