/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Sample Input 1:
--------------
2

Sample Output 1:
--------------
2

Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps

Sample Input 2:
--------------
3

Sample Output 2:
--------------
3

Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

*/


var readline=require('readline').createInterface({
  input:process.stdin,output:process.stdout
});
var num;
readline.question('',function(line){
  num=line;
  console.log(solution(num));
  readline.close();
});
let s = [1, 1, 2];
function solution(num){
  //write your code here and return a number
  if (s[num]) {
      return s[num];
  } else {
      for(let i = 3; i <= num; i++){
          s[i] = s[i - 1] + s[i - 2];
      }
      
  }
  
  return s[num];
}