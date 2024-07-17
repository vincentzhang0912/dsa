/* Given an integer array nums of unique elements, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets. 
Return the solution in any order.


Sample Input 1: 
---------------
1 2 3

Sample Output 1: 
----------------
[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]

Sample Input 2: 
---------------
0

Sample Output 2: 
----------------
[[],[0]]

*/

var readline=require('readline').createInterface({
  input:process.stdin,output:process.stdout});
var s;
readline.question('',function(line){
      arr=line.split(" ");
      var intarr = arr.map(function (x) { 
          return parseInt(x, 10); 
      });
      solution(intarr);
      readline.close();
  });



function solution(nums)
{
  //Write your code here
  let result = [];
  backtrack(result,[],nums,0);
  console.log(result);
}
function backtrack(resultSet, tempSet, nums, start) {
  resultSet.push([...tempSet]);
  for (let i = start; i < nums.length; i++) {
      //including the numbers
      tempSet.push(nums[i]);
      //backtrack the new subset
      backtrack(resultSet, tempSet, nums, i+1);
      //not including the numbers
      tempSet.pop();
  }
}