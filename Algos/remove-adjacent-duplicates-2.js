/**
 * 1209. Remove All Adjacent Duplicates in String II
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let char = s[0];
    let count = 1;
    let i = 1;
    while (i <= s.length) {
        if (char === s[i]) {
            count++;
        } else {
            char = s[i];
            count = 1;
        }

        if (count === k) {
            let newStr = s.substring(0,i-k+1) + s.substring(i+1,s.length);
            s = newStr;
            i = 0;
            char = s[i];
            count = 1;
        }
        console.log({string: s, i, count})
        i++;
    }
    return s;
};

removeDuplicates('deeedbbcccbdaa', 3)