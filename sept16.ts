//OBJECTS
type Point = {x:number,y:number}//literal object

const p :Point = {x:3,y:5}
console.log(p)
console.log('x',p.x)
console.log('y',p.y)

//type RPS = rock | paper | scissors // dont remember

function distance(p:Point,q:Point):number{
    return Math.sqrt((p.x-q.x)**2+(p.y-q.y)**2)//look for
}

//look for stuff before this online, cant keep up

class Pnt implements Point{
    x:number
    y:number
    constructor(x:number,y:number){
        this.x = x
        this.y = y
    }
    instant_distance(o:Point):number{
        return distance(this,o);
    }
}

const pnt = new Pnt(0,2)

//use distance function on p, and pnt
console.log(distance(p,pnt))
console.log(pnt.instant_distance(p))

const points : Point [] = [p,pnt,{x:7,y:6},{x:1,y:2},{x:1,y:1},{x:0,y:99}]
//sort on x, and if ties, then sort on y

//compare 2 points
function compare(p1:Point,p2:Point){
    if(p1.x != p2.x) return p1.x-p2.x;
    return p1.y-p2.y
}

points.sort // didnt finish

console.log('pnts',[...points].sort(compare))
console.log('pnts',[...points].sort((a,b)=>a.x!=b.x?a.x-b.x:a.y-b.y))

console.log('orig',points)

//i want a function that takes 2 points returns true if equal
function equal(a:Point,b:Point):boolean{
    return a.x == b.x && a.y == b.y
}

const words = 'This is a test      string   to helps us this is a test string    this is a test    string'.trim().split(/\s+/)
console.log(words)


const freq : Record<string,number> = {}
for(const word of words)
    if(word in freq) freq[word]++; //+=1 freq[word]=freq[word]+1
    else freq[word]
console.log(freq)

/* const freq : Record<string,number> = {}
for(const word of words) freq[word] = (freq[word]??0)+1
console.log(freq) */

null || 'Noah' //watch class online
//nullish coalesing operator

const freq = words.reduce((a,b)=>{a[b]=(a[b]??0)+1; return a},{} as Record<string,number>) // could be number in place of string
console.log('freq',freq)

//we have freq, I want to find the key with the max freq(if ties, any will do)
Object.keys(freq)
Object.values(freq)
Object.entries(freq)

//look online for first iteration
let maxKey = '';
for(const key in freq){
    if(freq[maxKey]??0 < freq[key]) maxKey=key;
}
console.log('key',maxKey,'freq',freq[maxKey])

//for(var key in freq) break;
//for(const key in freq) break;
//console.log(key) //disgusting

const best = Object.keys(freq).reduce((a,b)=>freq[b]>freq[a]?b:a)
console.log('best',best,'freq',freq[best])

//person has a name:string and age:number
type Person = {name:string,age:number}

const zach : Person = {name:'Zach', age:36}
const alice : Person = {name:'Alice', age:22}
const frank : Person = {name:'Frank', age:55}
const bob : Person = {name:'Bob', age:55}

const peeps : Person[] = [zach,alice,frank,bob]

//sort based on age, then alphabetically
function peepCompare(a:Person,b:Person):number{
    if(a.age!=b.age) return a.age-b.age
    if(a.name == b.name) return 0
    if(a.name<b.name) return -1
    return 1;
    //return a.name.localCompare(b.name)
}

//peeps.sort(peepCompare)
peeps.sort((a,b)=>a.age!=b.age?a.age-b.age:a.name==b.name?0:a.name<b.name?-1:1)
console.log(peeps)

//youngest without sorting
let youngest = peeps[0];
for(const peep of peeps){
    if(peep.age<youngest.age) youngest = peep;
}
console.log('youngest', youngest)

const young = peeps.reduce((a,b)=>b.age<a.age?b:a)
console.log('youngest',young)