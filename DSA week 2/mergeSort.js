function mergeSort(arr){
    if(arr.length<=1){
        return arr
    }
    let midP=Math.floor(arr.length/2)
    let leftSide=arr.slice(0,midP)
    let rigthSide=arr.slice(midP)
    return merge(mergeSort(leftSide),mergeSort(rigthSide))
}
function merge(leftArr,rightArr){
    let sorted =[]
    while(leftArr.length &&rightArr.length){
        if(leftArr[0]<rightArr[0]){
            sorted.push(leftArr.shift())
        }else{
            sorted.push(rightArr.shift())
        }
    }
    return [...sorted,...leftArr,...rightArr]
}
console.log(mergeSort([35, 48, 59, 8, 35, 48, 59, 4,21,5]))