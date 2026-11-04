function LCM(a,b){
    function gcd(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }

    return a;
}

    return (a * b) / gcd(a, b);

}

   console.log(LCM(15,12));