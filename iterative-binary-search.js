let arr = [1,2,3,45,56,67,78,89,90,94,97];

function binary_search(elem, left, right, arr) {
	while (left <= right) {
		let mid = Math.floor(left + (right - left) / 2);
		if (arr[mid] == elem) {
			return mid;
		} else if ( arr[mid] > elem) {
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return false;
}

console.log(arr);

console.log(binary_search(68, 0, arr.length-1, arr));