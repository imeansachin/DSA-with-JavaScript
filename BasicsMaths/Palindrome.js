// Palindrome Number
// You are given an integer n. You need to check whether the number is a palindrome number or not. Return true if it's a palindrome number, otherwise return false.

function isPalindrome(n){
    let reversed = 0 ;
    let duplicate = n;

    while (n>0){
        let lastDigit = n%10;

        reversed = reversed*10 + lastDigit;
        n = Math.floor(n/10);
    }
      
    if (reversed == duplicate){
        return true;
    }else{
       return false;
    }


}

console.log(isPalindrome(123321));