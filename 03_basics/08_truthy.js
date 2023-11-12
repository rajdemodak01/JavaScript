// const userEmail="raj@gmail.com"
// if(userEmail){
//     console.log("Got User Email")//will be executed
// }else{
//     console.log("Don't have user email")
// }
// const userEmail=""
// if(userEmail){
//     console.log("Got User Email")
// }else{
//     console.log("Don't have user email")//will be executed
// }


const userEmail=[]
// if(userEmail){
//     console.log("Got User Email")//will be executed
// }else{
//     console.log("Don't have user email")
// }


//falsy values
// false,0,-0,BigInt 0n,"", null, undefined, NaN

//truthy values
//"0","false",'false'," "(space string),[],{},function(){}

// if(userEmail.length===0){
//     console.log("Array is empty");
// }

const emptyObject={}
if(Object.keys(emptyObject).length===0){
    console.log("Object is empty");
}

// if(false==0){
//     console.log("Executed");//will be executed
// }

// if(false==''){
//     console.log("Executed");//will be executed
// }

// if(''==0){
//     console.log("Executed");//will be executed
// }

//*******************Nullish Coalescing Operator(??):null undefined************************
let val1
// val1=5??10
// console.log(val1);//5

// val1=null??10
// console.log(val1);//10

// val1=undefined??15
// console.log(val1);//15

val1=null??10??20

console.log(val1);//10
// ******************Ternary Operator********************
// condition?true:false

const iceTeaPrice=100
iceTeaPrice<=80?console.log("Less than 80"):console.log("More than 80");
