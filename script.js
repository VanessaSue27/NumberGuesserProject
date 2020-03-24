let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Generates new secret target number for each round
function generateTarget() {
    return Math.floor(Math.random()*10);
  };

function getAbsoluteDistance (guess , target) {
    return Math.abs(guess - target);
};

//Determines which guess is closest to target number
function compareGuesses(userGuess , computerGuess, secretTargetNumber) {
    if (userGuess > 9) {
        window.alert('Wrong number!');
    } else if (getAbsoluteDistance(userGuess , secretTargetNumber) <= getAbsoluteDistance(computerGuess , secretTargetNumber)) {
          return true;
      } else if (getAbsoluteDistance(userGuess , secretTargetNumber) > getAbsoluteDistance(computerGuess , secretTargetNumber)) {
          return false;
      } else {
          console.log('Error!');
      }
  };

//Increases Winners score after each round
function updateScore (winner) {
    if (winner === 'human') {
        humanScore++;
    } else if (winner === 'computer') {
        computerScore++;
    } else {
        console.log('Error!');
    }
};

function advanceRound() {
    currentRoundNumber++;
};



/* Original function - Determines which guess is closest to target number
function compareGuesses(userGuess , computerGuess, secretTargetNumber) {
    getUserGuess = Math.abs(userGuess - secretTargetNumber);
    getComputerGuess = Math.abs(computerGuess - secretTargetNumber);
    if (getUserGuess < getComputerGuess) {
        return true;
    } else if (getUserGuess > getComputerGuess) {
        return false;
    } else if (getUserGuess === getComputerGuess) {
        return true;
    } else {
        console.log('Error!');
    }
}; */
