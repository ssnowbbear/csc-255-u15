//set type
type List<E> = null | {val:E,next:List<E>};

let test:List<string> = null; 
let test1:List<string> = {val:'Z',next:{val:'a',next:{val:'c',next:{val:'h',next:{val:'!',next:null}}}}}

function cons<E>(x:E,xs:List<E>):List<E>{
    return {val:x,next:xs};
}

let testCons = cons("Z",cons("a",cons("c",cons("h",cons("!",null)))));

console.log(testCons) // { val: 'Z', next: {val: 'a', next: null } }

function toString<E>(xs:List<E>):string{
    if(xs == null) return 'null'
    return xs.val + ' -> ' + toString(xs.next);
}

// Problem 1 & 2
//1)use cons, make list Z -> a -> c -> h -> ! -> null
//2)use toString to print the list from problem 1 to console

let solu1 = toString(cons('Z',cons('a',cons('c',cons('h',cons('!',null))))));

console.log(toString(testCons))
console.log(toString(test1))
console.log(solu1);
console.log(toString(cons('Z',cons('a',cons('c',cons('h',cons('!',null)))))));
// returns Z -> a -> c -> h -> ! -> null

//3) head function 

function head<E>(xs:List<E>):E{
    return xs.val;
}

console.log(head(testCons))
console.log(head(test1)) //'Z'

//4) tail function

function tail<E>(xs:List<E>):E{
    return xs.next;
}

console.log(toString(tail(testCons)));
console.log(toString(tail(test1)));