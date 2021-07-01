import { Result, SortResult } from "./util";

export function bubble_sort(arr: any[]) {
  let response: SortResult = new Result();
  for(let i=0;i<arr.length-1;i++) {
    for(let j=0;j<arr.length-1-i;j++) { // after each pass, last element gets sorted. So excluding sorted elements
      response.comparisons++;
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
        response.swaps++;
      }
    }
  }
  response.result = arr;
  return response;
}
