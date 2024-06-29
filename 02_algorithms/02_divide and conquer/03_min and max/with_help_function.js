const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

let list;

readline.on('line', function(line) {
  list = line.split(' ').map(Number);
  const result = minMax(list);
  console.log(result[0]);
  console.log(result[1]);
  readline.close();
});

function minMax(list) {
  // Internal helper function to perform the recursive divide and conquer
  function findMinMax(A, start, end) {
      let min, max;

      // Base case: If there's only one element
      if (start === end) {
          min = A[start];
          max = A[start];
          return [min, max];
      }

      // Base case: If there are two elements
      if (start + 1 === end) {
          if (A[start] < A[end]) {
              min = A[start];
              max = A[end];
          } else {
              min = A[end];
              max = A[start];
          }
          return [min, max];
      }

      // Recursive case: More than two elements
      let mid = Math.floor((start + end) / 2);
      let leftResult = findMinMax(A, start, mid);
      let rightResult = findMinMax(A, mid + 1, end);

      // Combine results
      min = Math.min(leftResult[0], rightResult[0]);
      max = Math.max(leftResult[1], rightResult[1]);

      return [min, max];
  }

  // Start the recursive process
  return findMinMax(list, 0, list.length - 1);
}
