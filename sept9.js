// whats a higher order function?
//HOF is a function
//repeatable executable code(frequently passed in data and returns data) CS Def
//mapping between sets ((x,y) coordinates) Math def
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
var id = function (x) { return x; };
console.log(identity(4), id(4));
//give an number, returns it cubed
function cubed(x) {
    return x * x * x; //x**3
}
console.log(cubed(3));
//write a function that takes in two strings and returns one string (concatenation)
var s = 'hi there';
var t = 'id10t';
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
var ff = function (x) { return x + 1; };
console.log(myApply(cubed, 2));
console.log(myApply(function (x) { return Math.pow(x, 3); }, 2));
console.log(myApply(ff, 2));
//type,javascript functions are first class data members
//this means they can be stored in a variable . . . (look on video)
//map,filter,reduce,sort,forEach
//all are HOF functions, all are methods belonging to the array class
//a method is a function belonging to a class
//all take in an array and a funtion
//these functions help us escape loops 
var ar = [1, 7, 4];
console.log(
//ar.map(x=>x+2)
ar.map(function (x) { return Math.pow(x, 2); }) //ar is passed into map function
);
//map,filter,reduce,forEach leave the array unchanged 
console.log('ar', ar);
s.concat(); //ask about this after class
