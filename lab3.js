//Write FUNCTION that returns the max value in an array of numbers
var nums = [5, 10, 13, 81, 97, 502345, 7854, 3813, 9007, 80085];
function findMax(num) {
    var maxx = Math.max.apply(Math, num);
    return maxx;
}
console.log('Max of nums:', findMax(nums));
//Write a FUNCTION that finds the INDEX(location) of the max value in an array of numbers
function findIndex(num) {
    var maxx = num[0];
    for (var i = 0; i < num.length; i++) {
        if (num[i] > maxx)
            num[i] = maxx;
    }
    return maxx;
}
console.log("Index of max value:", findIndex(nums));
//Write a FUNCTION that is passed in an array 
//and returns true if it is ascending order, 
//otherwise return false
var numsAscend = [1, 3, 4, 6, 10, 200, 434, 501, 1727];
var numsMess = [5, 7, 9, 13, 27, 49, 1472, 327, 200, 153];
var numsLast1 = [1, 3, 4, 5, 6, 7, 13, 27, 96, 145, 159, 100];
function ascension(num) {
    for (var i = 0; i < num.length; i++) {
        if (num.length <= 1) {
            return true;
        }
        if (num[i] > num[i + 1]) {
            return false;
        }
    }
    return true;
}
console.log('This array should be true:', ascension(numsAscend));
console.log('This array should be false:', ascension(numsMess));
console.log('This array should also be false:', ascension(numsLast1));
//Find the longest name in an array of strings
var names2 = ['Caleb', 'Michael', 'Thomas', 'Alyssa', 'Grace', 'Petunia', 'Michelle'];
var names3 = ['Tim', 'Zach', 'Beverely', 'Terrence', 'Flora'];
var names4 = ['Alexandria', 'Sarai', 'Koarbin', 'Timone', 'Pumba'];
function longestName(str) {
    if (str.length === 0) {
        return null;
    }
    var longName = str[0];
    for (var i = 0; i < str.length; i++) {
        if (str[i].length > longName.length) {
            longName = str[i];
        }
    }
    return longName;
}
console.log("This should return 'Michelle':", longestName(names2));
console.log("This should return 'Beverely':", longestName(names3));
console.log("This should return 'Alexandria':", longestName(names4));
//Print the sum of all the primes less than 50,000
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
//Print the sum of all the primes between 25,000 and 50,000
//In the above code, we created primes, an array containing all primes <100,000.
//How would we instead make an array containing the first 100,000 primes?
