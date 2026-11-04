function pattern7(n){
    for(let i=1; i<=n; i++){
        let row="";
        // for space
      for(let j=1; j<=n-i; j++){
        row = row+" ";
      }


      // for star
      for(let j=1; j<=2*i-1; j++){
        row=row+"*";
      }

        // for space
      for(let j=1; j<=n-i; j++){
        row = row+" ";
      }
      
      console.log(row);
    
    }

}

pattern7(7);