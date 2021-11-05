import { output, print } from './util';

let n;
let tries = 0;
/**
 * 
 * Note that this function is called when "col" queens are already placed
 * in columns from 0 to col -1.
 * So we need to check only left side for attacking queens
 * 
 */
function isSafe(board, row, col) {
  for (let i=0;i<col;i++) { // check this row on left side
    if (board[row][i] === 1) return false; 
  }

  for (let i = row, j = col;i>=0 && j>=0;i--,j--) { // upper diagonal on left side
    if (board[i][j] === 1) return false;
  }

  for (let i = row, j = col;i<n && j>=0;i++,j--) {
    if (board[i][j] === 1) return false; // lower diagonal on left side
  }
  return true;
}

function solveNQueenUtil(board, col) {
  if (col >= n) return true; // all queens placed

  // Consider this column and try placing this queen in all rows one by one
  for (let i = 0;i < n;i++) {
    if (isSafe(board, i, col)) {
      board[i][col] = 1;

      if (solveNQueenUtil(board, col + 1)) return true;
      board[i][col] = 0; // backtrack
    }
  }
  return false;
}

export function solveNQueen(size) {
  n = size;

  let board = new Array(n).fill(0).map(val => new Array(n).fill(0));

  if (!solveNQueenUtil(board, 0)) {
    console.log('no solution exists!');
    return false;
  }
  print(board);
  return true;
}