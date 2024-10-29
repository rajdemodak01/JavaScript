const myNum = [1, 2, 3]

// const myTotal = myNum.reduce(function (acc, currVal) {
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal
// }, 0)

const myTotal = myNum.reduce( (acc, curr) => acc+curr, 0)//0+1+2+3=6
//syntax--> const var_name=arr.reduce(function,0)//0 means the starting value of acc=0
//if we put 5 instead of 0, answer will be 11//5+1+2+3

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);