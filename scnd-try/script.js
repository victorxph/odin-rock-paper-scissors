//basis variables
let rock = 'Rock'
let paper = 'Paper'
let scissors = 'Scissors'

// Create function for the computer choice
function getComputerChoice() {

    let randomValue = Math.random();

    if (randomValue < 1/3) {

        return rock
        
    } else if (randomValue < 2/3) {

        return paper

    } else {
        
        return scissors
        
    }
    
    
}


function playRound(playerSelection, computerSelection){
    console.log('Computer: ', computerSelection)
    console.log('Player: ', playerSelection)
    
    if (computerSelection === playerSelection) {

        return 'Ties!'

    } else if (
        (playerSelection === rock && computerSelection === scissors) ||
        (playerSelection === paper && computerSelection === rock) || 
        (playerSelection === scissors && computerSelection === paper)){

            return `You wins! ${playerSelection} beats ${computerSelection}`;

        } else {

            return `You lose! ${computerSelection} beats ${playerSelection}`;

        }

        
    }
    
console.log(playRound(rock, getComputerChoice()))

































/*
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
*/
