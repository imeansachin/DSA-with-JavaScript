//  Count of odd numbers in Array
// Given an array of n elements. The task is to return the count of the number of odd numbers in the array.

function CountOdd(arr){
    let count = 0;

    for(let i=0; i<arr.length; i++ ){
        if(arr[i]%2 !==0){
            count=count+1;
        }
    }
    return count;
}


console.log(CountOdd([2,3,5,6,7,8,9]));
