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
// otherwise return false


//Find the longest name in an array of strings
//Print the sum of all the primes less than 50,000
//Print the sum of all the primes between 25,000 and 50,000
//In the above code, we created primes, an array containing all primes <100,000.
//How would we instead make an array containing the first 100,000 primes?