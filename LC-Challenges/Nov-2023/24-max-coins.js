/**
 * 1561. Maximum Number of Coins You Can Get
 * @param {*} piles 
 * @returns 
 */
var maxCoinsGreedy = function(piles) {
    piles.sort((a,b) => a-b);

    const n = piles.length;
    let coins = 0;
    let cur = n - 2; // we always get second largest in the pile
    let start = 0; // for bob

    while (cur > 0 && start < cur) {
        coins += piles[cur];
        cur -= 2;
        start++;
    }
    return coins;
};