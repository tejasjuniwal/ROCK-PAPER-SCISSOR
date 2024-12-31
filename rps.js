// the scoreboard 
const scoreBoard = document.querySelector(".scorecount");
const resl = document.querySelector(".res")
const choco = document.querySelector(".choice")

// randomly generated the choices for the computer 

function randomChoice() {
    const choice = ['rock' , 'paper' , 'scissor']
    return choice[Math.floor(Math.random()*3)]
}


// making the scoreboard 
// and converted the string into the object with JSON 
let scores = JSON.parse(localStorage.getItem('score'));

// adding the reset score Option 
function resetScore() {
    scores = {
        win : 0,
        lose : 0,
        tie : 0,
    }

    if (scoreBoard) {
        scoreBoard.innerHTML = `
        Wins : ${scores.win}
        Loses : ${scores.lose}
        Ties : ${scores.tie}`
    }
}


// Game Logic...
function userChoice(userSelection) {
    let computerChoice = randomChoice();
    let result;

    if (userSelection===computerChoice) {
        result = " Tie" ;
    } else if (
        userSelection === 'rock' && computerChoice === 'scissor' ||
        userSelection === 'paper' && computerChoice === 'rock' ||
        userSelection === 'scissor' && computerChoice === 'paper'
    ) {
        result = "You wins"
    } else {
        result = "You Lose"
    }
    
    if (result === "You wins") {
        scores.win++
    } else if (result === "You Lose") {
        scores.lose++
    } else {
        scores.tie++
    }

    // adding a local storage for the scores
// with JSON converting the object to string here 
        localStorage.setItem('score' , JSON.stringify(scores))

    // the output with scoreboard 
    // alert(`computer ${computerChoice} user ${userSelection} \n ${result} \n win : ${scores.win} lose : ${scores.lose} tie : ${scores.tie} `)

    if (choco) {
        choco.innerHTML = `You : ${userSelection} &emsp;&emsp; Computer : ${computerChoice}`
    }

    if (resl) {
        resl.innerHTML = `${result}`
    }
    // added a scorboard in it 
     if (scoreBoard) {
        scoreBoard.innerHTML = `
        Wins : ${scores.win} &emsp;
        Loses : ${scores.lose} &emsp;
        Ties : ${scores.tie}`
     } else {
        console.error("Scoreboard not found");
     }
}

// adding the scoreboard on the web page  
scoreBoard.innerHTML = `Wins : ${scores.win} &emsp; Loses : ${scores.lose} &emsp; Ties : ${scores.tie}`