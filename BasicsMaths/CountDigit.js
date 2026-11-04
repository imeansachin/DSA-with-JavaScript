//Problem Statement: Given an integer N, return the number of digits in N.

 
// solution 

function countDigit(n){

    let count = 0;

    while(n>0){
        count = count + 1;
        n=Math.floor(n/10);

    }
    return count;
}

console.log(countDigit(43434543434345));