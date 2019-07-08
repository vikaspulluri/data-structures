/*
Find the minimum element in a sorted and rotated array
https://www.geeksforgeeks.org/find-minimum-element-in-a-sorted-and-rotated-array/
*/

function findMin(left, right, arr) {
	if (right < left) return arr[0]; // no rotation
	if (left == right) return arr[left]; // only one element

	let mid = Math.floor(left + (right - left) / 2);
    console.log(`left right mid: ${left} : ${right} : ${mid}`);
  
	if (mid < right && arr[mid + 1] < arr[mid]) {
		return arr[mid + 1];
	}

	if (mid > left && arr[mid - 1] > arr[mid]) {
		return arr[mid];
	}

	if (arr[right] > arr[mid]) {
		return findMin(left, mid - 1, arr);
	} else {
		return findMin(mid + 1, right, arr);
	}
}
let arr = [5, 6, 7, 9, 1, 2, 3, 4];
console.log(findMin(0, arr.length-1, arr));