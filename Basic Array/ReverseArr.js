// Reverse an array
// Given an array arr of n elements. The task is to reverse the given array. The reversal of array should be inplace.

function ReverseArr(arr){
    let left = 0 ;
    let right = arr.length-1 ;

    while(left<right){
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;

        left ++; 
        right --;
    
    }
    return arr;
}


console.log(ReverseArr([2,3,4,5,6]))
