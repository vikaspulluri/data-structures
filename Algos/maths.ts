export function numberOf2sinRange(n){ // 22 => 6, 45 => 15, etc
  //code here
  let i = 1;
  let count = 0;
  while (i <= n) {
      let k = i;
      while (k > 0) {
          let rem = k % 10;
          if (rem == 2) count++;
          k = Math.floor(k / 10);
      }
      i++;
  }
  return count;
}

export function convert0sTo5s(num) { // 1004 => 1554
  let i = num;
  let k = 1;
  let res = 0;
  while(i > 0) {
      let rem = i % 10;
      if (rem === 0) {
          res = (5 * k) + res;
      } else {
          res = (rem * k) + res;
      }
      k = k * 10;
      i = Math.floor(i / 10);
  }
  return res;
}

/**
 * squares in 1x1 => 1
 * squares in 2x2 => 2^2 + 1^1 => 5
 * squares in 3^3 => 3^3 + 2^2 + 1^1 => 14 etc...
 * @param n 
 * @returns 
 */
export function squaresInChessBoard(n){
  //code here
  let i = n;
  let sq = 0;
  while(i > 0) {
      sq += i * i;
      i--;
  }
  return sq;
}

export function decimalToBinary(n) {
  let exp = 0;
  let cur = n;
  let arr = [];
  while (cur > 0) {
    if (Math.pow(2, exp) == cur) {
      arr.push(exp);
      break;
    }
    if (Math.pow(2, exp) < cur) {
      exp++;
    }
    if (Math.pow(2, exp) > cur) {
      arr.push(exp-1);
      cur = cur - Math.pow(2, exp-1);
      exp = 0;
    }
  }
  let binary = 0;
  let mult = 10;
  for (let i = arr[0];i >= 0;i--) {
    if (arr.includes(i)) {
      binary = (binary * mult) + 1;
    } else {
      binary = binary * mult;
    }
  }
  return binary;
}