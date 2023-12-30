function binarySearch(arr,t){
    return search(arr,t,0,arr.length-1)
}

function search(arr,target,left,right){
    let mid=Math.floor((left+right)/2)
    if(arr[mid]==target){
        return mid
    }
    if(target<arr[mid]){
        return search(arr,target,left,mid-1)
    }else{
        return search(arr,target,mid+1,right)
    }
    
}


function factorial(n){
    if(n<=0){
        return 1
    }else{
        return n*factorial(n-1)
    }
}

console.log(factorial(2))