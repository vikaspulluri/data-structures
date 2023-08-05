export function catalan(n) {
  if (n < 1) return 1;

  else {
    let sum = 0;
    for (let root = 1; root <= n; root++) {
      const left = catalan(root - 1);
      const right = catalan(n - root);
      sum += left * right;
    }
    return sum;
  }
}

export function catalan_memo(n, lookup = {}) {
  if (lookup[n]) return lookup[n];
  else if (n < 1) return 1;
  else {
    let sum = 0;
    for (let root = 1; root <= n; root++) {
      lookup[root - 1] = catalan_memo(root - 1, lookup);
      lookup[n - root] = catalan_memo(n - root, lookup);
      sum += lookup[root - 1] * lookup[n - root];
    }
    return sum;
  }
}

export function catalan_tab(n) {
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1, dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] += dp[j] * dp[i - j - 1];
    }
  }
  return dp[n];
}
