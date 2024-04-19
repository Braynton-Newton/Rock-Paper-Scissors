var computerScore = 0
var userScore = 0
var computerWins = 0
var userWins = 0
function paperFunction(){
    var computerChoice = Math.floor((Math.random() * 3)+1);
    document.getElementsByClassName("img1")[0].src="Images/Paper.jpg"
    var userInput = ("paper")
    if(computerChoice == 1){
        computerChoice = "Rock";
        document.getElementsByClassName("img1")[1].src="Images/Rock.jpg"
        }
        else if(computerChoice == 2){
        computerChoice = "Paper";
        document.getElementsByClassName("img1")[1].src="Images/Paper.jpg"
        }
        else if(computerChoice == 3){
        computerChoice = "Scissors";
        document.getElementsByClassName("img1")[1].src="Images/Scissor.png"
        }
        if(computerChoice == "Paper" && userInput.toLowerCase() == "paper"){
            document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Draw! Try Again"
        }       
        else if(computerChoice == "Scissors" && userInput.toLowerCase() == "paper"){
            document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 2 Wins"
            computerScore++;
        }
        else if(computerChoice == "Rock" && userInput.toLowerCase() == "paper"){
            document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 1 Wins"
            userScore++;
        }
        if(computerScore == 2){
            document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 2 Wins the Game"
            computerScore == 0;
            userScore == 0;
            computerWins++;
            }
            if(userScore == 2){
                document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 1 Wins the Game"
                computerScore == 0;
                userScore == 0;
                userWins++;
                }
        
}
function rockFunction(){
    var computerChoice = Math.floor((Math.random() * 3)+1);
    document.getElementsByClassName("img1")[0].src="Images/Rock.jpg"
    var userInput = ("rock")
    if(computerChoice == 1){
        computerChoice = "Rock";
        document.getElementsByClassName("img1")[1].src="Images/Rock.jpg"
        }
        else if(computerChoice == 2){
        computerChoice = "Paper";
        document.getElementsByClassName("img1")[1].src="Images/Paper.jpg"
        }
        else if(computerChoice == 3){
        computerChoice = "Scissors";
        document.getElementsByClassName("img1")[1].src="Images/Scissor.png"
        }
        if(computerChoice == "Rock" && userInput.toLowerCase() == "rock"){
            document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Draw! Try Again"
        }       
        else if(computerChoice == "Paper" && userInput.toLowerCase() == "rock"){
            document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 2 Wins"
            computerScore++;
        }
        else if(computerChoice == "Scissors" && userInput.toLowerCase() == "rock"){
            document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 1 Wins"
            userScore++;
        }
        if(computerScore == 2){
            document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 2 Wins the Game"
            computerScore == 0;
            userScore == 0;
            computerWins++;
            }
            if(userScore == 2){
                document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 1 Wins the Game"
                computerScore == 0;
                userScore == 0;
                userWins++;
                }
    }
        function scissorFunction(){
            var computerChoice = Math.floor((Math.random() * 3)+1);
            document.getElementsByClassName("img1")[0].src="Images/Scissor.png"
            var userInput = ("scissors")
            if(computerChoice == 1){
                computerChoice = "Rock";
                document.getElementsByClassName("img1")[1].src="Images/Rock.jpg"
                }
                else if(computerChoice == 2){
                computerChoice = "Paper";
                document.getElementsByClassName("img1")[1].src="Images/Paper.jpg"
                }
                else if(computerChoice == 3){
                computerChoice = "Scissors";
                document.getElementsByClassName("img1")[1].src="Images/Scissor.png"
                }
                if(computerChoice == "Scissors" && userInput.toLowerCase() == "scissors"){
                    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Draw! Try Again"
                }       
                else if(computerChoice == "Rock" && userInput.toLowerCase() == "scissors"){
                    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 2 Wins"
                    computerScore++;
                }
                else if(computerChoice == "Paper" && userInput.toLowerCase() == "scissors"){
                    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 1 Wins"
                    userScore++;
                }
                if(computerScore == 2){
                    document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 2 Wins the Game"
                    computerScore == 0;
                    userScore == 0;
                    computerWins++;
                    }
                    if(userScore == 2){
                        document.firstElementChild.lastElementChild.firstElementChild.firstElementChild.innerHTML="Player 1 Wins the Game"
                        computerScore == 0;
                        userScore == 0;
                        userWins++;
                        }
            }
        function winFunction(){
            document.getElementsByClassName("cpu")[0].innerHTML = computerWins
                document.getElementsByClassName("user")[0].innerHTML = userWins
             }
        

