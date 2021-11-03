/**
 * Backtracking
 */
let n;
let movesTried = 0;

export default function solveKT(size) {
  n = size;
  const sol = new Array(n).fill(0).map(v => new Array(n).fill(-1)); // nXn matrix
  const xMove = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
  const yMove = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

  // start at first block
  sol[0][0] = 0;

  if (!solveKTUtil(0, 0, 1, sol, xMove, yMove)) {
    console.log('no solution found! Tried moves: ', movesTried);
    return;
  } else {
    console.log('moves tried: ', movesTried);
    printSol(sol);
  }

  return true;

}

function solveKTUtil(x, y, movi, sol, xMove, yMove) {
  if (movi === n * n) return true;
  
  let k, next_x, next_y;

  for (k = 0; k < xMove.length; k++) {
    next_x = x + xMove[k];
    next_y = y + yMove[k];

    if (isSafe(next_x, next_y, sol)) {
      sol[next_x][next_y] = movi;
      movesTried++;
      if (solveKTUtil(next_x, next_y, movi + 1, sol, xMove, yMove)) {
        return true;
      } else {
        sol[next_x][next_y] = -1; // backtracking
      }
    }
  }
  return false;
}

function printSol(sol) {
  sol.forEach(row => console.log(row.join('   ')));
}

function isSafe(x, y, sol) {
  return (x >= 0 && y >= 0 && x < n && y < n && sol[x][y] === -1);
}