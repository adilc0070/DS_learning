function sumOfArr(a,i) {
    if (i === a.length) {
        return 0
    }
    return a[i] + sumOfArr(a,i+1)
}
let b = [12,14,16,17,18,20]


console.log(sumOfArr(b,0));