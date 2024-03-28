// const tinderUser=new Object()//singleton object
const tinderUser={}//non-singleton object
tinderUser.id="123abc"
tinderUser.name="Raj"
tinderUser.isLoggedIn=false

// console.log(tinderUser);

const regularUser={
    email:"name@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Raj",
            lastname:"De Modak"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}//make object within object
// const obj3=Object.assign(obj1,obj2)//this will also change obj//syntax is (target,source)
// console.log(obj1);
// console.log(obj3);

const obj4=Object.assign({},obj1,obj2)//target,source,source
console.log(obj1);
console.log(obj4);

const obj3={...obj1,...obj2}//easy  symtax(generally used)
console.log(obj3);

const users=[
    {
        id: 1,
        email:"raj@gmail.com"
    },
    {
        id: 1,
        email:"raj@gmail.com"
    },
    {
        id: 1,
        email:"raj@gmail.com"
    },
    {
        id: 1,
        email:"raj@gmail.com"
    }
]

console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.values(tinderUser).length);
console.log(Object.entries(tinderUser));//array of key and value pair

console.log(tinderUser.hasOwnProperty('isLoggedIn'))//true
console.log(tinderUser.hasOwnProperty('isLogged'))//false