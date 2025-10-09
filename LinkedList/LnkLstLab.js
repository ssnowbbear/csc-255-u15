var test = null;
var test1 = { val: 'Z', next: { val: 'a', next: { val: 'c', next: { val: 'h', next: { val: '!', next: null } } } } };
function cons(x, xs) {
    return { val: x, next: xs };
}
var testCons = cons("Z", cons("a", cons("c", cons("h", cons("!", null)))));
console.log(testCons); // { val: 'Z', next: {val: 'a', next: null } }
function toString(xs) {
    if (xs == null)
        return 'null';
    return xs.val + ' -> ' + toString(xs.next);
}
// Problem 1 & 2
//1)use cons, make list Z -> a -> c -> h -> ! -> null
//2)use toString to print the list from problem 1 to console
var solu1 = toString(cons('Z', cons('a', cons('c', cons('h', cons('!', null))))));
console.log(toString(testCons));
console.log(toString(test1));
console.log(solu1);
console.log(toString(cons('Z', cons('a', cons('c', cons('h', cons('!', null)))))));
// returns Z -> a -> c -> h -> ! -> null
//3) head function 
function head(xs) {
    return xs.val;
}
console.log(head(testCons));
console.log(head(test1)); //'Z'
//4) tail function
function tail(xs) {
    return xs.next;
}
console.log(toString(tail(testCons)));
console.log(toString(tail(test1)));
