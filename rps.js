// randomly generated the choices 

function randomChoice() {
    const choice = ['rock' , 'paper' , 'scissor']
    return choice[Math.floor(Math.random()*3)]
}

// for (let i = 0; i < 10; i++) {
//     console.log(computerChoice)
    
// }

// user input 
const userInput = prompt("enter the choices among rock paper and scissor")


// error code 



// here i am calling computerChoice multiple times due to which computer genreates a random choice each time 
// soln is we can assign randomChoice to a variable 



// #code 
// // rock paper 
// if(computerChoice === 'rock' && userInput.toLowerCase()=== 'paper') {
//     // user wins
//     alert(`c : ${computerChoice} u : ${userInput} user wins`)
// } 
// //  rock scissor 
// else if(computerChoice === 'rock' && userInput.toLowerCase()=== 'scissor') {
//     // user lose 
//     alert(`c : ${computerChoice} u : ${userInput} user lose`)
// }
// // paper rock 
// else if (computerChoice === 'paper' && userInput.toLowerCase()=== 'rock') {
//     // user lose 
//     alert(`c : ${computerChoice} u : ${userInput} user lose`)
// } 
// // paper scissor 
// else if (computerChoice === 'paper' && userInput.toLowerCase()=== 'scissor') {
//     // user wins 
//     alert(`c : ${computerChoice} u : ${userInput} user wins`)
// }
// // scissor paper 
// else if (computerChoice === 'scissor' && userInput.toLowerCase()=== 'paper') {
//     // user lose 
//     alert(`c : ${computerChoice} u : ${userInput} user lose`)
// }
// // scissor rock 
// else if (computerChoice === 'scissor' && userInput.toLowerCase()=== 'rock') {
//     // user wins 
//     alert(`c : ${computerChoice} u : ${userInput} user wins`)
// }
// // equals 
// else if (computerChoice === 'rock' && userInput.toLowerCase()=== 'rock' || computerChoice === 'paper' && userInput.toLowerCase()=== 'paper' || computerChoice === 'scissor' && userInput.toLowerCase()=== 'scissor') {
//     alert(`c : ${computerChoice} u : ${userInput} TIE!!!`)
// } 
// else {
//     alert("INVALID INPUT")
// }
