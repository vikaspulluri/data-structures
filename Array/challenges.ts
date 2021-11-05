import { yellow } from "../log";

export function threeSum(nums) {
  let result = [];
  const n = nums.length;
  if (n < 3) return result;
  nums = nums.sort((a,b) => a-b);

  for (let i=0; i<n-2;i++) {
    if (nums[i] > 0) break; // no need to run loop once nums[i] > 0
    if (i > 0 && nums[i] === nums[i-1]) continue; // skip iteration current value is same as previous value
    let j = i+1, k = n-1;
    while(j < k) {
        let sum = nums[i] + nums[j] + nums[k];
        if (sum === 0) {
          result.push([nums[i], nums[j], nums[k]]);
          while(j < k && nums[j] === nums[j+1]) j++;
          while(j < k && nums[k] === nums[k-1]) k--;
          j++;
          k--;
        } else if (sum < 0) {
            j++;
        } else {
            k--;
        }
    }
  }
  return result;
};

// Remove duplicates that occurs more than twice
export function removeDuplicates(nums: number[]) {
  let occurance = true, k = 0;
  for(let i=1;i<nums.length;i++) {
    if (nums[k] === nums[i]) {
      if (occurance) {
        nums[++k] = nums[i];
        occurance = false;
      }
    } else {
      nums[++k] = nums[i];
      occurance = true;
    }
  }
  for(let i=k+1;i<nums.length;i++) {
    nums[i] = undefined;
  }
  return nums;
}

export function pairs(k, arr) {
  // Write your code here
  let count = 0;
  let dict = {};
  for (let i=0;i<arr.length;i++) {
    console.log(arr[i], dict);
      if (arr[i] in dict) {
          count++;
      } else {
        dict[arr[i] + k] = 0;
        dict[arr[i] - k] = 0;
      }
      console.log(dict);
  }
  return count;
}

export function min_no_of_jumps(arr) {
  let i = 0, steps = 0, n = arr.length;
  while(i <= n) {
    let val = arr[i];
    if (val === 0 && i !== n) return -1;
    i = val + i;
    steps++;
  }
  return steps;
}

export function maxSubarrayDP(arr) {
  let localMax = arr[0]; // current max
  let globalMax = arr[0]; // max so far
  
  for (let i = 1; i < arr.length; i++) {
      localMax = Math.max(arr[i], arr[i] + localMax);
      globalMax = Math.max(localMax, globalMax);
  }
  return globalMax;
}

export function dups(a) {
  let map = new Map();
  let res = [];
  for (let i = 0;i < a.length;i++) {
      if (map.has(a[i])) {
        if (map.get(a[i]) === 1) {
          res.push(a[i]);
        }
        map.set(a[i], map.get(a[i]) + 1);
      } else map.set(a[i], 1);
  }
  return res;
}

export function insertPosition(arr, target) {
  let i = 0, j = arr.length-1, mid;
  while(i <= j) {
      mid = Math.floor((i+j)/2);
      if (arr[mid] === target) return mid;
      if (arr[mid] < target) i = mid+1;
      if (arr[mid] > target) j = mid-1
  }
  return i;
}


