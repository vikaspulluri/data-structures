function leftRigthDifference(nums) {
  const leftSum = [];
  const rightSum = [];
  const answer = [];
  let lSum = 0;
  let rSum = 0;
  for (let i=1;i<nums.length;i++) {
      rSum += nums[i];
  }
  for (let i=0;i<nums.length;i++) {
      lSum = nums[i-1] ? lSum + nums[i-1] : 0;
      const val = lSum - rSum;
      rSum = nums[i+1] ? rSum - nums[i+1] : 0;
      answer[i] = val < 0 ? val * -1 : val;
  }
  console.log({leftSum, rightSum})
  return answer;
};

console.log(leftRigthDifference([10,4,8,3]));