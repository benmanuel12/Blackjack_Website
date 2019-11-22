let compHandArray = [0, 0, 0, 0, 0];
let playerHandArray = [0, 0, 0, 0, 0];
let compGoneBust = false;
let playerGoneBust = false;
let compWon = false;
let playerWon = false;
let deck = []
let suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
let faceNames = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
let faceValues = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];




function setupGame() {

    // assemble deck
    let index = 0
    for (i = 0; i < suits.length; i++) {
        for (j = 0; j < faceNames.length; j++) {
            //console.log(faceNames[j] + " of " + suits[i]);
            deck[index] = faceNames[j] + " of " + suits[i];
            index++;
        }
    }
    console.log(deck);

    //Reset the cumulative scoreboard
    let scoreCanvas = document.getElementById("score");
    let context = scoreCanvas.getContext('2d');
    context.clearRect(0, 0, scoreCanvas.width, scoreCanvas.height);

    //Reset the tickers

    // possibly better as <p> that I can innerHTML to change
    let compInfoCanvas = document.getElementById("score");
    context = compInfoCanvas.getContext('2d');
    context.clearRect(0, 0, compInfoCanvas.width, compInfoCanvas.height);
    let playerInfoCanvas = document.getElementById("score");
    context = playerInfoCanvas.getContext('2d');
    context.clearRect(0, 0, playerInfoCanvas.width, playerInfoCanvas.height);

    console.log("gothere");
    // have each player draw 2 cards
    drawCards("comp", 2);
    drawCards("player", 2);

    //alert("Game is set up - Dismiss this window to start");
}

function drawCards(thePlayer, noOfCards) {
    for (i = 0; i < noOfCards; i++) {
        randomCard = "";
        while (randomCard == "") {
            randomIndex = Math.round(Math.random() * 52);
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
                    canvasId = "compcard" + testIndex.toString();
                    let relevantCanvas = document.getElementById(canvasId);
                    var ctx = relevantCanvas.getContext("2d");
                    ctx.font = "30px Comic Sans MS";
                    ctx.fillStyle = "red";
                    ctx.textAlign = "center";
                    ctx.fillText(randomCard, relevantCanvas.width / 2, relevantCanvas.height / 2);

                }
                testIndex++;
            }
        } else if (thePlayer == "player") {
            cardPlaced = false;
            testIndex = 0;
            while ((!cardPlaced) && (testIndex < 5)) {
                if (playerHandArray[testIndex] == 0) {
                    compHandArray[testIndex] = faceValues[randomIndex];
                    cardPlaced = true;
                    canvasId = "playercard" + testIndex.toString();
                    let relevantCanvas = document.getElementById(canvasId);
                    var ctx = relevantCanvas.getContext("2d");
                    ctx.font = "30px Comic Sans MS";
                    ctx.fillStyle = "red";
                    ctx.textAlign = "center";
                    ctx.fillText(randomCard, relevantCanvas.width / 2, relevantCanvas.height / 2);
                }
                testIndex++;
            }
        }
    }
}

window.onload = setupGame;
console.log(playerHandArray);
console.log(compHandArray);

// How the game should work

//when page loads, display running score table with 0 on both sides, put all cards back in deck

// while the quit button is not pressed, start the loop for one round of blackjack

//One round
// draw both players 2 cards
// computer goes first
// compute computers hand total
// while that total is low enough for it to be safe to draw (Twist) and not Bust
//  pause
//  announce on middle ticker that computer intends to draw
//  draw a card
// if computer is Bust, announce that player wins and skip player turn

// Announce on middle ticker that computer is passing
// announce on middle ticker that its now the players turn

// draw the player 2 cards and calculate their hand total
// while player hasn't pressed Stick button or gone Bust
//  await button presses
//  these should be separate functions tied to the button but whatever
//  Twist - Draw a card to hand and update total
//  Stick - Confirm you are finished drawing cards
//  both should probably be unable to be clicked while either is in use
// if player goes Bust, then announce that computer wins and skip calculation of winner

// update running score table with both scores

// now calculate winner
// assuming that Busts are dealt with earlier
// if (computerTotal > playerTotal) 
// create popup that computer has won with button to play again
//
// else if (computerTotal < playerTotal) 
// create popup that player has won with button to play again
//
// else 
//create popup that computer has won with button to play again
//