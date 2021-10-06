gameKey = {
    rock: 'paper',
    paper: 'scissors',
    scissors: 'rock'
};


// Validates the users input as one of the three options in gameKey and returns it if truthy
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === Object.keys(gameKey)[0] || userInput === Object.keys(gameKey)[1] || userInput === Object.keys(gameKey)[2]) {
    return userInput;
  } else {
    console.log('Please choose \'rock\', \'paper\', or \'scissors\'' );
  }
};


// Choose one of the three choices in gameKey at random and use as the computers choice
const getComputerChoice = () => {
  return Object.keys(gameKey)[(Math.floor(Math.random() * 3))];
};


// Compares userChoice vs computerChoice and determines a winner based on the key pair in gameKey
const determineWinner = (userChoice, computerChoice) => {
  console.log(`You: ${userChoice}`)
  console.log(`Computer: ${computerChoice}`)
  if (userChoice === gameKey[computerChoice]) {
    return 'You win!'.toUpperCase();
  } else if (userChoice === computerChoice) {
    return 'Tie';
  } else {
    return 'You lose. :-(';
  }
};


const playGame = choice => {
  console.log(determineWinner(choice, getComputerChoice()));
}; 


playGame('rock');
