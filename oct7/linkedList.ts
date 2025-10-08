export {} //look in only this file, gets ride of squiggles of same type in other files
//import {function} from 'file'


//singly linked list
type List<E> = null | {val:E,next:List<E>}

// List = null
// List = Value -> List
// 7 -> 3 -> null

let test : List<string> = null; //defined null to be a list
let test1 : List<string> = {val:'Fred',next:null}
let test2 : List<string> = {val:'Fred',next:{val:'Tom',next:null}}


//cons is short for construct
    //cons will take a value 'x' and a linked list 'xs' 
    //cons will return a new linked list: x -> xs
    //<E> is a generic type, can use T or others
function cons<E>(x:E,xs:List<E>):List<E>{
    
    return {val:x,next:xs};
}

let testCons = cons('Fred',cons('Tom',null))
console.log(testCons)

//toString will take in a list, and return its string representation
function toString<E>(xs:List<E>):string{
    if(xs == null) return '[]' // or 'null'
    return xs.val + ' --> ' + toString(xs.next);
} // look in video, didnt get the rest of the function
console.log(toString(cons('Zach',testCons)))

// len
    //takes in a linked list, and returns its size
    //recursive function
function len<E>(xs:List<E>):number{
    if(xs==null) return 0
    return 1 + len(xs.next);
}

console.log(len(testCons))

//sum --recursion rules-- empty list is base case
function sum(xs:List<number>):number{
    if(xs==null) return 0;
    return xs.val + sum(xs.next)
}
let numList = cons(5,cons(7,cons(8,null)))
console.log(sum(numList))

//fromArray
function fromArray<E>(ar:E[]):List<E>{
    let head : List<E> = null;
    for(let i = ar.length-1;i>=0;i--)
        head = cons(ar[i],head)
    return head
}

console.log(toString(fromArray(['A','B','C'])))

//fromArray2

function fromArray2<E>(ar:E[]):List<E>{
    return ar.reduceRight((a,b)=>cons(b,a),null as List<E>) //a = accumulator, start list, cleaner way to code
}
console.log(toString(fromArray2(['A','B','C'])))

type Collection<E> = {
    push:(e:E)=>void,
    peek:()=>E,
    pop:()=>E,
    size:()=>number,
    isEmpty:()=>boolean
    toString?:()=>string
}

interface Stack<E> extends Collection<E> {}
interface Queue<E> extends Collections<E> {}

function LLStack<E>():Stack<E>{
    let head : List<E> = null;
    let i = 0
    function push(val:E):void{ i++; head = cons(val,head) }
    function peek():E{ 
        if(head==null) throw Error('Peek on Empty LLStack')
        return head.val; 
    }
    function pop():E{
        if(head==null) throw Error('Pop on Empty LLStack')
        i--;
        const temp = head.val;
        head = head.next
        return temp;
    }
    function size(){
        return i
    }
    function isEmpty(){
        return i <= 0;
        //return head = null;
    }
    function string() : string{
        return toString(head);
    }
    //function push(val:E):void{ head = cons(val, head)}
}
//console log stuff for previous function, look on video if stuck

// head --> Alice --> Bob --> Tom --> push adds new one here
//temp = Alice
//ret temp
//Tom = tail and --> null
class LLQueue<E> implements Queue<E>{
    #size = 0 //#means private and not accessible outside of class
    #head : List<E> = null;
    #tail : List<E> = null;
    peek():E{
        if(this.#size<=0) throw Error('Peek on empty LLQueue')
        return this.#head?.val;
    }
    pop():E{
        if(this.#head==null) throw Error('Pop on empty LLQueue')
            const temp = this.#head.val;
            this.#head = this.#head.next;
            return temp;
    }
    push(val:E):void{
        if(this.#head==null && this.#tail==null){
            this.#head = this.#tail = cons(val,null);return;
        }
        this.#tail.next = cons(val,null)
        this.#tail = this.#tail.next;
    }
    size():number{ return this.#size; }
    isEmpty():boolean{ return this.#size<=0 }
    toString():string{
        return toString(this.#head)
    }
}

const q = new LLQueue();
q.push('Zach')
q.push('Alice')
q.pop()
q.push('Bob')
console.log(q.peek(),q.size())
console.log(q.toString());