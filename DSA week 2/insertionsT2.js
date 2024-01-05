function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let checkingValue=arr[i]
        let j=i-1
        while(j>=0 && arr[j]>checkingValue){
            arr[j+1]=arr[j]
            j-=1
        }
        arr[j+1]=checkingValue
    }
    console.log(arr);
}


insertionSort([9,5,6,2,41,7,5,848,3,14,85,32,57,4])