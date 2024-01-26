function heapifyDown(arr, heapSize, index) {
    let largest = index;
    let leftChildIndex = 2 * index + 1;
    let rightChildIndex = 2 * index + 2;

    if (leftChildIndex < heapSize && arr[leftChildIndex] > arr[largest]) {
        largest = leftChildIndex;
    }

    if (rightChildIndex < heapSize && arr[rightChildIndex] > arr[largest]) {
        largest = rightChildIndex;
    }

    if (largest !== index) {
        [arr[index], arr[largest]] = [arr[largest], arr[index]];
        heapifyDown(arr, heapSize, largest);
    }
}

function heapSort(arr) {
    let n = arr.length;

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapifyDown(arr, n, i);
    }

    // Heap sort
    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapifyDown(arr, i, 0);
    }

    return arr;
}

// Example usage:
let array = [12, 11, 13, 5, 6, 7];
console.log("Original Array: ", array);
let sortedArray = heapSort(array);
console.log("Sorted Array: ", sortedArray);
