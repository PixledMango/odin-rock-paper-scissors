const rockButton = document.querySelector(".rock-button");
const paperButton = document.querySelector(".paper-button")
const scissorsButton = document.querySelector(".scissors-button")

const displayText = document.querySelector(".display-text")
const scorecard = document.querySelector(".scorecard")


rockButton.addEventListener("click", () => {
    playRound("rock")
});
paperButton.addEventListener("click", () => {
    playRound("paper")
})
scissorsButton.addEventListener("click", () => {
    playRound("scissors")
});


















let playerScore = 0
let computerScore = 0
let numberOfRounds = 0


function playRound(selectedObject) {
    if (numberOfRounds >= 5)
        return

    let computerChoice = getComputerChoice()
    let playerChoice = selectedObject
    decideWinner(computerChoice, playerChoice)
    updateScorecard()
    numberOfRounds++

    if (numberOfRounds >= 5)
        endGmaeMessage()
}

function updateScorecard() {
    scorecard.textContent = playerScore + " - " + computerScore
}

function getComputerChoice() {
    let randomNum = Math.random()
    if (randomNum < (1 / 3))
        return "rock"
    else if (randomNum < (2 / 3))
        return "paper"
    else
        return "scissors"
}


function decideWinner(computer, player) {
    if (((player == "rock") & (computer == "scissors")) || ((player == "scissors") & (computer == "paper")) || ((player == "paper") & (computer == "rock"))) {
        displayText.textContent = "You Win!"
        playerScore++
    }
    else if (player == computer) {
        displayText.textContent = "It's a Tie!"
    }
    else {
        displayText.textContent = "You Lose!"
        computerScore++
    }
}


function endGmaeMessage() {
    if (playerScore > computerScore)
        displayText.textContent = "Congrats! You Won!"
    else if (computerScore > playerScore)
        displayText.textContent = "You lost. Better luck next time."
    else
        displayText.textContent = "It was a tie."
}