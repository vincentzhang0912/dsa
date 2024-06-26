function sumFirstN(n) {
  //base case
  if(n ===1 || n === 0){
    return 1;
  }
  //recursive case
  return n + sumFirstN(n-1);
}
console.log(sumFirstN(3));