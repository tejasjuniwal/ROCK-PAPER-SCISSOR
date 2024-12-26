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
let scores = {
    win : 0 ,
    tie : 0 ,
    lose : 0 ,
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
    // the output with scoreboard 
    alert(`computer ${computerChoice} user ${userSelection} \n ${result} \n win : ${scores.win} lose : ${scores.lose} tie : ${scores.tie} `)
}