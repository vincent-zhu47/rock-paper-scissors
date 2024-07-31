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

function getHumanChoice() {
    let choice = prompt("Choose Rock, Paper, or Scissors");
    if (choice.toLowerCase() === "rock") {
        return "Rock";
    }
    if (choice.toLowerCase() === "paper") {
        return "Paper";
    }
    if (choice.toLowerCase() === "scissors") {
        return "Scissors";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("It's a tie! You both chose " + humanChoice);
        } else
        if (humanChoice === "Rock") {
            if (computerChoice === "Scissors") {
                console.log("You Win! Rock beats Scissors");
                humanScore++;
            }
            if (computerChoice === "Paper") {
                console.log("You Lose! Paper beats Rock");
                computerScore++;
            }
        } else
        if (humanChoice === "Paper") {
            if (computerChoice === "Rock") {
                console.log("You Win! Paper beats Rock");
                humanScore++;
            }
            if (computerChoice === "Scissors") {
                console.log("You Lose! Scissors beats Paper");
                computerScore++;
            }
        } else
        if (humanChoice === "Scissors") {
            if (computerChoice === "Paper") {
                console.log("You Win! Scissors beats Paper");
                humanScore++;
            }
            if (computerChoice === "Rock") {
                console.log("You Lose! Rock beats Scissors");
                computerScore++;
            }
        }
    }

    let humanChoice;
    let computerChoice;

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    console.log("Your score: " + humanScore + "\nComputer score: " + computerScore);
}