const button=document.querySelector("#button")
const password=document.querySelector(".password")

const randomPassword=function(){
    let password=""
    const choice="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890/*-+.~!@#$%^&()_=`;':\"?><,"
    console.log(choice.length);
    for (let i = 0; i < 8; i++) {
        password+=choice[Math.floor(Math.random()*88)]
    }
    return password;
}

button.addEventListener('click',function(e){
    password.innerHTML=randomPassword()
})