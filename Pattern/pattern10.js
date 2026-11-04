function pattern10(n){

  
    // outer loop
    for(let i=1; i<=2*n; i++){
        let row="";

        let stars = i;

        if(i>n){
            stars = 2*n-i;
        }


    // inner loop
      for(let j=1; j<=stars; j++){
        row = row+"*";
      }


      console.log(row);
    
    }



}







pattern10(11);