import { Result, SortResult } from "./util";

export function count_sort(arr: number[]) {
  let response: SortResult = new Result();
  let max = arr[0];
  for(let i=1; i<arr.length; i++) {
    if (arr[i] > max) { max = arr[i];}
  }
  // max = arr.reduce((acc, val) => acc = val > acc ? val : acc, 0);
  const countArray = new Array(max + 1).fill(0);
  for(let i=0;i<arr.length;i++) {
    countArray[arr[i]]++;
  }
  let k = 0;
  for(let i=0;i<countArray.length;i++) {
    let j = countArray[i];    
    while(j-- > 0) {
      arr[k++] = i;
    }
  }
  response.result = arr;
  return response;
}
