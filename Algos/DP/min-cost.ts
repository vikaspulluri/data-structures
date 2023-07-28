export function min_cost(matrix, i = 0, j = 0) {
  const m = matrix.length;
  const n = matrix[0].length;
  if (i === m - 1 && j === n - 1) {
    return matrix[i][j];
  } else if (i === m - 1) {
    return matrix[i][j] + min_cost(matrix, i, j + 1);
  } else if (j === n - 1) {
    return matrix[i][j] + min_cost(matrix, i + 1, j);
  } else {
    return matrix[i][j] + Math.min(min_cost(matrix, i + 1, j), min_cost(matrix, i, j + 1));
  }
}

export function min_cost_memo(matrix, i = 0, j = 0, lookup) {
  const m = matrix.length;
  const n = matrix[0].length;
  lookup = lookup ?? new Map();
  const key = '' + i + j;
  if (lookup.has(key)) {
    return lookup.get(key);
  }
  if (i === m - 1 && j === n - 1) {
    lookup.set(key, matrix[i][j]);
  } else if (i === m - 1) {
    lookup.set(key, matrix[i][j] + min_cost_memo(matrix, i, j + 1, lookup));
  } else if (j === n - 1) {
    lookup.set(key, matrix[i][j] + min_cost_memo(matrix, i + 1, j, lookup));
  } else {
    lookup.set(key, matrix[i][j] + Math.min(min_cost_memo(matrix, i + 1, j, lookup), min_cost_memo(matrix, i, j + 1, lookup)));
  }
  return lookup.get(key);
}

export function min_cost_tab(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const dp = new Array(m).fill(0).map(v => new Array(n).fill(0));
  dp[0][0] = matrix[0][0];
  for (let j = 1; j < n; j++) {
    dp[0][j] = matrix[0][j] + dp[0][j - 1];
  }
  for (let i = 1; i < m; i++) {
    dp[i][0] = matrix[i][0] + dp[i - 1][0];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = matrix[i][j] + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[m - 1][n - 1];
}
