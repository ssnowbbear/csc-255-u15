//set type
type List<E> = null | {val:E,next:List<E>};

let test:List<string> = null; 
let test1:List<string> = {val:'Z',next:{val:'a',next:{val:'c',next:{val:'h',next:{val:'!',next:null}}}}}

function cons<E>(x:E,xs:List<E>):List<E>{
    return {val:x,next:xs};
}

let testCons = cons("Z",cons("a",cons("c",cons("h",cons("!",null)))));

console.log(testCons) // { val: 'Z', next: { val: 'a', next: { val: 'c', next: [Object] } } }

function toString<E>(xs:List<E>):string{
    if(xs == null) return 'null';
    return xs.val + ' -> ' + toString(xs.next);
}

// Problem 1 & 2
//1)use cons, make list Z -> a -> c -> h -> ! -> null
//2)use toString to print the list from problem 1 to console

let solu1 = toString(cons('Z',cons('a',cons('c',cons('h',cons('!',null))))));

console.log(toString(testCons));
console.log(toString(test1));
console.log(solu1);
console.log(toString(cons('Z',cons('a',cons('c',cons('h',cons('!',null)))))));
    // returns Z -> a -> c -> h -> ! -> null
console.log(toString(test));
    //returns null

//3) head function 

function head<E>(xs:List<E>):E{
    if(xs==null) return []; 
    return xs.val; //value is the front
}

console.log(head(testCons));
console.log(head(test1)); 
    //'Z'
console.log(head(test));
    //red squiggle under return but still returns '[]'

//4) tail function

function tail<E>(xs:List<E>):E{
    if(xs==null) return 'null';
    return xs.next; //
}

console.log(toString(tail(testCons)));
console.log(toString(tail(test1)));
    //a -> c -> h -> ! -> null
console.log(tail(test));
    //returns 'null'


//append to end, problem 5
    //convert array to List<E>
function fromArray<E>(arr:E[]):List<E>{
    if(arr.length == 0) {
        return null;
    }
    return {val:arr[0],next:fromArray(arr.slice(1))} //removes head of array
}

//slice examples 
let exSlice = [3,4,56,8,12]
console.log(exSlice.slice(1),exSlice.slice(2),exSlice)//make copy and leaves array alone
    //returns [ 4, 56, 8, 12 ] [ 56, 8, 12 ] [ 3, 4, 56, 8, 12 ]

function snoc<E>(value:E,xs:List<E>):List<E>{
    if(xs==null) {
        return { val:value, next:null};
    };
    return {
        val: xs.val, next: snoc(value, xs.next)
    }
}

let list = fromArray([1,2,3]);
let newlist = snoc(7,list);
console.log(toString(newlist));
    //returns 1 -> 2 -> 3 -> 7 -> null

function at<E>(xs:List<E>, index:number):E{
    // '&&' combines two booleans and returns true only if both statements are true. has another usage case for short-circuiting
    if(index==0 && xs!=null){
        return xs.val;
    }
    //empty case
    if(xs==null){
        return []
    }
    //move to xs.next
    if(index>0){
        return at(xs.next, index-1);
    }
}

let xs = fromArray([1,5,7,9,3])

console.log(at(xs,3)); //9
console.log(at(xs,2)); //7
console.log(at(test,0)); //[]

//merge attempt
function merge<E extends number | string>(xs:List<E>,ys:List<E>):List<E>{
    //empty or null
    if(xs==null){
        return ys;
    }
    if(ys==null){
        return xs;
    }
    //xs smaller or comes first
    if(xs.val<ys.val){
        return { val:xs.val,next:merge(xs.next,ys) };
    }
    //ys smaller
    else{
        return{ val:ys.val,next:merge(xs,ys.next) };
    }

}

let ys = fromArray([2,4,6])
let zs = merge(xs,ys)

let strngEx = fromArray(['Apple','Box','Zebra','Cracker'])
let strngEx2 = fromArray(['Pancake','Turtle','Gary'])
let mrgStrng = merge(strngEx,strngEx2) 

console.log(toString(zs));
    //1 -> 2 -> 4 -> 5 -> 6 -> 7 -> 9 -> 3 -> null (not sorted)
console.log(toString(mrgStrng));
    //Apple -> Box -> Pancake -> Turtle -> Gary -> Zebra -> Cracker -> null (not sorted)

//helper for merge-sort 
function getMiddle<E>(xs:List<E>):List<E>{
    if(xs==null){ return null; }

    let slow:List<E> = xs;
    let fast:List<E> =xs.next; //makes slow the end of the first half of the list

    //slow moves by 1 and fast moves by 2 until the end of the list
    while(fast != null){
        fast=fast.next;
        if(fast != null){
            slow = slow.next;
            fast = fast.next;
        }
    }
    return slow;
}

function sortLst<E extends number | string>(xs:List<E>):List<E>{
    //list empty, one element
    if(xs == null || xs.next == null){
        return xs;
    }
    //divide and find middle
    let middle = getMiddle(xs);

    //splits the list into halves
    let lft = xs;
    let rght = middle.next;

    //breaks the link between two halves?
    middle.next = null;

    //sorts the list 
    let lftSort = sortLst(lft)
    let rghtSort = sortLst(rght)
    
    //make one list
    return merge(lftSort,rghtSort)
}

let srtXs = sortLst(xs)
let srtYs = sortLst(ys)
console.log(toString(merge(srtXs,srtYs)));
    //1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 9 -> null

let strngSort = sortLst(strngEx)
let strngSort2 = sortLst(strngEx2)
console.log(toString(merge(strngSort,strngSort2)));
    //Apple -> Box -> Cracker -> Gary -> Pancake -> Turtle -> Zebra -> null
