// ***ASSIGNMENT 1***
// LOOK AT CLASS VIDEO AND GOOGLE
// - The array
// - Min
// - Max
// - Sum
// - Avg
// - How many numbers (total)(len)
// - How many evens

//***Array***
const numbers: number[] = [1,3,7,8,10,12,14];
{console.log(numbers)}

//***Min***
const small: number = Math.min(...numbers);
console.log(small) // "..." = looks at the values in the array

//***Max***
const big: number = Math.max(...numbers);
console.log(big)

//***Sum***
let sum = 0
for(let i = 0; i < numbers.length; i++){
    sum+=numbers[i];
}
console.log('sum', sum)

//***Avg***
function avg(sum:number):number{
    return sum/(numbers.length)
}
console.log('Average of numbers',avg(sum))

//***How many in array***
console.log('Length of array:',numbers.length)

//***Finding evens***

function evens(numbers:number[]):number{
    let j = 0
    for (let i = 0; i < numbers.length; i++){
        if(numbers[i]%2==0){
            j++
        }
    }
    return j
}
console.log('Number of evens:',evens(numbers))