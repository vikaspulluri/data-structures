var totalMoney = function(n) {
    let ans = 0;
    let monday = 1;
    while (n > 0) {
        for (let today=0;today<Math.min(n,7);today++) {
            ans += monday + today;
        }
        n = n-7;
        monday++;
    }
    return ans;
};

var totalMoneyOptim = function(n) {
    let weeks = Math.floor(n / 7);
    const first = 28;
    const last = first + (weeks - 1) * 7;

    const aSum = weeks * (first + last) / 2;

    let monday = 1 + weeks;
    let finalWeek = 0;

    for (let day = 0;day< n % 7;day++) {
        finalWeek += monday + day;
    }

    return aSum + finalWeek;
};