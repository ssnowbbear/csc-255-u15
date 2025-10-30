//Teacher did in class
function cut(carat:number,small:number):number{
    if(carat<=small) return 1;
    return cut(Math.floor(3*carat/5),small) + cut(Math.floor(2*carat/5),small)
}

console.log(cut(10,2))

//problem 3 
function cut2(carat:number,small:number):number{
    if(carat<=small) return 1;
    //if(carat % 3 == 0) small++;
    if(carat%3==0){
        return cut2(Math.floor(3*carat/5),small+1) + cut2(Math.floor(2*carat/5),small+1)
    }
    else return cut2(Math.floor(3*carat/5),small) + cut2(Math.floor(2*carat/5),small)
}

console.log(cut2(10,2)) //4

//hard problem
const prices = [0, 1, 5, 8, 9, 10, 17, 17, 20]

const memo : Record<number, number> = {};

function solve(carat:number):number{
    if(carat in memo) return memo[carat];
    if(carat <= 1) return prices[carat] //base case
   
    let best = prices[carat]??0; //nullish coalescing (??) look up
    for(let i = 1, j = carat-1; i<=j; i++,j--){
        best = Math.max(best, solve(i)+solve(j))
    }
    return memo[carat]=best;
    //return best
}

console.log('16',solve(16))
console.log('17',solve(17))
console.log('18',solve(18))
console.log('19',solve(19))
console.log('20',solve(20))
//16 carats = value of 44, 17=47, 18=51, 19=52, 20=56
//500=1416


