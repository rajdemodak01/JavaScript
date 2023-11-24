//ES6

class user {
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const Raj=new user("Raj","raj@gmail.com",123)

console.log(Raj.encryptPassword());
console.log(Raj.changeUserName());


//behind the scene

function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}
User.prototype.changeUserName=function(){
    return `${this.username.toUpperCase()}`
}
const Raj2=new user("Raj De Modak","rajModak@gmail.com",1234)

console.log(Raj2.encryptPassword());
console.log(Raj2.changeUserName());