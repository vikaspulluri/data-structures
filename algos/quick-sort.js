// last element as pivot
const arr = [10,80,30,90,40,50,70];
function quicksort(arr, low=0, high=arr.length) {
  if (low < high) {
    let pi = partition(arr, low, high-1);
    console.log(pi)
    quicksort(arr, low, pi-1);
    quicksort(arr, pi+1, high);
  }
}
function partition(arr, left, right) {
  const pivot = arr[right];
  let i = left - 1;
  for (let j = left; j <= right-1; j++) {
    if(arr[j] <= pivot) {
      i++;
      [arr[i],arr[j]] = [arr[j],arr[i]];
    }
  }
  [arr[i+1], arr[right]] = [arr[right],arr[i+1]];
  return i+1;
}

quicksort(arr);
console.log(arr);
