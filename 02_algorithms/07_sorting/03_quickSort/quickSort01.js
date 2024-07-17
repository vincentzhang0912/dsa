// QuickSort
let A = [6,5,8,9,3,10,15,12,16];
let low = 0;
let high = A.length;

function partition(l, h){
    let pivot = A[l];
    let i = l;
    let j = h;
    while(i<j){
        do{
            i++;
        }while(A[i]<=pivot);
        
        do{
            j--;
        }while(A[j]>pivot);
        
        if(i<j){
            let temp = A[j];
            A[j] = A[i];
            A[i] = temp;
        }
    }
    let temp1 = A[j];
    A[j] = A[l];
    A[l] = temp1;
 
    return j;
    
}

function quickSort(l,h){
    let j;
    if(l<h){
        j = partition(l,h);
        quickSort(l, j-1);
        quickSort(j+1, h);
    }
}

console.log(A);
quickSort(low, high);
console.log(A);
