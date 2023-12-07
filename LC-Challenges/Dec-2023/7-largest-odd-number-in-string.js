/**
 * 1903. Largest Odd Number in String
 * @param {*} num 
 * @returns 
 */
var largestOddNumber = function(num) {
    const n = num.length;
    for (let i=n-1;i>=0;i--) {
        let char = num[i];
        if (Number(char) % 2 === 1) {
            return num.substring(0, i+1);
        }
    }
    return '';
};