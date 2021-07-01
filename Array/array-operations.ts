import * as chalk from 'chalk';
import { bgRed, green } from '../log';

export function isSorted(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    if (! (arr[i] <= arr[i+1])) return false;
  }
  return true;
}

export function merge(arr1: any[], arr2: any[]) {
  if (!isSorted(arr1) || !isSorted(arr2)) {
    bgRed('Array must be sorted for merging!');
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

export function max_min(arr: any[]) {
  let min = arr[0], max = arr[0];
  for(let i = 1; i < arr.length; i++) {
    if (min > arr[i]) min = arr[i];
    if (max < arr[i]) max = arr[i];
  }
  return [min, max];
}

export function findMissingElements(arr: number[]) {
  if (!isSorted(arr)) {
    bgRed('Array should be sorted!');
    return;
  }
  let missing = [];
  let l = arr[0], r = arr[arr.length - 1], diff = l;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] - i !== diff) {
      while(diff < arr[i] - i) {
        missing.push(diff + i);
        diff++;
      }
    }
  }
  return missing;
}

export function findMissingElementsSpace(arr: number[]) {
  if (!isSorted(arr)) {
    bgRed('Array should be sorted!');
    return;
  }
  const missing = [];
  const l = arr[0], r = arr[arr.length - 1];
  const h = new Array(r).fill(0);
  for (let i = 0; i < arr.length; i++) {
    h[arr[i]]++;
  }
  for (let i = l; i < r; i++) {
    if (h[i] === 0) missing.push(i);
  }
  return missing;
}

export function duplicates(arr: any[]) {
  const hash = {};
  for(let i = 0; i < arr.length; i++) {
    hash[arr[i]] = hash[arr[i]] ? ++hash[arr[i]] : 1;
  }
  return Object.keys(hash).filter(key => hash[key] > 1);
}

export function duplicatesInPlace(nums: number[]) {
  const dups = [];
  for (let i=0;i<nums.length;i++) {
      const index = Math.abs(nums[i]) - 1;
      if (nums[index] > 0) {
          nums[index] = nums[index] * -1;
      } else {
          dups.push(index + 1);
      }
  }
  return dups;
}

export function sumOfPair(sum: number, arr: any[]) {
  const hash = {};
  const pairs = [];
  for(let i = 0; i < arr.length; i++) {
    if (hash[arr[i]]) { 
      pairs.push(`(${arr[i]}, ${hash[arr[i]]}) `); 
    } else {
      hash[sum - arr[i]] = arr[i];
    }
  }
  return pairs;
}

export function sumOfPairSorted(sum: number, arr: any[]) {
  let i = 0, j = arr.length - 1;
  const pairs = [];
  while (i < j) {
    if (arr[i] + arr[j] === sum) {
      pairs.push(`(${arr[i]}, ${arr[j]}) `);
      i++;
      j--;
    } else if (arr[i] + arr[j] < sum) {
      i++;
    } else {
      j--;
    }
  }
  return pairs;
}

export function deleteDuplicatesSortedInPlace(arr: any[]) {
  if (!isSorted(arr)) {
    bgRed('Array must be sorted!');
    return;
  }
  let k = 0;
  for(let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i+1]) {
      arr[k++] = arr[i];
    }
  }
  for (let i = k; i < arr.length; i++) {
    arr[k++] = undefined;
  }
  return arr;
}

export function removeElementInPlace(nums: number[], val: number) {
  let k = 0;
  for (let i=0;i<nums.length;i++) {
      if (nums[i] !== val) {
          nums[k++] = nums[i];
      }
  }
  for(let i=k;i<nums.length;i++) {
      nums[i] = undefined;
  }
  return k;
};
