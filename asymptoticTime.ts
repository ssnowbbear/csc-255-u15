//i want to write a function
    //start a timeer 
    //call function given to us
    //stop timer
    //return timer (ms/s)

import types = require("util/types");

const start = Date.now()
let cnt = 0;

for(let i=0;i<10**8;i++) cnt++;
const end = Date.now();

console.log(start);
console.log(end-start);
console.log((end-start)/1000);

function timer(f:()=>any){
    const start = Date.now()
    f()
    const end = Date.now();
    return (end - start)/1000;
}

function countTo100Million(){
    let cnt=0;
    for(let i=0;i<10**8;i++) cnt++
}

function isPrime(n:number):boolean{
    for(let i=2; i<=Math.sqrt(n);)
        if(n%i==0) return false;
    return n>1;
}

console.log(timer(countTo100Million))
console.log(timer(()=>{
    let cnt = 0 
    for(let i=0;i<10**8;i++) cnt++;
}));

//0(1), 0(log2(n)), 0(sqrt(n)), 0(n), 0(nlogn),0(logn)-best, 0(n^2), 0(n^3),...,0(2^n), 0(n!)
//console.log('Billion prime',timer(()=>isPrime(10**9+7))) //does not want to run

const ar = [7,6,5,4,3,8,2]

const n = 10**4;
let cnt1 = 0;
for(let i=0;i<n;i++){
    for(let j=i+1;j<n;j++){
        cnt1++
    }
}
// n*(n-1)/2
// (n^(2-n))/2
console.log(cnt,n*(n-1)/2,(n**2-n)/2)

//selection sort
function selsort(ar:number[]):number[]{
    //find index of smallest value at index >= i, swap values at i and j
    for(let i=0;i<ar.length;i++){
        let bestI = i;
        for(let j=i+1;j<ar.length;j++){
            if(ar[j]<ar[bestI]) bestI=j;
        }
        [ar[i],ar[bestI]]=[ar[bestI],ar[i]] //Did not complete, moves too fast
    }
    return ar //not sure how code was completed
}

//shuffle - modifies ar in place, but also returns a reference
function shuffle(ar:number[]):number{}{
    for(let j=ar.length-1;j>=0;j--){
        const idx = Math.floor(Math.random()*(j+1));
        [ar[j],ar[idx]]=[ar[idx],ar[j]]
    }
}

const n1 = 10**5;
[...Array(n1)].map((_,i)=>i);
shuffle(ar);
console.log('0(n^2) 10^5:',timer(()=>selsort(ar))) //returned 0, something is wrong and i dont know what

//merge xs and ys are sorted
function merge(xs:number[],ys:number[]):number[]{
    const zs : number[] = [];
    let [i,j] = [0,0];
    while (i < xs.length && j < ys.length)
        if(xs[i] <= ys[j]) zs.push(xs[i++])
        else zs.push(ys[j++])
    while(i<xs.length) zs.push(xs[i++])
    while(j<ys.length) zs.push(ys[j++])
    return zs;
}

//msort
//0(nlogn) note: in general is log base 2 
// make a copy. returs a reference to a sorted array
function msort(ar:number[]):number[]{
    //base case
    if(ar.length <=1) return [...ar];
    const mid = Math.floor(ar.length/2)
    const [left,rite] = [ar.slice(0,mid),ar.slice(mid)]
    return merge(msort(left),msort(rite))
}

console.log(msort([7,5,4,3,8,2]))

console.log('0(nlogn) 10^5:', timer(()=>msort(ar2)))

//Lab is web dev
//Thursday is Tim ... dont remember
//Next week is data structures 