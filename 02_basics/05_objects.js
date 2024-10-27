const course={
    courseName:"Learn JS",
    price:"999",
    courseTeacher:"Hitesh Chowdhury"
}

// console.log(course.courseTeacher);

// const{courseTeacher}=course//object destructuring
// console.log(courseTeacher);

const{courseTeacher:teacher}=course//object destructuring
console.log(teacher);



// const navbar=({company})=>{//destructing props

// }
// navbar(company="Raj")//react part



//API
//after api call JSON structure is returned from backend
//the structure is--(both key and value is string)
// {
//     "name":"Raj De Modak",
//     "courseName":"Learn FullStack",
//     "price":"free"
// }

//API in array format
// [
//     {},
//     {},
//     {}
// ]