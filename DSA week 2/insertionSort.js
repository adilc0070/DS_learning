function insertionSort(arr){
    for(i=1;i<arr.length;i++){
        let NI=arr[i]
        let j=i-1

        while(j>=0 && arr[j]>NI){
            arr[j+1]=arr[j]
            j=j-1
        }
        arr[j+1]=NI
    }
    console.log(arr);
}

insertionSort([ 3, 2, 1, 4, 5 ])