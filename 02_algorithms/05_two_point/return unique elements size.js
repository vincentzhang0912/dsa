//return unique elements size from the arr
let a = [1,2,2,3,3];
let left = 0;
for (let right = 1; right < a.length; right++) {
    if (a[left] !== a[right]){
        a[left + 1] = a[right];
        left++;
    }
}
console.log(left+1)