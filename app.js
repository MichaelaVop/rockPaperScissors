const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissors = document.querySelector('#scissors')
const userScore = document.querySelector('#userScore')
const compScore = document.querySelector('#compScore')
const showResult = document.querySelector('.result > p')
const gamesCount = document.querySelector('#gamesCount')

let usrScore = 0
let comScore = 0
let numOfGames = 0

function getCompSelection () {
    const select = ['rock', 'paper', 'scissors']
    const selNum = Math.floor(Math.random() * 3)
    return select[selNum]
}

function showNumOfGames () {
    if (numOfGames === 1) {
        gamesCount.innerHTML = `<p>${numOfGames} game played</p>`
    } else {
        gamesCount.innerHTML = `<p>${numOfGames} games played</p>`
    }
}

function getResult (userChoice) {
    const compChoice = getCompSelection()
    switch (userChoice + compChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            usrScore++
            numOfGames++
            userScore.innerHTML = usrScore
            showResult.innerHTML = userChoice.toUpperCase() + ' beats ' + compChoice + ', YOU WIN!'
            //console.log(compChoice)
            document.getElementById(userChoice).classList.add('win')
            setTimeout(function() {document.getElementById(userChoice).classList.remove('win')}, 400)
            showNumOfGames(numOfGames)
            break

        case 'paperscissors':
        case 'scissorsrock':
        case 'rockpaper':
            comScore++
            numOfGames++
            compScore.innerHTML = comScore
            showResult.innerHTML = userChoice.toUpperCase() + ' loses to ' + compChoice + ', Computer wins!'
            //console.log(compChoice)
            document.getElementById(userChoice).classList.add('lose')
            setTimeout(function() {document.getElementById(userChoice).classList.remove('lose')}, 400)
            showNumOfGames(numOfGames)
            break
            
        case 'scissorsscissors':
        case 'paperpaper':
        case 'rockrock':
            numOfGames++
            showResult.innerHTML = `${userChoice.toUpperCase()} and ${compChoice}, IT'S A DRAW!`
            // console.log(compChoice)
            document.getElementById(userChoice).classList.add('draw')
            setTimeout(function() {document.getElementById(userChoice).classList.remove('draw')}, 400)
            showNumOfGames(numOfGames)
            break         
    }
}

function click () {
    rock.addEventListener('click', function() {
        getResult('rock')
    })
    paper.addEventListener('click', function() {
        getResult('paper')
    })
    scissors.addEventListener('click', function() {
        getResult('scissors')
    })
}

click()





