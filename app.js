
function insertion(arr){
    for(let  i=1;i<arr.length;i++){
        let checkingElement=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>checkingElement){
            arr[j+1]=arr[j]
            j-=1
        }
        arr[j+1]=checkingElement
    }
    console.log(arr);
}


insertion([1,5,89,56,3,2,17,45,2,98,4,4651,62])