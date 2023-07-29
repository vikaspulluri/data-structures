export function max_robbery(arr, i = 0) {
  if (i >= arr.length) return 0;
  return Math.max(arr[i] + max_robbery(arr, i + 2), max_robbery(arr, i + 1));
}

export function max_robbery_memo(arr, i = 0, lookup = {}) {
  const key = i;
  if (lookup[key]) return lookup[key];
  if (i >= arr.length) return 0;
  lookup[key] = Math.max(arr[i] + max_robbery_memo(arr, i + 2, lookup), max_robbery_memo(arr, i + 1, lookup));
  return lookup[key];
}

export function max_robbery_tab(arr) {
  const n = arr.length;
  if (n === 1) return arr[0];
  const dp = new Array(n).fill(0);
  dp[0] = arr[0];
  dp[1] = Math.max(arr[0], arr[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(arr[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[n - 1];
}
