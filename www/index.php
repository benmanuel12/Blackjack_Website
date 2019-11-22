<!-- Home Page -->

<?php
//Import the shared functions and output the head, heading, logo and navigation bar
include('common.php');

outputHeading('Home');
outputNavBar();
?>

<!--Images of game-->
<div id=imagegrid>
    <!-- these aren't real images, I will swap them for screenshots of the game in action once the game is made -->
    <div id=image1>
        Image 1
    </div>
    <div id=image2>
        Image 2
    </div>
    <div id=image3>
        Image 3
    </div>
</div>

<!--Info div-->
<div id=info>
    On this website you can play a digital version of the card game Blackjack. In this game, each round you and your opponent both draw 2 cards for your starting hand. Your goal is to end your turn on each round with cards in hand of value as close to the
    number 21 as possible without going over. Your opponent will go first so you can act appropriately in responce on your turn each round. On each player's turn they will get the option to either draw a card (Twist) or keep the hand they have (Stick)
    until they either have cards with total value over 21 (Bust) or choose to Stick.
    <br> The player with the highest non-Bust value wins the round Each player starts at 0 points and gains points equal to the value of the cards in their hand if they win the round. These points are planned to be cumulative over games
</div>

<?php
//Output the footer and closing HTML tags
outputFooter();
?>