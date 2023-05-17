// 2130. Maximum Twin Sum of a Linked List
var pairSum = function (head) {
  let max = 0;
  const arr = [];
  let tmp = head;
  while (tmp) {
    arr.push(tmp.val);
    tmp = tmp.next;
  }
  let i = 0, j = arr.length - 1;
  while (i < j) {
    max = Math.max(arr[i] + arr[j], max);
    i++;
    j--;
  }
  return max;
};