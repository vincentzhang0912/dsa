function majorityElement(nums) {
  // Helper function to recursively find the majority element
  function majorityElementRec(start, end) {
      // Base case: the only element in an array of size 1 is the majority element.
      if (start === end) {
          return nums[start];
      }
      // Calculate the mid index
      const mid = Math.floor((start + end) / 2);

      // Recur on the left and right halves of the array
      const left = majorityElementRec(start, mid);
      const right = majorityElementRec(mid + 1, end);

      // If both halves agree on the majority element, return it
      if (left === right) {
          return left;
      }
      // Otherwise, count the occurrences of each element in the current range
      const leftCount = countInRange(nums, left, start, end);
      const rightCount = countInRange(nums, right, start, end);

      // Return the element that appears more frequently
      return leftCount > rightCount ? left : right;
  }

  // Helper function to count the occurrences of a number in a specific range
  function countInRange(nums, num, start, end) {
      let count = 0;
      for (let i = start; i <= end; i++) {
          if (nums[i] === num) {
              count++;
          }
      }
      return count;
  }
  // Call the helper function on the entire array
  return majorityElementRec(0, nums.length - 1);
}

// Example usage:
const nums = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityElement(nums));  // Output: 2
