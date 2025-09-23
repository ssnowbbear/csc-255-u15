function sumPrimes(limit:number):number{
    if(limit < 2){
        return 0;
    }
    const isPrime: boolean[] = new Array(limit);
    for(let i=0;i<limit;i++)
        isPrime[i] = true;
    isPrime[0] = false;
    isPrime[1] = false;

    for(let p=2;p*p<limit;p++){
        if(isPrime[p]){
            for(let i=p*p;i<limit;i+=p){
                isPrime[i] = false;
            }
        }
    }

    let sum = 0
    for(let i=2;i<limit;i++){
        if(isPrime[i]){
            sum+=i
        }
    }
    return sum;
}

console.log('The sum of prime numbers less than 50,000 =',sumPrimes(50000))

function sumPrimes1(limit:number):number{
    console.log("The limit received is:",limit)
    if(limit < 2){
        return 0;
    }
    const isPrime: boolean[] = new Array(limit);
    for(let i=0;i<limit;i++) {
        isPrime[i] = true;
    }
    isPrime[0] = false;
    isPrime[1] = false;

    for(let p=2;p*p<limit;p++){
        if(isPrime[p]){
            for(let i=p*p;i<limit;i+=p){
                isPrime[i] = false;
            }
        }
    }

    let sum = 0
    for(let i=2;i<limit;i++){
        if(isPrime[i]){
            sum+=i
        }
    }
    return sum;
}

console.log(sumPrimes1(50000));