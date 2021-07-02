import { Result, SortResult } from "./util";

export function partition(arr: number[], low: number, high: number) {
  let pivot = arr[low];
  let i = low, j = high;
  let swaps = 0;
  let comparisons = 0;

  while (i < j) {
    do {i++;} while (arr[i] <= pivot);
    do {j--;} while (arr[j] > pivot);
    if (i < j) {
      swaps++;comparisons++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[low], arr[j]] = [arr[j], arr[low]];
  swaps++;comparisons++;
  return {
    j,
    swaps,
    comparisons
  };
}

export function quick_sort(arr: number[], low = 0, high = arr.length-1) {
  let response: SortResult = new Result();
  if (low < high) {
    let part = partition(arr, low, high);
    response.swaps += part.swaps;
    response.comparisons += part.comparisons;
    quick_sort(arr, low, part.j);
    quick_sort(arr, part.j+1, high);
  }
  response.result = arr;
  return response;
}