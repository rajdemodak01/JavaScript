function SetUserName(username){
    //complex database call
    
    this.username=username
}

function createUser(username,email,password){
    // SetUserName(username)//will not calll SetUserName function
    SetUserName.call(username)//SetUserName is being called but as we are not using this, it will not return or set anything
    SetUserName.call(this,username)//call is used tto hold the reference

    this.email=email
    this.password=password
}

const Raj=new createUser("Raj","raj@gmmail.com",123)
console.log(Raj);