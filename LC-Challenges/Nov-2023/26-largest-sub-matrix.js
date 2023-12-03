var largestSubmatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    let ans = 0;
    
    for (let row=0;row<m;row++) {
        for (let col=0;col<n;col++) {
            if (matrix[row][col] !== 0 && row > 0) {
                matrix[row][col] += matrix[row-1][col];
            }
        }

        let cur_row = [...matrix[row]].sort((a,b) => b-a);
        for (let i=0;i<n;i++) {
            ans = Math.max(ans, cur_row[i] * (i+1)); // cur_row[i] is height, i+1 is base
        }
    }
    return ans;
};

largestSubmatrix([[0,0,1],[1,1,1],[1,0,1]]);