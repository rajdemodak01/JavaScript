class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`User Name is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email=email
        this.password=password
    }


    addCourse(){
        console.log(`new course is added by ${this.username}`);
    }
}

const raj=new Teacher("raj De Modak","raj@gmail.com", 1235)

raj.addCourse()

const Raj=new User("raj de modak")

Raj.logMe()

console.log(raj === Teacher);//false
console.log(raj instanceof Teacher);//true(raj is a instanceof Teacher)
console.log(raj instanceof User);//true(raj is a instanceof User)