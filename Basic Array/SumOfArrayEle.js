// Given an array arr of size n, the task is to find the sum of all the elements in the array.

function sumofArray(arr,){
    let sum = 0;

    for(let i=0; i<arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sumofArray([1,2,3,45]));