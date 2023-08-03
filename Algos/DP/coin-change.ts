import { randomArray } from "./util";

export function coin_change(amount, coins) {
  if (amount === 0) return 0;
  else {
    let minCoins = Infinity;
    for (let coin of coins) {
      if (amount - coin >= 0) {
        minCoins = Math.min(minCoins, 1 + coin_change(amount - coin, coins));
      }
    }
    return minCoins;
  }
}

export function coin_change_memo(amount, coins, lookup = {}) {
  if (lookup[amount]) return lookup[amount];
  if (amount === 0) return 0;
  else {
    let minCoins = Infinity;
    for (let coin of coins) {
      if (amount - coin >= 0) {
        minCoins = Math.min(minCoins, 1 + coin_change(amount - coin, coins));
      }
    }
    lookup[amount] = minCoins
    return lookup[amount];
  }
}

export function coin_change_tab(amount, coins) {
  const dp = randomArray(amount + 1, false).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i < amount + 1; i++) {
    for (let coin of coins) {
      if (i - coin >= 0) {
        dp[i] = Math.min(dp[i], 1 + dp[i - coin]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}