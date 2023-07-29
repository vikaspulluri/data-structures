export function randomArray(size = 25, fill = true) {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = fill ? Math.floor(Math.random() * 100) : 0;
  }
  return arr;
}

export function random2DArray(m = 10, n = 10, fill = true) {
  const rows = new Array(m);
  for (let i = 0; i < m; i++) {
    const cols = new Array(n);
    for (let j = 0; j < n; j++) {
      cols[j] = fill ? Math.floor(Math.random() * 100) : 0;
    }
    rows[i] = cols;
  }
  return rows;
}
