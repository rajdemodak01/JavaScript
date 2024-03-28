//global scope
var c=300
let a=100
if(true){//block scope
    let a=10
    // console.log("Inner",a);//10
    const b=20
    var c=30
}

// console.log("outer A",a);//100
// console.log(b);//error
// console.log(c);//30

//dom=document object model

function one(){
    const username="Raj"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}
// one()


if (true) {
    const username="Raj"
    if (username==="Raj") {
        const website=" youtube"
        // console.log(username+website);
    }
    // console.log(website);//error
}
// console.log(username);//error


//*******************Interesting******************** */
addOne(5)
function addOne(num ) {
    return num+1
}
// addTwo()//will give error//ReferenceError: Cannot access 'addTwo' before initialization
const addTwo=function(num){
    return num+2
}