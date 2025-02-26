let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let backgroundColor = "#548687"; // Original background color

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enableBoxes();
  msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      //playerO
      box.innerText = "O";
      turnO = false;
    } else {
      //playerX
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      gameDraw();
    }
  });
});

const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is ${winner}`;
  document.body.style.backgroundColor = winner === "X" ? "red" : "#062627";
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return true;
      }
    }
  }
};

// Create a mix of X and O letters
const container = document.querySelector(".container");
const totalLetters = 20; // Number of X and O letters to generate

for (let i = 0; i < totalLetters; i++) {
  // Randomly choose between X and O
  const letter = document.createElement("div");
  letter.classList.add("letter");
  letter.textContent = Math.random() > 0.5 ? " X " : " 0 ";

  // Set random position and animation delay
  const randomX = Math.random() * 100; // Random horizontal position
  const randomDelay = Math.random() * 3; // Random animation delay

  letter.style.left = `${randomX}vw`;
  letter.style.animationDelay = `${randomDelay}s`;

  // Append to the container
  container.appendChild(letter);
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", () => {
  msgContainer.classList.add("hide");
});
