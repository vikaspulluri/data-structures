let arr = [3,5,1,4,2,6];

function insertion_sort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let key = arr[i];
        console.log('key: ' + key);
		for (let j = i; j > 0; j--) {
			if (key < arr[j-1]) {
				[arr[j],arr[j-1]] = [arr[j-1],arr[j]];
			} else {
              continue;
            }
          console.log('inner: ' + arr.join(', '));
		}
      console.log('outer: ' + arr.join(', '));
	}
}


console.log(arr);

insertion_sort(arr);

console.log(arr);