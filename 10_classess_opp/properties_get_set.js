function User(email,password){
    this._email=email
    this.password=password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this._email=value
        }
    })
    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUppperCase()
        },
        set:function(value){
            this._password=value
        }
    })
}

const chai= new User("raj@gmail.com", "55445")
console.log(chai.email);