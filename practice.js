isPalindrome = function (s) {
  let sanitizedStr = '';
  for (let char of s) {
    const code = char.charCodeAt(0);
    if (code >= 97 && code <= 122) {
      sanitizedStr += char;
    } else if (code >= 65 && code <= 90) {
      sanitizedStr += String.fromCharCode(code + 32);
    }
  }
  console.log('sanit', sanitizedStr);
  let i = 0, j = sanitizedStr.length - 1;
  while (i <= j) {
    if (sanitizedStr[i] !== sanitizedStr[j]) return false;
    i++;
    j--;
  }
  return true;
};

isPalindrome('0P');