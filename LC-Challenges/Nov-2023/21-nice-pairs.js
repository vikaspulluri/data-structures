/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairsBrute = function(nums) {
    const n = nums.length;
    const revs = new Array(n);
    let pairsCount = 0;
    const modulo = 1e9 + 7;
    for (let i=0;i<n;i++) {
        let rev = 0;
        let num = nums[i];
        while (num > 0) {
            let rem = num % 10;
            rev = (rev * 10) + rem;
            num = Math.floor(num / 10);
        }
        revs[i] = rev;
    }

    for (let i=0;i<n-1;i++) {
        for (let j=i+1;j<n;j++) {
            if (nums[i] + revs[j] === nums[j] + revs[i]) {
                pairsCount++;
            }
        }
    }

    return pairsCount % modulo;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var countNicePairsMap = function(nums) {
    const n = nums.length;
    const revs = new Array(n);
    const modulo = 1e9 + 7;
    let map = new Map();
    let pairsCount = 0;
    for (let i=0;i<n;i++) {
        let rev = 0;
        let num = nums[i];
        while (num > 0) {
            let rem = num % 10;
            rev = (rev * 10) + rem;
            num = Math.floor(num / 10);
        }
        revs[i] = nums[i] - rev;
    }

    for (let i=0;i<n;i++) {
        const curVal = map.get(revs[i]) || 0;
        pairsCount = (pairsCount + curVal) % modulo;
        map.set(revs[i], curVal + 1);
    }


    return pairsCount;
};

countNicePairsMap([13,10,35,24,76]);