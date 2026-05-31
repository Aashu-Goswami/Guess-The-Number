let game = true
let guessNum = []
let remaning = 1
let compGuess = parseInt(Math.random()*100 + 1)

const userInput = function(){
    let userInput = document.getElementById('inputNum').value

    if(isNaN(userInput) || userInput < 1 || userInput > 100) {
        document.getElementById('message').innerHTML = `Guess a valid number`
        document.getElementById('inputNum').value = ``
        return null
    } 

    return userInput
}

function endGame(){
    // document.getElementById('message').innerHTML = `GAME OVER. NUMBER WAS ${compGuess}`
    game = false
    document.getElementById('button').style.display = 'none'
    document.getElementById('inputNum').disabled = true
    document.getElementById('restart').style.display = 'inline' 
}

function startGame(){
    if(!game) return

    let userGuess = userInput()
    if(userGuess === null) return 

    guessNum.push(userGuess)

    if(compGuess == userGuess) {
        document.getElementById('message').innerHTML = `NUMBER FOUND`
        endGame()
    } else if(compGuess > userGuess) {
        document.getElementById('message').innerHTML = `GUESS HIGHER`
        document.getElementById('inputNum').value = ``
    } else {
        document.getElementById('message').innerHTML = `GUESS LOWER`
        document.getElementById('inputNum').value = ``
    }

    if(remaning == 10) {
        document.getElementById('message').innerHTML = `GAME OVER. NUMBER WAS ${compGuess}`
        endGame()
    }

    document.getElementById('guess').innerHTML = `${10 - remaning}`
    document.getElementById('Previous').innerHTML = `${guessNum}, ` 
    remaning++
}

function restartGame(){
    game = true
    guessNum.length = 0
    remaning = 1
    compGuess = parseInt(Math.random()*100 + 1)

    document.getElementById('inputNum').value = ``
    document.getElementById('Previous').innerHTML = ``
    document.getElementById('guess').innerText = 10
    document.getElementById('message').innerText = ``
    document.getElementById('button').style.display = 'inline'
    document.getElementById('inputNum').disabled = false
    document.getElementById('restart').style.display = 'none'
}


document.getElementById('button').addEventListener('click', startGame)
document.getElementById('restart').addEventListener('click', restartGame)