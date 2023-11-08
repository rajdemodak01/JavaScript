const course={
    coursename:"Learn JS",
    price:"999",
    courseteacher:"Hitesh Chowdhury"
}

// console.log(course.courseteacher);

// const{courseteacher}=course//object destructuring
// console.log(courseteacher);

const{courseteacher:teacher}=course//object destructuring
console.log(teacher);

// const navbar=({company})=>{

// }
// navbar(company="Raj")//react part

//API
// {
//     "name":"Raj De Modak",
//     "coursename":"Learn FullStack",
//     "price":"free"
// }

//API in array format
// [
//     {},
//     {},
//     {}
// ]