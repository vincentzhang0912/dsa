let arr = [1, 2, 3, 4];
let k = 3;
let max = 0;

let left = 0;
let right =k-1;
for (let i =0; i< k; i++){
    max += arr[i];
}

let WS = max;

while (right < arr.length -1) {
    left++;
    right++;
    WS = WS+ arr[right] - arr[left-1];
    max = Math.max(max, WS);
}
console.log(max);