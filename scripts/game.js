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
let hiddenCard = '';


// Sets up the game for the first round in a game
function setupGame() {
    turnTracker = 0;

    // assemble deck
    let index = 0
    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < faceNames.length; j++) {
            deck[index] = faceNames[j] + " of " + suits[i] + ".jpg";
            index++;
        }
    }

    // have each player draw 2 cards
    drawCards(compHandArray, 2);
    drawCards(playerHandArray, 2);
    console.log("drawn cards");

    compCurrent = calculateScore(compHandArray);
    playerCurrent = calculateScore(playerHandArray);
    console.log("calculated scores");

    //Reset the cumulative scoreboard
    updateBoard(0, 0);
    console.log("updated board");

    //Reset the tickers
    updateInfo("playerinfo", playerCurrent);
    console.log("updated info");

    setTimeout(compTurn, 2000);
}

// Invoked to draw cards for either player
function drawCards(playerArray, noOfCards) {
    for (i = 0; i < noOfCards; i++) {
        randomCard = "";
        while (randomCard == "") {
            randomIndex = Math.floor(Math.random() * deck.length);
            randomCard = deck[randomIndex];
        }
        deck[randomIndex] = "";
        cardPlaced = false;
        testIndex = 0;
        while ((!cardPlaced) && (testIndex < 5)) {
            if (playerArray[testIndex] == 0) {
                playerArray[testIndex] = faceValues[randomIndex];
                if ((playerArray == compHandArray) && (testIndex == 1)) {
                    hiddenCard = randomCard;
                    changeHandSlot(playerArray, testIndex, "blue_back.jpg");
                    console.log("placed card facedown");
                } else {
                    changeHandSlot(playerArray, testIndex, randomCard);
                    console.log("placed card faceup");
                }
                cardPlaced = true;
            }
            testIndex++;
        }
    }
}

// Invoked by button of same name on webpage to allow player to draw cards at their own pace
function twist() {
    if (turnTracker == 2) {
        drawCards(playerHandArray, 1);
        playerCurrent = calculateScore(playerHandArray);
        updateInfo("playerinfo", playerCurrent);
    }

}
// Invoked by button of same name on webpage to allow player to end turn at their own pace
function stick() {
    if (turnTracker == 2) {
        updateInfo("gamestate", "Pressed stick");
        if (checkBust("player")) {
            updateInfo("playerinfo", "Bust");
            compTotal += compCurrent;
            updateBoard(compTotal, playerTotal);
            updateInfo("gamestate", "You have gone bust. The computer wins");
        } else {
            revealFacedowns();
            compareHands();
        }
        turnTracker = 0;
        updateInfo("gamestate", "running end of round functions");
        updateScoreRecord();
        cleanUpAndReset();
        compTurn();
    }
}

// compares players hands, declares who won the round and updates scores appropriately
function compareHands() {
    if (compCurrent >= playerCurrent) {
        updateInfo("gamestate", "You lost");
        compTotal += compCurrent;
    } else {
        updateInfo("gamestate", "You won");
        playerTotal += playerCurrent;
    }
    updateBoard(compTotal, playerTotal);
}

// takes a hand as argument and returns the total score of that hand
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

// checks if a certain player has a hand score of over 21
function checkBust(who) {
    if (who == "player") {
        return calculateScore(playerHandArray) > 21;
    } else if (who == "comp") {
        return calculateScore(compHandArray) > 21;
    }
}

// Resets the game between round.
// This is different than the game setup function as that one has no need to clear the canvasses and this one has no need to reset the overall scoreboard
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

    drawCards(compHandArray, 2);
    drawCards(playerHandArray, 2);
    compCurrent = calculateScore(compHandArray);
    playerCurrent = calculateScore(playerHandArray);
    updateInfo("playerinfo", playerCurrent)
    updateInfo("gamestate", "Starting new game");
    console.log("Starting new game");

}

// changes any card in any hand to any other card
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
    let targetImage = new Image();
    targetImage.onload = function() {
        ctx.drawImage(targetImage, 0, 0, targetImage.width, targetImage.height, 0, 0, targetCanvas.width, targetCanvas.height);
    };
    targetImage.src = "images/" + value;

}

// updates UI elements
function updateInfo(element, data) {
    if (element == "compinfo") {
        document.getElementById(element).innerHTML = "Computer's hand: " + data;
    } else if (element == "playerinfo") {
        document.getElementById(element).innerHTML = "Player's hand: " + data;
    } else if (element == "gamestate") {
        document.getElementById(element).innerHTML = data;
    }
}

// updates the overall scoreboard
function updateBoard(val1, val2) {
    document.getElementById("score").innerHTML = ("Total score this game:<br>Computer | " + val1 + "\n Player | " + val2);
}


// wrapper function of drawCards for the computer to include score updating
function compDraw() {
    updateInfo("gamestate", "Computer draws");
    console.log("Computer draws");
    drawCards(compHandArray, 1);
    compCurrent = calculateScore(compHandArray);
}

// the computers 'AI'
function compTurn() {
    turnTracker = 1;
    updateInfo("gamestate", "Starting computer turn");
    console.log("Starting computer turn");
    while (compCurrent <= 16) {
        compDraw();
    }
    if (checkBust("comp")) {
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

// wrapper function for revealing the hidden second card in the computers hand
function revealFacedowns() {
    changeHandSlot(compHandArray, 1, hiddenCard);
}

// adds players current score to storage after each round
// on rounds they lost and therefore gained 0 points
// this still runs but adds 0 to the score so no change occurs
function updateScoreRecord() {
    currentUsersIndex = sessionStorage.getItem("activeUserStorageIndex");
    if (currentUsersIndex == null) {
        console.log("User is not logged in");
    } else {
        currentUsersData_as_Object = JSON.parse(localStorage.getItem(currentUsersIndex));
        currentUsersData_as_Object.score = currentUsersData_as_Object.score + playerCurrent;
        currentUsersData_as_String = JSON.stringify(currentUsersData_as_Object)
        localStorage.setItem(currentUsersIndex, currentUsersData_as_String);
    }
}

// starts the game
window.onload = setupGame