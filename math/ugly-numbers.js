/*
Ugly numbers are numbers whose only prime factors are 2, 3 or 5.
The sequence 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, … shows the first 11 ugly numbers.
By convention, 1 is included.

Given a number n, the task is to find n’th Ugly number.
*/
arr = [1]
function getNthUglyNumber(n) {
  let l = arr.length;
  if (l >= n) {
    return arr[n-1];
  }
  let i = arr[l-1], count = l;
  while(n > count) {
    i++;
    if (isUgly(i)) {
      count++;
      arr.push(i);
    }
  }
  return i;
}
function isUgly(n) {
  n = maxDivide(n,2);
  n = maxDivide(n,3);
  n = maxDivide(n,5);
  return n === 1;
}
function maxDivide(a,b) {
  while (a % b === 0) {
    a = Math.floor(a/b);
  }
  return a;
}
function now() {
  return Date.now();
}

console.log(getNthUglyNumber(67));
console.log(arr)
let n = now();
console.log(getNthUglyNumber(675));
console.log(now() - n)
console.log(getNthUglyNumber(600))
console.log(now() - n)
