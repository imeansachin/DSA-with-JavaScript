///// function start  

function pattern15(n){

    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' ;
    /// outer loop
    for(let i=0; i<n; i++){
        let row="";

        // inner loop

        for(let j=0; j<n-i; j++){
            row = row+alphabet[j]; 
        }
        console.log(row);
    }
}

pattern15(5);