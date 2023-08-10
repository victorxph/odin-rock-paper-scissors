//basis variables
let rock = 'Rock'
let paper = 'Paper'
let scissors = 'Scissors'

// Variables for player and computer choices
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

let rockBtn = document.querySelector('#rock')

let paperBtn = document.querySelector('#paper')

let scissorsBtn = document.querySelector('#scissors')

rockBtn.addEventListener('click', getRock)

paperBtn.addEventListener('click', getPaper)

scissorsBtn.addEventListener('click', getScissors)

function getRock (){

    playerSelection = rock;
    playRound();
    return rock;
    
}

function getPaper (){
    
    playerSelection = paper;
    playRound();
    return paper;
    
}

function getScissors (){
    
    playerSelection = scissors;
    playRound();
    return scissors;

}


// Create function fot the player choice
function getPlayerChoice() {

    return playerSelection;
    
}

// Variables to store and display the round result
let roundResultLog;
let roundResult;

let index = 0;
let wins = 0;
let losts = 0;

let resH2 = document.querySelector('.resH2');
let resPara = document.querySelector('.resPara');
let playerSign = document.querySelector('#signPlayer');
let computerSign = document.querySelector('#signComputer');
let playerPoints = document.querySelector('.playerPoints');
let computerPoints = document.querySelector('.computerPoints')



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
        updateScore();
        
    } else if (
        (playerSelection === rock && computerSelection === scissors) ||
        (playerSelection === paper && computerSelection === rock) || 
        (playerSelection === scissors && computerSelection === paper)){
            
            roundResultLog = `You wins! ${playerSelection} beats ${computerSelection}`;
            roundResult = 'win'
            console.log(roundResultLog)
            console.log(roundResult)
            wins++
            console.log(wins)
            updateScore();
            
            
        } else {
            
            roundResultLog = `You lose! ${computerSelection} beats ${playerSelection}`;
            roundResult = 'lose'
            console.log(roundResultLog)
            console.log(roundResult)
            losts++
            console.log(losts)
            updateScore();
            
        }
        
        if (wins >= 5 || losts >= 5) {
            
            getWinner()
           
            
        }
        
        
        function updateScore () {

        
        if (roundResult === 'win'){
            
            resH2.textContent = 'You win!';
            resPara.textContent = `${playerSelection} beats ${computerSelection}`;
            playerPoints.textContent = `Player: ${wins}`
            
            
            
        } else if (roundResult === 'lose'){
            
            resH2.textContent = 'You lose!';
            resPara.textContent = `${computerSelection} beats ${playerSelection}`;
            computerPoints.textContent = `Computer: ${losts}`
            
        } else if (roundResult === 'tie'){
            
            resH2.textContent = 'Round ties!';
            resPara.textContent = `${computerSelection} & ${playerSelection}`;
            
        }

        if (computerSelection === rock){
            computerSign.innerText = '✊';
            
        } else if (computerSelection === paper){
            
            computerSign.innerText = '👋';

        } else if (computerSelection === scissors){
            
            computerSign.innerText = '✌️';

        }

        if (playerSelection === rock){

            playerSign.innerText = '✊';
            
        } else if (playerSelection === paper){
            
            playerSign.innerText = '👋';

        } else if (playerSelection === scissors){
            
            playerSign.innerText = '✌️';

        }
        
    }
    
}

let picksDiv = document.querySelector('#picks');
let container = document.querySelector('.container');
let resetBtn = document.createElement('button');
resetBtn.textContent = 'PLAY AGAIN'

// Function to run the whole game and verify the winner 
function getWinner(){

    let gameResult;
    
    if(wins >= 5) {
    
        gameResult = 'Congratulations, you win!'
        resH2.textContent = gameResult
        console.log(gameResult)
        wins = 0;
        losts = 0;
        container.appendChild(resetBtn);
        picksDiv.remove();
        
        
    } else if (losts >= 5) {
        
        gameResult = "I'm sorry, you lost!"
        resH2.textContent = gameResult
        console.log(gameResult)
        wins = 0;
        losts = 0;
        container.appendChild(resetBtn);
        picksDiv.remove();
    }

}

resetBtn.addEventListener('click', resetGame)

function resetGame() {

    resH2.textContent = 'Pick your weapon'
    resPara.textContent = 'First to score 5 wins'
    playerSign.textContent = '❔'
    computerSign.textContent = '❔'
    playerPoints.textContent = 'Player: 0'
    computerPoints.textContent = 'Computer: 0'
    container.removeChild(resetBtn);
    container.appendChild(picksDiv)

}