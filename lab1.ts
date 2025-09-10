//***First 10 Fibonacci numbers*** // (n-1)+(n-2)
function Fibonacci(j:number):number[]{ // 'j' is whatever is passed in when function called Fibonacci(12)
    let fib:number[]=[]
    for(let p=0; p<j; p++){
        if(p==0){
            fib.push(p)
        }
        if(p==1){
            fib.push(p)
        }
        //[0,1] 
        // fib[0]+fib[1], fib[1]+fib[2], fib[2]+fib[3]
        if(p>1){
            fib.push((fib[p-1])+(fib[p-2]))
        }
    }
    return fib
}
console.log(Fibonacci(10))

//***Return sum of 'n' Fibonacci numbers***
function FibSum(k:number):number{
    let j:number[] = Fibonacci(k)
    let sum = 0
    for(let i = 0; i<j.length; i++){
        sum+=j[i];
    }
    return sum
}
console.log(FibSum(10))

//***Function that returns true if 'x' is prime
//and otherwise returns false*** DID NOT QUITE FINISH
function primes(x:number):boolean{
    if(x<=1){  
        return false;
    }
    for(let i=2;i<x;i++){
        if(x%1==0) return false;
    }
    return true
}
console.log(primes(27))