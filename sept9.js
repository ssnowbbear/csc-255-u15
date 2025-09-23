"use strict";
// whats a higher order function?
//HOF is a function
//repeatable executable code(frequently passed in data and returns data) CS Def
//mapping between sets ((x,y) coordinates) Math def
Object.defineProperty(exports, "__esModule", { value: true });
/* let x = 0
function myFunc(){
    /* let x = 0*/
/* x++; //do variable outside of function
 console.log('hi')
 console.log('you have called myFunc ${x} number of times') //look at video, do not know what i did wrong
 //in python you may have seen formatted string f'hi {x}'
}
myFunc()
myFunc() */
//identity functions takes in any value/variable/reference and returns it unchanged
function identity(x) {
    return 3;
}
console.log(identity(4));
//arrow functions (also known as lamda expressions) are syntatic sugar
//in other words, generally shorter and more beautiful
//they do not require a name
//const id = (x,y) => x;
//console.log(identity(4), id(4, "hat"))
const id = x => x;
console.log(identity(4), id(4));
//give an number, returns it cubed
function cubed(x) {
    return x * x * x; //x**3
}
console.log(cubed(3));
//write a function that takes in two strings and returns one string (concatenation)
const s = 'hi there';
const t = 'id10t';
function combine(s, t) {
    return s + ' ' + t;
}
console.log(combine('My name is Zach', s));
//myApply function, is passed in a function f, and x
//return f(x)
//myApply is a HOF
function myApply(f, x) {
    return f(x);
}
let ff = x => x + 1;
console.log(myApply(cubed, 2));
console.log(myApply(x => x ** 3, 2));
console.log(myApply(ff, 2));
//type,javascript functions are first class data members
//this means they can be stored in a variable . . . (look on video)
//map,filter,reduce,sort,forEach
//all are HOF functions, all are methods belonging to the array class
//a method is a function belonging to a class
//all take in an array and a funtion
//these functions help us escape loops 
const ar = [1, 7, 4, 5, 9, 2];
console.log(
//ar.map(x=>x+2)
ar.map(x => x ** 2) //ar is passed into map function
);
//map,filter,reduce,forEach leave the array unchanged 
console.log('ar', ar);
//filter takes in an array and a predicate function
//predicate means your function returns a boolean (true/false)
//if an element satisfies the predicate, it evaluates to true
//apply the predicate to all elements, keeping only those that satisfy the predicate
//passed in a number, returns true if and only if x is even otherwise false
function evenFunc(x) {
    return x % 2 == 0;
}
console.log('2 even', evenFunc(2));
console.log('3 even', evenFunc(3));
//arrow function
const evenAr = x => x % 2 == 0;
console.log('2 even', evenAr(2));
console.log('3 even', evenAr(3));
console.log('ar', ar);
const evens1 = ar.filter(evenFunc);
const evens2 = ar.filter(evenAr);
const evens3 = ar.filter(num => num % 2 == 0);
console.log('evens', evens1); //all return an array
let temp = ar.map(x => x ** 3).filter(x => x > 5);
console.log(temp);
// lets say we have an array of strings
const strs = ['apple', 'banana', 'berry', 'orange'];
//only keep strings with even length
//also want an array of lengths
console.log(strs.map(s => s.length).filter(x => x % 2 == 0)); //prints number of letters in each word, only even length
s.concat(); //ask about this after class
//kattis code
//room 107 for code club!!!
//# sourceMappingURL=sept9.js.map