function insertion(arr){
    for(let i=0;i<arr.length;i++){
        let nI=arr[i]
        let j=i-1

        while(j>=0&&arr[j]>nI){
            arr[j+1]=arr[j]
            j-=1
        }
        arr[j+1]=nI
    }
    console.log(arr);
}

insertion([2,458,9,6,32,857,1,41,5,8,9])
