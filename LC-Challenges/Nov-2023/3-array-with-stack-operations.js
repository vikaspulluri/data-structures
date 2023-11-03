/**
 * 1441. Build an Array With Stack Operations
 * https://leetcode.com/problems/build-an-array-with-stack-operations/
 */
var buildArrayBrute = function(target, n) {
    const result = [];
    let cur = 1;

    for (let i=0;i<target.length;i++) {
        while (cur < target[i]) {
            result.push('Push', 'Pop');
            cur++;
        }

        result.push('Push');
        cur++;
    }
    return result;
};

var buildArrayOther = (target, n) => {
    let curIdx = 0;
    const result = [];
    for (let i=1;i<n;i++) {
        if (curIdx > target.length) {
            break;
        }

        if (target[curIdx] === i) {
            result.push('Push');
            curIdx++;
        } else {
            result.push('Push', 'Pop');
        }
        
    }
    return result;
}