// O(√x)
function sqrt(x) {
  x === 0 || x === 1 ? return x : '';
  let i = 1;
  while (i * i <= x) {
    i++;
  }
  return i-1;
}

// O(log x)
function binary_sqrt(x) {
  x === 0 || x === 1 ? return x : '';
  let start = 1, end = x, ans = 0;
  while(start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sq = mid * mid;
    if (sq === x) {
      return mid;
    }
    if (sq < x) {
      start = mid + 1, ans = mid;
    } else {
      end = mid - 1;
    }
  }
  return ans
}
