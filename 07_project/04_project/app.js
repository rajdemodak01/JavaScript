let randomNumber=parseInt(Math.random()*100+1);
// console.log(randomNumber);
const userInput=document.querySelector('#guessField')
const submit=document.querySelector('#subt')
const guessSlot=document.querySelector('.guesses')
const remaining=document.querySelector('.lastResult')
const lowOrHi=document.querySelector('.lowOrHi')
const startOver=document.querySelector('.resultParas')

const p=document.createElement('p')

// let prevGuess=[]
let numGuess=0

let playGame=true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(userInput.value)
        // console.log(guess);
        valivateGuess(guess)
    })
}

function valivateGuess(guess){
    //check whether the number is between 1 to 100 or not
    if(isNaN(guess)){
        alert('Please enter a valid Number')
    }else if(guess<1){
        alert('Please enter a number more than 1')
    }else if(guess>100){
        alert('Please enter a number less than 100')
    }else{
        // prevGuess.push(guess)
        displayGuess(guess);
        if(numGuess===10){
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame()
        }else{
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    //is the guess equal to random number
    if(guess===randomNumber){
        displayMessage(`You guessed it right. Number is ${randomNumber}.`)
        endGame()
    }else if(guess<randomNumber){
        displayMessage('Number is too low')
    }else if(guess>randomNumber){
        displayMessage('Number is too high')
    }
}

function displayGuess(guess){
    //clean the input field
    userInput.value=''
    guessSlot.innerHTML+=`${guess} `
    numGuess++
    remaining.innerHTML=`${10-numGuess}`    
}

function displayMessage(message){
    //interaction with DOM
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    //ending the game
    userInput.value=''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML=`<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame=false
    newGame()
}
function newGame(){
    //
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        // prevGuess=[]
        numGuess=0
        guessSlot.innerHTML=''
        remaining.innerHTML=`${10-numGuess}`    
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        lowOrHi.innerHTML=''
        playGame=true
    })
}