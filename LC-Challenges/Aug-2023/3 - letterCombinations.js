/**
 * 17. Letter Combinations of a Phone Number
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const results = [];
  if (!digits) return results;
  const map = {
    '2': 'abc',
    '3': 'def',
    '4': 'ghi',
    '5': 'jkl',
    '6': 'mno',
    '7': 'pqrs',
    '8': 'tuv',
    '9': 'wxyz'
  };
  function backtrack(i, cur) {
    if (cur.length === digits.length) {
      results.push(cur);
      return;
    }
    for (let ch of map[digits[i]]) {
      backtrack(i + 1, cur + ch);
    }
  }
  if (digits) {
    backtrack(0, '');
  }
  return results;
};