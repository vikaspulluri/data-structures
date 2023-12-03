/**
 * 28. Find the Index of the First Occurrence in a String
 * @param {*} haystack 
 * @param {*} needle 
 * @returns 
 */
var strStr = function(haystack, needle) {
    for (let i=0;i<haystack.length;i++) {
        let k = 0;
        while (k < needle.length && needle[k] === haystack[k + i]) {
            if (k === needle.length - 1) {
                return i;
            }
            k++;
        }
    }

    return -1;
};
