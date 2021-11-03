export function antiClockRotation(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  // rotating mxn matrix will become nxm matrix
  let result = new Array(n).fill(-1).map(val => new Array(m).fill(-1));

  for (let i=0;i<n;i++) {
    for (let j=0;j<m;j++) {
      result[i][j] = matrix[j][n-i-1];
    }
  }
  console.log('before');
  print(matrix);
  console.log('after');
  print(result);
}

// transpose => reverse the rows => it is rotated matrix in anti clockwise direction
export function rotateInPlaceAntiClockwise(matrix) {
  let n = matrix.length;
  print(matrix);
  for(let i=0;i<n;i++) {
    for(let j=i;j<n;j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  console.log('transpose');
  print(matrix);
  let i = 0, j = n-1;
  while(i < j) {
    [matrix[i], matrix[j]] = [matrix[j], matrix[i]];
    i++;
    j--;
  }
  console.log('after reverse');
  print(matrix);
}

// transpose => reverse the columns => it is rotated matrix in clockwise direction
export function rotateInPlaceClockwise(matrix) {
  let n = matrix.length;
  print(matrix);
  for(let i=0;i<n;i++) {
    for(let j=i;j<n;j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
    }
  }
  console.log('transpose');
  print(matrix);
  for(let i=0;i<n;i++) {
    let j = 0;
    // matrix[i] = matrix[i].reverse();
    while (j<Math.floor(n/2)) {
      [matrix[i][j], matrix[i][n-j-1]] = [matrix[i][n-j-1], matrix[i][j]];
      j++;
    }
  }
  console.log('after reverse');
  print(matrix);
}

function print(matrix) {
  for(let i = 0;i<matrix.length;i++) {
    console.log(matrix[i]);
  }
}
