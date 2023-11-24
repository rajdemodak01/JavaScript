class User{
    constructor(email,password){
        this._email=email
        this._password=password
    }

    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email=value
    }
    get password(){
        return `${this._password}raj`      
    }
    set password(value){
        this._password=value
    }
}

const Raj=new User("raj@gmail.com", "abc")
console.log(Raj.password);
console.log(Raj.email);