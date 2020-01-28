/*
Given an array A[] and a number x, check for pair in A[] with sum as x
*/

// O(n^2) time, O(1) space
function pairs1(arr, sum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; i < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return [arr[i], arr[j]];
      }
    }
  }
  return [];
}

// O(n) time, O(n) space
function pairs2(arr, sum) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    let tmp = sum - arr[i];
    if (set.has(tmp)) {
      return [arr[i], sum - arr[i]];
    }
    set.add(arr[i]);
  }
  return [];
}
