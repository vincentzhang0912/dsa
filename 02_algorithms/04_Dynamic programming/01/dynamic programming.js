// Fibonnaci sequence using recursion
/*
function fib(n){
    if (n<=1)
        return n;
    else
        return fib(n-1) + fib(n-2);
}
console.log(fib(5));//5
console.log(fib(150));//5
*/
// Dynamic programming
// top-down approach or memoization
// Step 1: declare an array space to store calculated results. so that you wouldn't repeat the tasks

/*

let n = 100;
let F = new Array(n+1).fill(-1);
function fib(n){
    if (F[n] !== -1)
        return F[n];
    if (n <= 1) 
        F[n] = n;
    else 
        F[n] = fib(n-1) + fib(n-2);
    return F[n];
}

console.log(fib(n));
*/

// Bottom-up approach
/*
let n = 5;
function fib(n) {
    let F = [];
    F[0] = 0;
    F[1] = 1;
    for (let i = 2; i <= n; i++)
        F[i] = F[i-1] + F[i-2];
    return F[n];
}
console.log(fib(n));
*/

// Avoiding the memory for array
let n = 100;
function fib(b){
    let current = 0;
    let prev2 = 0;
    let prev = 1;
    for(let i = 2; i < n; i++){
        current = prev + prev2;
        prev2 = prev;
        prev = current;
    }
    return current;
}
console.log(fib(n));