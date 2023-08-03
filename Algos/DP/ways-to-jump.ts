import { randomArray } from "./util";

export function ways(n, jumps) {
  if (n === 0) return 1; // reached bottom from 
  else {
    let nb = 0;
    for (let jump of jumps) {
      if (n - jump >= 0) {
        nb += ways(n - jump, jumps);
      }
    }
    return nb;
  }
}

export function ways_memo(n, jumps, lookup = {}) {
  if (lookup[n]) return lookup[n];
  if (n === 0) return 1; // reached bottom from 
  else {
    let nb = 0;
    for (let jump of jumps) {
      if (n - jump >= 0) {
        nb += ways_memo(n - jump, jumps, lookup);
      }
    }
    lookup[n] = nb;
    return nb;
  }
}

export function ways_tab(n, jumps) {
  const dp = randomArray(n + 1, false);
  dp[0] = 1;
  for (let i = 1; i < n + 1; i++) {
    for (let jump of jumps) {
      if (i - jump >= 0) {
        dp[i] += dp[i - jump];
      }
    }
  }
  return dp[n];
}