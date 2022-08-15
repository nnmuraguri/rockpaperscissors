let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choices = ['rock','paper','scissors'];
    //get a random index value 
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    // get a random item in the array 
    return randomChoice;
}

// console.log(getComputerChoice());


// console.log(getPlayerChoice());

function play(playerSelection, computerSelection){
    console.log('You:', playerSelection, ', Computer:', computerSelection);
    if (playerSelection == computerSelection){
        return "It's a tie";
    }
    else if (playerSelection == "rock" && computerSelection == "paper"){
        computerScore++;
        return "You lose! Paper beats Rock!"; 
    } 
    else if (playerSelection == "rock" && computerSelection == "scissors"){
        playerScore++;
        return "You win! rock beats scissors!"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper"){
        playerScore++;
        return "You win! Scissors beats Paper!";
    } 
    else if (playerSelection == "scissors" && computerSelection == "rock"){
        computerScore++;
        return "You Lose! rock beats scissors!"
    }
    else if (playerSelection == "paper" && computerSelection == "rock"){
        playerScore++;
        return "You Win! Paper beats Rock!";
    } 
    else if (playerSelection == "paper" && computerSelection == "scissors"){
        computerScore++;
        return "You lose! scissors beats paper!"
    } 
}   


function game(){
    for (let i=0; i<5; i++){
        
        const playerSelection = prompt('Enter rock, paper or scissors').toLowerCase(); 
        const computerSelection = getComputerChoice();
        console.log(play(playerSelection, computerSelection));
    }
    if (playerScore > computerScore){
        return "You win"
    } 
    else if (computerScore > playerScore){
        return "You lose"
    } 
    else {
        return "It's a tie!"
    }
}
console.log(game());
console.log(playerScore);