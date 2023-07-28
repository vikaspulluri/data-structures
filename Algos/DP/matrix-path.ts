export function paths(matrix, i = 0, j = 0) {
  const m = matrix.length;
  const n = matrix[0].length;
  if (i === m || j === n || matrix[i][j] === 1) {
    return 0;
  } else if (i === m - 1 && j === n - 1) {
    return 1;
  } else {
    return paths(matrix, i + 1, j) + paths(matrix, i, j + 1);
  }
}

export function paths_memo(matrix, i = 0, j = 0, lookup) {
  lookup = lookup ?? new Map();
  const m = matrix.length;
  const n = matrix[0].length;
  const key = '' + i + j;
  if (lookup.has(key)) return lookup.get(key);
  if (i === m || j === n || matrix[i][j] === 1) {
    return 0;
  };
  if (i === m - 1 && j === n - 1) {
    return 1;
  } else {
    lookup.set(key, paths_memo(matrix, i + 1, j, lookup) + paths_memo(matrix, i, j + 1, lookup));
  }
  return lookup.get(key);
}

export function paths_tab(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(0).map(v => new Array(n).fill(0));
  dp[0][0] = matrix[0][0] === 0 ? 1 : 0;
  for (let i = 1; i < m; i++) {
    dp[i][0] = matrix[i][0] === 0 ? dp[i - 1][0] : 0;
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = matrix[0][j] === 0 ? dp[0][j - 1] : 0;
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = matrix[i][j] === 0 ? dp[i][j - 1] + dp[i - 1][j] : 0;
    }
  }
  return dp[m - 1][n - 1];
}
