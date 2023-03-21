function zeroFilledSubarray(nums: number[]): number {
  let answer = 0;
  let count = 0;
  for (let i=0;i<nums.length;i++) {
      if (nums[i] === 0) {
          count++;
      } else {
          answer += (count * (count + 1)) / 2;
          count = 0;
      }
  }
  if (count > 0) {
      answer += (count * (count + 1)) / 2;
  }
  return answer;
};