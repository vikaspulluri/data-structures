import { Result, SortResult } from "./util";

export function insertion_sort(array: number[]) {
  let response: SortResult = new Result();
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    let x = array[i];
    while(array[j] > x && j > -1) {
      response.comparisons++;
      array[j+1] = array[j--];
      response.swaps++;
    }
    array[j+1] = x;
  }
  response.result = array;
  return response;
}