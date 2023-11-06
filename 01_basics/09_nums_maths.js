const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);//object
// console.log(Math.abs(-4));//abstract value(if it had negative value it will show positive value) 
// console.log(Math.round(4.6));//rounding off
// console.log(Math.ceil(4.2));//ceilling
// console.log(Math.floor(4.9));//floor value
// console.log(Math.min(4, 3, 6, 8));//min value
// console.log(Math.max(4, 3, 6, 8));//max value

console.log(Math.random());//always give value between 0 to 1
console.log((Math.random()*10) + 1);//0 to 10
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)