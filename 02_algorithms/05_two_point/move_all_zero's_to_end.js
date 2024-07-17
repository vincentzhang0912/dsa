////move all zero's to end
// let X = [4,8,0,0,2,0,1,0];
//[4, 8, 2, 1, 0, 0, 0, 0] //expected output

//brute force
// let result = [];

// for(let i = 0; i < X. length; i++){
//     if(X[i]!==0)
//         result.push(X[i]);
// }

// let zeroSize = X.length - result.length;

// while(zeroSize){
//     result.push(0);
//     zeroSize--;
// }

// console.log(result);


//two pointer approach
let X = [4,8,0,0,2,0,1,0];
console.log(X);
let j = 0;
for(let i = 0; i < X.length; i++){
    if(X[i]!==0){
        if(i!==j){
            X[j] = X[i];
            X[i] = 0;
        }
        j++;
    }
}

console.log(X);


// two pointer approach
arr = [0,1,30,0];

let left = 0;
let right = 0;
while(right < arr.length) {
   
    if(arr[right] !== 0){
        if (left !== right) {
            arr[left] = arr[right];
            arr[right] = 0;
            left++;
        }
    }
    right++;
    
}
    

console.log(arr);