let computerChoice1 = document.getElementById("computerSpan")
let playerSelection1 = document.getElementById("playerSpan")
let showResult = document.getElementById('result')

let playerResult 
let computerResult
let result



let myButtons = document.querySelectorAll('#btn')

for (let myButton of myButtons) {
    myButton.addEventListener('click', function() {
        playerSelection1.innerText = myButton.value
        playerResult = myButton.value
        getComputerSelection()
        myResult()
    })
}
   
function getComputerSelection() {
   
    let computerArray = ['rock', 'paper', 'scissors']
    
    let randomSelection = Math.floor(Math.random() * computerArray.length)

    let computerOutput = computerArray[randomSelection]
    computerChoice1.innerText = computerOutput
    computerResult = computerOutput
    
}
function myResult() {

    if (playerResult == computerResult) {
        result = "It was a Draw"
    }
    else if (playerResult == 'rock' && computerResult == 'scissors') {
        result = "You Win! rock beats scissors"
    }
    else if (playerResult == 'rock' && computerResult == 'paper') {
        result = "You lose! paper beats rock"
    }
    else if (playerResult == 'paper' && computerResult == 'scissors') {
        result = "You lose! scissors beats paper"
    }
    else if (playerResult == 'paper' && computerResult == 'rock') {
        result = "You Win! paper beats rock"
    }
    else if (playerResult == 'scissors' && computerResult == 'paper') {
        result = "You Win! scissors beats paper"
    }
    else if (playerResult == 'scissors' && computerResult == 'rock') {
        result = "You lose! rock beats scissors"
    }

    
    
    showResult.innerText = result
}






