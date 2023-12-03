/**
 * 1266. Minimum Time Visiting All Points
 * @param {*} points 
 * @returns 
 */
var minTimeToVisitAllPoints = function(points) {
    let ans = 0;
    for (let i=0;i<points.length-1;i++) {
        let curX = points[i][0];
        let curY = points[i][1];
        let targetX = points[i+1][0];
        let targetY = points[i+1][1];
        ans += Math.max(Math.abs(targetX - curX), Math.abs(targetY - curY));
    }
    return ans;
};