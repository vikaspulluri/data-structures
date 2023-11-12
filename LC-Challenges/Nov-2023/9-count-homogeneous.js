/**
 * 1759. count-number-of-homogenous-substrings
 * @param {string} s
 * @return {number}
 */
var countHomogenous = function(s) {
    let count = 0;
    let ans = 0;
    let mod = 1e9 + 7;
    for (let i = 0;i<s.length;i++) {
        if (s[i] === s[i-1]) {
            count++;
        } else {
            count = 1;
        }
        ans = (ans + count) % mod;
    }
    return ans;
};

var countHomogenous2 = function(s) {
    let left = 0, res = 0;
    const n = s.length;
    for (let i=0;i<n;i++) {
        if (s[left] === s[i]) {
            res += i - left + 1;
        } else {
            res++;
            left = i;
        }
    }
    return res % (1e9 + 7);
};