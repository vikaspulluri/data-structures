/*
Given two sorted arrays. There is only 1 difference between the arrays.
First array has one element extra added in between. Find the index of the extra element.
*/
function findExtra(a,b) {
  let i = 0, al = a.length, bl = b.length;
  let small = al > bl ? al : bl;
  while (i < small) {
    if (a[i] != b[i]) return i;
    i++;
  }
  return i;
}

console.log(findExtra([1,2,3,5],[1,4,2,3,5]));
