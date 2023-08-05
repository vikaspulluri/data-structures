/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * 95. Unique Binary Search Trees II
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  const dp = {};
  function generate(left, right) {
    const key = '' + left + right;
    if (dp[key]) return dp[key];
    if (left > right) return [null];
    const res = [];
    for (let val = left; val <= right; val++) {
      for (let leftTree of generate(left, val - 1)) {
        for (let rightTree of generate(val + 1, right)) {
          let root = new TreeNode(val, leftTree, rightTree);
          res.push(root);
        }
      }
    }
    dp[key] = res;
    return res;
  }
  return generate(1, n);
};