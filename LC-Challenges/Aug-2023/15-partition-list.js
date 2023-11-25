/**
 * 86. Partition List
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let leftList = new ListNode(null);
    let rightList = new ListNode(null);
    let leftTail = leftList;
    let rightTail = rightList;
    while (head) {
        if (head.val < x) {
            leftTail.next = head;
            leftTail = leftTail.next;
        } else {
            rightTail.next = head;
            rightTail = rightTail.next;
        }
        head = head.next;
    }
    rightTail.next = null;
    leftTail.next = rightList.next;

    return leftList.next || rightList.next;

};