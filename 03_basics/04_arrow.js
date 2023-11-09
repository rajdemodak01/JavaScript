const user={
    username:"Raj",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username="Shyam"
user.welcomeMessage()
// console.log(user.username);

console.log(this);//{}
