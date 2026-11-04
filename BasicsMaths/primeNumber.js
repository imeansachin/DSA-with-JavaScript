// Check for Prime Number
// You are given an integer n. You need to check if the number is prime or not. Return true if it is a prime number, otherwise return false.

function isPrime(n){

     let count = 0 ; 
     for(let i = 1; i<=n; i++){
       if(n%i===0){
            count++;
         }
     }
         if(count==2){
            return true;
         } else{
            return false;
         }

}

console.log(isPrime(23));
console.log(isPrime(24));