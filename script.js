//Random computer choice
function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3); 
  if (choice === 0) {
    return 'Rock';
  } else if (choice === 1) {
    return 'Paper';
  } else {
    return 'Scissor'; 
  }
}

//Random human choice
function getHumanChoice() {
  const choice = Math.floor(Math.random() * 3); 
  if (choice === 0) {
    return 'Rock';
  } else if (choice === 1) {
    return 'Paper';
  } else {
    return 'Scissor'; 
  }
}

//Initial Score count set to zero
let ComputerScore = 0;
let HumanScore = 0;


function playround() {

  let computerSelection = getComputerChoice(); //Random Values for Computer.
  let humanSelection = getHumanChoice(); //Random values for Human/User.

  console.log(i + '.' + ` Computer: ${computerSelection}`);
  console.log(`   Human: ${humanSelection}`);
  
//logic for determining who wins the game
  if (computerSelection === humanSelection) {
    return '****DRAW****Try Again****';
  } else if (computerSelection === 'Rock' && humanSelection === 'Paper') {
    HumanScore++;
    return 'Winner is Human(Paper)\n' + 'Score: ' + HumanScore;
  } else if (computerSelection === 'Rock' && humanSelection === 'Scissor') {
    ComputerScore++;
    return 'Winner is Computer(Rock)\n' + 'Score: ' + ComputerScore;
  } else if (computerSelection === 'Paper' && humanSelection === 'Scissor') {
    HumanScore++;
    return 'Winner is Human(Scissor)\n' + 'Score: ' + HumanScore;
  } else if (humanSelection === 'Rock' && computerSelection === 'Paper') {
    ComputerScore++;
    return 'Winner is Computer(Paper)\n' + 'Score: ' + ComputerScore;
  } else if (humanSelection === 'Rock' && computerSelection === 'Scissor') {
    HumanScore++;
    return 'Winner is Human(Rock)\n' + 'Score: ' + HumanScore;
  } else if (humanSelection === 'Paper' && computerSelection === 'Scissor') {
    ComputerScore++;
    return 'Winner is Computer(Scissor)\n' + 'Score: ' + ComputerScore;
  } else {
    return 'Error';
  }
}

//Loops for full round
function fullRound(){
  for(i = 1; i <= 5; i++){
    console.log("Result: " + playround() + "\n");
  }
  
  //Adding the results for the winner
  console.log("*****FINAL RESULTS*****\n");
  console.log(`Human: ${HumanScore}`);
  console.log(`Computer: ${ComputerScore}`);
  
  if(HumanScore > ComputerScore){
    console.log("Human wins the game.")
  } else if(ComputerScore > HumanScore){
    console.log("Computer wins the game.")
  } else {
    console.log("It's a draw.");
  }

}

console.log(fullRound());

