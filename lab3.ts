//Write FUNCTION that returns the max value in an array of numbers
const nums = [5,10,13,81,97,502345,7854,3813,9007,80085]
function findMax(num:number[]):number{
    let maxx = Math.max(...num);
    return maxx;
}
console.log('Max of nums:',findMax(nums))

//Write a FUNCTION that finds the INDEX(location) of the max value in an array of numbers
function findIndex(num:number[]):number{
    let maxx = num[0]
    for(let i=0;i<num.length;i++){
        if(num[i]>maxx)
            num[i]=maxx;
    }
    return maxx;
}
console.log("Index of max value:",findIndex(nums))

//Write a FUNCTION that is passed in an array 
//and returns true if it is ascending order, 
//otherwise return false
const numsAscend = [1,3,4,6,10,200,434,501,1727]
const numsMess = [5,7,9,13,27,49,1472,327,200,153]
const numsLast1 = [1,3,4,5,6,7,13,27,96,145,159,100]

function ascension(num:number[]):boolean{
    for(let i=0;i<num.length;i++){
        if(num.length<=1){
            return true
        }
        if(num[i]>num[i+1]){
            return false
        }
    }
    return true
}
console.log('This array should be true:',ascension(numsAscend))
console.log('This array should be false:',ascension(numsMess))
console.log('This array should also be false:',ascension(numsLast1))

//Find the longest name in an array of strings
const names2:string[] = ['Caleb','Michael','Thomas','Alyssa','Grace','Petunia','Michelle']
const names3:string[] = ['Tim','Zach','Beverely','Terrence','Flora']
const names4:string[] = ['Alexandria','Sarai','Koarbin','Timone','Pumba']

function longestName(str:string[]){
    if(str.length === 0){
        return null;
    }
    let longName:string = str[0]

    for(let i=0;i<str.length;i++){
        if(str[i].length>longName.length){
            longName = str[i]
        }
    }
    return longName
}

console.log("This should return 'Michelle':",longestName(names2))
console.log("This should return 'Beverely':",longestName(names3))
console.log("This should return 'Alexandria':",longestName(names4))

//Print the sum of all the primes less than 50,000
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

//Print the sum of all the primes between 25,000 and 50,000
//In the above code, we created primes, an array containing all primes <100,000.
//How would we instead make an array containing the first 100,000 primes?