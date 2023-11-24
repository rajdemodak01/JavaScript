function multiplyBy5(num){
    return num*5
}

multiplyBy5.power=2
console.log(multiplyBy5);
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

//prove of function is also trated as object in JS

function createUser(username, score){
    this.username=username
    this.score=score
}

createUser.prototype.increment=function(){
    this.score++
}

createUser.prototype.printMe=function(){
    console.log(`Score is ${this.score}`);
}

const Raj=new createUser("Raj",151)
const rajdemodak=new createUser("Raj De Modak",15)

rajdemodak.printMe()

/*
Here's what happens behind the scenes when the new keyword is used:

A New object is created:The new keyword initiates the creation of a new JS Object

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. this means that it has access to properties and methods defined on the constructor's prototype.

The constractor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, Javascript assumes this, the newly created object,to be the intended return value

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value(object, array, function,etc.), the newly created object is returned.

*/