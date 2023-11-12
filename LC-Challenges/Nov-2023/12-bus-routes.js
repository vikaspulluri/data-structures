/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    const n = routes.length;
    const map = new Map();
    for (let i=0;i<n;i++) {
        for (let j=0;j<routes[i].length;j++) {
            const busStopNo = routes[i][j];
            const busNo = map.has(busStopNo) ? map.get(busStopNo) : [];
            busNo.push(i);
            map.set(busStopNo, busNo);
        }
    }

    const q = [];
    const busVisited = new Set();
    const busStopVisited = new Set();
    let level = 0;

    q.push(source);
    busStopVisited.add(source);

    while (q.length) {
        let size = q.length;
        while (size-- > 0) {
            const ele = q.shift();
            if (ele === target) {
                return level;
            }
            const buses = map.get(ele);
            for (let bus of buses) {
                if (busVisited.has(bus)) {
                    continue;
                }
                let arr = routes[bus];
                for (let busStop of arr) {
                    if (busStopVisited.has(busStop)) {
                        continue;
                    }
                    q.push(busStop);
                    busStopVisited.add(busStop);
                }

                busVisited.add(bus);
            }
        }
        level++;
    }
    return -1;
};

const routes = numBusesToDestination([[1,2,7],[3,6,7]], 1, 6);
console.log(routes);