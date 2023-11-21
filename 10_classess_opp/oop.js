const user={
    userName:"Raj",
    logInCount: 8,
    signedIn: true,

    getuserDetails: function(){
        console.log("Got user details from database");
        console.log(this.userName);
        console.log(this);

        //return this//implicitly return this
    }
}

// console.log(user.userName);
// user.getuserDetails()
// console.log(this);//{}//If we try to print this in console in browser then there will be a obbject full of methods and properties


// const promiseOne=new Promise()//new is a consttractor function
// const date=new Date()


function User(userName,logInCount,isLoggedIn){
    this.userName=userName
    this.logInCount=logInCount
    this.isLoggedIn=isLoggedIn

    return this
}

const userOne=new User("Raj",12,true)
const userTwo=new User("Raj De Modak",5,false)
console.log(userOne);
console.log(userTwo);

//new keyword
//step 1. new object is created
//step 2.constractor function call
//strp 3. this injected all this