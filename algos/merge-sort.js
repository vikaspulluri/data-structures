function mergesort(arr, p, r) {
  console.log(p,r)
  if (r > p) {
    let q = Math.floor((p + r)/2);
    mergesort(arr, p, q);
    mergesort(arr, q+1, r);
    return merge(arr, p, q, r);
  }
}

function merge(arr, p, q, r) {
  let l = arr.slice(p,q), l2 = arr.slice(q,r);
  l.push(Infinity); l2.push(Infinity);
  console.log(l,l2)
  let i = 0, j = 0, k = 0;
  while(k < arr.length) {
    if (l[i] <= l2[j]) {
      arr[k] = l[i];
      i++;
    } else {
      arr[k] = l2[j];
      j++;
    }
    k++;
  }
  return arr;
}

//const arr = [10,20,30,40,1,5,7,9];
//console.log(merge(arr, 0, 4, 8))
const arr = [3,6,2,8,9,1,4];
mergesort(arr, 0, arr.length-1)
console.log(arr)
