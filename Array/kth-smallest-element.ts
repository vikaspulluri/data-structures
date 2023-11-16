import { blue, yellow, green, red, cyan } from "../log";

const colors = [blue, yellow, green, red, cyan];

const arr = new Array(500).fill(0).map(v => Math.floor(Math.random() * 2000))

function kthLargestElement(arr, k) {
  let a = [...arr];
  return a[arr.length - k];
}

function kthLargestElementQuickSelect(arr, k) {
  const kth = arr.length - k;
  const nums = [...arr];
  
  function quickSelect(left, right) {
    let pivot = nums[right], p = left;
    for (let i=left;i<right;i++) {
      if (nums[i] <= pivot) {
        [nums[i], nums[p]] = [nums[p], nums[i]];
        p++;
      }
      [nums[p], nums[right]] = [nums[right], nums[p]];

      if (p > kth) {
        return quickSelect(left, p-1);
      } else if (p < kth) {
        return quickSelect(p+1, right);
      } else {
        return nums[p];
      }
    }
  }

  return quickSelect(0, nums.length - 1);
}


function getMin(arr) {
  let min = arr[0], minIndex = 0;
  for (let i=0;i<arr.length;i++) {
    if (arr[i] < min) {
      min = arr[i], minIndex = i;
    }
  }
  return {min, minIndex};
}

// modified bubble sort
// O(n*k) time complexity
function bubble_sort_method(k) {
  const n = arr.length;
  const kLargeElements = new Array(k).fill(0);
  for (let i=0;i<k;i++) {
    for (let j=0;j<n-i-1;j++) {
      if (arr[j] > arr[j+1]) {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
      }
    }
    kLargeElements[i] = arr[n-i-1];
  }
  return kLargeElements;
}
// using temporary array method
// O((n-k) * k) time complexity
function tmp_array_method(k) {
  const tmp = new Array(k).fill(0);
  const n = arr.length;
  // store first k elements in tmp array
  for (let i=0;i<k;i++) {
    tmp[i] = arr[i];
  }
  let {min, minIndex} = getMin(tmp);
  for (let i=k;i<n-1;i++) {
    if (arr[i] > min) {
      tmp[minIndex] = arr[i];
      const mins = getMin(tmp);
      min = mins.min, minIndex = mins.minIndex;
    }
  }
  return tmp;
}

// use sorting
// O(n*logn) time complexity
function sort_method(k) {
  arr.sort((a,b) => b-a);
  return arr.slice(0,k);
}



function logWithTime(callback: Function[], k: number) {
  const start = Date.now();
  callback.forEach(cb => {
    const result = cb.call(this, k);
    const execTime = Date.now() - start;
    const colorIndex = Math.floor(Math.random() * colors.length);
    colors[colorIndex].call(this, `${cb.name} - ${result} - ${execTime.toFixed(2)}`);
  })
}

export function run() {
  logWithTime([
    bubble_sort_method, 
    tmp_array_method, 
    sort_method
  ], 10);
}