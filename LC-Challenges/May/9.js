/**
 * 54. Spiral Matrix
 * Given an m x n matrix, return all elements of the matrix in spiral order.
 * @param {*} matrix 
 * @returns 
 */

var spiralOrder = function(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const output = [];
  let dir = 0;
  let top = 0, bottom = m-1, left = 0, right = n - 1;
  while (top <= bottom && left <= right) {
      if (dir === 0) {
          for (let i=left;i<=right;i++) {
              output.push(matrix[top][i]);
          }
          top++;
      } else if (dir === 1) {
          for (let i=top;i<=bottom;i++) {
              output.push(matrix[i][right]);
          }
          right--;
      } else if (dir === 2) {
          for (let i=right;i>=left;i--) {
              output.push(matrix[bottom][i]);
          }
          bottom--;
      } else {
          for (let i=bottom;i>=top;i--) {
              output.push(matrix[i][left]);
          }
          left++;
      }

      dir = (dir + 1) % 4;
  }
  return output;
};