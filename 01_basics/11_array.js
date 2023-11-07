//array
const myArr=[0,1,2,5];

const myHeros=["Shaktiman","Dodo"]
const arr2=new Array(1,2,3,5)

console.log(myArr[3]);
console.log(arr2);
console.log(arr2.length);

//array methods
myArr.push(6)
myArr.push(7)
console.log(myArr);
myArr.pop();
console.log(myArr);

myArr.unshift(9)//9 addded at the first of the array
console.log(myArr);
myArr.shift(9)//first element removed
console.log(myArr);

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));
console.log(myArr.indexOf(2));

const newArr=myArr.join()//makes it string
console.log(myArr);
console.log(newArr);
console.log(typeof newArr);//string

//slice and splice
console.log("A",myArr);//[0,1,2,5,6]
const myn1=myArr.slice(1,3)//same a new array from 1 to 2(3-1)
console.log(myn1);//[1,2]
console.log("B",myArr);//[0,1,2,5,6]

console.log("C",myArr);//[0,1,2,5,6]
const myn2=myArr.splice(1,3)//same a new array from 1 to 2(3-1)
console.log(myn2);//[1,2,5]
console.log("D",myArr);//[0,6]


//slice make a new array from the existing array without changing the existing array//in slice the last index is not counted(eg. if it is written do slice from 1 to 3,, it will slice from index 1 to index 2)
//splice make a new array and it also change the actal array (in the actual array it only had the remaining part after splicing)//in splice the last index is counted(eg. if it is written do splice from 1 to 3,, it will slice from index 1 to index 3)