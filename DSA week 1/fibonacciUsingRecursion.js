function fib(n) {
    if (n < 2) {
        return n
    }
    return fib(n - 1) + fib(n - 2)
}

console.log(fib(7));

// big O time complexity O(2^n)
