export function print(matrix) {
  for (let i of matrix) {
    console.log(i.join(' '));
  }
}

export function output(val) {
  process.stdout.clearLine(0);
  process.stdout.cursorTo(0);
  process.stdout.write(val);
}