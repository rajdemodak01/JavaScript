const button=document.querySelector("#button")
const password=document.querySelector(".password")
const copy=document.querySelector("#copy")
const clear=document.querySelector("#clear")

const randomPassword = function() {
    let password = "";
    const choice = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890/*-+.~!@#$%^&()_=`;':\"?><,";
    // console.log(choice.length);
    while (password.length < 8) {
        password += choice[Math.floor(Math.random() * choice.length)];
    }
    console.log(password);
    console.log(password.length);
    return password;
}

button.addEventListener('click',function(e){
    password.innerHTML=randomPassword()
})

copy.addEventListener('click',function(e){
    const textarea=document.createElement('textarea')
    textarea.value=password.innerHTML
    if(!textarea.value){
        alert('No Password to Copy')
        return
    }
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password Copied')
})
clear.addEventListener('click',function(e){
    password.innerHTML=""
})



