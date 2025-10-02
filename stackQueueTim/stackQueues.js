//Stack can only put on and pull off of top of stack
//"Last in First out"
//Queue pops off item that has been "waiting" the longest
//"First in First out"
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _MyStack_ar;
var MyStack = /** @class */ (function () {
    //def __init__(self,blah) <- is python land = constructor
    function MyStack() {
        _MyStack_ar.set(this, void 0); // = [] makes constructor function not needed, '#' makes private 
        __classPrivateFieldSet(this, _MyStack_ar, [], "f");
    }
    MyStack.prototype.push = function (e) {
        __classPrivateFieldGet(this, _MyStack_ar, "f").push(e);
    };
    MyStack.prototype.peek = function () {
        if (this.isEmpty())
            throw Error('Peek on Empty Stack');
        return __classPrivateFieldGet(this, _MyStack_ar, "f")[__classPrivateFieldGet(this, _MyStack_ar, "f").length - 1];
    };
    MyStack.prototype.pop = function () {
        if (this.isEmpty())
            throw Error('Pop on Empty Stack');
        return __classPrivateFieldGet(this, _MyStack_ar, "f").pop();
    };
    MyStack.prototype.size = function () {
        return __classPrivateFieldGet(this, _MyStack_ar, "f").length;
    };
    MyStack.prototype.isEmpty = function () {
        return this.size() == 0; //could use this.ar.length==0
    };
    return MyStack;
}());
_MyStack_ar = new WeakMap();
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
function MyQueue() {
    var _a = [[], []], inn = _a[0], out = _a[1];
    function balance() {
        if (size() <= 0)
            throw Error('Rebalance on Empty Queue');
        if (out.length == 0) {
            out = inn.reverse();
            inn = [];
        }
    }
    function push(val) {
        inn.push(val);
    }
    function peek() {
        balance();
        return out[out.length - 1];
    }
    function pop() {
        balance();
        return out.pop();
    }
    function size() {
        return inn.length + out.length;
    }
    function isEmpty() {
        return size() <= 0;
    }
    return { peek: peek, pop: pop, push: push, isEmpty: isEmpty, size: size };
}
//terrible for memory footprint
function memQueue() {
    var i = 0;
    var ar = [];
    function push(v) { ar.push(v); }
    function peek() { return ar[i]; }
    function pop() { return ar[i++]; }
    function size() { return ar.length - i; }
    function isEmpty() { return size() <= 0; }
    return { push: push, peek: peek, pop: pop, size: size, isEmpty: isEmpty };
}
var s = new MyStack();
var q = MyQueue();
q.push('bob');
q.push('zach');
q.push('alice');
console.log(q);
console.log(q.pop());
console.log(q.peek());
console.log(q.size());
//console.log(q); // returns null once null is declared non null with !
