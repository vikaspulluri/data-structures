/**
 * You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
  let max = 0, min = Infinity, s = 0;
  const n = salary.length;
  for (let i=0;i<n;i++) {
      s = s + salary[i];
      max = salary[i] > max ? salary[i] : max;
      min = salary[i] < min ? salary[i] : min;
  }
  return (s - max - min) / (n - 2);
};