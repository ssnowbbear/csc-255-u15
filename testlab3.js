function sumPrimes(limit) {
    if (limit < 2) {
        return 0;
    }
    var isPrime = new Array(limit);
    for (var i = 0; i < limit; i++)
        isPrime[i] = true;
    isPrime[0] = false;
    isPrime[1] = false;
    for (var p = 2; p * p < limit; p++) {
        if (isPrime[p]) {
            for (var i = p * p; i < limit; i += p) {
                isPrime[i] = false;
            }
        }
    }
    var sum = 0;
    for (var i = 2; i < limit; i++) {
        if (isPrime[i]) {
            sum += i;
        }
    }
    return sum;
}
console.log('The sum of prime numbers less than 50,000 =', sumPrimes(50000));
function sumPrimes1(limit) {
    console.log("The limit received is:", limit);
    if (limit < 2) {
        return 0;
    }
    var isPrime = new Array(limit);
    for (var i = 0; i < limit; i++) {
        isPrime[i] = true;
    }
    isPrime[0] = false;
    isPrime[1] = false;
    for (var p = 2; p * p < limit; p++) {
        if (isPrime[p]) {
            for (var i = p * p; i < limit; i += p) {
                isPrime[i] = false;
            }
        }
    }
    var sum = 0;
    for (var i = 2; i < limit; i++) {
        if (isPrime[i]) {
            sum += i;
        }
    }
    return sum;
}
console.log(sumPrimes1(50000));
