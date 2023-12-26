function searchElementPosition(arr, target){
    for (i=0;i<arr.length;i++){
        if(arr[i]==target) return i
    }
    return -1
}

console.log(searchElementPosition([1,5,7,9,2,4,62,4,8,5],9));