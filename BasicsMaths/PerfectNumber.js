 function perfectNumber (num) {
  let sum = 0;
  let duplicate = num;
    for(let i=num-1; i>0; i--){
        if(num%i===0){
            sum=sum+i;
        }
    }

    if(sum === duplicate){
       return true;
    }
    else{
        return false;
    };


};

  

console.log(perfectNumber(6));