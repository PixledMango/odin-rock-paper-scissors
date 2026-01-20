function getComputerChoice() {
    let randomNum = Math.random()
    if (randomNum < (1 / 3))
        return "rock"
    else if (randomNum < (2 / 3))
        return "paper"
    else
        return "scissors"
}

function getPlayerChoice() {
    return prompt("Do you choose rock, paper, or scissors?").toLowerCase()
}

function decideWinner(computer, player) {
    if (((player == "rock") & (computer == "scissors")) || ((player == "scissors") & (computer == "paper")) || ((player == "paper") & (computer == "rock"))) {
        console.log("You Win!")
        playerScore++
    }
    else if (player == computer) {
        console.log("It's a Tie!")
    }
    else {
        console.log("You Lose!")
        computerScore++
    }
}

function endGmaeMessage() {
    if (playerScore > computerScore)
        console.log("Congrats! You Won!")
    else if (computerScore > playerScore)
        console.log("You lost. Better luck next time.")
    else
        console.log("It was a tie.")
}


let computerScore = 0
let playerScore = 0

for (let i = 0; i < 5; i++) {
    let computerChoice = getComputerChoice()
    let playerChoice = getPlayerChoice()
    decideWinner(computerChoice, playerChoice)
}
endGmaeMessage()
