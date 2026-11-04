function pattern13(n){
    

    let num=1;
    // outer loop
    for(let i=1; i<=n; i++){
        // inner loop

        let row = "";
        

        for(let j=1; j<=i; j++){

            row = row+num + " ";
            num++;


        }

        console.log(row);
    }
}


pattern13(5)