const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/);
//const next = (() => {let i = 0; return () => data[i++]})();
//const nextnum = () =>Number(next());
let lock = 50;
//how many times we hit 0;
let zeroes = 0;
//let [lock,zeroes] = [50, 0] different way to write above
for (const event of data) {
    //event[0] is L or R
    let num = Number(event.substring(1));
    if (event[0] == 'R')
        lock += num;
    else /*L*/
        lock -= num;
    //wraparound logic
    while (lock < 0)
        lock += 100;
    //lock%=100 same as below
    lock = lock % 100;
    if (lock == 0)
        zeroes++;
    console.log(lock);
}
console.log(zeroes);
