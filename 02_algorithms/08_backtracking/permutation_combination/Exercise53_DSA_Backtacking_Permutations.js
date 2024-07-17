/* Write Javascript program to print all permutations of a given string.

Expected Output :
-----------------
ABC                                                                                                                     
ACB                                                                                                                     
BAC                                                                                                                     
BCA                                                                                                                     
CBA                                                                                                                     
CAB

*/


function permute(str, l, r){
  //Write your code here
  let result = [];
  let temp = [];
  findPermute(temp, str, result);
  // console.log(result);
  result.forEach(character => console.log(character.join('')));
}
function findPermute(temp, str, result){
  if(!str.length){
      result.push(temp.slice());
      return;
  }
  for(let i = 0; i < str.length; i++){
      const newChar = str[i];
      
      temp.push(newChar); //picking the character
      // console.log(temp);
      
      const remainingStr = str.slice(0,i) + str.slice(i+1);
      // console.log(str);
      
      findPermute(temp, remainingStr, result);
      
      temp.pop(); //reset the temp before next iteration
      // str = str.slice(i,0,newChar);
  }
}

let str = "ABC";
let n = str.length;
permute(str, 0, n-1);
