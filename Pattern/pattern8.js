function pattern8(n){
    // outer loop 
    for(let i=1; i<=n; i++){
     let row = "";
        // inner loop
        
        // for space
        for(let j=1; j<i; j++){
            row = row + " ";
        }

        // for star
        for (let j=0; j<2*(n-i)+1; j++){
            row = row + "*";
        }

        // for space
        for(let j=1; j<i; j++){
            row = row + " ";
        }

        console.log(row);
    


    }

}




pattern8(4);