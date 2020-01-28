import Stack from './Stack';

function nge(arr) {
  let stack = new Stack();
  let ge = {};
  arr.forEach((ele, i) => {
    if (stack.isEmpty() || ele < stack.top()) {
      stack.push(ele);
    }
    while (ele > stack.top()) {
      let top = stack.pop();
      ge[top] = ele;
    }
    stack.push(ele);
  })
  while (!stack.isEmpty()) {
    ge[stack.pop()] = null;
  }
  return ge;
}
const arr = [1, 3, 2, 4]; //[98, 23, 54, 12, 20, 7, 27]
const result = nge(arr);
console.log(result);
