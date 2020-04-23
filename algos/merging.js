function merging(x,y) {
  let a = x.slice(); let b = y.slice();
  const c = [];
  a.push(Infinity), b.push(Infinity);
  let i = j = 0;
  while(c.length < a.length + b.length - 2) {
    if (a[i] <= b[j]) {
      c.push(a[i]);
      ++i;
    } else if (a[i] > b[j]) {
      c.push(b[j]);
      ++j;
    }
  }
  return c;
}

// console.log(merging([1,3,5,7],[2,4,6,8]))

module.exports = merging;
