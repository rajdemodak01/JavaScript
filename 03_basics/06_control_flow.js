//if
const isUserLoggedIn=true
const temperature=41
// if(temperature<50){
//     console.log("Less than 50");
// }else{
//     console.log("Greater than 50");
// }
// if(true){
// }
// if(isUserLoggedIn){
// }
// if(2==2){
//     console.log("executed")
// }
// if(2<=2){
// }

// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`);//"power" is out of scope

// <,>,<=,>=,==,!=,===,!==//comparison operator
//===(also check the type)


const balance=1000
// if(balance>500) console.log("test")//short hand notation//only for single line body(This is not a good practice)

// if(balance<500){
//     console.log("Less than 500");
// }else if(balance<750){
//     console.log("Less than 750");
// }else if(balance<900){
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200");
// }

const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true
if(userLoggedIn && debitCard){
    console.log("Allowed to buy course")
}
if(loggedInFromEmail||loggedInFromGoogle){
    console.log("User Logged in ");
}