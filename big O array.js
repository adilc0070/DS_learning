// Array's Big O
// insertion, deletion in the end of the array is O(1)
// insertion, deletion in the middle of the array is O(n)
// insertion, deletion in the beginning of the array is O(n)
// searching is O(n)
// access is O(1)
// push / pop is O(1)
// shift / unshift / splice / slice / concat is O(n)
// forEach / map / filter / reduce is O(n)


let arr = [1, 2, 3, 4, 5];
// insertion in the end of the array
arr.push(6); // O(1)
arr.pop() // O(1)

// insertion in the middle of the array
function insertMiddle(arr, index, value) {
    arr.splice(index, 0, value); // O(n)
}

function removeMiddle(arr, index) {
    arr.splice(index, 1); // O(n)
}

// insertion in the beginning of the array
arr.shift();
arr.unshift(0);

// searching
function search(arr, value) {
    for (let i = 0; i < arr.length; i++) { // O(n)
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// access
arr[0]; // O(1)

// push / pop
arr.push(6); // O(1)
arr.pop(); // O(1)

// shift / unshift / splice / slice / concat
arr.shift(); // O(n)
arr.unshift(0); // O(n)
arr.splice(0, 1); // O(n)
arr.slice(0, 1); // O(n)
arr.concat(0); // O(n)


// forEach / map / filter / reduce
arr.forEach((value) => { // O(n)
    console.log(value);
})

let arr2 = arr.map((value)=>{
    return value * 2;
})
console.log(arr2);

let arr3 = arr.filter((value)=>{
    return value % 2 === 0;
})
console.log(arr3);

let arr4 = arr.reduce((acc, value)=>{
    return acc + value;
})
console.log(arr4);
