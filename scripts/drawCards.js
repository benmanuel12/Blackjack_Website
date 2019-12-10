function drawCardsNewSig(playerArray, noOfCards) {
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
            }
            cardPlaced = true;
            testIndex++;
        }
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
        cardPlaced = false;
        testIndex = 0;
        while ((!cardPlaced) && (testIndex < 5)) {
            if (thePlayer == "comp") {
                if (compHandArray[testIndex] == 0) {
                    compHandArray[testIndex] = faceValues[randomIndex];
                    if (testIndex == 1) {
                        hiddenCard = randomCard;
                        changeHandSlot(compHandArray, testIndex, "blue_back.jpg");
                        console.log("facedown");
                    } else {
                        changeHandSlot(compHandArray, testIndex, randomCard);
                    }
                }
            } else if (thePlayer == "player") {
                if (playerHandArray[testIndex] == 0) {
                    playerHandArray[testIndex] = faceValues[randomIndex];
                    changeHandSlot(playerHandArray, testIndex, randomCard);
                }
            }
            cardPlaced = true;
            testIndex++;
        }
    }
}

function drawCardsOld(thePlayer, noOfCards) {
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
                    if (testIndex == 1) {
                        hiddenCard = randomCard;
                        changeHandSlot(compHandArray, testIndex, "blue_back.jpg");
                        console.log("facedown");
                    } else {
                        changeHandSlot(compHandArray, testIndex, randomCard);
                    }
                    cardPlaced = true;
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