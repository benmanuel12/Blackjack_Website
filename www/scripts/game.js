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
// if (computerTotal > playerTotal) {
    // create popup that computer has won with button to play again
//}
// else if (computerTotal < playerTotal) {
    // create popup that player has won with button to play again
//}
// else {
    //create popup that computer has won with button to play again
//}