"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _LLQueue_size, _LLQueue_head, _LLQueue_tail;
Object.defineProperty(exports, "__esModule", { value: true });
// List = null
// List = Value -> List
// 7 -> 3 -> null
var test = null; //defined null to be a list
var test1 = { val: 'Fred', next: null };
var test2 = { val: 'Fred', next: { val: 'Tom', next: null } };
//cons is short for construct
//cons will take a value 'x' and a linked list 'xs' 
//cons will return a new linked list: x -> xs
//<E> is a generic type, can use T or others
function cons(x, xs) {
    return { val: x, next: xs };
}
var testCons = cons('Fred', cons('Tom', null));
console.log(testCons);
//toString will take in a list, and return its string representation
function toString(xs) {
    if (xs == null)
        return '[]'; // or 'null'
    return xs.val + ' --> ' + toString(xs.next);
} // look in video, didnt get the rest of the function
console.log(toString(cons('Zach', testCons)));
// len
//takes in a linked list, and returns its size
//recursive function
function len(xs) {
    if (xs == null)
        return 0;
    return 1 + len(xs.next);
}
console.log(len(testCons));
//sum --recursion rules-- empty list is base case
function sum(xs) {
    if (xs == null)
        return 0;
    return xs.val + sum(xs.next);
}
var numList = cons(5, cons(7, cons(8, null)));
console.log(sum(numList));
//fromArray
function fromArray(ar) {
    var head = null;
    for (var i = ar.length - 1; i >= 0; i--)
        head = cons(ar[i], head);
    return head;
}
console.log(toString(fromArray(['A', 'B', 'C'])));
//fromArray2
function fromArray2(ar) {
    return ar.reduceRight(function (a, b) { return cons(b, a); }, null); //a = accumulator, start list, cleaner way to code
}
console.log(toString(fromArray2(['A', 'B', 'C'])));
function LLStack() {
    var head = null;
    var i = 0;
    function push(val) { i++; head = cons(val, head); }
    function peek() {
        if (head == null)
            throw Error('Peek on Empty LLStack');
        return head.val;
    }
    function pop() {
        if (head == null)
            throw Error('Pop on Empty LLStack');
        i--;
        var temp = head.val;
        head = head.next;
        return temp;
    }
    function size() {
        return i;
    }
    function isEmpty() {
        return i <= 0;
        //return head = null;
    }
    function string() {
        return toString(head);
    }
    //function push(val:E):void{ head = cons(val, head)}
}
//console log stuff for previous function, look on video if stuck
// head --> Alice --> Bob --> Tom --> push adds new one here
//temp = Alice
//ret temp
//Tom = tail and --> null
var LLQueue = /** @class */ (function () {
    function LLQueue() {
        _LLQueue_size.set(this, 0); //#means private and not accessible outside of class
        _LLQueue_head.set(this, null);
        _LLQueue_tail.set(this, null);
    }
    LLQueue.prototype.peek = function () {
        var _a;
        if (__classPrivateFieldGet(this, _LLQueue_size, "f") <= 0)
            throw Error('Peek on empty LLQueue');
        return (_a = __classPrivateFieldGet(this, _LLQueue_head, "f")) === null || _a === void 0 ? void 0 : _a.val;
    };
    LLQueue.prototype.pop = function () {
        if (__classPrivateFieldGet(this, _LLQueue_head, "f") == null)
            throw Error('Pop on empty LLQueue');
        var temp = __classPrivateFieldGet(this, _LLQueue_head, "f").val;
        __classPrivateFieldSet(this, _LLQueue_head, __classPrivateFieldGet(this, _LLQueue_head, "f").next, "f");
        return temp;
    };
    LLQueue.prototype.push = function (val) {
        if (__classPrivateFieldGet(this, _LLQueue_head, "f") == null && __classPrivateFieldGet(this, _LLQueue_tail, "f") == null) {
            __classPrivateFieldSet(this, _LLQueue_head, __classPrivateFieldSet(this, _LLQueue_tail, cons(val, null), "f"), "f");
            return;
        }
        __classPrivateFieldGet(this, _LLQueue_tail, "f").next = cons(val, null);
        __classPrivateFieldSet(this, _LLQueue_tail, __classPrivateFieldGet(this, _LLQueue_tail, "f").next, "f");
    };
    LLQueue.prototype.size = function () { return __classPrivateFieldGet(this, _LLQueue_size, "f"); };
    LLQueue.prototype.isEmpty = function () { return __classPrivateFieldGet(this, _LLQueue_size, "f") <= 0; };
    LLQueue.prototype.toString = function () {
        return toString(__classPrivateFieldGet(this, _LLQueue_head, "f"));
    };
    return LLQueue;
}());
_LLQueue_size = new WeakMap(), _LLQueue_head = new WeakMap(), _LLQueue_tail = new WeakMap();
var q = new LLQueue();
q.push('Zach');
q.push('Alice');
q.pop();
q.push('Bob');
console.log(q.peek(), q.size());
console.log(q.toString());
