
let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const rock = document.querySelector("Rock");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const ranIdx = Math.floor(Math.random() * 3);
  return options[ranIdx];
  //rock,paper,scissors
};
const drawGame = () => {
  console.log("GAME WAS DRAW!!!");
  msg.innerText = "DRAW!! TRY AGAIN";
  msg.style.backgroundColor = "#081B31";
};
const showWinner = (userWin, userChoice, computerChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("YOU WIN!");
    msg.innerText = `YOU WIN!! your: ${userChoice} beats computer: ${computerChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    console.log("YOU LOSE!!!!");
    msg.innerText = `YOU LOSE!! computer: ${computerChoice} beats yours: ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("user choice=", userChoice);
  //generate computer choice
  const computerChoice = genComputerChoice();
  console.log("comp choice=", computerChoice);

  if (userChoice === computerChoice) {
    //draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "Rock") {
      //scissors,paper
      userWin = computerChoice === "Paper" ? false : true;
    } else if (userChoice === "Paper") {
      //rock,scissors
      userWin = computerChoice === "Scissors" ? false : true;
    } else {
      //rock,paper
      userWin = computerChoice === "Rock" ? false : true;
    }
    showWinner(userWin, userChoice, computerChoice);
  }
};

choices.forEach((choice) => {
  console.log(choice);
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
