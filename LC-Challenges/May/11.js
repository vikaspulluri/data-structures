// 1035. Uncrossed Lines
var maxUncrossedLines = function(nums1, nums2) {
  const m = nums1.length, n = nums2.length;
  const dp = new Array(m+1).fill(0).map(val => new Array(n+1).fill(0));
  for (let i=0;i<=m;i++) {
      for (let j=0;j<=n;j++) {
          if (i === 0 || j === 0) {
              dp[i][j] = 0;
          } else if (nums1[i-1] === nums2[j-1]) {
              dp[i][j] = 1 + dp[i-1][j-1];
          } else {
              dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j]);
          }
      }
  }
  return dp[m][n];
};