export function lcs_rec(s1, s2, i = 0, j = 0) {
    if (!s1[i] || !s2[j]) return 0;
    else if (s1[i] === s2[j]) {
        return 1 + lcs_rec(s1, s2, i + 1, j + 1);
    } else {
        return Math.max(lcs_rec(s1, s2, i + 1, j), lcs_rec(s1, s2, i, j + 1));
    }
}

export function lcs_memoization(s1, s2) {
    const dp = new Array(s1.length + 1).fill(0).map(v => new Array(s2.length + 1).fill(0));
    return function lcs_memo(i = 0, j = 0) {
        if (!s1[i] || !s2[j]) return 0;
        if (dp[i][j] !== 0) return dp[i][j];
        if (s1[i] === s2[j]) {
            return dp[i][j] = 1 + lcs_memo(i + 1, j + 1);
        } else {
            return dp[i][j] = Math.max(lcs_memo(i + 1, j), lcs_memo(i, j + 1));
        }
    }
}

export function lcs_tabulation(s1, s2) {
    const dp = new Array(s1.length + 1).fill(0).map(v => new Array(s2.length + 1).fill(0));
    const m = s1.length;
    const n = s2.length;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            if (i === 0 || j === 0) {
                dp[i][j] = 0
            } else if (s1[i - 1] === s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            } else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }
    return dp[m][n];
}
