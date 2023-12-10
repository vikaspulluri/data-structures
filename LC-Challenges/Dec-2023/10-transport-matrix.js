/**
 * 867. Transpose Matrix
 * @param {*} matrix 
 * @returns 
 */
var transpose = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    const result = new Array(n).fill(0).map(v => new Array(m));

    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            result[j][i] = matrix[i][j];
        }
    }

    return result;
};