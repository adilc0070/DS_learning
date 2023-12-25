function isPowOfTow(num){
    if(num <1){
        return false
    }
    while (num > 1){
        if(num %2 !== 0){
            return false
        }
        num/=2
    }
    return true
}
// big O is O(log n)


let isPowOfTowBitWise=function(num){
    if(num < 1){
        return false
    }
    return (num & (num-1))===0
}