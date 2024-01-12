function selection (arr){
    for(let i=0;i<arr.length-1;i++){
        let a=i
        for(let j=i+1;j<arr.length;j++){
            if(arr[a]>arr[j]){
                a=j
            }
        }
        if(a!==i){
            let temp=arr[i]
            arr[i]=arr[a]
            arr[a]=temp
        }
    }
    console.log(arr);
}


selection([95,63,25,2,14,7,8,9,1])