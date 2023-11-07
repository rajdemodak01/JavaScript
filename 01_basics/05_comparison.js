// console.log(2>1);//true
// console.log(2<1);//false
// console.log(2==1);//false
// console.log(2!=1);//true

// console.log("2">1)//true
// console.log("02">1)//true
// console.log(2>"1")//true


//The reason is that an quality check == and comparisons > < >= <= work differently
//comparisons convert null to a number, treating as 0
// console.log(null>0);//false//0>0=>false
// console.log(null<0);//false//0<0=>false
// console.log(null==0);//false//null==0=>false
// console.log(null>=0);//true//0>=0 =>true
// console.log(null<=0);//true//0<=0 =>true


//this types of comoarisons are always avoided

// console.log(undefined>0)//false
// console.log(undefined==0)//false
// console.log(undefined<0)//false
// console.log(undefined>=0)//false
// console.log(undefined<=0)//false

console.log("2"==2);//true
console.log("2"===2);//strict check, no datatype conversion//false