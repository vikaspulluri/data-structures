let arr = [1,2,3,45,56,67,78,89,90,94,97];

function binary_search(elem, left, right, arr) {
    if (left > right) { return false; }
	let mid = Math.floor(left + (right - left) / 2, 10);
    console.log('mid: '  + mid);
    console.log('left and right: ' + left + ' : ' + right);
	if (elem === arr[mid]) {
		return 'position: ' + mid;
	} else if (elem < arr[mid]) {
		return binary_search(elem, left, mid - 1, arr);
	} else {
		return binary_search(elem, mid + 1, right, arr);
	}
}


console.log(arr);

console.log(binary_search(68, 0, arr.length-1, arr));

