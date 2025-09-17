// 1) Array of temps in Fahrenheit
const fahrenheitTemps = [0,32,40,72,68,90,104,212]

//convert from fahrenheit to celsius
let celsius: number[] = []
for(let i=0;i<fahrenheitTemps.length;i++){
    celsius.push((fahrenheitTemps[i]-32)*(5/9))
}
console.log('Fahrenheit to Celsius:',celsius)

//remove temp outside comfort range 20c<=temp<25c
let comfRange:number[] = []
for(let i=0;i<celsius.length;i++){
    if(20<=celsius[i]&&celsius[i]<=25){
        comfRange.push(celsius[i]);
    }
}
console.log('Comfort range:',comfRange)

//find max temp in celsius comfort range
const maxCelsius: number = Math.max(...comfRange);
console.log('Max temp in comfort range:',maxCelsius,'\u00B0C')

//find avg temp in celsius comfort range
let comfSum = 0
for(let i=0;i<comfRange.length;i++){
    comfSum+=comfRange[i]
}
let comfAvg = comfSum/comfRange.length
console.log('Average of the comfort range:',comfAvg,'\u00B0C')

// 2) Sort array of strings using array built-in sort method.
//write function to pass into the array's sort function
//that will sort strings based on how many e's are in 
//each word in descending order. May create multiple functions.
const strngs: string[] = ['hello','excellent','here','beekeeper','bejeebers']

function DescendingEs(array:string[]){
    const countE = (strng:string) =>{
        let count = 0;
        for(const letter of strng){
            if(letter.toLowerCase()==='e'){
                count++;
            }
        }
        return count;
    };
    array.sort((a,b)=>{
        const esInB = countE(b);
        const esInA = countE(a);
        return esInB - esInA;
    });
    return array;
}

console.log(DescendingEs(strngs));