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
var numbers = [1, 3, 7, 8, 10, 12, 14];
{
    console.log(numbers);
}
//***Min***
var small = Math.min.apply(Math, numbers);
console.log(small); // "..." = looks at the values in the array
//***Max***
var big = Math.max.apply(Math, numbers);
console.log(big);
//***Sum***
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log('sum', sum);
//***Avg***
function avg(sum) {
    return sum / (numbers.length);
}
console.log('Average of numbers', avg(sum));
//***How many in array***
console.log('Length of array:', numbers.length);
//***Finding evens***
function evens(numbers) {
    var j = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 == 0) {
            j++;
        }
    }
    return j;
}
console.log('Number of evens:', evens(numbers));
