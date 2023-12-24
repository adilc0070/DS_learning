function fibonacci(num){
    let arr = [0, 1];
    for(let i = 2; i < num; i++){
        arr[i]=arr[i - 1] + arr[i - 2]
    }
    return arr;
}
console.log(fibonacci(10))
console.log(fibonacci(2));


// big O time complexity O(n)

function fibonacciWhile(num){
    let a=[0,1]
    // while(a.length < num){
    //     a.push(a[a.length - 1] + a[a.length - 2])
    // }
    if(a.length < num){
        let i=2
        while(i<num){
            a[i]=a[i-1]+a[i-2]
            i++
        }
    }
    return a
}
// console.log(fibonacciWhile(4))

function fibonacciDoWhile(num){
    let a=[0,1]
    // do{
    //     a.push(a[a.length - 1] + a[a.length - 2])
    // }while(a.length < num)
    if(a.length < num){
        let i=2
        do{
            a[i]=a[i-1]+a[i-2]
            i++
        }while(i<num)
    }
    return a
}
console.log(fibonacciDoWhile(6))