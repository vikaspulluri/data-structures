import { Result, SortResult } from "./util";

export function merge(arr: number[], low: number, mid: number, high: number) {
  const b = [];
  let swaps = 0;
  let comparisons = 0;
  let i = low, j = mid+1, k = low;
  while(i <= mid && j <= high) {
    comparisons++;
    if(arr[i] < arr[j]) {
      b[k++] = arr[i++];
    } else {
      b[k++] = arr[j++];
    }
  }
  while(i <= mid) b[k++] = arr[i++];
  while(j <= high) b[k++] = arr[j++];

  for(let i=low;i<=high;i++) {
    arr[i] = b[i];
  }
  return {comparisons, swaps};
}

export function i_merge_sort(arr: number[]) {
  let response: SortResult = new Result();
  let low, mid, high, p;
  for(p = 2;p <= arr.length;p = p*2) {
    for(let i = 0; i + p - 1 < arr.length; i=i+p) {
      low = i;
      high = i + p - 1;
      mid = Math.floor((low + high) / 2);
      let m = merge(arr, low, mid, high);
      response.comparisons += m.comparisons;
      response.swaps += m.swaps;
    }
  }
  if (Math.floor(p/2) < arr.length) {
    let m = merge(arr, 0, Math.floor(p/2)-1, arr.length - 1);
    response.comparisons += m.comparisons;
    response.swaps += m.swaps;
  }
  response.result = arr;
  return response;
}

export function r_merge_sort(arr: number[], low = 0, high = arr.length-1) {
  let response: SortResult = new Result();
  if (low < high) {
    let mid = Math.floor((low+high)/2);
    r_merge_sort(arr, low, mid);
    r_merge_sort(arr, mid+1, high);
    let m = merge(arr, low, mid, high);
    response.comparisons += m.comparisons;
    response.swaps += m.swaps;
  }
  response.result = arr;
  return response;
}

