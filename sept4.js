"use strict";
//roll dice 
//make a function that rolls 2,6 sided dice(2d6) and returns value
Object.defineProperty(exports, "__esModule", { value: true });
console.log(Math.random);
//math.random [0,1) includes 0 but excludes 1
//*6 [0,6) excludes 6
//+1 [1,7)
//math.floor. [1,6] cuts off decimals 
//rolls dice
while (true) {
    console.log(Math.floor(Math.random() * 6 + 1));
}
//I want to make the 2d6 diceroll function
//function cannot start with number 
//x is a parameter, different from argument.
//sitting there is parameter
//passed in is argument
function roll() {
    //Math.random()*12+1 not how dice work
    const r = Math.floor(Math.random() * 6 + 1);
    const x = Math.floor(Math.random() * 6 + 1);
    return r + x;
}
//while(true) console.log(roll())
function roll2() {
    return Math.floor(Math.random() * 6 + 1) + Math.floor(Math.random() * 6 + 1);
}
//we can now use this function. lets find the odds of rolling a 5
//after we will find the odds of all of 2-12
//10**6 = 10^6
let count = 0;
for (let i = 0; i < 1000000; i++) {
    if (roll() == 5)
        count++;
}
console.log(count / 10 ** 6);
//lets find the odds for all #s from 2-12
const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const rolls2 = [];
//for(let i = 0; i<=12; i++) rolls2.push(0)
//const rolls3 = [...Array(12)].map(_=>0)
for (let i = 0; i < 1000000; i++) {
    rolls[roll()]++;
}
console.log(rolls);
for (let i = 2; i <= 12; i++)
    console.log(i, rolls[i] / 10 ** 6);
//make craps function
//simulates one craps game
//return true if we win, false otherwise
function craps() {
    const r = roll();
    if (r == 7 || r == 11)
        return true;
    if (r == 2 || r == 3 || r == 12)
        return false;
    while (true) {
        const r2 = roll();
        if (r == r2)
            return true;
        if (r2 == 7)
            return false;
    }
}
//how do we use craps function, to calculate win rate?
let wins = 0;
for (let i = 0; i < 1000000; i++) {
    if (craps()) {
        wins++;
    }
}
console.log(wins / 1000000); //dont use ==true because could store variable as true
//arrow function
const f = function (x) { return x + 2; };
console.log(f(3));
//short notation
const f2 = x => x + 2;
console.log(f(3));
//# sourceMappingURL=sept4.js.map