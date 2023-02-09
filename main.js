var userScore = 0;
var computerScore = 0;
var userScoreHTML = document.querySelector("#userScore");
var computerScoreHTML = document.querySelector("#computerScore");
var resultHTML = document.getElementById("result");
var buttonChoices = document.querySelectorAll(".buttonChoice");
var clearHTML = document.getElementById("clear");
var userChoiceShowHTML = document.getElementById("userChoiceShow");
var computerChoiceShowHTML = document.getElementById("computerChoiceShow");
var clearButtonConversionHTML = document.getElementById("clearReal");
var resultOkHTML = document.getElementById("resultOk");
let user;
let computer;
var result;
var count = 0;
var roundHTML = document.getElementById("roundShow");

function main() {
    buttonChoices.forEach(div => div.addEventListener("click", () => {
        user = div.textContent;
        getComputerChoice();
        comparison();
        userChoiceShowHTML.innerHTML = user;
        computerChoiceShowHTML.innerHTML = computer;
        roundHTML.innerHTML = "Round " + (count + 1);
        if (count == 5) {
            if (userScoreHTML.textContent > computerScoreHTML.textContent) {
                setTimeout(() => {
                    resultHTML.innerHTML = "Game over! You won! Congratulations! 🥳";
                    resultHTML.style.color = "#44ff3d";
                }, 1000);
                clearButtonConversion();
                // stopAll();
            } else if (userScoreHTML.textContent == computerScoreHTML.textContent) {
                setTimeout(() => {
                  resultHTML.innerHTML = "Game over! You drew! Congratulations! 🙂";
                  resultHTML.style.color = "#949399";
                }, 1000);
                clearButtonConversion();
                // stopAll();
            } else if (userScoreHTML.textContent < computerScoreHTML.textContent) {
                setTimeout(() => {
                    resultHTML.innerHTML = "Game over! You lost! Better luck next time! 😶";
                    resultHTML.style.color = "#fc232e";
                }, 1000);
                clearButtonConversion();
                // stopAll();
            }
        }
    }));
}

main();

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber) {
        case 0:
            computer = "🪨";
            break;
        case 1:
            computer = "📄";
            break;
        case 2:
            computer = "✂️"
            break;
    }
}

function comparison() {
    if (user == computer) draw();
    else if (computer == "🪨") return user == "📄" ? win() : loss();
    else if (computer == "📄") return user == "✂️" ? win() : loss();
    else if (computer == "✂️") return user == "🪨" ? win() : loss();
}   

function win() {
    userScore ++;
    userScoreHTML.innerHTML = userScore;
    resultHTML.innerHTML = user + " beats " + computer + "! You won!";
    resultHTML.style.color = "#44ff3d";
    resultOkHTML.style.color = "#44ff3d";
    resultOkHTML.innerHTML = "Win";
    count++;
    clearHTML.addEventListener("click", () => reset());
}

function draw() {
    userScore += 0.5;
    computerScore += 0.5;
    userScoreHTML.innerHTML = userScore;
    computerScoreHTML.innerHTML = computerScore;
    resultHTML.innerHTML = computer + " draws " + user + "! You drew!";
    resultHTML.style.color = "#949399";
    resultOkHTML.style.color = "#949399";
    resultOkHTML.innerHTML = "Draw";
    count++;
    clearHTML.addEventListener("click", () => reset());
}

function loss() {
    computerScore++;
    computerScoreHTML.innerHTML = computerScore;
    resultHTML.innerHTML = computer + " beats " + user + "! You lost!";
    resultHTML.style.color = "#fc232e";
    resultOkHTML.style.color = "#fc232e";
    resultOkHTML.innerHTML = "Loss";
    count++;
    clearHTML.addEventListener("click", () => reset());
}

clearHTML.addEventListener("click", () => reset());

function reset() {
    userScore = 0;
    computerScore = 0
    count = 0;
    userScoreHTML.innerHTML = userScore;
    computerScoreHTML.innerHTML = computerScore;
    resultHTML.innerHTML = "Make a move!";
    resultHTML.style.color = "#010f47";
    userChoiceShowHTML.innerHTML = "";
    computerChoiceShowHTML.innerHTML = "";
    roundHTML.innerHTML = "Round 1";
    resultOkHTML.innerHTML = "TBD";
    resultOkHTML.style.color = "#010f47";
    clearButtonConversionHTML.innerHTML = "Clear";
    confettiEnd();
}

function clearButtonConversion() {
    clearButtonConversionHTML.innerHTML = "Retry";
}


// function stopAll() {
//     Object.freeze(userScore);
//     Object.freeze(computerScore);
//     Object.freeze(userScoreHTML);
//     Object.freeze(computerScoreHTML)
//     Object.freeze(resultHTML)
//     Object.freeze(buttonChoices)
//     Object.freeze(clearHTML )
//     Object.freeze(userChoiceShowHTML)
//     Object.freeze(computerChoiceShowHTML)
//     Object.freeze(clearButtonConversionHTML)
//     Object.freeze(resultOkHTML)
//     Object.freeze(user)
//     Object.freeze(computer)
//     Object.freeze(result)
//     Object.freeze(count)
//     Object.freeze(roundHTML)
// }