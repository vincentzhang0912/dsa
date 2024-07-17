var maxProduct = function (nums) {
  let maxProduct = nums[0];
  
  for (let i = 0; i < nums.length; i++){
    let currentProduct = nums[i];
    for(let j = i; j < nums.length; j++){
      currentProduct *= nums[j];
      if (currentProduct > maxProduct){
        maxProduct = currentProduct;
      }
    }
  }
  return maxProduct;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let maxProduct = nums[0];

  for (let i = 0; i < nums.length; i++){
      let currentProduct = 1;
      for(let j = i; j < nums.length; j++){
          currentProduct *= nums[j];
          if (currentProduct > maxProduct){
              maxProduct = currentProduct;
              }
      }
  }
return maxProduct;
/*
  let res = nums[0];
  let [currentMax, currentMin] = [nums[0], nums[0]];
  
  for (let i = 1; i < nums.length; i++) {
      let currentNum = nums[i]
      if (currentNum < 0) {
          [currentMax, currentMin] = [currentMin, currentMax];
      }
      
      currentMax = Math.max(currentMax * currentNum, currentNum)
      currentMin = Math.min(currentMin * currentNum, currentNum)
      res = Math.max(currentMax, res);
  }
  return res;
*/
};