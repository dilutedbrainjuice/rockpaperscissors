
const choice = ["Rock","Paper","Scissors"];

function getComputerChoice(){
    random = Math.floor(Math.random() * 3);
    return choice[random];
    
}

//console.log(getComputerChoice());

function getPlayerChoice(){


    input = prompt("1 for Rock 2 for Paper 3 for Scissors,\nPlease select one");

    while(isNaN(input) || input > 3 || input < 1){
        input = prompt("Please select a valid number! 1,2,or 3");
    }

    
        return choice[input - 1];
    
}



function play() {

    playerChoice = getPlayerChoice();
    computerChoice = getComputerChoice();
    console.log("You chose" + playerChoice);
    console.log("Computer chooses " + computerChoice);
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }


}

function playGame(){
    
    
    playerWins = 0;
    computerWins = 0;

    for(let i = 0; i<5;i ++){
        console.log(result = play());
        if (result == "You win!"){
            playerWins++;
        }
        else if (result == "Computer wins!" ){
            computerWins++;
        }

    }

    if (playerWins > computerWins){
        console.log("You won the tournament!");
    }else if (computerWins > playerWins){
        console.log("You lost the tournament...");
    }else{
        console.log("TIE");
    }

    



}

playGame();

