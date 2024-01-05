// space cemplexity is refers to the amount of memory used by a program at any given time
// O(1) - constant time
// O(log n) - logarithmic time
// O(n) - linear time
// O(n^2) - quadratic time
// O(n^3) - cubic time
// O(2^n) - exponential time
// O(n!) - factorial time

// example for factorial time
function factorial(n) {
    for (let i = n - 1; i > 1; i--) {
        n *= i;
    }
    return n;
}

// let result = factorial(3);
// console.log(result);


// example for exponential time
function exponential(n) {
    for (let i = 0; i < n; i++) {
        n *= 2;
    }
    return n;
}
let result = exponential(3);
console.log(result);