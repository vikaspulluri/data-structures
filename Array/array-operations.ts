import * as chalk from 'chalk';

export function isSorted(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (! (arr[i] < arr[i+1])) return false;
  }
  return true;
}

export function merge(arr1: any[], arr2: any[]) {
  if (!isSorted(arr1) || !isSorted(arr2)) {
    console.log(
      chalk.bgRed('Array must be sorted for merging!')
    );
    return;
  }
  let output = new Array(arr1.length + arr2.length);
  let i = 0, j = 0, k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      output[k++] = arr1[i++];
    } else {
      output[k++] = arr2[j++];
    }
  }
  // when arr2 is completed but arr1 has elements left in it
  for(let m = i; m < arr1.length; m++) {
    output[k++] = arr1[m];
  }
  // when arr1 is completed but arr2 has elements left in it
  for(let n = j; n < arr2.length; n++) {
    output[k++] = arr2[n];
  }
  return output;
}

export function union(arr1: any[], arr2: any[]) {
  if (isSorted(arr1) && isSorted(arr2)) {
    return unionMerge(arr1, arr2);
  }
  let output = new Array(arr1.length + arr2.length);
  let k = arr1.length;
  for(let i = 0; i < arr1.length; i++) {
    output[i] = arr1[i];
  }
  for(let i = 0; i < arr2.length; i++) {
    if (search(arr2[i], arr1) < 0) {
      output[k++] = arr2[i];
    }
  }
  return output;
}

export function intersection(arr1: any[], arr2: any[]) {
  if (isSorted(arr1) && isSorted(arr2)) {
    return intersectionMerge(arr1, arr2);
  }
  let min = Math.min(arr1.length, arr2.length);
  let output = new Array(min);
  let k = 0;
  for(let i = 0; i < arr1.length; i++) {
    if (search(arr1[i], arr2) > -1) {
      output[k++] = arr1[i];
    }
  }
  return output;
}
export function difference(arr1: any[], arr2: any[]) {
  if (isSorted(arr1) && isSorted(arr2)) {
    return differenceMerge(arr1, arr2);
  }
  let output = new Array(arr1.length);
  let k = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (search(arr1[i], arr2) < 0) {
      output[k++] = arr1[i];
    }
  }
  return output;
}

export function unionMerge(arr1: any[], arr2: any[]) {
  let output = new Array(arr1.length + arr2.length);
  let i = 0, j = 0, k = 0;
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output[k++] = arr1[i++];
    } else if (arr1[i] > arr2[j]) {
      output[k++] = arr2[j++];
    } else if(arr1[i] === arr2[j]) {
      output[k++] = arr1[i++];
      j++;
    }
  }
  for (let m = i; m < arr1.length; m++) {
    output[k++] = arr1[m];
  }
  for (let m = j; m < arr2.length; m++) {
    output[k++] = arr2[m];
  }
  return output;
}
export function intersectionMerge(arr1: any[], arr2: any[]) {
  let min = Math.min(arr1.length, arr2.length);
  let output = new Array(min);
  let i = 0, j = 0, k = 0;
  while(i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    } else if (arr1[i] === arr2[j]) {
      output[k++] = arr1[i++];
      j++;
    }
  }
  return output;
}
export function differenceMerge(arr1: any[], arr2: any[]) {
  let output = new Array(arr1.length);
  let i = 0, j = 0, k = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      output[k++] = arr1[i++];
    } else if (arr1[i] === arr2[j]) {
      j++;
      i++;
    } else if (arr1[i] > arr2[j]) {
      j++;
    }
  }
  for (let m = i; m < arr1.length; m++) {
    output[k++] = arr1[m];
  }
  return output;
}

function search(key, arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i++] === key) return i;
  }
  return -1;
}
