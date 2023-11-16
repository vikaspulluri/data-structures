/**
 * 1980. Find Unique Binary String
 */

/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
    const n = nums.length;
    const set = new Set(nums);
    function generate(cur) {
        if (cur.length === n) {
            return set.has(cur) ? '' : cur;
        }

        let addZero = generate(cur + '0');
        if (addZero.length > 0) {
            return addZero;
        }

        return generate(cur + '1');
    }

    return generate('');
};

function findUniqueBinaryString(nums) {
    const set = new Set();
    const n = nums.length;
    for (let i=0;i<n;i++) {
        set.add(parseInt(nums[i], 2));
    }
    console.log(set);
    for (let i=0;i<=n;i++) {
        if (!set.has(i)) {
            let ans = i.toString(2);
            while (ans.length < n) {
                ans = '0' + ans;
            }
            return ans;
        }
    }
    return '';
}

/**
 * https://en.wikipedia.org/wiki/Cantor%27s_diagonal_argument
 * @param {*} nums 
 * @returns 
 */
var findDifferentBinaryStringOptim = function(nums) {
    let ans = '';
    for (let i=0;i<nums.length;i++) {
        let cur = nums[i].charAt(i);
        ans = ans + (cur === '0' ? '1' : '0');
    }
    return ans;
 };

findUniqueBinaryString(['000', '001', '010', '011', '100', '101', '110', '111']);