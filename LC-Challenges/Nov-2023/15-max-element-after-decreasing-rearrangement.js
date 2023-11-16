/**
 * 1846. Maximum Element After Decreasing and Rearranging
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    arr.sort((a,b) => a-b);
    let ans = 1;
    for (let i=1;i<arr.length;i++) {
        if (arr[i] >= ans + 1) {
            ans++;
        }
    }
    return ans;
};

function maximumElementAfterDecrementingAndRearrangingNeet(arr) {
    arr.sort((a,b) => a-b);
    let prev = 0;
    for (let i=0;i<arr.length;i++) {
        prev = Math.min(prev + 1, arr[i]);
    }
    return prev;
}

/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearrangingOptim = function(arr) {
    const n = arr.length;
    const count = new Array(n+1).fill(0);
    for (let i=0;i<n;i++) {
        count[Math.min(arr[i], n)]++;
    }
    let ans = 1;
    for (let i=2;i<=n;i++) {
        console.log({val: i, ans, count: count[i], min: Math.min(ans + count[i], i)})
        ans = Math.min(ans + count[i], i);
    }
    console.log({count, ans});
    return ans;
};

maximumElementAfterDecrementingAndRearrangingOptim([1,2,3,4,5,4,4]);