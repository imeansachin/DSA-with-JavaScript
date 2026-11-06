//  Check if the Array is Sorted I
// Given an array arr of size n, the task is to check if the given array is sorted in (ascending / Increasing / Non-decreasing) order. If the array is sorted then return True, else return False.


function ArraySorted(arr){
    
    for(let i = 0; i<arr.length-1; i++){
        if(arr[i]<arr[i+1]){
            return true
        } else {return false}
    }
}

console.log(ArraySorted([4,5,6,7,8]));