// Count of Prime Numbers till N
// You are given an integer n. You need to find out the number of prime numbers in the range [1, n] (inclusive). Return the number of prime numbers in the range.

var countPrimes = function(n) {

    if (n <= 2) return 0;

    let prime = new Array(n).fill(true);

    prime[0] = false;
    prime[1] = false;

    for (let i = 2; i * i < n; i++) {

        if (prime[i]) {

            for (let j = i * i; j < n; j += i) {
                prime[j] = false;
            }

        }
    }

    let count = 0;

    for (let i = 2; i < n; i++) {
        if (prime[i]) {
            count++;
        }
    }

    return count;
};


console.log(countPrimes(21));