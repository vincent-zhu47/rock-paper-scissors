function getComputerChoice() {
    let num = Math.random();

    if (num <= 0.33) {
        return "Rock";
    }
    if (num <= 0.66) {
        return "Paper";
    }
    return "Scissors";
}

let humanChoice = document.querySelector(".selection");

humanChoice.addEventListener("click", (event) => {
    let target = event.target;
    console.log(target);

    switch(target.id) {
        case "rock":
            playRound("Rock", getComputerChoice());
            break;
        case "paper":
            playRound("Paper", getComputerChoice());
            break;
        case "scissors":
            playRound("Scissors", getComputerChoice());
            break;
    }
});

let results = document.querySelector(".results");
let humanScore = 0;
let computerScore = 0;
let human = document.querySelector(".human-score");
let comp = document.querySelector(".computer-score");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        results.textContent = "It's a tie! You both chose " + humanChoice;
    } else
    if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            results.textContent = "You Win! Rock beats Scissors";
            humanScore++;
        }
        if (computerChoice === "Paper") {
            results.textContent = "You Lose! Paper beats Rock";
            computerScore++;
        }
    } else
    if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            results.textContent = "You Win! Paper beats Rock";
            humanScore++;
        }
        if (computerChoice === "Scissors") {
            results.textContent = "You Lose! Scissors beats Paper";
            computerScore++;
        }
    } else
    if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            results.textContent = "You Win! Scissors beats Paper";
            humanScore++;
        }
        if (computerChoice === "Rock") {
            results.textContent = "You Lose! Rock beats Scissors";
            computerScore++;
        }
    }
    human.textContent = "Human Score: " + humanScore;
    comp.textContent = "Computer Score: " + computerScore;

    if (humanScore === 5) {
        results.textContent = "You Win!";
        computerScore = 0;
        humanScore = 0;
        human.textContent = "Human Score: 0";
        comp.textContent = "Computer Score: 0";
    }
    if (computerScore === 5) {
        results.textContent = "You Lose!";
        computerScore = 0;
        humanScore = 0;
        human.textContent = "Human Score: 0";
        comp.textContent = "Computer Score: 0";
    }
}