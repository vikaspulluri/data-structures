/**
 * 1630. Arithmetic Subarrays
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function(nums, l, r) {
    const m = l.length;
    const answer = new Array(m);

    for (let i=0;i<m;i++) {
        let subArr = nums.slice(l[i], r[i]+1);
        console.log({subArr});
        answer[i] = isArithmetic(subArr);
    }

    return answer;
};

function isArithmetic(arr) {
    arr.sort((a,b) => a-b);
    let diff = arr[1] - arr[0];
    for (let i=2;i<arr.length;i++) {
        if (arr[i] - arr[i-1] !== diff) {
            return false;
        }
    }
    return true;
}

function isArithmeticEfficient(arr) {
    const n = arr.length;
    let min = 1e5, max = -1e5;
    const set = new Set();
    for (let i=0;i<n;i++) {
        min = min < arr[i] ? min : arr[i];
        max = max > arr[i] ? max : arr[i];
        set.add(arr[i]);
    }
    const diff = (max - min)/(n-1);
    if (diff % 1 !== 0) return false; // if float, return false

    let cur = min + diff;
    while (cur < max) {
        if (!set.has(cur)) {
            return false;
        }
        cur += diff;
    }
    return true;
}

const nums = [4,6,5,9,3,7];
const l = [0,0,2];
const r = [2,3,5];

checkArithmeticSubarrays(nums, l, r);