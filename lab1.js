//console.log('hello')
/* while(true){let a = 3; const b = 4; break}
console.log(a,b) //gives compilation error */
var b = true;
b = false;
var s = 'I am a string. I hold text';
var x = 3;
var ar = [12, 4, 2];
ar.push(3); //[12,4,2,3]
//deliberate use case
if (Math.random() < .5)
    var z = 7;
else
    var z = 3;
//console.log(z)
/* const grade = 87
if (grade>=90){console.log('A')}
else if(grade>=80){console.log('B')}
else if(grade>=70){console.log('C')}
else if(grade>=60){console.log('D')}
else {console.log('F')}
 */
//curly braces can be left off for simple statement lines
//forloop syntax:
//initializer; boolean condition; increment
//for(let i=0; i<10; i++){console.log(i)} //sometimes i<ar.length for arrays
//syntactically short version of this^
var i = 0;
while (i < 10) {
    //  console.log(i) 
    i += 1;
} //i++, or i = i +1
// 'in' calls the keys(index), use of in typescript
for (var _i = 0, _a = [1, 2, 3, 4]; _i < _a.length; _i++) {
    var v = _a[_i];
    console.log(v);
}
//takes in x, a number
//returns x+2, another number
function addTwo(x) {
    return x + 2;
}
//takes in s which is a string
//and returns its length, a number
function strLen(s) {
    return s.length;
}
//***First 10 Fibonacci numbers*** // (n-1)+(n-2)
var j = 10;
function Fibonacci(j) {
    var fib = [];
    for (var p = 0; p < j; p++) {
        if (p == 0) {
            fib.push(p);
        }
        if (p == 1) {
            fib.push(p);
        }
        fib.push((p - 1) + (p - 2));
    }
    return fib;
}
console.log(Fibonacci(10));
//***Return sum of 'n' Fibonacci numbers***
//***Function that returns true if 'x' is prime
//and otherwise returns false***
