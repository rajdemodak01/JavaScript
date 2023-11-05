//Stack(primitive), Heap(Non-primitive)
//all primitive dataType goes to Stack and everytime it gets a copy, so the change will copy reflect in the copy no tin the original
//all Non-primitive dataType goes to Headp and it provide the original everytime not the copy, so if we change anything the the copy it will also reflect in the original one

let myName="Raj De Modak"
let anotherName=myName
anotherName="Gobindadham"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo=userOne
userTwo.email="user@yahoo.com"
console.log(userOne);
console.log(userTwo);