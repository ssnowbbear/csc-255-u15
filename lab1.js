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
