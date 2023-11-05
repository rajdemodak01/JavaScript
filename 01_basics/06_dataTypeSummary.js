//Primitive

// 7 Types: Strting, Number, Boolean, null, undefined, Symbol, BigInt


const score=100//number
const scoreValue=100.3//number
const isLoggedIn=false//boolean
const outsideTemp=null//object
let userEmail//undefined

const id=Symbol('123')//returns a new unique symbol value
const anotherId=Symbol('123')//returns a new unique symbol value

console.log(id);
console.log(typeof id);
console.log(anotherId);
console.log(typeof anotherId);
console.log(id==anotherId);

const bigNumber=24511478632564965556855547n
console.log(bigNumber)
console.log(typeof bigNumber)//bigint


//Reference(Non Primitive)

//Array, Objects, Functions

const heros=["shaktiman", "naggraj", "doga"]
console.log(heros);
console.log(typeof heros);

let objecttype={
                name:"raj",
                age:21
            }
console.log(objecttype);
console.log(typeof objecttype);///object


const myFunction=function(){
    console.log("Hello World!")
}
myFunction()
console.log(typeof myFunction);//datatype=>function-object

