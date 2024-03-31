

let myHeros=["Thor", "Spiderman"]

let HeroPower={
    thor: "Hammer",
    spiderman: "sling",
    
    getSpiderPower: function(){
        console.log(`The spidy power is ${this.spiderman}`);
    }
}

Object.prototype.raj=function(){
    console.log(`raj is present in all objects`);
}
// HeroPower.raj()
// myHeros.raj()//will not give error as we are injecting prototype to object, so eventually method will be present to all datatypes(array, string,function)

Array.prototype.heyRaj=function(){
    console.log(`Raj Says hello`);
}
// myHeros.heyRaj()
// HeroPower.heyRaj()//will give error because we are injecting protopyte to array not object


/*Prototypal Inheritence*/

const user={
    name: "Raj De Modak",
    email: "raj@gmail.com"
}

const Teacher={
    makeVideo:true
}
const teachingSuppport={
    isAvailable:false
}
const TASupport={
    makeAssignment: "js Assignment",
    isPermanent: true,
    __proto__:teachingSuppport
}

Teacher.__proto__=user

//Modern Syntax
Object.setPrototypeOf(teachingSuppport,Teacher)


let anotherUserName="Raj   "

// console.log(anotherUserName.length);
// console.log(anotherUserName.truelength());

String.prototype.truelength=function(){
    // console.log(`${this}`);//"Raj   "
    // console.log(`${this.name}`);//undefined//because we did'nt defined anything named name
    
    // let anotherName=(this).trim()
    // console.log(anotherName.length);
    return this.trim().length
}

console.log(anotherUserName.truelength())
console.log("Raj De Modak".truelength());