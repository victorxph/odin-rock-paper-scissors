//basis variables
let rock = 'Rock'
let paper = 'Paper'
let scissors = 'Scissors'

// Vaiables for player and computer choices respectively
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

// Variables to store and display the round result
let roundResultLog;
let roundResult;

// Function to run a single round
function playRound(){
    
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
    

// Function to run the whole game and verify the winner 
function getWinner(){
        
        let count = 0;
        let wins = 0;
        let losts = 0;
        let GameResult;

    while (wins < 5 && losts < 5){
    
        playRound();
        count++

        if (roundResult === 'tie'){

            count--

        } else if (roundResult === 'win') {

            wins++
            // debugger;
            
        } else if (roundResult === 'lose') {
            
            losts++
            // debugger;

        }

        
        
    }
    
    if(wins >= 5) {
    
        GameResult = 'Congratulations, you win!'
        console.log(GameResult)
        
    } else if (losts >= 5) {
        
        GameResult = "I'm sorry, you lost!"
        console.log(GameResult)
    
    }

}

getWinner();


































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
