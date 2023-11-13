/**
 * @param {string} s
 * @return {string}
 */
var sortVowels = function(s) {
    const vowelSet = new Set(['A','E','I','O','U','a','e','i','o','u']);
    let vowelsInString = [];
    let newStr = '';
    let k = 0;
    for (const char of s) {
        if (vowelSet.has(char)) {
            vowelsInString.push(char);
        }
    }
    vowelsInString.sort((a,b) => a.charCodeAt(0) - b.charCodeAt(0));
    for (let i=0;i<s.length;i++) {
        const char = s[i];
        newStr += vowelSet.has(char) ? vowelsInString[k++] : char;
    }
    return newStr;
};