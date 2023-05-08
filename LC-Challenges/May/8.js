var diagonalSum = function(mat) {
  let primarySum = 0;
  let secondarySum = 0;
  let n = mat.length;
  let k = n - 1;
  for (let i=0;i<n;i++) {
      primarySum += mat[i][i];
      secondarySum += mat[i][k];
      k--;
  }
  if (n % 2 === 0) {
      return primarySum + secondarySum;
  } else {
      const mid = Math.floor(n / 2);
      return primarySum + secondarySum - mat[mid][mid];
  }
};