/* Given a string containing digits from 2-9 inclusive, 
return all possible letter combinations that the number could represent. 
Return the answer in any order.

A mapping of digit to letters (just like on the telephone buttons) is given below. 
Note that 1 does not map to any letters.


Sample Input 1:
--------------
23

Sample Output 1:
----------------
["ad","ae","af","bd","be","bf","cd","ce","cf"]

Sample Input 2:
--------------
""
Sample Output 2:
----------------
[]

Sample Input 3:
--------------
2

Sample Output 3:
----------------
["a","b","c"]


*/

var readline=require('readline').createInterface({
  input:process.stdin,output:process.stdout});
var s;
readline.question('',function(line){
      s=line;
      console.log(solution(s));
      readline.close();
});

var solution = function(digits) {
  if(!digits.length) {
      return [];
  }
  const digitsMap = new Map();
  digitsMap.set('2', ['a','b','c']);
  digitsMap.set('3', ['d','e','f']);
  digitsMap.set('4', ['g','h','i']);
  digitsMap.set('5', ['j','k','l']);
  digitsMap.set('6', ['m','n','o']);
  digitsMap.set('7', ['p','q','r','s']);
  digitsMap.set('8', ['t','u','v']);
  digitsMap.set('9', ['w','x','y','z']);
  
  let result = [];
  function backtrack(current, index) {
      if(index === digits.length) {
          result.push(current.join(''));
          return;
      }
      const letters = digitsMap.get(digits[index]);
      for (let letter of letters) {
          current.push(letter);
          backtrack(current, index + 1);
          current.pop();
      }
  }
  
  backtrack([], 0);
  return result;
  
};