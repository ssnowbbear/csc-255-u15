
//interface and classes 
interface User {
    name: string;
    id: number;
}

class UserAccount {
    name: string;
    id: number;

    constructor(name:string, id:number) {
        this.name = name;
        this.id = id;
    }
}

const user: User = new UserAccount("Murphy", 1);

console.log(user) //UserAccount { name: 'Murphy', id: 1 }

//can use interfaces to annotate parameters and return values to functions
function deleteUser(user: User){
    //...
}

function getAdminUser(): User {
    //...
}

//Unions can declare a type to be one of many types
type MyBool = true | false;

//types allow values and union of values
    //interfaces do not

//interfaces allow inheritance, types achieve something similar via intersection
    //syntax is different

//Examples
type Answer = "yes" | "no" | "maybe"

type RPS = 'rock' | 'paper' | 'scissors'
let choice : RPS = 'rock'

interface Parent{
    p:string
}
interface Child extends Parent{
    c:string
}

let abc : Child = {c:'child'} //'abc' is declared but its value is never read.ts(6133)
    //Property 'p' (from parent) is missing in type '{ c: string; }' but required in type 'Child'.

let c : Child = {c:'child',p:'parent'} //allowed because have all attributes

//sometimes needs coercing (allowed by persuasion ;))
let d = {} as Child

type Product = {
    id:number,
    price:number,
    rating:number,
    brand:string,
    name:string,
    toString?:()=>string //'?' makes toString an optional parameter
    url?:string
}

//make a product ourselves(different ways)
function ProductA(id:number,price:number,rating:number,brand:string,name:string) : Product {
    return { id,price,rating,brand,name,toString(){return this.brand + ' ' + this.name}}
}

//OR!!! Class constructors must be invoked with the new keyword
class ProductB implements Product{
    id:number
    price:number
    rating:number
    brand:string
    name:string

    constructor(id:number,price:number,rating:number,brand:string,name:string){
        this.id=id; this.price=price; this.rating=rating;
        this.brand=brand; this.name=name;
    }
    toString(){ return this.brand + ' ' + this.name; }
}

const items:Product[] = []

//ProductA 
items.push(ProductA(1,65.09,4.7,"Under Armour", "Charged Assert 8 Running Shoe"));
items.push(ProductA(2,239.89,4.6,"Nike","Jordan 1 Mid Igloo"));
items.push(ProductA(3,49.79,4.3,"Puma","Roma Basic Sneaker"));

//ProductB (Must use 'new' keyword!)
items.push(new ProductB(4,47.98,4.7,"Adidas","Grand Court Sneaker"));
items.push(new ProductB(5,80.00,1,"Nike","Phantom GT Academy Flyease"));
items.push(new ProductB(6,49.99,4.8,"Crocs","Classic Clog"));

// 1) See Nike brand shoes (filter by brand)(All brands?)

//2) See shoes under $50 (filter by price)
    //should be able to handle filtering any criteria.

//3) Sort shoes by cost (Look at old assignments, theres a function in there somewhere)

//4) Sort shoes by rating, if tie -> sort by cheapest (Look at sort assignments)

//User has shopping cart, user is going to buy all shoes with 'id <= 3'.
    //need to find how much money to charge them. Sum of price.
        //1st collect products into an array.
        // const cart = ar.filter(p => p.id <=3);

//5) Reduce to find sum of the price. Map to price before doing reduction.
    //skip reduction and use a loop. either way = $354.77

//6) Congratulate our user on their purchase.
    //FINE TO STOP HERE BUUUUUUUTTTT A GOOD WEB DEVELOPER WOULD
    //MAKE IT PRETTIER(Look at lab page for examples)



//Program languages: RUST for servers? GO is really good? Lua is good to use a different language into?
//software reverse engineering? decompiler