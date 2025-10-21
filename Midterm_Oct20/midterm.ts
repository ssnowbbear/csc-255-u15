//1) 'take' function-----
    //'Take' is given an integer 'n' and a linked list 'xs.'
    //'take' returns a new linked list consisting of the first
    //'n' elements of 'xs.' You may assume the list has at
    //least 'n' elements. This might mean using '!' to assert
    //your list is not null.
    //let list : List<number> = fromArray([1,2,3,4,5])
    //console.log(toString(take(3,list)))
    //OUTPUT: 1 --> 2 --> 3 --> []

//Misc. functions I need

type List<E> = null | {val: E, next: List<E>}

    //empty
function empty<E>():List<E>{
    return null;
}
 
    //toString
function tooString<E>(xs:List<E>):string{
    if(xs == null) return '[]';
    return xs.val + ' -> ' + tooString(xs.next);
}

    //cons
function cons<E>(x:E,xs:List<E>):List<E>{
    return {val:x,next:xs};
}

    //fromArray
function fromArray<E>(arr:E[]):List<E>{
    return arr.reduceRight((a,b)=>cons(b,a),empty<E>())
}

    //map
function map<A,B>(f: (a:A) => B, xs: List<A>) : List<B>{
    if(xs==null) return null;
    return cons(f(xs.val),map(f,xs.next))
}

    //filter
function filter<T>(p : (a: T) => boolean, xs: List<T>) : List<T>{
    if(xs == null) return null;
    return p(xs.val) ? cons(xs.val,filter(p,xs.next)) : filter(p,xs.next)
}

    //foldr
function foldr<T,A>(f: (val: T, accum: A) => A, e: A,xs: List<T>) : A{
    if(xs==null) return e
    return f(xs.val,foldr(f,e,xs.next))
}


//1)take-----
function take<E>(n:number, xs:List<E>):List<E>{
    if(n<=0){
        return null;
    };
    return cons(xs!.val, take(n-1, xs!.next));
    };

//example
let list : List<number> = fromArray([1,2,3,4,5])
console.log(tooString(take(3,list)))
//1 -> 2 -> 3 -> []
console.log(tooString(take(0,list)))
//[]
console.log(tooString(take(4,list)))
//1 -> 2 -> 3 -> 4 -> []

//2)'drop' function-----
    //'drop' is similar to 'take.' 'drop' is given an
    //integer 'n' and a list 'xs.' 'drop' returns the
    //the list following the first 'n' elements. You
    //may assume the list has at least 'n' elements
    //let list : List<number> = fromArray([1,2,3,4,5])
    //console.log(toString(drop(3,list)))
    //OUTPUT: 4 --> 5 --> []

function drop<E>(n:number,xs:List<E>):List<E>{
    if(n<=0){
        return xs;
    }
    if(xs!=null){
        return drop(n-1,xs.next);
    }
    return null; //makes type script happy happy happy
}

//example
console.log(tooString(drop(3,list)));
//4 -> 5 -> []
console.log(tooString(drop(0,list)));
//1 -> 2 -> 3 -> 4 -> 5 -> []

//3)zip-----
    //zip is given 2 lists and returns 1 list containing 
    //the combined values of both lists. The returned list 
    //is the length of the shorter list. zip combines the 
    //values using an array.

function zip<E1, E2>(xs:List<E1>,ys:List<E2>):List<[E1,E2]>{
    //empty list handling
    if(xs==null){
        return null;
    }
    if(ys==null)
        return null;

    //puts head of list together, 'zip' tails of list
    return cons([xs.val,ys.val], zip(xs.next,ys.next))
}

//example
let xs: List<string> = fromArray(['Alice','Bob','Zach','Tom']);
let ys: List<number> = fromArray([3,2,1]);
let zs: List<[string,number]> = zip(xs,ys);
let ts: List<[number,string]> = zip(ys,xs);

console.log(tooString(zs))
//Alice,3 -> Bob,2 -> Zach,1 -> []
console.log(tooString(ts))
//3,Alice -> 2,Bob -> 1,Zach -> []


//4)zipwith-----
function zipWith<E1,E2,R>(
    f:(x:E1, y:E2) => R,
    xs:List<E1>,
    ys:List<E2>
): List<R>{ //<-- return list
    //empty list handling
    if(xs==null){return null};
    if(ys==null){return null};

    const headElement: R = f(xs.val,ys.val);

    return cons(headElement,zipWith(f,xs.next,ys.next));
};

//examples
let a: List<number> = fromArray([1,2,3])
let b: List<number> = fromArray([4,5,6])
let c: List<number> = zipWith((x,y)=>x+y,a,b)

console.log(tooString(c));
//5 -> 7 -> 9 -> []

let aa: List<number> = fromArray([3,0,1])
let bb: List<string> = fromArray(['aeiou','b','ccat','hamster'])
let cc: List<string> = zipWith((x,y)=>y[x]!,aa,bb)

console.log(tooString(cc));
//o -> b -> c -> []


//5)zip2-----
function zip2<E1,E2>(xs:List<E1>,ys:List<E2>):List<[E1,E2]>{
    const putTogether = (x: E1, y:E2): [E1, E2]=>[x, y];

    return zipWith(putTogether, xs, ys);
}

//example
let zzs: List<[string,number]> = zip2(xs,ys);

console.log(tooString(zzs));
//Alice,3 -> Bob,2 -> Zach,1 -> []


//6)merge-----
function merge(xs:List<number>, ys:List<number>):List<number>{
    //empty list handlerrrr
    if(xs==null){return ys;}
    if(ys==null){return xs;}

    if(xs.val <= ys.val){
        return cons(xs.val,merge(xs.next,ys));
    }
    else {
        return cons(ys.val, merge(xs,ys.next));
    }
}

//example
let xsm: List<number> = fromArray([1,3,5])
let ysm: List<number> = fromArray([2,4,6])
let zsm: List<number> = merge(xsm,ysm)

console.log(tooString(zsm));
//1 -> 2 -> 3 -> 4 -> 5 -> 6 -> []


//7)double-----
function double(xs:List<number>):List<number>{
    //empty ball handler
    if(xs==null){return null;}
    
    return cons(xs.val*2,double(xs.next));
}

//example
let nums: List<number> = fromArray([1,4,7])

console.log(tooString(double(nums)));
//2 -> 8 -> 14 -> []


//8)double but with map!
function double2(xs:List<number>):List<number>{
    const times2 = (x:number)=>x*2;
    return map(times2,xs);
}

//example
console.log(tooString(double2(nums)));
//2 -> 8 -> 14 -> []

//9)evens-----
function evens(xs:List<number>):List<number>{
    //emptyyyyyy
    if(xs==null){return null;}

    //divisible by 2
    if(xs.val % 2 == 0){
        return cons(xs.val,evens(xs.next));
    }
    else{//odd, skip and carry on my wayward son... there will be peace when you are gone
        return evens(xs.next);
    }
}

//example
console.log(tooString(evens(fromArray([1,2,3,4]))))
//2 -> 4 -> []


//10) evens with filter!-----
function evens2(xs:List<number>):List<number>{
    //if comes back as true, then we continue.. or one might say... carry on
    const areUeven = (x:number) => x % 2 ==0;

    //the filter!
    return filter(areUeven,xs);
}

//example
console.log(tooString(evens2(fromArray([1,2,3,4,5,6]))))
//2 -> 4 -> 6 -> []


//11)and-----
function and(xs:List<boolean>):boolean{
    //empty the bag!
    if(xs==null){return true;}
    //faaaalse
    if(xs.val==false){return false;}
    //go next hombre
    return and(xs.next);
}

//example
console.log(and(fromArray([true,false,true])));
//false
console.log(and(fromArray([true,true,true])));
//true


//12)and2 (like and1 but it's a 2) with the foldr!-----
function and2(xs:List<boolean>):boolean{
    const combination = (val: boolean, accum: boolean)=>val && accum;

    //if e true
    return foldr(combination, true, xs);
}
//this one made my brain hurt

//example
console.log(and2(fromArray([true,false,true])));
//false
console.log(and2(fromArray([true,true,true])));
//true