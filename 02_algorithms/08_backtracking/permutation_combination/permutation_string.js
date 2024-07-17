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
  if(l === r) {
      console.log(str.join(''));
  } else {
      for (let i = l; i <= r; i++) {
          [str[l], str[i]] = [str[i], str[l]];
          permute(str, l+1, r);
          [str[l], str[i]] = [str[i], str[l]];
      }
  }
  
}

let str = "ABC".split('');
let n = str.length;
permute(str, 0, n-1);