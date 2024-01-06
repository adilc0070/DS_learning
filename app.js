function mergeSort(arr){
    if(arr.length<2){
        // console.log(arr);
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let leftA=arr.slice(0,mid)
    let rightA=arr.slice(mid)
    return merge(mergeSort(leftA),mergeSort(rightA))
}
function merge(left,right){
    let sorted=[]
    while(left.length&&right.length){
        if(left[0]<right[0]){
            sorted.push(left.shift())
        }else{
            sorted.push(right.shift())
        }
    }
    return [...sorted,...left,...right]
}
// console.log('sorted Array:',mergeSort([1,78,1,56,12,56,48,59,35,4215,7,8]));
mergeSort([1,78,1,56,12,56,48,59,35,0,4215,7,8])
