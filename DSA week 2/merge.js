function merge(arr){
    if(arr.length<=1){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let left=arr.slice(0,mid)
    let right=arr.slice(mid)

    return mergeSort(merge(left),merge(right))
}

function mergeSort(left,right){
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

console.log(merge([9,3,56,2,8,4,1,7,8,5,6,2]));