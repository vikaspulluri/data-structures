/**
 * 1582. Special Positions in a Binary Matrix
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    let ans = 0;
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (mat[i][j] === 1 && isSpecial(mat, i, j)) {
                ans++;
            }
        }
    }
    return ans;
};

function isSpecial(mat, i, j) {
    let row = 0;
    let col = 0;
    while (row < mat.length) {
        if (row !== i && mat[row][j] !== 0) {
            return false;
        }
        row++;
    }

    while (col < mat[0].length) {
        if (col !== j && mat[i][col] !== 0) {
            return false;
        }
        col++;
    }

    return true;
}

var numSpecialOptim = function(mat) {
    const m = mat.length;
    const n = mat[0].length;
    let ans = 0;
    const rowCount = new Array(m);
    const colCount = new Array(n);
    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (mat[i][j] === 1) {
                rowCount[i] = (rowCount[i] || 0) + 1;
                colCount[j] = (colCount[j] || 0) + 1;
            }
        }
    }

    for (let i=0;i<m;i++) {
        for (let j=0;j<n;j++) {
            if (mat[i][j] === 1 && rowCount[i] === 1 && colCount[j] === 1) {
                ans++;
            }
        }
    }
    return ans;
};