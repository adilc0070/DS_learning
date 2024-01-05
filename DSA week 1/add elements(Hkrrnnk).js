function sumOfArr(arr){
    return arr.reduce((sum,num)=>sum+=num)
}
console.log(sumOfArr([1000000001,1000000002,1000000003,1000000004,1000000005]));