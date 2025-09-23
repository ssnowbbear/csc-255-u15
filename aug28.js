"use strict";
//
//let x = 7 'let' for variables
Object.defineProperty(exports, "__esModule", { value: true });
//use let and const (they are block scoped)
//const ar2 : number[] = []
//ar2.push(7);
//while(true){
//this is in the while true block
//}
//const r = Math.random()
//if(r<1/3)console.log('A')
//else(r<2/3)console.log('B')
//else console.log('C')
//let j = 0; // dont need semicolon
//while(j<10){
//  console.log(j);
//j++; // j+=1 //j = j + 1
//}
for (let i = 0; i < 10; i++) {
    console.log('i', i);
}
//let [a,b] = [3,5]
//console.log(++a) // rarely use
//console.log(b++)
//bs value is 6
const ar = [1, 7, 3]; //ar = array
for (const x of ar) {
    console.log(x);
}
const ar2 = [3, 7, 5, 3,]; //4,2,5,2]
console.log(ar.length);
//min or max... min... start with infinity? or first value? first value
let min = ar[0];
for (const val of ar) {
    min = Math.min(min, val);
}
console.log('min', min);
let max = Number.MIN_SAFE_INTEGER;
for (let i = 0; i < ar.length; i++) {
    if (max < ar[i])
        max = ar[i];
}
console.log('max', max);
//Math.min(...ar)
//--target esnext for using feature from new updates?
let sum = 0;
for (let i = 0; i < ar.length; i++) {
    sum += ar[i];
}
console.log('sum', sum);
//count evens
const ev = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let cnt = 0;
for (const v of ev) {
    console.log('# of evens:', cnt);
}
//# sourceMappingURL=aug28.js.map