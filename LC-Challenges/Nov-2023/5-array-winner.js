/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let rounds = 0;
    let winner, prevWinner;
    let winCount = 0;
    while (winCount < k) {
        if (arr[0] > arr[1]) {
            winner = arr[0];
            let [deletedVal] = arr.splice(1,1);
            arr.push(deletedVal);
        } else {
            winner = arr[1];
            let [deletedVal] = arr.splice(0,1);
            arr.push(deletedVal);
        }
        if (winner === prevWinner) {
            winCount++;
        } else {
            prevWinner = winner;
            winCount = 1;
        }
        rounds++;
        console.log({
            prevWinner,
            winner,
            rounds,
            winCount,
            arr
        });
    }
    return winner;
};

getWinner([3,2,1], 10);

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinnerOptimized = function(arr, k) {
    if (k === 1) {
        return Math.max(arr[0], arr[1]);
    }
    if (k >= arr.length) {
        return Math.max(...arr);
    }
    let winner = arr[0];
    let winCount = 0;

    for (let i=1;i<arr.length;i++) {
        if (winner > arr[i]) {
            winCount++;
        } else {
            winner = arr[i];
            winCount = 1;
        }

        if (winCount === k) {
            return winner;
        }
    }
    return winner;
};