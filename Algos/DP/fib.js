function fib_rec(n) {
    if (n <= 1) return n;
    return fib_rec(n-1) + fib_rec(n-2);
}

function fib_rec_memoization(x) {
    const memory = new Array(x+1).fill(null);
    return function fib(n = x) {
        if (n <= 1) {
            memory[n] = n;
            return n;
        };
        if (memory[n] !== null) {
            return memory[n];
        }
        memory[n] = fib(n-1) + fib(n-2);
        return memory[n];
    };

}

function fib_iter_tabulation(x) {
    const table = [0, 1];
    for (let i=2;i<=x;i++) {
        table[i] = table[i-1] + table[i-2];
    }
    return table[x];
}

console.log(fib_rec(6));
console.log(fib_rec_memoization(6)());
console.log(fib_iter_tabulation(6));