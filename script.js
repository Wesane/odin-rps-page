
let computerSelection;
let result;
let playerScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let a = Math.floor(Math.random() * 3 ) + 1;
    if (a === 1){
        return "Batu";
    }
    else if (a === 2){
        return "Kertas";
    }
    else if (a === 3){
        return "Pedang";
    }
    else{
        return "Unknown Value";
    }
}

// computerSelection = getComputerChoice();
// rawAnswer = prompt("Apa gerakanmu?");
// playerSelection = rawAnswer.toLowerCase();
// console.log(playerSelection)

function playRPS(){

    computerSelection = getComputerChoice();
    rawAnswer = prompt("Apa gerakanmu?");
    playerSelection = rawAnswer.toLowerCase();
    // console.log(playerSelection);
    // console.log(computerSelection);
    
    if (computerSelection === "Pedang" && playerSelection === "batu"){
        console.log("Kamu menang, Batu mengalahkan Pedang!");
        return result = ("win")
    }
    else if (computerSelection ==="Pedang" && playerSelection === "kertas"){
        console.log("Kamu kalah, Pedang mengalahkan Kertas!");
        return result = ("lose");
    }
    else if (computerSelection === "Kertas" && playerSelection === "batu"){
        console.log("Kamu kalah, Kertas mengalahkan Batu!");
        return result = ("lose");
    }
    else if (computerSelection === "Kertas" && playerSelection === "pedang"){
        console.log("Kamu menang, Pedang mengalahkan Kertas!");
        return result = ("win");
    }
    else if (computerSelection === "Batu" && playerSelection === "pedang"){
        console.log("Kamu kalah, Batu mengalahkan Pedang!");
        return result = ("lose");
    }
    else if (computerSelection === "Batu" && playerSelection === "kertas"){
        console.log("Kamu menang, Kertas mengalahkan Batu!");
        return result = ("win");
    }
    else {
        console.log("Tidak ada pemenang.");
        return result = ("draw")
    }
}

function playGame(){
    for (let i = 0; i < 5;i++){
        playRPS();
        if (result === "win"){
            playerScore++
        }
        else if (result === "lose"){
            computerScore++
        }
        
    }
    let gameScore = `Player - ${playerScore}, Computer - ${computerScore}`;
    if (playerScore > computerScore){
        console.log(`Kamu menang! ${gameScore}`)
    } 
    else if (computerScore > playerScore){
        console.log(`Kamu kalah... ${gameScore}`)
    }
    else {
        console.log(`Seri?? ${gameScore}`)
    }
}



playGame();
