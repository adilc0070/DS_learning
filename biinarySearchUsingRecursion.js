function recusiveBinerySearch(arr,target){
    return search(arr,target,0,arr.length-1)
}

function search(arr,target,left,right){
    if(right<left) return -1
    let midPoint=Math.floor((left+right)/2)
    console.log("left",left,"right",right,"mid",midPoint);
    if(arr[midPoint]==target){
        return midPoint
    }
    if(target<arr[midPoint]){
        return search(arr,target,left,midPoint-1)
    }else{
        return search(arr,target,midPoint+1,right)
    }
}

console.log(recusiveBinerySearch([10,20,22,24,30,34,36,40,50,64,73,90],22))