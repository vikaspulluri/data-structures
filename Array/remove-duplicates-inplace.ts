import { EntityName } from "typescript";

// Given sorted array in non-decreasing order
export function removeDuplicatesInPlace(nums: number[]): number {
  let count = 1, pos = 0, n = nums.length;
  if (n <= 1) return n;
  for (let i=1;i<n;i++) {
      if (nums[i] === nums[i-1]) {continue;}
      nums[++pos] = nums[i];
      count++;
  }
  return count;
};
