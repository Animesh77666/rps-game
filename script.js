document.addEventListener("DOMContentLoaded", () => {
  
    let playerScore = 0;
    let computerScore = 0;
    
    let playerScorePara = document.getElementById('player-score');
    let computerScorePara = document.getElementById('computer-score');
    playerScorePara.textContent = 'Player: 0';
    computerScorePara.textContent = 'Computer: 0';
    
  function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "ROCK";
      case 1:
        return "PAPER";
      case 2:
        return "SCISSORS";
    }
  }

  function game(playerSelection) {
    let comp = getComputerChoice();
    console.log(comp);
    console.log(playerSelection+comp);
    switch(playerSelection+comp){
        case ("ROCKSCISSORS"):
        case ("SCISSORSPAPER"):
        case ("PAPERROCK"):
            console.log("Winner");
            playerScore++;
            updateScore(playerScore,computerScore);
            break;
        case ("ROCKPAPER"):
        case ("SCISSORSROCK"):
        case ("PAPERSCISSORS"):
            console.log("Loser");
            computerScore++;
            updateScore(playerScore,computerScore);
            break;
        case ("ROCKROCK"):
        case ("SCISSORSSCISSORS"):
        case ("PAPERPAPER"):
            console.log("Draw");
    }
  }

  let r = document.getElementById("rock");
  let p = document.getElementById("paper");
  let s = document.getElementById("scissors");
  r.addEventListener('click', ()=>game("ROCK"));
  p.addEventListener('click', ()=>game("PAPER"));
  s.addEventListener('click', ()=>game("SCISSORS"));


  function updateScore(playerScore,computerScore){
    
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;

  }
});
