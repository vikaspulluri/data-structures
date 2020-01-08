/*
Given an sorted array A[i] of N positive integers having all the numbers occuring exactly twice,
except for one number which will occur only once. Find the number occuring only once.
*/

function findUnique(arr) {
  for(let i = 0; i < arr.length-1;i = i+2) {
    if (arr[i] !== arr[i+1]) {
      return arr[i];
    }
  }
}
console.log(findUnique([2, 2, 5, 5, 20, 30, 30]))
