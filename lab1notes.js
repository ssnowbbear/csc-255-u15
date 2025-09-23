"use strict";
//console.log('hello')
Object.defineProperty(exports, "__esModule", { value: true });
/* while(true){let a = 3; const b = 4; break}
console.log(a,b) //gives compilation error */
let b = true;
b = false;
const s = 'I am a string. I hold text';
const x = 3;
const ar = [12, 4, 2];
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
let i = 0;
while (i < 10) {
    //  console.log(i) 
    i += 1;
} //i++, or i = i +1
// 'in' calls the keys(index), use of in typescript
for (const v of [1, 2, 3, 4]) {
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
//# sourceMappingURL=lab1notes.js.map