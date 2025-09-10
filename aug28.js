//
//let x = 7 'let' for variables
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
for (var i = 0; i < 10; i++) {
    console.log('i', i);
}
//let [a,b] = [3,5]
//console.log(++a) // rarely use
//console.log(b++)
//bs value is 6
var ar = [1, 7, 3]; //ar = array
for (var _i = 0, ar_1 = ar; _i < ar_1.length; _i++) {
    var x = ar_1[_i];
    console.log(x);
}
var ar2 = [3, 7, 5, 3,]; //4,2,5,2]
console.log(ar.length);
//min or max... min... start with infinity? or first value? first value
var min = ar[0];
for (var _a = 0, ar_2 = ar; _a < ar_2.length; _a++) {
    var val = ar_2[_a];
    min = Math.min(min, val);
}
console.log('min', min);
var max = Number.MIN_SAFE_INTEGER;
for (var i = 0; i < ar.length; i++) {
    if (max < ar[i])
        max = ar[i];
}
console.log('max', max);
//Math.min(...ar)
//--target esnext for using feature from new updates?
var sum = 0;
for (var i = 0; i < ar.length; i++) {
    sum += ar[i];
}
console.log('sum', sum);
//count evens
var ev = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var cnt = 0;
for (var _b = 0, ev_1 = ev; _b < ev_1.length; _b++) {
    var v = ev_1[_b];
    console.log('# of evens:', cnt);
}
