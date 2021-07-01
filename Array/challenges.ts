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

