import { random2DArray } from "./util";

function gold_mine_rec(mine, i, j) {
  let m = mine.length;
  let n = mine[0].length;
  if (i === m || j < 0 || j === n) {
    return 0;
  } else {
    return mine[i][j] + Math.max(
      gold_mine_rec(mine, i + 1, j - 1),
      gold_mine_rec(mine, i + 1, j),
      gold_mine_rec(mine, i + 1, j + 1)
    )
  }
}

export function gold_mine(mine) {
  let max = 0;
  for (let i = 0; i < mine[0].length; i++) {
    max = Math.max(max, gold_mine_rec(mine, 0, i));
  }
  return max;
}

export function gold_mine_memo(mine, i, j, lookup) {
  let m = mine.length;
  let n = mine[0].length;
  const key = '' + i + j;
  if (lookup[key]) return lookup[key];
  if (i === m || j < 0 || j === n) {
    return 0;
  } else {
    lookup[key] = mine[i][j] + Math.max(
      gold_mine_memo(mine, i + 1, j - 1, lookup),
      gold_mine_memo(mine, i + 1, j, lookup),
      gold_mine_memo(mine, i + 1, j + 1, lookup)
    );
  }
  return lookup[key];
}

export function gold_mine_memo_driver(mine) {
  let max = 0;
  const lookup = {};
  for (let i = 0; i < mine[0].length; i++) {
    max = Math.max(max, gold_mine_memo(mine, 0, i, lookup));
  }
  return max;
}

export function gold_mine_tab(mine) {
  const m = mine.length;
  const n = mine[0].length;
  const dp = random2DArray(m, n, false);
  for (let j = 0; j < n; j++) {
    dp[0][j] = mine[0][j];
  }
  for (let i = 1; i < m; i++) {
    for (let j = 0; j < n; j++) {
      let top_left = j > 0 ? dp[i - 1][j - 1] : 0;
      let top = dp[i - 1][j];
      let top_right = j + 1 < n ? dp[i - 1][j + 1] : 0;
      dp[i][j] = mine[i][j] + Math.max(top_left, top, top_right);
    }
  }
  return Math.max(...dp[m - 1]);
}
