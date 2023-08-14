// โปรแกรม เป่ายิ้งฉุบ กับ Computer

console.log('hi');

const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput
  }else{
    console.log('Erorr!')
  }
}

const getComputerChoice = () =>{
  let randomNumber = Math.floor(Math.random()*2)
  switch(randomNumber){
    case 0:
    return 'rock' ;
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors'
    break;
    default:
    return 'Error!!'
    break;
  }
}

// Function determineWiner
const determineWiner = (userChoice,computerChoice)=>{
  if (userChoice === computerChoice) {
  return 'The game is a tie!';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
    return 'Sorry, The Computer Won!!'
  }else{
  return 'You Won!'
    }
  }  
  if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
    return 'Sorry, Computer Won!!'
  }else{
  return 'You Won!'
    }
  }  
    if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
    return 'Sorry, Computer won !'
  }else{
  return 'You Won!'
    }
  }
  if(userChoice === 'bomb'){
    return 'User Winner'
  }
}  


// playGame
const playGame = () => {
   const userChoice = getUserChoice('bomb');
   const computerChoice = getComputerChoice();
   console.log('You threw: ' + userChoice);
   console.log('The computer threw: ' + computerChoice);
   console.log(determineWiner(userChoice, computerChoice));
};
 
playGame();