function pattern14(n){

    let alphabet="abcdefghijklmnopqrstuvwxyz";
    // outer loop
    for(let i =1; i<=n; i++){
        let row = "";
        
        for(let j=0; j<i; j++ ){ 
            row=row+alphabet[j]+ " ";
           
        }
        console.log(row)

    }
}


pattern14(5)

