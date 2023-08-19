/**
 * 239. Sliding Window Maximum
 * https://leetcode.com/problems/sliding-window-maximum/
 * @param arr 
 * @param k 
 * @returns 
 */
export function slidingWindowMax_brute(arr, k) {
  if (k === 1) return arr;
  const output = new Array(arr.length - k + 1);
  let start = 0, end = arr.length;
  let max = -Infinity;
  let i = 0;
  while (start < end) {
    let j = i + k;
    while (j < k) {
      max = Math.max(max, arr[j]);
      j++;
    }
    output.push(max);
    i++;
  }
}


