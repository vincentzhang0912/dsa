/* Write a JS program to find the minimum and maximum of all elements of a given array.

NOTE : Apply Divide and Conquer Algorithm.

Input Format :
--------------
Line 1 : An array of N elements

Output Format :
---------------
Line 1 : A number, the minimum of array elements.
Line 2 : A number, the maximum of array elements.


Sample Input 1 :
----------------
4 1 8 10 7

Sample Output 1 :
-----------------
1
10

Sample Input 2 :
----------------
1 1

Sample Output 2 :
-----------------
1
1

*/

let readline=require('readline').createInterface({
  input:process.stdin,output:process.stdout
});
let list;
readline.on('line',function(line){
      list=line.split(' ').map(Number);
      console.log(minMax(list));
      readline.close();
});

function minMax(list){
 //Write your code here and print min and max
 // Base case
 let min;
 let max;
 let left = 0;
 let right = list.length - 1;
 let mid = Math.floor(right/2);
 // one element
 if (left ===right) {
     min = list[left];
     max = list[left];
     return [min,max];
 }
 // Two elements
 if(right === left + 1) {
     if (list[left] < list[right]) {
         min = list[left];
         max = list[right];
     } else {
         min = list[right];
         max = list[left];
     }
     return [min,max];
 } else {
     // More than two elements
     let leftList = minMax(list.slice(left, mid + 1));
     let rightList = minMax(list.slice(mid + 1, right + 1));
     
     if (leftList[0] < rightList[0]){
         min = leftList[0];
     } else {
         min = rightList[0];
     }
     if (leftList[1] > rightList[1]){
         max = leftList[1];
     } else {
         max = rightList[1];
     }
     return [min, max];
 }
 
  
 
}
