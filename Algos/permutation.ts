export const combs = [];
export function permute(str, l, r) {
  if (l === r) {
    combs.push(str);
  } else {
    for (let i = l; i <= r; i++) {
      str = swap(str, l, i);
      permute(str, l+1, r);
      str = swap(str, l, i);
    }
  }
}

export function swap(str, l, r) {
  let tmp1 = str[l];
  let tmp2 = str[r];
  let swapStr = '';
  for (let i in str) {
    let k = str[i];
    if (i == l) k = tmp2;
    if (i == r) k = tmp1;
    swapStr += k;
  }
  return swapStr;
}