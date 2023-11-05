const name="Raj"
const repoCount=50

console.log(`Hello name is ${name} and my repo count is ${repoCount}`);



//another way to declare string
const gameName=new String ('Raj De Modak')
console.log(gameName);

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())//but this will not change the original string as it is a primitive datatpe
console.log(gameName);
console.log(gameName.charAt(2));//used to find character at particular index
console.log(gameName.indexOf('R'))//used to find index of a particular character

const newString=gameName.substring(2,5)//we can not use negative indexing here(if we use it will start from starting)
console.log(newString);


const anotherString=gameName.slice(-12,4)//we can use negative indexing in slice
console.log(anotherString);

const newStringOne="   Raj   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://www.google.com/raj%20demodak"
console.log(url);
console.log(url.replace('%20','-'));
console.log(url.includes('raj'));//is 'raj' present in url//true

console.log(gameName.split(' '));