const marvelHeros=["thor","ironman","spiderman"]
const dcHeros=["superman","flash","batman"]

// marvelHeros.push(dcHeros)// make an array of array(push entire dcHeros array in marvelheros array)
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);
// console.log(dcHeros);


// marvelHeros.concat(dcHeros)//same happens here
// console.log(marvelHeros);
// console.log(dcHeros);

// const newHeros=marvelHeros.concat(dcHeros)//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(newHeros);

const allnewHeros=[...marvelHeros,...dcHeros]//spreading the array //this is always preferrabble over concat method
// console.log(allnewHeros);

const anotherArray=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanotherArray=anotherArray.flat(Infinity)//it will make a single arrray breaking the anotherArray in many depths
// console.log(realanotherArray);


console.log(Array.isArray("Raj"));//false
console.log(Array.from("Raj"));//this method makes an array from the string
console.log(Array.from({name:"Raj"}));//we have to define what to do(either to make an array from keys or values)


let score1=100
let score2=200
let score3=300
let score4=400

console.log(Array.of(score1,score2,score3));//make an array from given variables