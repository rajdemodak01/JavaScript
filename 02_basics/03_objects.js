//songleton
//object.create//this is called constructor method//using this it create singleton

//object literals

const mysym1=Symbol("key1")
const mysym2=Symbol("key2")


const JsUser={
    name:"Raj",
    "full name":"Raj De Modak",
    age:21,
    location:"Kolkata",
    email:"raj@gmail.com",
    isLoggedIn:false,
    lastLogInDay:["Monday","saturday"],
    mysym1:"mykey1",//string datatype
    [mysym2]:"mykey2"//this is the correct way to declare symbol in object
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser.full name);//this cannot be accessed like this
// console.log(JsUser["mysym1"]);
// console.log(typeof JsUser["mysym1"]);//string
// console.log(JsUser[mysym2]);
// console.log(typeof JsUser[mysym2]);

// JsUser.email="rajdm@gmail.com"
// console.log(JsUser.email);

// Object.freeze(JsUser)//to freeze means(you can not change key or value) this is used
// JsUser.email="rajdemodak@gmail.com"//this will not change the value of email as the object is already freezed
// console.log(JsUser.email);

//console.log(JsUser);
/*{
    name: 'Raj',
    'full name': 'Raj De Modak',
    age: 21,
    location: 'Kolkata',
    email: 'raj@gmail.com',
    isLoggedIn: false,
    lastLogInDay: [ 'Monday', 'saturday' ],
    mysym1: 'mykey1',
    [Symbol(key2)]: 'mykey2'
  } */

JsUser.greeting=function(){
    console.log("Hello JS user");
}
console.log((JsUser.greeting()));


JsUser.greetingTwo=function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log((JsUser.greetingTwo()));