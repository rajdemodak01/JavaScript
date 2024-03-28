function sayMyName(){//function declaration
    console.log('R');
    console.log('A');
    console.log('J');
}

// sayMyName();//function calling

function addTwoNumber(num1,num2){//num1 and num2 are parameters
    console.log(num1+num2);
}
// addTwoNumber(3,4);//3 and 4 are arguments//7
// addTwoNumber(3,"4");//34
// addTwoNumber(3,"a");//3a
// addTwoNumber(3,null);//3

// const result=addTwoNumber(3,5);
// console.log(result);//undefined

function add2Number(num1,num2){//num1 and num2 are parameters
    // let result=num1+num2
    // return result
    return num1+num2
    console.log("Raj De Modak");//unreachable code
}
let a=3,b=5;
const result2=add2Number(a,b);
// console.log(`sum of ${a} and ${b} is ${result2}`);

function logInUserMessage(username){
    if (username===undefined) {
        return `Please enter a username`
    }
    return `${username} just logged in`
}
// str1=logInUserMessage("Raj")
// console.log(str1);
// console.log(logInUserMessage("Raj"));//Raj just logged in
// console.log(logInUserMessage());//Please enter a username

function logInUserMessage2(username="Shyam"){//default parammeter
    if (username===undefined) {
        return `Please enter a username`
    }
    return `${username} just logged in`
}
console.log(logInUserMessage2("Raj"));//Raj just logged in
console.log(logInUserMessage2());//Shyam just logged in