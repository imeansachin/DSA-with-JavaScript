function pattern16(n){
    let  alphabet="abcdefghijklmnopqrstuvwxyz";
    // outer loop
    for(let i=0; i<n; i++){
        let row="";

        // innner loop

        for(let j=0; j<=i; j++){
            row=row + alphabet[i] + " ";
        }

        console.log(row);
    }
}

    pattern16(5);