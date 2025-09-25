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
//Points
var testPoints = [
    { x: 1, y: 1 },
    { x: 5, y: 5 },
    { x: 2, y: 1.5 },
    { x: 10, y: 10 },
    { x: 2.1, y: 1.6 } //.141
];
//Distance
var distance = function (p1, p2) {
    var distx = p1.x - p2.x;
    var disty = p1.y - p2.y;
    return Math.sqrt((Math.pow(distx, 2)) + (Math.pow(disty, 2)));
};
//Close Function
var closest = function (points) {
    if (points.length < 2) {
        throw new Error("Array must have a minimum of 2 points.");
    }
    var minDist = Infinity;
    var closestPair = {
        pointA: points[0],
        pointB: points[1],
        distance: distance(points[0], points[1]),
    };
    //Iterate through pairs of points
    for (var i = 0; i < points.length; i++) {
        for (var j = i + 1; j < points.length; j++) {
            var pA = points[i];
            var pB = points[j];
            var currentDist = distance(pA, pB);
            if (currentDist < minDist) {
                minDist = currentDist;
                closestPair = {
                    pointA: pA,
                    pointB: pB,
                    distance: currentDist
                };
            }
        }
    }
    return closestPair;
};
var result = closest(testPoints);
console.log("Closest Point A:", result.pointA.x, result.pointA.y);
console.log("Min dist:", result.distance.toFixed(3));
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
// const Ali :     Employee = {name:'Alice', age:22, salary:100000}
// const Bobo :    Employee = {name:'Bob', age:55 , salary:50000}
// const Scrooge : Employee = {name:'Scrooge', age:100, salary:9999999999}
// const Billy :   Employee = {name:'Billy', age:7, salary:10}
// const emps : Employee[] = [Ali,Bobo,Scrooge,Billy]
// console.log('richest is',richest(emps)) //hopefully Scrooge
