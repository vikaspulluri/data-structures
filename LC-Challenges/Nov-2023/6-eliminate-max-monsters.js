/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */
var eliminateMaximum = function(dist, speed) {
    const avgDist = new Float32Array(dist.length);
    let maxCount = 0;
    for (let i=0;i<dist.length;i++) {
        avgDist[i] = dist[i] / speed[i];
    }

    avgDist.sort((a,b) => a - b);
    let itCount = 0;
    console.log(avgDist)
    for (let i=0;i<avgDist.length;i++) {
        console.log({avgDist: avgDist[i], itCount})
        if (avgDist[i] <= itCount) {
            return maxCount;
        }
        maxCount++;
        itCount++;
    }
    return maxCount;
};

const result = eliminateMaximum([5,4,3,3,3], [1,1,5,3,1]);
console.log('result', result);