let score = JSON.parse(localStorage.getItem('score')) || {
    wins : 0, losses:0, ties:0 
  };
  
  
  updateScore();

  // if(!score ){
  //   score = {
  //     wins : 0, losses:0, ties:0 
  //   };
  // }

  function playGame(playerMove){
    let computermove = pickComputerMove();
    if(playerMove ==='Scissor'){
      if(computermove === 'Rock'){ result = 'You Lose.'}
      else if(computermove === 'Paper' ){ result = 'You Win.'}
      else { result='Tie.' }
    }
    else if(playerMove ==='Paper'){
      if(computermove === 'Rock'){ result = 'You Win.'}
      else if(computermove === 'Paper' ){ result = 'Tie.'}
      else { result='You Lose.' }
    }
    else{
      if(computermove === 'Rock'){ result = 'Tie.'}
      else if(computermove === 'Paper' ){ result = 'You Lose.'}
      else { result='You Win.' }
    }

    if(result ==='You Win.'){
      score.wins+=1;
    }
    else if(result ==='Tie.'){
      score.ties+=1;
    }
    else if(result === 'You Lose.'){
      score.losses+=1;
    }

    updateScore();

    document.querySelector('.js-result').innerHTML = result;

    document.querySelector('.js-moves').innerHTML =`You <img src="./images/${playerMove}-emoji.png" class="move-icon" alt=""> <img src="./images/${computermove}-emoji.png" class="move-icon" alt=""> Computer`;

    localStorage.setItem('score', JSON.stringify(score));

  //   alert(`You picked ${playerMove}. Computer picked ${computermove}. ${result} \n Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}`);

  }
  
  function updateScore(){
      document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Ties: ${score.ties} Losses: ${score.losses}`;
  }

  function pickComputerMove() {
    let computerMove = "";
    const randomNumber = Math.random();

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "Rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "Paper";
    } else {
      computerMove = "Scissors";
    }
    console.log(computerMove);
    return computerMove;
  }