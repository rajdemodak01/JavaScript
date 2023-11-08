function calculateCartPrice(...num1) {///"..." is a rest operator
    return num1
}
// console.log(calculateCartPrice(200))//[200]
// console.log(calculateCartPrice(200,400,600).toString())//200,400,600

function calculateCartPrice2(val1,val2,...num1) {///"..." is a rest operator
    return num1
}
// console.log(calculateCartPrice2(200))//[]
// console.log(calculateCartPrice2(200,400,600,1000).toString())//600,1000

const user={
    username:"Raj",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)
// handleObject({
//     username:"Raj De Modak",
//     price:200,
//     card:"Debit Card"
// })

const myNewArray=[200,1500,4800]
function returnSecondValue(getArray){
    return getArray[1] 
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,2,0,500]));


