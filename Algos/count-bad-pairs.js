var countBadPairs = function(nums) {
    const n = nums.length;
    const map = new Map();
    let goodPairs = 0;

    for (let i=0;i<n;i++) {
        let diff = nums[i] - i;
        let cur = map.get(diff) || 0;
        goodPairs += cur;
        map.set(diff, cur + 1);
    }

    const totalPairs = n % 2 ? ((n-1)/2) * n : (n/2) * (n-1);

    return totalPairs - goodPairs;
};

countBadPairs([1,2,3,4,5]);