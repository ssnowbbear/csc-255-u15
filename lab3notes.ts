const names = ["Noah","Sarai","Koarbin","Ellie"]
//Array has items that are "elements"
//Elements are accessed by their index which starts at index 0
//Noah = index 0, Sarai = index 1... etc

console.log(names[0]); //Noah
console.log(names[1]); //Sarai
console.log(names[2]); //Koarbin
console.log(names[3]); //Ellie
console.log("# of names:",names.length); //4

const scores = [3.3,4.8,2.2,0.5];
            //   0,  1,  2,  3

names.sort();
console.log(names); //Ellie, Koarbin, Noah, Sarai
//Sorted lexicographically. Numbers will look weird.

const scores1 = [2,10,4,30]
scores1.sort();
console.log("Lexicographically:",scores1)//10,2,30,4
//sorted by the first number. 1 comes before 2 an 3 comes before 4

scores1.sort((a,b)=>a-b); //to sort in ascending order
console.log("Ascending order:",scores1)//2,4,10,30

//((a,b)=>a-b) takes in two values, a and b, and returns
//three-way comparison of them. Returns whether a comes
//before b, is equal to b, or comes after b. 
//negative number means a before b
//0 means a == b
//positive number means a after b
//Allows us to use subtraction to order our numbers
//Javascript calls the function we provide on the
//elements of the array to compare them and find out
//their final sorted location.

//Finding elements (indexOf):
console.log(names.indexOf('Noah'))//2 (because array is sorted)
console.log(names.indexOf('Ellie'))//0 (because array is sorted)
console.log(names.indexOf('missing'))//-1 (because the value isnt found)
//indexOf performs linear search looking for the index of a value

//Adding elements(push):
names.push("Tim")
names.push("Ashley")
console.log(names) //Ellie,Koarbin,Noah,Sarai,Tim,Ashley (does not re-sort)

const last = names.pop(); //"Ashley"
console.log(names) //Ellie,Koarbin,Noah,sarai,Tim
console.log(last) //"Ashley"

//Modifying elements ([]):
names[0] = "Adrian";
names.sort(); //lower case adrian would be added to the end because it is lowercase
console.log(names); //replaces "Ellie" with "Adrian"

//New one
const names1 = ["Adrian","Sam","Kai"]
console.log(names.join(", ")) //"Sam,Kai,Adrian" removes the brackets 

//Looping through arrays:
//our code should work for any size of array
//where we dont know the names or how many there are 

//COMMON WAY:
for(let i=0;i<names1.length;i++){
    //print out whats inside our array at index i
    console.log(names1[i]); //Adrian then Sam then Kai one by one
    console.log(names1[i],names1[i].length);
}

//WHEN YOU DO NOT NEED INDEX VALUES:
for(const name of names1){
}

//Count only names with less than 4 letters example:
let count = 0;
for(let i=0;i<names1.length;i++){
    if(names1[i].length<4){
        count++;
    }
}
console.log('Number of names with less than 4 letters:',count)

//Functional equivalent:
let count2 = names1.filter(n=>n.length<4).length;
console.log("Number of names less than 4 letters:",count2);

//Numbers:
//Find sum of our array of scores.
let sum=0;
for(let i=0;i<scores.length;i++){
    sum = sum + scores[i];//sum+=scores[i];
}
console.log("Sum =",sum);

//Functional same:
let sum1 = scores.reduce((a,b)=>a+b,0)
console.log("Sum 2 =",sum1)

//Max value
let max = scores[0];
for(let i=0;i<scores.length;i++){
    if(max<scores[i]){
        max=scores[i];
    }
}
console.log("Max =",max)

//OR
let max1 = scores[0];
for(let i=0;i<scores.length;i++){
    max1=Math.max(max1,scores[i]);
}
console.log("Max 2 =",max1)

//Functional equivalent
let max2 = scores.reduce((a,b)=>Math.max(a,b))
console.log("Max 3 =",max2)

//Fancy stuff:
//Shallow copy of array
let copy = [...names] //...spreads out iterables(arrays or strings)
//into places that expect one or more elements (like between [] and in function calls)

//Spreads out scores such that
//Math.max(3.3,4.8,2.2,0.5) is called
let max3 = Math.max(...scores);
console.log("Max 4 =",max3);

//Building cool arrays with one liners part one:
let arr = [...Array(10)].map((_,i)=>i);
console.log('Len',arr.length,'Arr',arr)
//len 10 Arr 0,1,2,3,4,5,6,7,8,9
//(_,i)=>i is a function. it has in 2 parameters, _ and i.
//_ passed in the current value of the element
//Since our array was full of blanks,
//we use _ to denote that this variable is ignored.
//i is passed in the index of the current value of our array

//.map((_,i)=>i) means call this function

//Building arrays with one liners part 2:
//Even squares
let n = 15
let ar = [...Array(n)].map((_,i)=>i*i).filter(i=>i%2==0);
console.log(ar)

//Cool arrays with one liners part 3:
//Array of prime numbers up to 100000
function isPrime(n:number):boolean{
    //why do we only need to go up to the square root of n
    for(let i=2; i<=Math.sqrt(n);i++)
        if(n%i==0)return false;
    return n>1
}

let primes = [...Array(100000)].map((_,i)=>i).filter(x=>isPrime(x))

//More complete documentation
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
//or Google 'javascript array' and click the mozilla link.