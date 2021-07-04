import { Result, SortResult } from "./util";

export function shell_sort(arr: number[]) {
  const response: SortResult = new Result();
  const n = arr.length;
  for(let gap = Math.floor(n/2);gap>=1;gap=Math.floor(gap/2)) {
    for(let i=gap;i<n;i++) {
      let tmp = arr[i];
      let j = i - gap;
      while(j >= 0 && arr[j] > tmp) {
        arr[j+gap] = arr[j];
        j = j - gap;
        response.comparisons++;
        response.swaps++;
      }
      arr[j+gap] = tmp;
      response.swaps++;
    }
  }
  response.result = arr;
  return response;
}
