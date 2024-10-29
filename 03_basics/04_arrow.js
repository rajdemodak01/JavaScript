const user={
    username:"Raj",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this.welcomeMessage);
        console.log(this);
    }
}
user.welcomeMessage()
user.username="Shyam"
user.welcomeMessage()
console.log(user.username);

console.log(this);//{}

function func(){
    let username="Raj De Modak"
    console.log(this.username);
    // console.log(this);
}
// func()//undefined

// const result=function(){
//     let username="Raj De Modak"
//     console.log(this.username);
// }
// result()//undefined

const result=()=>{//arrow function
    let username="Raj De Modak"
    console.log(this.username);//undefined
    console.log(this);//{}
}

// result()
// ()=>{}//arrow function

const addTwo=(num1,num2)=>{
    return num1+num2//explicit return
}
// console.log(addTwo(2,4));
const addThree=(num1,num2,num3)=> num1+num2+num3//implicit return(we do not use return for one statement)///also don't use curly braces

// console.log(addThree(2,4,6));

const objectReturn=(num1,num2)=>({username:"Raj"})//note here we are using first bracket(normally we use curly braces)
// console.log(objectReturn(1,2));//{ username: 'Raj' }

const myArray=[1,2,5,3,5]
// myArray.forEach(()=>{return })
// myArray.forEach(()=>())