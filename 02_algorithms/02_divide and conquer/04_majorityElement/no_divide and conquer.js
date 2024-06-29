
function solution(list){
  //Write your logic here
  let majority = list[0];
  let count = 1;
  for (let i = 1; i < list.length; i ++) {
      if (count === 0){
          majority = list[i];
      }
      if (majority === list[i]) {
          count += 1;
      } else {
          count -= 1;
      }
  }
  console.log(majority);

}