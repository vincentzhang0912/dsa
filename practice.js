let s = "ab  c"
let stack = s.split(' ')
console.log(stack)
let poppedValue = stack.pop();

if(poppedValue){
  console.log(true)
} else {
  console.log(false)
}


// let arr2 =[" "] 
// let str = arr2.pop()
// if(str){
//   console.log("pop space is true")
// }