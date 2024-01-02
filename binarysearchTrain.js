function binarySearch(arr,tar){
    return search(arr,tar,0,arr.length-1)
}

function search(array,target,left,right){
    let mid=Math.floor((left+right)/2)
    if(array[mid]===target){
        return mid
    }

    if(target<array[mid]){
        return search(array,target,left,mid-1)
    }else if(target>array[mid]){
        return search(array,target,mid+1,right)
    }else{
        return null
    }
    
}


let a=[7, 9, 13, 17, 20, 20, 21, 28, 34, 36, 38, 38, 44, 45, 46, 54, 55, 57, 57, 59, 83, 88, 89, 89, 96]


console.log(binarySearch(a,89))