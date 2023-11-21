//First way to make promise
const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, cryptography,network 
    setTimeout(function(){
        // console.log('Async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){
    // console.log('promise consumed');
})

//second way to make promise
new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log('Async task 2');
        resolve()
    },1000)
}).then(function(){
    // console.log("promise2 consumed");
})


//Third way to make promise
const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Raj",email:"raj@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    // console.log(user);
})

//Fourth way to make promise
// const promiseFour=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         if(!error){
//             resolve({username:"Raj",email:"raj@gmail.com"})
//         }
//         else{
//             reject("errror:Something wennt wrong")
//         }
//     },2000)
// })

// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username
// })
// .then((username)=>{
//     console.log(username);
// })
// .catch((error)=>{
//     console.log(error);
// })
// .finally(()=>{console.log("The promised is either resolved or either rejected")})


//Fifth way to make Promise
// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=true
//         if(!error){
//             resolve({username:"Raj De Modak",gmail:"raj@gmail.com"})
//         }else{
//             reject("Error:JavaScript happend wrong")
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response=await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }
// consumePromiseFive()

//new async function(real application)
// async function getAllUsers() {
//     try {
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("Error occured",error);
//     }
// }
// getAllUsers()


fetch("https://jsonplaceholder.typicode.com/users").then(function(response){
    return response.json()
})
.then(function(response){
    //thenable
    console.log(response);
    console.log(typeof response);
})
.catch(function(error){
    console.log("Error occured",error);
})