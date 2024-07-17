function permute(nums) {
  const result = [];
  
  function backtrack(path, options) {
      if (path.length === nums.length) {
          result.push([...path]);
          return;
      }
      
      for (let i = 0; i < options.length; i++) {
          path.push(options[i]);
          backtrack(path, options.filter((_, index) => index !== i));
          path.pop();
      }
  }
  
  backtrack([], nums);
  return result;
}

// Example usage:
const nums = [1, 2, 3];
const permutations = permute(nums);
console.log(permutations);


