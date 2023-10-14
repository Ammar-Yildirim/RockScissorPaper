let playerCount = 0;
let computerCount = 0;

const player = document.querySelector(".player");
const computer = document.querySelector(".computer");
const outcome = document.querySelector(".outcome")

let button;

player.addEventListener("click", e =>{
    if(e.target.matches("button")){
        button = e.target;
        cpChoice = getComputerChoice();
        round(button.innerText, cpChoice);
        button.disabled = "true"

        //Let's take down the other options
        const arr = Array.from(player.children);
        arr.filter( x=> !(x.classList.contains(button.innerText))).map(  x=> x.style = "display: none")
        console.log(arr)

        //Let's display computers option
        const img = document.createElement("img");
        img.src = `${cpChoice}.png`
        img.classList.add("responseImg")
        const p = document.createElement("p");
        p.innerText = cpChoice.toLowerCase();
        computer.append(img)
        computer.append(p)
    }
    }
);

outcome.addEventListener("click", e =>{
    if(e.target.id = "playAgainButton"){
        Array.from(player.children).map(x=>x.style.display = "flex")
        Array.from(computer.children).map( x => x.remove())
        Array.from(outcome.children).map (x=>x.remove());
        console.log(button.disabled)   
        button.removeAttribute("disabled")
        console.log(button.disabled)  
    }
})

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
    const p = document.createElement("p");
    const count = document.createElement("p");
    
    if(playerSelection.toUpperCase() == "ROCK"){
        switch (computerSelection.toUpperCase()){
            case "SCISSOR":
                p.innerText = "You win! Rock beats Scissor";
                count.innerText = `${++playerCount} ${computerCount}`
                console.log("You win! Rock beats Scissor");
                break;
            case "PAPER":
                p.innerText = "You lose! Paper beats Rock";
                count.innerText = `${playerCount} ${++computerCount}`
                console.log("You lose! Paper beats Rock");
                break;
            default:
                p.innerText = "Its a tie";
        }
    }
    else if(playerSelection.toUpperCase() == "PAPER"){
        switch (computerSelection.toUpperCase()){
            case "SCISSOR":
                p.innerText = "You lose! Scissor beats Paper";
                count.innerText = `${playerCount} ${++computerCount}`
                break;
            case "ROCK":
                console.log("You win! Paper beats Rock");
                p.innerText = "You win! Paper beats Rock";
                count.innerText = `${++playerCount} ${computerCount}`
                break;
            default:
                p.innerText = "Its a tie";
                break;
        }
    }
    else if(playerSelection.toUpperCase() == "SCISSOR"){
        switch (computerSelection.toUpperCase()){
            case "PAPER":
                console.log("You win! Scissor beats Paper");
                p.innerText = "You win! Rock beats Scissor";
                count.innerText = `${++playerCount} ${computerCount}`
                break;
            case "ROCK":
                console.log("You lose! Rock beats Rock");
                p.innerText = "You lose! Rock beats Rock";
                count.innerText = `${playerCount} ${++computerCount}`
                break;
            default:
                p.innerText = "Its a tie";
                console.log("Its a tie");
                break;
        }
    }
    const button = document.createElement("button");
    button.innerText = "Play Again"
    button.id = "playAgainButton"
    outcome.append(p,count,button)
}

