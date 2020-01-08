/*
Given an even number (greater than 2), return two prime numbers whose sum will be equal to
given number. There are several combinations possible. Print only first such pair.

NOTE: A solution will always exist, read Goldbach’s conjecture.
Also, solve the problem in linear time complexity, i.e., O(n).
*/

//Note: isPrime() yeilds in 60-70ms where as isPrimeOptimum() yeilds in 0-1ms
function getPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (isPrimeOptimum(i) && isPrimeOptimum(n-i)) {
      return [i, n-i];
    }
  }
}


function isPrime(x) {
  let i = 2;
  while (i < x) {
    if (x % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

function isPrimeOptimum(x) {
  if (x <= 1) return false;
  if (x <= 3) return true;
  if (x % 2 === 0 || x % 3 === 0) return false;
  let i = 5;
  while (i * i <= x) {
    if (x % i === 0 || x % (i + 2) === 0) {
      return false;
    }
    i += 6
  }
  return true;
}

console.log(getPrimes(9897578));
console.log(isPrimeOptimum(23))

function now() {
  return Date.now();
}
