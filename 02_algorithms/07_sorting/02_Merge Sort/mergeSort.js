let A = [6, 5, 8, 9, 3, 10, 15, 12, 16];

function mergeSort(arr) {
    // Base condition: If the array has one or zero elements, it is already sorted
    if (arr.length < 2) {
        return arr;
    }
    
    // Find the midpoint of the array
    let mid = Math.floor(arr.length / 2);
    
    // Split the array into two halves
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    
    // Recursively sort the two halves and then merge them
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
    let sortedArr = []; // This will store the merged and sorted array
    
    // While both arrays have elements, compare the first elements and add the smaller one to sortedArr
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr.shift()); // Remove the first element from leftArr and add it to sortedArr
        } else {
            sortedArr.push(rightArr.shift()); // Remove the first element from rightArr and add it to sortedArr
        }
    }
    
    // If there are remaining elements in leftArr or rightArr, add them to sortedArr
    // This is because at this point one of the arrays is empty, and the other one is already sorted
    return [...sortedArr, ...leftArr, ...rightArr];
}

// Call mergeSort on the array A and print the result
console.log(mergeSort(A));
