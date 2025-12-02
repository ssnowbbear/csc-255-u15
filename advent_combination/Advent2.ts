// 2) 
    //password method = 0 x 434C49434B
const data : string[] = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/)

let lock = 50;
let zeroes = 0;

for(const event of data) {
    //event[0] is L or R
    let num = Number(event.substring(1))
    if(event[0] =='R') lock+=num;
    //else /*L*/         lock-=num;
    // if(lock==0) zeroes++;
    // while(lock>=100){ lock-=100; zeroes++ };
    // while(lock<0){ lock+=100; zeroes++ };
    //above was too high

    //Zach's brute force
    while(num>0) {
        lock++; num--; lock%=100;
        if(lock == 0) zeroes++;
    };
    while(num<0) {
        lock--; num++; lock+=1000; lock%=100;
        if(lock == 0) zeroes++;
    };
}
console.log(zeroes)

