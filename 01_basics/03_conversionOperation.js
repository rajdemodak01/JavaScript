let score=33
let score2="33"
console.log(typeof score)//number
console.log(typeof (score2))//string

let valueInNumber=Number(score2)//notice N is capital here
console.log(typeof valueInNumber);//number//notice here n is small

score2="33abc"
valueInNumber=Number(score2)
console.log(typeof valueInNumber)//number
console.log(valueInNumber);//NaN means "Not a number"

score2=null
valueInNumber=Number(score2)
console.log(valueInNumber);//0

score2=undefined
valueInNumber=Number(score2)
console.log(valueInNumber);//NaN

let score3=true
valueInNumber=Number(score3)
console.log(valueInNumber);//1


/*
    "33"=>33
    "33abc"=>NaN
    true=1
    false=0
*/

let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);//true

let isLoggedIn2=""
let booleanIsLoggedIn2=Boolean(isLoggedIn2)
console.log(booleanIsLoggedIn2);//false

let isLoggedIn3="Raj"
let booleanIsLoggedIn3=Boolean(isLoggedIn3)
console.log(booleanIsLoggedIn3);//true

/*
    1=>true
    0=>false
    ""=false
    "raj"=true
*/


let someNumber=33
let stringNumber=String(someNumber) //notice S is capital here
console.log(stringNumber);//33
console.log(typeof stringNumber)//string//notice s is small here