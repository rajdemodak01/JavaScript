const User={
    _email:"raj@gmail.com",
    _password:"4465",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email=value
    }
}

const tea=Object.create(User)
console.log(tea._email);