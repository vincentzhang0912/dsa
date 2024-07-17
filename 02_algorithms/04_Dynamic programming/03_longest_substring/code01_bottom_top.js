/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  let index1 = text1.length;
  let index2 = text2.length;
  let memorization = new Array(index1).fill().map(() => new Array(index2).fill(-1));

  let Find = (i, j) => {
      // Base case
      if (i < 0 || j < 0) {
          return 0;
      }
      // Check if the result is already computed
      if (memorization[i][j] !== -1) {
          return memorization[i][j];
      }
      // If characters match, increase the count
      if (text1[i] === text2[j]) {
          memorization[i][j] = 1 + Find(i - 1, j - 1);
      } else {
          // If characters don't match, take the maximum of either excluding current character of text1 or text2
          memorization[i][j] = Math.max(Find(i - 1, j), Find(i, j - 1));
      }
      return memorization[i][j];
  }

  return Find(index1 - 1, index2 - 1);
};
