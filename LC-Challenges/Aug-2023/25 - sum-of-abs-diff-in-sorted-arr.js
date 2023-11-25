var getSumAbsoluteDifferences = function(nums) {
    const n = nums.length;
    let result = new Array(n);

    for (let i=0;i<n;i++) {
        let sum_i = 0;
        for (let j=0;j<n;j++) {
            sum_i += Math.abs(nums[i] - nums[j]);
        }
        result[i] = sum_i;
    }
    return result;
};

var getSumAbsoluteDifferencesOpti1 = function(nums) {
    const n = nums.length;
    let result = new Array(n);
    let map = new Map();

    for (let i=0;i<n;i++) {
        if (map.has(nums[i])) {
            result[i] = map.get(nums[i]);
            continue;
        }
        let sum_i = 0;
        for (let j=0;j<n;j++) {
            sum_i += Math.abs(nums[i] - nums[j]);
        }
        result[i] = sum_i;
        map.set(nums[i], sum_i);
    }
    return result;
};

var getSumAbsoluteDifferencesPrefixSum = function(nums) {
    const n = nums.length;
    let result = new Array(n);
    const prefix = [nums[0]];

    for (let i=1;i<n;i++) {
        prefix.push(prefix[i-1] + nums[i]);
    }

    for (let i=0;i<n;i++) {
        let left_sum = prefix[i] - nums[i];
        let right_sum = prefix[n - 1] - prefix[i];

        left_count = i;
        right_count = n - i - 1;

        left_total = left_count * nums[i] - left_sum;
        right_total = right_sum - right_count * nums[i];

        result[i] = left_total + right_total;
    }
    return result;
};

var getSumAbsoluteDifferencesOptiPrefix = function(nums) {
    const n = nums.length;
    let result = new Array(n);
    let total_sum = 0;
    let left_sum = 0;

    for (let i=0;i<n;i++) {
        total_sum += nums[i];
    }

    for (let i=0;i<n;i++) {
        const right_sum = total_sum - nums[i] - left_sum;

        const left_count = i;
        const right_count = n - i - 1;

        const left_total = left_count * nums[i] - left_sum;
        const right_total = right_sum - right_count * nums[i]

        result[i] = left_total + right_total;
        left_sum += nums[i];
    }
    return result;
};