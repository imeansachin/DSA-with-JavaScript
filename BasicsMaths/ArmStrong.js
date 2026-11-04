function  isArmStrong(num){
     // first count the number of digits in the number 
     // amd then find cube of each digit and then add them.
     let count = 0;
     
     while(num>0){
        count = count + 1;
        num = Math.floor(num/10);
            
     }

     return count;
}



     console.log(isArmStrong(154));