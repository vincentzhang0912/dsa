

/*
//buttom up approach
let str1 = "acd";
let str2 = "ced";
function lcs (index1, index2) {
    //base condition
    if (index1 < 0 || index2 < 0)
        return 0;
    //if you find the common subsequence
    if(str1[index1] === str2[index2])
        return 1 + lcs(index1 - 1, index2 -1);
    // if you do not find the common subsequence;
    return Math.max(lcs(index1 - 1, index2) , lcs(index1, index2 - 1));
}
console.log(lcs(str1.length - 1, str2.length -1));
*/
