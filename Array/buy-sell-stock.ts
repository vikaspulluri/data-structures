// max one transaction allowed
export function maxProfitWithSingleTransaction(arr: number[]) {
  let buy = arr[0], profit = 0;
  for (let i=1;i<arr.length;i++) {
    if (buy > arr[i]) {
      buy = arr[i];
    } else if (arr[i] - buy > profit) {
      profit = arr[i] - buy;
    }
  }
  return profit;
}

// infinite transactions
export function maxProfitWithMultipleTransactions(prices: number[]) {
  let profit = 0;
    for (let i=1;i<prices.length;i++) {
        if (prices[i] > prices[i-1]) {
            profit += prices[i] - prices[i-1];
        }
    }
    return profit;
}
