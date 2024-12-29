// the scoreboard 
const scoreBoard = document.querySelector(".scorecount");

// randomly generated the choices 

function randomChoice() {
    const choice = ['rock' , 'paper' , 'scissor']
    return choice[Math.floor(Math.random()*3)]
}

// for (let i = 0; i < 10; i++) {
//     console.log(computerChoice)
    
// }

// user input

// making the scoreboard 
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

function userChoice(userSelection) {
    let computerChoice = randomChoice();
    let result;

    if (userSelection===computerChoice) {
        result = "Its a tie" ;
    } else if (
        userSelection === 'rock' && computerChoice === 'scissor' ||
        userSelection === 'paper' && computerChoice === 'rock' ||
        userSelection === 'scissor' && computerChoice === 'paper'
    ) {
        result = "user wins"
    } else {
        result = "computer wins"
    }
    
    if (result === "user wins") {
        scores.win++
    } else if (result === "computer wins") {
        scores.lose++
    } else {
        scores.tie++
    }

    // adding a local storage for the scores

        localStorage.setItem('score' , JSON.stringify(scores))

    // the output with scoreboard 
    // alert(`computer ${computerChoice} user ${userSelection} \n ${result} \n win : ${scores.win} lose : ${scores.lose} tie : ${scores.tie} `)

    // added a scorboard in it 
     if (scoreBoard) {
        scoreBoard.innerHTML = `Computer : ${computerChoice} &emsp;
        User : ${userSelection} <br><br>
        Result : ${result} <br><br>
        Wins : ${scores.win} &emsp;
        Loses : ${scores.lose} &emsp;
        Ties : ${scores.tie}`
     } else {
        console.error("Scoreboard not found");
     }
}

// adding the scoreboard on the web page  
scoreBoard.innerHTML = `Wins : ${scores.win} &emsp; Loses : ${scores.lose} &emsp; Ties : ${scores.tie}`