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

getPlayerChoice();
getComputerChoice();

// Create function fot the player choice
function getPlayerChoice() {
    
    playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

    if (playerSelection === rock.toLowerCase()) {

        playerSelection = rock

    } else if (playerSelection === paper.toLowerCase()) {

        playerSelection = paper

    } else if (playerSelection === scissors.toLowerCase()) {

        playerSelection = scissors

    } else {

        alert('Invalid value. Rock Paper or Scissors?')

    }

    console.log('Player: ', playerSelection)
    
}

let roundResult;
let tie = 'Ties!';
let win = 'Player wins!'
let lose = 'Player lose!'


// Create function to get the round result
function getRoundResult(){
    
    if (computerSelection === playerSelection) {

        roundResult = tie

    }  else if (
     (playerSelection === rock && computerSelection === scissors) ||
     (playerSelection === paper && computerSelection === rock) || 
     (playerSelection === scissors && computerSelection === paper)){

        roundResult = win

     } else {

        roundResult = lose

     }
    
    console.log(roundResult)

}

getRoundResult();