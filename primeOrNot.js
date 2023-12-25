function primeOrNot(num) {
    if (num < 2) {
        return false
    }
    for (let i = 2; i < num; i++) { //O(n)
        if (num % i === 0) {
            return false
        }
    }
    // another way
    // for(let i = 2; i <= Math.sqrt(num); i++) { //O(sqrt(n))
    //     if(num % i === 0) {
    //         return false
    //     }
    // }
    return true
}
console.log(primeOrNot(2));