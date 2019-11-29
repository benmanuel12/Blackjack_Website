let compHandArray = [0, 0, 0, 0, 0];
let playerHandArray = [0, 0, 0, 0, 0];
let turnTracker = 0; //0 = between turns, 1 = computer's turn, 2 = player's turn
let deck = [];
let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
let faceNames = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
let faceValues = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
let compCurrent = 0;
let playerCurrent = 0;
let compTotal = 0;
let playerTotal = 0;



function setupGame() {

    turnTracker = 0;

    // assemble deck
    let index = 0
    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < faceNames.length; j++) {
            deck[index] = faceNames[j] + " of " + suits[i];
            index++;
        }
    }

    // have each player draw 2 cards
    drawCards("comp", 2);
    drawCards("player", 2);
    console.log("drawn cards");

    compCurrent = calculateScore(compHandArray);
    playerCurrent = calculateScore(playerHandArray);
    console.log("calculated scores");

    //Reset the cumulative scoreboard
    updateBoard(0, 0);
    console.log("updated board");

    //Reset the tickers
    updateInfo("compinfo", compCurrent);
    updateInfo("playerinfo", playerCurrent);
    console.log("updated info");

    let answer = confirm("Confirm to start the game");
    if (answer) {
        setTimeout(compTurn, 2000);
    }


}

function drawCards(thePlayer, noOfCards) {
    for (i = 0; i < noOfCards; i++) {
        randomCard = "";
        while (randomCard == "") {
            randomIndex = Math.floor(Math.random() * deck.length);
            randomCard = deck[randomIndex];
        }
        deck[randomIndex] = "";
        if (thePlayer == "comp") {
            cardPlaced = false;
            testIndex = 0;
            while ((!cardPlaced) && (testIndex < 5)) {
                if (compHandArray[testIndex] == 0) {
                    compHandArray[testIndex] = faceValues[randomIndex];
                    cardPlaced = true;
                    changeHandSlot(compHandArray, testIndex, randomCard);
                }
                testIndex++;
            }
        } else if (thePlayer == "player") {
            cardPlaced = false;
            testIndex = 0;
            while ((!cardPlaced) && (testIndex < 5)) {
                if (playerHandArray[testIndex] == 0) {
                    playerHandArray[testIndex] = faceValues[randomIndex];
                    cardPlaced = true;
                    changeHandSlot(playerHandArray, testIndex, randomCard);
                }
                testIndex++;
            }
        }
    }
}

function twist() {
    if (turnTracker == 2) {
        drawCards("player", 1);
        playerCurrent = calculateScore(playerHandArray);
        updateInfo("playerinfo", playerCurrent);
    }

}

function stick() {
    if (turnTracker == 2) {
        updateInfo("gamestate", "Pressed stick");
        if (checkBust("player")) {
            updateInfo("playerinfo", "Bust");
            compTotal += compCurrent;
            updateBoard(compTotal, playerTotal);
            updateInfo("gamestate", "You have gone bust. The computer wins");
        } else {
            compareHands();
        }
        turnTracker = 0;
        updateInfo("gamestate", "running end of round functions");
        cleanUpAndReset();
        compTurn();

    }
}

function compareHands() {
    if (compCurrent >= playerCurrent) {
        alert("You lost");
        compTotal += compCurrent;
    } else {
        alert("You won");
        playerTotal += playerCurrent;
    }
    updateBoard(compTotal, playerTotal);
}

function calculateScore(hand) {
    sum = 0
    for (i = 0; i < hand.length; i++) {
        sum = sum + hand[i];
    }
    if ((sum > 21) && (hand.includes(11))) {
        //that hand is possibly Bust
        hand[hand.indexOf(11)] = 1;
        calculateScore(hand);
    } else {
        return sum;
    }

}

function checkBust(who) {
    if (who == "player") {
        return calculateScore(playerHandArray) > 21;
    } else if (who == "comp") {
        return calculateScore(compHandArray) > 21;
    }
}

function cleanUpAndReset() {
    // clear hands
    compHandArray = [0, 0, 0, 0, 0]
    playerHandArray = [0, 0, 0, 0, 0]
    compCurrent = 0;
    playerCurrent = 0;

    // wipe canvasses
    canvasses = ["compcard0", "compcard1", "compcard2", "compcard3", "compcard4", "playercard0", "playercard1", "playercard2", "playercard3", "playercard4"]
    let currentCanvas;
    let context;
    for (i = 0; i < canvasses.length; i++) {
        currentCanvas = document.getElementById(canvasses[i]);
        context = currentCanvas.getContext('2d');
        context.clearRect(0, 0, currentCanvas.width, currentCanvas.height);
    }
    // reset info

    drawCards("comp", 2);
    drawCards("player", 2);
    compCurrent = calculateScore(compHandArray);
    playerCurrent = calculateScore(playerHandArray);
    updateInfo("compinfo", compCurrent);
    updateInfo("playerinfo", playerCurrent)
    updateInfo("gamestate", "Starting new game");
    console.log("Starting new game");

}

function changeHandSlot(hand, index, value) {
    if (hand == compHandArray) {
        canvasId = "compcard" + index.toString();
    } else if (hand == playerHandArray) {
        canvasId = "playercard" + index.toString();
    } else {
        console.log("valid hand not given");
    }
    let targetCanvas = document.getElementById(canvasId);
    let ctx = targetCanvas.getContext("2d");
    ctx.font = "30px Comic Sans MS";
    ctx.textAlign = "center";
    ctx.fillText(value, targetCanvas.width / 2, targetCanvas.height / 2);
}

function updateInfo(element, data) {
    if (element == "compinfo") {
        document.getElementById(element).innerHTML = "Computer's hand: " + data;
    } else if (element == "playerinfo") {
        document.getElementById(element).innerHTML = "Player's hand: " + data;
    } else if (element == "gamestate") {
        document.getElementById(element).innerHTML = data;
    }
}

function updateBoard(val1, val2) {
    document.getElementById("score").innerHTML = ("Total score this game:<br>Computer | " + val1 + "\n Player | " + val2);
}

function compDraw() {
    updateInfo("gamestate", "Computer draws");
    console.log("Computer draws");
    drawCards("comp", 1);
    compCurrent = calculateScore(compHandArray);
    updateInfo("compinfo", compCurrent);
}

function compTurn() {
    turnTracker = 1;
    updateInfo("gamestate", "Starting computer turn");
    console.log("Starting computer turn");
    while (compCurrent <= 16) {
        //setTimeout(compDraw, 1000);
        compDraw();
    }
    if (checkBust("comp")) {
        updateInfo("compinfo", "Bust");
        playerTotal += playerCurrent;
        updateBoard(compTotal, playerTotal);
        updateInfo("gamestate", "The computer has gone bust. You win");
        console.log("The computer has gone bust. You win");
        turnTracker = 0;
        updateInfo("gamestate", "Running end of round functions");
        console.log("Running end of round functions");
        cleanUpAndReset();
        compTurn();
    } else {
        turnDone = false;
        turnTracker = 2;
        updateInfo("gamestate", "Starting player turn");
        console.log("Starting player turn");
    }
}

window.onload = setupGame;