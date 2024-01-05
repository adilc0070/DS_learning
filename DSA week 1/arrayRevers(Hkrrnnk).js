function rev(arr){
    // return arr.reverse() //O(n)
    for(let i = 0; i < arr.length/2; i++){ //O(n/2)
        let temp = arr[i];  
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr
}

console.log(rev([1,5,6,2,8,63,2,56,5]));
