import { Result, SortResult } from "./util";

export function bucket_sort(arr: number[]) {
  const response: SortResult = new Result();
  const max = arr.reduce((acc, val) => acc = val > acc ? val : acc, 0);
  const bins = new Array(max + 1).fill(null);
  
  for(let i=0;i<arr.length;i++) {
    insert(arr[i], bins);
  }
  let k = 0;
  for(let i=0;i<bins.length;i++) {
    while(bins[i] !== null) {
      arr[k++] = remove(bins, i);
    }
  }
  response.result = arr;
  return response;
}

function Node(data = null) {
  this.data = data;
  this.next = null;
}

function insert(val, bins) {
  let bin = bins[val];
  if (bin === null) bins[val] = new Node(val);
  else {
    while(bin.next) {
      bin = bin.next;
    }
    bins[val].next = new Node(val);
  }
}

function remove(bins, position) {
  let head = bins[position], prev = null, tmp = head;
  let data;
  if (tmp !== null && tmp.next === null) {
    data = tmp.data;
    bins[position] = null;
    return data;
  }

  while(tmp.next !== null) {
    prev = tmp;
    tmp = tmp.next;
  }
  data = tmp.data;
  prev.next = null;
  return data;
}