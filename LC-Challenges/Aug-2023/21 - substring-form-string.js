/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  const n = s.length;
  const maxSubStr = Math.floor(n / 2);

  for (let i=0;i<maxSubStr;i++) {
      if (n % (i + 1) === 0 && canFormFullString(s.substring(0, i + 1))) {
          return true;
      }
  }

  function canFormFullString(sub) {
      let tmp = sub;
      while (tmp.length <= s.length) {
          if (tmp === s) {
              return true;
          }
          tmp += sub;
      }
      return false;
  }
  return false;
};

function repeatedSubstringPatternOptim(str) {
  let s2 = s + s;
  return s2.substring(1,s2.length-1).indexOf(s) > -1;
}

// const result = repeatedSubstringPattern('abab');
// console.log(result);