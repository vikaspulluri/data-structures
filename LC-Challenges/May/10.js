/**
 * 59. Spiral Matrix II
 * Given a positive integer n, generate an n x n matrix filled with elements from 1 to n2 in spiral order.
 * @param {*} n 
 * @returns 
 */
var generateMatrix = function(n) {
  const matrix = new Array(n).fill(0).map(v => new Array(n).fill(0));
  let dir = 0, left = 0, top = 0, bottom = n-1, right = n-1, count = 1;
  while (top <= bottom && left <= right) {
      if (dir === 0) {
          for (let i=left;i<=right;i++) {
              matrix[top][i] = count++;
          }
          top++;
      } else if (dir === 1) {
          for (let i=top;i<=bottom;i++) {
              matrix[i][right] = count++;
          }
          right--;
      } else if (dir === 2) {
          for (let i=right;i>=left;i--) {
              matrix[bottom][i] = count++;
          }
          bottom--;
      } else {
          for (let i=bottom;i>=top;i--) {
              matrix[i][left] = count++;
          }
          left++;
      }
      dir = (dir + 1) % 4;
  }
  return matrix;
};