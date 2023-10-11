let playerCount = 0;
let computerCount = 0;

function getComputerChoice(){

    const choice = Math.floor(Math.random() * 3)

    switch (choice){
        case 0:
            return 'ROCK';
        case 1:
            return 'SCISSOR'
        case 2:
            return 'PAPER'
    }
}

function round(playerSelection,computerSelection){
    if(playerSelection.toUpperCase() == "ROCK"){
        switch (computerSelection.toUpperCase()){
            case "SCISSOR":
                console.log("You win! Rock beats Scissor");
                playerCount++;
                break;
            case "PAPER":
                console.log("You lose! Paper beats Rock");
                computerCount;
                break;
            default:
                console.log("Its a tie");
        }
    }
    else if(playerSelection.toUpperCase() == "PAPER"){
        switch (computerSelection.toUpperCase()){
            case "SCISSOR":
                console.log("You lose! Scissor beats Paper");
                computerCount++;
                break;
            case "ROCK":
                console.log("You win! Paper beats Rock");
                playerCount++;
                break;
            default:
                console.log("Its a tie");
                break;
        }
    }
    else if(playerSelection.toUpperCase() == "SCISSOR"){
        switch (computerSelection.toUpperCase()){
            case "PAPER":
                console.log("You win! Scissor beats Paper");
                playerCount++
                break;
            case "ROCK":
                console.log("You lose! Rock beats Rock");
                computerCount++
                break;
            default:
                console.log("Its a tie");
                break;
        }
    }
}

function game(){
    
    while(playerCount < 5 && computerCount < 5){
        let playerChoice = window.prompt("rock? paper? scissors?");
        round(playerChoice, getComputerChoice());
        console.log(`Player: ${playerCount} Computer: ${computerCount}`);
    }
    
}

game();
