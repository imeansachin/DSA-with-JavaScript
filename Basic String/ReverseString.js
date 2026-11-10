// 344. Reverse String
// Write a function that reverses a string. The input string is given as an array of characters s.
// You must do this by modifying the input array in-place with O(1) extra memory.


var reverseString = function(arr) {
    let left = 0;
    let right = arr.length-1;

    while(right>left){
        let temp = arr[left];
        arr[left]= arr[right];
        arr[right]=temp;
        
        left ++;
        right --;
    }
};


console.log(reverseString(["h","e","l","l","O"]));