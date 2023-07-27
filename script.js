let rock = 'Rock'
let paper = 'Paper'
let scissors = 'Scissors'

let computerSelection;
let playerSelection;


// Create function for the computer choice
function getComputerChoice() {

    let randomValue = Math.random();

    if (randomValue < 1/3) {

        computerSelection = rock
        
    } else if (randomValue < 2/3) {

        computerSelection = paper

    } else {

        computerSelection = scissors

    }

    console.log("Computer: ", computerSelection)
    
}

// getPlayerChoice();
// getComputerChoice();

// Create function fot the player choice
function getPlayerChoice() {
    
    playerSelection = prompt('Rock, Paper or Scissors?')

    if (playerSelection === rock) {

        playerSelection = rock

    } else if (playerSelection === paper) {

        playerSelection = paper

    } else if (playerSelection === scissors) {

        playerSelection = scissors

    } else {

        alert('Invalid value. Rock Paper or Scissors?')

    }

    console.log('Player: ', playerSelection)
    
}

let roundResult;
let tie;
let win;
let lose;

function getRoundResult(){
    
    if (computerSelection === playerSelection) {

        roundResult = tie

    } else if ()
    
    console.log('Player: ')
    console.log('Player: ')
    console.log('Computer: ')
    console.log('Computer: ')
    console.log('Ties!')


}