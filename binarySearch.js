function binarySearch(arr,target){
    let left =0
    let right=arr.length-1
    arr.sort((a,b)=>a-b)

    while(left<=right){
        let mid=Math.floor((left+right)/2)
        console.log("left",left,"right",right,"mid",mid);

        if(arr[mid]==target){
            return mid
        }
        if(target<arr[mid]){
            right=mid-1
        }else{
            left=mid+1
        }
    }
    return -1
}


console.log(binarySearch([10,20,22,24,30,34,36,40,50,64,73,90],73));