// Reverse a number


// You are given an integer n. Return the integer formed by placing the digits of n in reverse order.

function reverseNumber(n){
    let reversed = 0;

    while (n>0){
        let lastDigit = n%10;
        reversed = reversed*10+lastDigit;
        n= Math.trunc(n/10);
    }
    if (reversed < -2147483648 || reversed > 2147483647) {
    return 0;
}
    return reversed ;
}

console.log(reverseNumber(9564));