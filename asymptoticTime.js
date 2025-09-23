//i want to write a function
//start a timeer 
//call function given to us
//stop timer
//return timer (ms/s)
var start = Date.now();
var cnt = 0;
for (var i = 0; i < Math.pow(10, 8); i++)
    cnt++;
var end = Date.now();
console.log(start);
console.log(end - start);
console.log((end - start) / 1000);
function timer(f) {
    var start = Date.now();
    f();
    var end = Date.now();
    return (end - start) / 1000;
}
function countTo100Million() {
    var cnt = 0;
    for (var i = 0; i < Math.pow(10, 8); i++)
        cnt++;
}
function isPrime(n) {
    for (var i = 2; i <= Math.sqrt(n);)
        if (n % i == 0)
            return false;
    return n > 1;
}
console.log('Billion prime', timer(function () { return isPrime(Math.pow(10, 9) + 7); }));
console.log(timer(countTo100Million));
console.log(timer(function () {
    var cnt = 0;
    for (var i = 0; i < Math.pow(10, 8); i++)
        cnt++;
}));
