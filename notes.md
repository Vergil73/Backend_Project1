each choices is conneceted to numbers .e.g. 1,2,3
computer returns a random numbers and with it different choice
asks user for their input
User's choice should be case-insensitive
compares users input and computer's input
Returns the result
stores: - An argument where every win is counted and added
        - 
Declares the winner's at each round of let's say 3.



Full round:
- Putting everywin in the same place for computerchoice and score excluding draw.
- Doing the same for humanchoice and score
Computer: 
  -2
  -4
  -6

  Human:
  -1
  -3
  -5


let computerScore = 0;
let humanScore = 0;
let a = 4;
let b = 3;

function greater() {
  if (a > b) {
    computerScore++;
    return "A is greater\n" + "Score of A = " + computerScore;
  } else {
    return "B is greater\n" + "Score of B = " + humanScore;
  }
}

function loop(){
  for(i=0; i<5; i++){
   console.log(greater());
  }
}

console.log(loop());


function fullRound(){
  for(i = 1; i <= 5; i++){

    let computerSelection = getComputerChoice(); //Random Values for Computer.
    let humanSelection = getHumanChoice(); //Random values for Human/User.

    console.log(i + '.' + ` Computer: ${computerSelection}`);
    console.log(`   Human: ${humanSelection}\n`);

    console.log("Result: "); 
  }
}

console.log(fullRound());
