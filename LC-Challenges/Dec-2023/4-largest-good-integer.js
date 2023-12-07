/**
 * 2264. Largest 3-Same-Digit Number in String
 * @param {*} num 
 * @returns 
 */
var largestGoodInteger = function(num) {
    const len = 3;
    const n = num.length;
    let curMax = '\0';
    if (len > n) {
        return '';
    }

    for (let i=0;i<n-len+1;i++) {
        if (num[i] === num[i+1] && num[i] === num[i+2]) {
            curMax = String.fromCharCode(Math.max(curMax.charCodeAt(0), num.charCodeAt(i)));
        }
    }

    return curMax === '\0' ? '' : curMax.repeat(3);
};