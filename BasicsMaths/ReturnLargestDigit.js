// 957. Return the Largest Digit in a Number
// You are given an integer n. Return the largest digit present in the number.


function returnLargestDigit(n){
     let largestDigit = 0;
    while(n>0){
        let lastDigit = n%10;

       

        if(lastDigit>largestDigit){
            largestDigit = lastDigit;
        }

        n = Math.floor(n/10);


    }
    return largestDigit;


}




console.log(returnLargestDigit(3487));