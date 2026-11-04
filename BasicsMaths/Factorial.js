// Factorial of a given number
// You are given an integer n. Return the value of n! or n factorial.

// Factorial of a number is the product of all positive integers less than or equal to that number.


function factorial(n){
     let fact = 1;
    if(n != 0){
       
        for(let i = n ; i>0; i--){

            fact = fact * i;


        }
        return fact ;
    }
}

console.log(factorial(5));