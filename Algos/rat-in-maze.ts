let m;
export function solveMaze(maze) {
  m = maze.length;
  let sol = new Array(m).fill(0).map(val => new Array(m).fill(0));
  if (!solveMazeUtil(maze, 0, 0, sol)) {
    console.log('no solution exist!');
    return false;
  }
  print(sol);
  return true;
}

function solveMazeUtil(maze, x, y, sol) {
  if (x === m-1 && y === m-1 && maze[x][y] === 1) {
    sol[x][y] = 1; 
    return true; // reached destination
  }
  if (isSafe(maze, x, y)) {
    if (sol[x][y] === 1) return false; // already visited
    sol[x][y] = 1;
    if (solveMazeUtil(maze, x+1, y, sol)) return true; // move forward
    if (solveMazeUtil(maze, x, y+1, sol)) return true; // move downward
    if (solveMazeUtil(maze, x-1, y, sol)) return true; // move backward
    if (solveMazeUtil(maze, x, y-1, sol)) return true; // move upward

    sol[x][y] = 0; // backtrack
    return false;
  }
  return false;
}

function isSafe(maze, x, y) {
  return (x >= 0 && y >= 0 && x < m && y < m && maze[x][y] === 1);
}

function print(sol) {
  for (let i of sol) {
    console.log(i);
  }
}