function quickSort(arr){
    if(arr.length<=1){
        return arr
    }
    let pivot=arr[arr.length-1]
    let left=[]
    let rigth=[]

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            rigth.push(arr[i])
        }
    }
    return [...quickSort(left),pivot,...quickSort(rigth)]
}

console.log(quickSort([9,7,8,8,5,1,2,3,6,4,8,41,5,7]));