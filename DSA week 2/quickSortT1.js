function quikSort(arr){
    if(arr.length<2){
        return arr
    }
    let pivot=arr[arr.length-1]
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
console.log(quikSort([9,5,6,2,41,7,5,848,3,14,85,32,57,4]))


//Big O
//bestCase O(n)
//worsst Case O(n^2)
//average case O(n log n)