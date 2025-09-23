"use strict";
// Create list of numbers, find:
//Cubes of numbers (**3)
//Sum of numbers
//Min
//Even numbers. (Hint x=>x%2==0)
//Count of the even numbers. (Can use arrays .length property)
//Sum of the even numbers
//Smallest number greater than 1000
//The number of values greater than the average
Object.defineProperty(exports, "__esModule", { value: true });
//(Much?) harder problems to try:
//Create list of strings
//Count total number of characters in list
//Print the strings sorted by length
//Find the longest string without the letter 'e'
//Create an 'and' function that is passed in an array
//of Booleans and returns true only if every element is true
//What should you return if/when given an empty array?
/***Cubes of numbers***/
//function cubes(x:number): number (may not need)
const nums1 = [2, 34, 1000, 8113, 1381, 27, 39, 51];
let cube = x => x ** 3;
console.log(cube(3));
/***Sum***/
let sum1 = nums1.reduce((a, b) => a + b, 0);
console.log(sum1);
/***Min***/
let min2 = nums1.reduce((a, b) => Math.min(a, b));
let min3 = nums1.reduce((a, b) => b < a ? b : a);
console.log('min2:', min2, 'min3:', min3);
/***Even numbers***/ // (x=>x%2==0)
function GetEvnNums(number) {
    const evnNums = [];
    for (let i = 0; i < nums1.length; i++) {
        if (nums1[i] % 2 == 0) {
            evnNums.push(nums1[i]);
        }
    }
    return evnNums;
}
console.log('Evens:', GetEvnNums(nums1));
/***Count of even numbers***/ //arrays .length property?
console.log('# Evens:', GetEvnNums(nums1).length);
/***Sum of evens***/
let evnSum = 0;
for (let i = 0; i < GetEvnNums(nums1).length; i++) {
    evnSum += GetEvnNums(nums1)[i];
}
console.log('Sum of evens:', evnSum);
/***Smallest number > 1000***/
let smllThsnds = [];
for (let i = 0; i < nums1.length; i++)
    if (nums1[i] > 1000) {
        smllThsnds.push(nums1[i]);
    }
const smllThsnd = Math.min(...smllThsnds);
console.log('Smallest number > 1000:', smllThsnd);
/***Number of values > average***/
let grtrAvg = [];
let nums1Sum = 0;
for (let i = 0; i < nums1.length; i++) {
    nums1Sum += nums1[i];
}
let avg1 = nums1Sum / nums1.length;
for (i = 0; i < nums1.length; i++) {
    if (nums1[i] > avg1) {
        grtrAvg.push(nums1[i]);
    }
}
console.log('Numbers > the average:', grtrAvg.length);
//# sourceMappingURL=lab2.js.map