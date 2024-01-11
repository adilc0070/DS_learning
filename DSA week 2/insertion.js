function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        let nextToInsert=arr[i]
        let j=i-1
        while(j>=0&&arr[j]>nextToInsert){
            arr[j+1]=arr[j]
            j-=1
        }
        arr[j+1]=nextToInsert
    }
    console.log(arr);
    
}


insertionSort([955,5,15,8,2,7,89,54,])