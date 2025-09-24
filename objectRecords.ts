//1. Create a function closest that takes in an array of Points 
//(The array contains at least 2 points. 
//Each point containing an x and a y. Use TypeScript and define a Point type.)
//and returns an array of 3 elements [point A, point B, distance(A,B)]
//or an object containing {point A, point B, distance(A,B)} 
//where the distance between point A and B is the smallest for 
//all pair of points A and B. You may need to consider all pair 
//of points. How many pair of points are there? 
//For instance, if there were 5 points, how many distinct pairs 
//can you make using points A B C D E? I count 10 or 20, depending on
//if we think A,B = B,A. They could be counted once or twice. 
// Write some test code (this will mean making your own points).

//2. Given a string s, count the frequencies of lengths of each word. 
//The strings may be arbitrarily large. 
//For an example without a large string:
// > console.log(freqLen('hi my      friend      how are you'))
//returns:
// > {'2':2,'3':3,'6':1}
//Because there are 2 words of length 2, 3 words of length 3, 
//and 1 words of length 6. Return this object where the keys 
//are lengths and the values are frequencies.

//3. Make an Employee type. They have a name (string), 
//an age (number), and a salary (number). Make a function that is 
//given a non-empty array of employees and returns the employee 
// with the highest salary (richest) [We will ignore ties]. Test data:

const Ali :     Employee = {name:'Alice', age:22, salary:100000}
const Bobo :    Employee = {name:'Bob', age:55 , salary:50000}
const Scrooge : Employee = {name:'Scrooge', age:100, salary:9999999999}
const Billy :   Employee = {name:'Billy', age:7, salary:10}

const emps : Employee[] = [Ali,Bobo,Scrooge,Billy]
console.log('richest is',richest(emps)) //hopefully Scrooge