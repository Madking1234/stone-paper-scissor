const group = {
  stone: "Group 2.png",
  scissor: "Group 3.png",
  paper: "Group 1.png",
};
const choice = {
  stone: "image-rock.png",
  scissor: "image-scissor.png",
  paper: "image-paper.png",
};
myScore = 0;
compScore = 0;
function userPicked(hand) {
  let hands = document.querySelector(".game-play");
  hands.style.display = "none";
  let results = document.querySelector(".results");
  results.style.display = "flex";
  document.getElementById("group-image").src = group[hand];
  document.getElementById("choice-image").src = choice[hand];
  let cpHand = compPicked();
  descisionMaker(hand, cpHand);
}
const compPicked = () => {
  let hands = ["stone", "paper", "scissor"];
  let cpHand = hands[Math.floor(Math.random() * hands.length)];

  document.getElementById("group-image1").src = group[cpHand];
  document.getElementById("choice-image1").src = choice[cpHand];
  return cpHand;
};
const descisionMaker = (userHand, cpHand) => {
  let againstPc = document.querySelector(".descision-maker h2");

  if (userHand == "paper" && cpHand == "scissor") {
    setDecision("YOU LOST");
    setScore(compScore++);
    againstPc.textContent = "AGAINST PC";
  }
  if (userHand == "paper" && cpHand == "stone") {
    setDecision("YOU WIN");
    setScore(myScore++);
    hideButton();
    againstPc.textContent = "AGAINST PC";
  }
  if (userHand == "paper" && cpHand == "paper") {
    setDecision("TIE UP");
    againstPc.textContent = "";
  }
  if (userHand == "stone" && cpHand == "scissor") {
    setDecision("YOU WIN");
    setScore(myScore++);
    hideButton();
    againstPc.textContent = "AGAINST PC";
  }
  if (userHand == "stone" && cpHand == "paper") {
    setDecision("YOU LOST");
    setScore(compScore++);
    againstPc.textContent = "AGAINST PC";
  }
  if (userHand == "stone" && cpHand == "stone") {
    setDecision("TIE UP");
    againstPc.textContent = "";
  }
  if (userHand == "scissor" && cpHand == "scissor") {
    setDecision("TIE UP");
    againstPc.textContent = "";
  }
  if (userHand == "scissor" && cpHand == "stone") {
    setDecision("YOU LOST");
    setScore(compScore++);
    againstPc.textContent = "AGAINST PC";
  }
  if (userHand == "scissor" && cpHand == "paper") {
    setDecision("YOU WIN");
    setScore(myScore++);
    hideButton();
    againstPc.textContent = "AGAINST PC";
  }
};
const setDecision = (decision) => {
  let updateResults = document.querySelector(".descision-maker h1");
  updateResults.textContent = decision;
};
const palyAgain = () => {
  let hands = document.querySelector(".game-play");
  hands.style.display = "block";
  let results = document.querySelector(".results");
  results.style.display = "none";
  let next = document.querySelector(".next-button");
  next.style.display = "none";
};
const setScore = () => {
  let personalScore = document.querySelector(".score1 p");
  let computerScore = document.querySelector(".score2 p");
  personalScore.textContent = compScore;
  computerScore.textContent = myScore;
  localStorage.setItem("userScore", myScore);
  localStorage.setItem("computerScore", compScore);
};
const hideButton = () => {
  let next = document.querySelector(".next-button");
  next.style.display = "block";
};
if (localStorage.getItem("userScore") !== null) {
  myScore = parseInt(localStorage.getItem("userScore"));
  compScore = parseInt(localStorage.getItem("computerScore"));
  setScore();
}
const rulesOpen = () => {
  let rules = document.querySelector(".task");
  let close = document.querySelector(".close");
  rules.style.display = "block";
  close.style.display = "block";
};
const rulesClose = () => {
  let rules = document.querySelector(".task");
  let close = document.querySelector(".close");
  rules.style.display = "none";
  close.style.display = "none";
};
const winnerPage = () => {
  let winnerIcon = document.querySelector(".winner-page");
  let score = document.querySelector(".score-box");
  let game = document.querySelector(".results");
  let button = document.querySelector(".buttons");
  winnerIcon.style.display = "block";
  score.style.display = "none";
  game.style.display = "none";
  button.style.display = "none";
};
const againPlay = () => {
  let winnerIcon = document.querySelector(".winner-page");
  let score = document.querySelector(".score-box");
  let button = document.querySelector(".buttons");
  let hands = document.querySelector(".game-play");
  hands.style.display = "block";
  winnerIcon.style.display = "none";
  score.style.display = "flex";
  button.style.display = "flex";
};
const newRules = () => {
  let rules = document.querySelector(".task");
  let close = document.querySelector(".close");
  rules.style.display = "block";
  close.style.display = "block";
};
