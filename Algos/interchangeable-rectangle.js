var interchangeableRectangles = function(rectangles) {
    const n = rectangles.length;
    const map = new Map();
    let pairs = 0;
    for (let i=0;i<n;i++) {
        const [width, height] = rectangles[i];
        const ratio = width / height;
        const val = map.get(ratio) || 0;

        pairs += val;
        map.set(ratio, val + 1);
    }

    return pairs;
};