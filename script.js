
function getComputerChoice(){
    let number = Math.floor(Math.random() * 3);
    switch(number){
        case 0:
            return "ROCK"
        case 1:
            return "PAPER"
        case 2:
            return "SCISSORS"
    }
}

function roundHandler(){
    console.log("New round start, write your choice")
    const computerSelection = getComputerChoice();
    const playerSelection = prompt().toUpperCase();
    if(playerSelection == "ROCK" || playerSelection == "PAPER" || playerSelection == "SCISSORS"){
        return  playRound(playerSelection, computerSelection)
    }
    return "Wrong input!"

}

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
        return "It\'s a tie between " + playerSelection + " and " + computerSelection + ""
    }
    switch(playerSelection){
        case "ROCK":
            if(computerSelection === "PAPER"){
                return "You\'ve lost! " + computerSelection + " beats " + playerSelection + ""
            }
            else return "You\'ve won! " + playerSelection + " beats " + computerSelection + ""
        case "PAPER":
            if(computerSelection === "SCISSORS"){
                return "You\'ve lost! " + computerSelection + " beats " + playerSelection + ""
            }
            else return "You\'ve won! " + playerSelection + " beats " + computerSelection + ""
        case "SCISSORS":
            if(computerSelection === "ROCK"){
                return "You\'ve lost! " + computerSelection + " beats " + playerSelection + ""
            }
            else return "You\'ve won! " + playerSelection + " beats " + computerSelection + ""
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let text = roundHandler();
        let letter = text.charAt(7);
        console.log(letter)
        if(letter == "l"){
            computerScore ++;
        }
        else if(letter == "w"){
            playerScore ++;
        }
        console.log(text);
    }
    if(playerScore > computerScore){
        console.log("Congratulation you won! the score was "+playerScore+":"+computerScore+"")
        return;
    }
    if(computerScore > playerScore){
        console.log("Oh no, you lose! the score was "+computerScore+":"+playerScore+"")
        return;
    }
    console.log("Ey, it was a tie ! the score was "+computerScore+":"+playerScore+"")
    
}


console.log(game())