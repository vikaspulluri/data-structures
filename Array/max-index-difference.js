export function maxIndexDiff(a, n) {
  //your code here
  let i=0,j=n-1,max=0;
  while(i<=j) {
    if (a[i] <= a[j]) {
      max = Math.max(max, j-i);
      i++;
      j = n-1;
    } else {
      j--;
    }
  }
  return max;
}