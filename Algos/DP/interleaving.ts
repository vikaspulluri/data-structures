/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const dp = {};
  function dfs(i, j) {
    const key = '' + i + j;
    if (i == s1.length && j == s2.length) return true;
    if (dp[key]) return dp[key];

    if (i < s1.length && s1[i] == s3[i + j] && dfs(i + 1, j)) {
      return true;
    }
    if (j < s2.length && s2[j] == s3[i + j] && dfs(i, j + 1)) {
      return true;
    }
    dfs[key] = false;
    return false;
  }
  return dfs(0, 0);
};