//Count number of odd digits in a number
//You are given an integer n. You need to return the number of odd digits present in the number.

// The number will have no leading zeroes, except when the number is 0 itself.\

function countOddDigit(n){
    let count = 0; 

    while(n>0){
        const digit = n % 10;
        if(digit % 2 !== 0){
            count = count + 1;
        }
        n = Math.floor(n / 10);
    }
    return count; 

}

    console.log(countOddDigit(3434343465635345));