function quikSort(arr){
    if(arr.length<=1){
        return arr
    }
    let pivot=arr[Math.floor(arr.length-1/2)]
    let left=[]
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return [...quikSort(left),pivot,...quikSort(right)]
}

console.log(quikSort( [8, 3, 6, 2, 7, 1, 5, 4]));