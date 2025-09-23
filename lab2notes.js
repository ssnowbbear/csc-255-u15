"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Arrow Functions
let squre = function (x) { return x * x; };
let g = x => x * x;
let square = function (x) { return x * x; };
let f = x => x * x;
// => means 'goes to'
//Array stuff
let stuff = [1, 2, 3, 5, 4];
console.log(stuff);
//Map
//takes in a function as argument,
//returns copy of array with function applied to every element
//***squares every element***
let ans = stuff.map(x => x * x);
console.log(ans);
//Filter 
//Arrow function becomes "where" or "such that"
//returns an array containing all elements that pass a
//predicate test (true or false test)
let xovr2 = stuff.filter(x => x > 2);
console.log(xovr2);
//Reduce
//'reduces' array into 1 element
//sum, max, min are examples of reductions
//sum reduction worth memorizing in professor's opinion
//sum. '0' the second argument == initial value
let sum = stuff.reduce((a, b) => a + b, 0);
console.log(sum);
//max
let max1 = stuff.reduce((a, b) => b > a ? b : a);
let max = stuff.reduce((a, b) => Math.max(a, b));
console.log('max', max, 'max1', max1);
//min --two ways: (checked for max, also has two ways)
let min = stuff.reduce((a, b) => b < a ? b : a);
let min1 = stuff.reduce((a, b) => Math.min(a, b));
console.log('min', min, 'min1', min1);
//NOTE: in arrow function (a,b)=>a+b, A is known as accumulator
//accumulator holds all previous elements combined. B is current element
//ALL TOGETHER NOW!
let allfnctn = stuff.map(x => x * x).filter(x => x % 2 == 0).reduce((a, b) => a + b, 0);
console.log(allfnctn); //added the '2' and '4' from stuff = [1,2,3,5,4]
//Sort
//Don't need for array of strings
//Do need for array of numbers
//pass in function that is given 2 elements
//returns value signifying how to order 2 elements
//usually subtraction pattern
//function you pass in returns negative number, 0, or positive number
//'0' means elements are equal
//'negative' means left element is smaller than right (should be positioned further left in array)
//'positive' means left element is greater than right
let letters = ['z', 'c', 'd'];
letters.sort();
console.log(letters);
let nums = [10, 1, 2];
//not expected
nums.sort(); //[1,10,2] lexicographic ordering
console.log('lexicographic', nums);
nums.sort((acc, boo) => acc - boo); // sort ascending [1,2,10]
console.log('ascending', nums);
nums.sort((acc, boo) => boo - acc); //sort descending [10,2,1]
console.log('descending', nums);
//SUMMARY
//MAP = Alter elements
//FILTER = Remove elements
//REDUCE = Combine elements
//# sourceMappingURL=lab2notes.js.map