// function pattern17(n) {

//     let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//     for (let i = 0; i < n; i++) {

//         for (let j = 0; j < n - i - 1; j++) {
//             process.stdout.write(" ");
//         }

//         for (let j = 0; j <= i; j++) {
//             process.stdout.write(alphabet[j]);
//         }

//         for (let j = i - 1; j >= 0; j--) {
//             process.stdout.write(alphabet[j]);
//         }

//         console.log();
//     }
// }

// pattern17(5);



function pattern17(n){
    let alphabet = " ABCDEFGHIJKLMNOPQURSTUVWXYZ";

    for(let i=0; i<=n; i++){
        let row = "";
     // space 

     for (let k=1; k<=23; k++){
        row = row + "_";
     }


         // start 
        for(let j=1; j<=i; j++){
            row = row + alphabet[j];
        }

        console.log(row);
    }

}

pattern17(5);