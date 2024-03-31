function User(username,email,password){    
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.logMe=function(){
    console.log(`User Name is ${this.username}`);
}
function Teacher(username,email,password,access){
    User.call(this,username,email,password)//call is used to hold the reference
    this.access=access
}
Teacher.prototype.addCourse=function(){
    console.log(`new course is added by ${this.username}`);
}
Teacher.prototype.logMe=function(){
    console.log(`User Name is ${this.username}`);
}

const Raj=new Teacher("Raj","raj@gmmail.com",123,true)
Raj.addCourse()
Raj.logMe()
console.log(Raj);

const raj=new User("raj de modak")

raj.logMe()



// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }
//     logMe(){
//         console.log(`User Name is ${this.username}`);
//     }
// }

// class Teacher extends User{
//     constructor(username, email, password,access){
//         super(username,email,password)
//         this.access=access
//     }
//     addCourse(){
//         console.log(`new course is added by ${this.username}`);
//     }
// }

// const raj=new Teacher("raj De Modak","raj@gmail.com", 1235,true)
// console.log(raj)

// // raj.addCourse()

// // const Raj=new User("raj de modak")

// // Raj.logMe()

// // console.log(raj === Teacher);//false
// // console.log(raj instanceof Teacher);//true
// // console.log(raj instanceof User);//true