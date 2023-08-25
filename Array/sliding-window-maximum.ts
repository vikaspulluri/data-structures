/**
 * 239. Sliding Window Maximum
 * https://leetcode.com/problems/sliding-window-maximum/
 * @param arr 
 * @param k 
 * @returns 
 * O(k * (n-k))
 */
export function slidingWindowMax_brute(arr, k) {
  if (k === 1) return arr;
  const output = [];
  let end = arr.length - k + 1;
  let max = Number.MIN_VALUE;
  let i = 0;
  while (i < end) {
    for (let j = i; j < k + i; j++) {
      max = Math.max(max, arr[j]);
    }
    output.push(max);
    i++;
  }
  return output;
}


