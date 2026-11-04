function pattern11(n){

     for(let i = 0; i < n; i++) {

        let row = "";

        for(let j = 0; j <= i; j++) {
            row = row + ((i + j) % 2) + " ";
        }

        console.log(row);
    }
}


pattern11(5);