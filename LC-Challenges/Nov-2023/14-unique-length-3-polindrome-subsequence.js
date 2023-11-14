/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function(s) {
    const set = new Set(s);
    let result = 0;

    for (const letter of set) {
        let i = -1;
        let j = 0;

        for (let k=0;k<s.length;k++) {
            if (s.charAt(k) === letter) {
                if (i == -1) {
                    i = k;
                }

                j = k;
            }
        }

        const between = new Set();
        for (let k = i+1;k<j;k++) {
            between.add(s.charAt(k));
        }

        result += between.size;
    }
    return result;
};

/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequenceOther = function(s) {
    const result = new Set(); // key as (mid, outer) and at most of 26^2 keys
    const left = new Set();
    const right = new Map();

    for (const char of s) {
        right.set(char, (right.get(char) || 0) + 1);
    }

    for (let i=0;i<s.length;i++) {
        right.set(s[i], right.get(s[i]) - 1);

        if (right.get(s[i]) === 0) {
            right.delete(s[i]);
        }

        let j = 0;
        while (j < 26) {
            const char = String.fromCharCode('a'.charCodeAt(0) + j);
            if (left.has(char) && right.has(char)) {
                result.add(s[i] + char);
            }
            j++;
        }
        left.add(s[i]);
    }
    return result.size;
};