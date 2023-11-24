// console.log(Math);

const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descripter);

//can't redefine property here
// Object.defineProperty(Math, "PI",{
//     writable: true,
//     enumerable:false
// })

// const myNewObject=Object.create(null)//onew way to create object

const chai={
    name:'ginger chai',
    price:'4585',
    isavailable:true,

    orderChai: function(){
        console.log('Chai nahi bani');
    }
}
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));
// console.log(chai);

// Object.defineProperty(chai, "name",{
//     writable: false,
//     enumerable:false
// })
// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key,value] of Object.entries(chai)) {
    if (typeof value !=='function') {
        console.log(`${key}:${value}`);
    }
}

