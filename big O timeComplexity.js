//time complecity calculations 


//  O(n) - linear time
//  O(n^2) - quadratic time
//  O(1) - constant time
//  O(log n) - logarithmic time
//  O(n log n) - n log n time
//  O(n^3) - cubic time


// Big O Notation
function largeNum(a){
    return Math.max(...a); // O(n)
}

function oddOrEven(num){
    if(num%2 === 0) return "even"; // O(1)
    return "odd"; // O(1)
}

function search(arr, target){
    for(let i = 0; i < arr.length; i++){ // O(n)
        if(arr[i] === target) return i; // O(1)
    }
    return -1; // O(1)
}

function linear(x){               
    for (let i = 0; i < x; i++) { // O(n)
        console.log(i);           // O(n)
    }
}

// O(n^2)
function quadratic(x){
    for(let i = 0; i < x; i++) { // O(n)
        for(let j = 0; j < x; j++) { // O(n)
            console.log(i, j); 
        }
    }
}
// complexity of this program is O(n)*O(n) = O(n^2)

//example for cubic
function cubic(n){
    for(let i = 0; i < n; i++){ // O(n)
        for(let j = 0; j < n; j++){ // O(n)
            for(let k = 0; k < n; k++){ // O(n)
                console.log(i, j, k);
            }
        }
    }
}
// cubic(3);


// O(log n)
function log(n){
    for(let i = 1; i < n; i *= 2){ // O(log n)
        console.log(i);
    }
}
// log(8);


// O(n log n)
function nLog(n){
    for(let i = 0; i < n; i++){ // O(n)
        for(let j = 0; j < n; j++){ // O(log n)
            console.log(i, j);
        }
    }
}
// nLog(3);

// O(2^n)
function exponential(n){
    for(let i = 0; i < n; i++){ // O(2^n)
        console.log(2**i);
    }
}
// exponential(3);
