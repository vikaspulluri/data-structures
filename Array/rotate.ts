export function rotate(nums: number[], k: number): void {
  const n = nums.length;
  while (k > 0) {
      const last = nums[n-1];
      for (let i=n-1;i>0;i--) {
          nums[i] = nums[i-1];
      }
      nums[0] = last;
      k--;
  }
};

function rotateReverse(nums: number[], k: number): void {
  if (k === 0) return;
  const n = nums.length;
  k = k % n; // in case k >= n
  reverse(nums, 0, k-1);
  reverse(nums, k, n-1);
  reverse(nums, 0, n-1);
};

function reverse(arr: number[], start: number, end: number) {
  while(start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
  }
}