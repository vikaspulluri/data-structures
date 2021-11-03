export function printPattern(n){
  //code here
  const k = 2*n - 1;
  for (let i=1; i<=k;i++) {
      let s = '';
      for(let j=1;j<=k;j++) {
        // console.log(i,j,Math.abs(n-i), Math.abs(n-j));
        s += Math.max(Math.abs(n-i), Math.abs(n-j)) + 1;
      }
      console.log(s);
  }
}

// given a sorted array convert into arr[1] >= arr[2] <= arr[3] >= arr[4] <= arr[5].....
export function convertToWave(arr){  
  // code here
  for (let i = 0;i<arr.length-1;i++) {
    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
    i++;
  }
}