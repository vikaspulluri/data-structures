import { Heap } from "../Tree/Heap";
import { Result, SortResult } from "./util";

export function heap_sort(arr: number[]) {
  const response: SortResult = new Result();
  const heap = new Heap();
  heap.heapify(arr);
  heap.sort();
  response.result = heap.heapArr;
  return response;
}