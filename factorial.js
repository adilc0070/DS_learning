function findFactorial(num) {
    let a = 1
    for (i = num; i > 0; i--) {
        a *= i
    }
    return a
}
function findFactorialWhile(num) {
    let a = 1
    while (num > 0) {
        a *= num
        num--
    }
    return a
}
function findFactorialDoWhile(num) {
    let a = 1
    do {
        a *= num
        num--
    } while (num > 0)
    return a
}


function factorial(num) {
    let result = 1
    for (i = 2; i <= num; i++) {
        result = result * i
    }
    return result
}