//whats a function (reusable executable code)

function seven(){
    return 7;
}

//console.log(seven()+seven())

//function that maps a number to a boolean (true/false)

//6%2==0
//true
//7%2==0
//false

function even(x){
    return x%2==0
}
//if (x%2==0) return true;
//return false;

//console.log('6',even(6))
//console.log('7',even(7))

//lets code odd then

function odd(x){
    return !even(x)
    //return x%2!=0
}

//console.log('6o',odd(6))
//console.log('7o',odd(7))

//index of min
const ar = [7,4,3,5,9]

//let [mini,minv] = [0,ar[0]]

//for(let i = 0; i < ar.length; i++){
  //  if(ar[i]<minv) 
    //    [mini,minv] = [i,ar[i]]

//console.log('mini',mini,'minv',minv);
//return mini;
// look online, messed up code

function minIndex(ar:number[]:number){
    let mini = 0 
    if(ar[i] < ar[mini]) mini = i;
}
// look online, i literally cannot keep up. he is too fast***

//flip 1 coin. randomly tell heads/tails

//if(Math.random()<.5){
  //  console.log('heads')
//}else{
  //  console.log('tails')
//}

//I want to flip 10 coins and print how many heads (loop)
let heads = 0;

for(let i = 0; i < 10; i++){ //put 'heads' in for 'i' to run until 10 heads are flipped
    //console.log(i);
   // console.log(Math.random()<.5? 'heads' : 'tails')
    if(Math.random()<.5){
        console.log('heads');
        //++ and +=1 are the same
        heads++;
    }else{
        console.log('tails')
    }
}
console.log('youve flipped', heads, 'heads')

//how many flips until 10 heads in a row
function flipsTo10HeadsInARow(){
    let [flips,headsInARow] = [0,0]

    while(headsInARow<10){
        //if(//*something*/ break;) known as a loop and a half
        if(Math.random()<.5){
            headsInARow++;
        }else{
            headsInARow=0;
        }
        flips++;
    }
    return flips;
}

//call flipsTo10Heads... 10000 times and report the avg
let flipsum = 0;
for(let i = 0; i < 10000; i++){
    flipsum+=flipsTo10HeadsInARow();
}
//console.log('flips to 10 heads in a row', flips)

