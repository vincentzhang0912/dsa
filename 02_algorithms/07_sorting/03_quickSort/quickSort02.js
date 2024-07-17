let A = [6, 5, 8, 9, 3, 10, 15, 12, 16];

function quickSort(arr) {
    // Base condition: If the array has one or zero elements, it is already sorted
    if (arr.length < 2) {
        return arr;
    }
    
    // Choose a pivot element from the array (here we choose the first element)
    let pivot = arr[0];
    
    // Create two subarrays: one for elements less than the pivot, and one for elements greater than the pivot
    let left = [];
    let right = [];
    
    // Partition the array into left and right subarrays
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    
    // Recursively sort the left and right subarrays, and combine them with the pivot
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Call quickSort on the array A and print the result
console.log(quickSort(A));
