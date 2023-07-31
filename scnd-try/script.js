//basis variables
let rock = 'Rock'
let paper = 'Paper'
let scissors = 'Scissors'

let playerSelection;
let computerSelection;

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


// Create function fot the player choice
function getPlayerChoice() {
    
    playerSelection = prompt('Rock, Paper or Scissors?').toLowerCase();

    if (playerSelection === rock.toLowerCase()) {
        
        return rock
        
    } else if (playerSelection === paper.toLowerCase()) {
        
        return paper
        
    } else if (playerSelection === scissors.toLowerCase()) {
        
        return scissors
        
    } else {
        
        alert('Invalid value. Rock Paper or Scissors?')

    }
    
    
}

let roundResultLog;
let roundResult;


function playRound(playerSelection, computerSelection){
    
    computerSelection = getComputerChoice();
    playerSelection = getPlayerChoice();;

    console.log('Computer: ', computerSelection)
    console.log('Player: ', playerSelection)
    
    if (computerSelection === playerSelection) {

        roundResultLog = 'Ties!'
        roundResult = 'tie'
        console.log(roundResultLog)
        console.log(roundResult)
        
    } else if (
        (playerSelection === rock && computerSelection === scissors) ||
        (playerSelection === paper && computerSelection === rock) || 
        (playerSelection === scissors && computerSelection === paper)){
            
            roundResultLog = `You wins! ${playerSelection} beats ${computerSelection}`;
            roundResult = 'win'
            console.log(roundResultLog)
            console.log(roundResult)
            
            
        } else {
            
            roundResultLog = `You lose! ${computerSelection} beats ${playerSelection}`;
            roundResult = 'lose'
            console.log(roundResultLog)
            console.log(roundResult)
            
            
        }
        
        
    }
    
    // console.log(playRound(rock, getComputerChoice()));
    playRound();

let count = 1;

function getWinner(){
    
    while (count <= 5){
    
        playRound();
        console.log(roundResult);
        count++
    
    }

}


































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
