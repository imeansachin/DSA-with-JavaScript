function pattern12(n){
    // outer loop
    for(let i= 1; i<=n; i++){

        // inner loop 

        // left side part 
        let row="";
        for(let j=1; j<=i; j++){
            row = row+j;
        }
         

        // space between both side

        let space= 2*(n-i);
        
        for(let sp=0; sp<space; sp++){
         row = row + "_"; 
        }


         // right side part 

         for(let k=i; k>=1; k--){
            row = row +k;
         }
                console.log(row);

         }


       
    }



pattern12(7);