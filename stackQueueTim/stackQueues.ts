//Stack can only put on and pull off of top of stack
    //"Last in First out"
//Queue pops off item that has been "waiting" the longest
    //"First in First out"

// type Collection<E> = {val:E} // E means the type it is holding (any)

// const example : Collection<number> = {val:7}
// const example2: Collection<string> = {val: 'hello'}

//push element on, pop element off, size, peek(looks->element), isEmpty

type Collection<E> = {
    push:(e:E)=>void,
    peek:()=>E,
    pop:()=>E,
    size:()=>number,
    isEmpty:()=>boolean
}

interface Stack<E> extends Collection<E> {}
interface Queue<E> extends Collection<E> {}

class MyStack<E> implements Stack<E>{
    #ar:E[] // = [] makes constructor function not needed, '#' makes private 
    //def __init__(self,blah) <- is python land = constructor
    constructor(){
        this.#ar = [];
    }
    push(e:E):void{
        this.#ar.push(e);
    }
    peek():E{
        if(this.isEmpty()) throw Error('Peek on Empty Stack')
        return this.#ar[this.#ar.length-1]
    }
    pop():E{
        if(this.isEmpty()) throw Error('Pop on Empty Stack')
        return this.#ar.pop()!;
    }
    size():number{
        return this.#ar.length;
    }
    isEmpty():boolean{
        return this.size()==0; //could use this.ar.length==0
    }
}


// const myStack // didnt get this apparently 
// myStack.push('Zach')
// myStack.push('Alice')
// console.log(myStack)
// console.log(myStack.peek)
// myStack.pop()
// myStack.push('Bob')
// console.log(myStack)
// myStack.pop()
// myStack.pop()
// myStack.pop()
// myStack.pop()
// myStack.pop()
// console.log(myStack)

//
function MyQueue<E>() : Queue<E>{
    let[inn,out] : [E[],E[]] = [[],[]];
    function balance(){
        if(size() <= 0) throw Error ('Rebalance on Empty Queue')
        if(out.length ==0){
            out = inn.reverse(); inn = [];
        }
    }
    function push(val:E):void{
        inn.push(val);
    }
    function peek():E{
        balance();
        return out[out.length-1];
    }
    function pop():E{
        balance();
        return out.pop()!;
    }
    function size():number{
        return inn.length + out.length;
    }
    function isEmpty():boolean{
        return size()<=0;
    }
    return {peek,pop,push,isEmpty,size}
}


//terrible for memory footprint
function memQueue<E>():Queue<E>{
    let i = 0;
    const ar : E[] = [];
    function push(v:E){ ar.push(v) }
    function peek(){ return ar[i] }
    function pop(){ return ar[i++] }
    function size(){ return ar.length - i }
    function isEmpty(){ return size()<=0 }
    return{push,peek,pop,size,isEmpty}
}
// do console.log for above material 

const s = new MyStack<number>();
const q = MyQueue();
q.push('bob')
q.push('zach')
q.push('alice')
console.log(q)
console.log(q.pop())
console.log(q.peek())
console.log(q.size())
//console.log(q); // returns null once null is declared non null with !

//'NEXT WEEK: Singley linked lists 
    //make object with curly braces value:zach
    //goes next and eventually points to null

type list<E> = null | {val:E,next:List<E>}
type RPS = 'rock' | 'paper' | 'scissors'
const rps : RPS = 'rock'