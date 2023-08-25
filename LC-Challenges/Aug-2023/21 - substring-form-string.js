/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length === 1) return true;
  const maxSubStr = Math.floor(s.length / 2);

  for (let i = 0; i < maxSubStr; i++) {
    if (canFormFullString(s.substring(0, i + 1))) {
      return true;
    }
  }

  function canFormFullString(sub) {
    let tmp = '';
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

// const result = repeatedSubstringPattern('abab');
// console.log(result);