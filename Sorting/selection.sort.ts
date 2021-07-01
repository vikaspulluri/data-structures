import { Result, SortResult } from "./util";

export function selection_sort(arr: number[]) {
  const response: SortResult = new Result();
  for (let i = 0; i < arr.length; i++) {
    let k = i;
    for(let j = i; j < arr.length; j++) {
      if (arr[j] < arr[k]) {
        k = j;
        response.comparisons++;
      }
    }
    [arr[i], arr[k]] = [arr[k], arr[i]];
    response.swaps++;
  }
  response.result = arr;
  return response;
}
