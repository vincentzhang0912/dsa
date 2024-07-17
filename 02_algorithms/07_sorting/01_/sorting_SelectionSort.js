/* Write a JavaScript program to perform SELECTION SORT on a given array of elements.

Input Format :
--------------
Line 1: An array of N elements

Output Format :
---------------
Line 1: Numbers, the sorted array elements


Sample Input 1 :
----------------
4 8 7 13 12

Sample Output 1 :
-----------------
4 8 7 12 13

Sample Input 2 :
----------------
10 9 8 7 6 5

Sample Output 2 :
-----------------
5 6 7 8 9 10

*/

let readline=require('readline').createInterface({
  input:process.stdin,output:process.stdout
});
let list;
readline.on('line',function(line){
      list=line.split(' ').map(Number);
      console.log(selectionSort(list));
      readline.close();
});

function selectionSort(list){
 //Write your code here and return array
 let n = list.length;
 for (let i = 0; i < n - 1; i++ ) {
     let minIndex = i;
     for (let j = i + 1; j < n; j++) {
         if (list[j] < list[minIndex]) {
             minIndex = j;
         }
     }
     if (minIndex !== i) {
         let temp = list[i];
         list[i] = list[minIndex];
         list[minIndex] = temp;
     }
 }
 return list;
}
