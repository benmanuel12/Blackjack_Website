# Blackjack Website

This is a website I created in university to play Blackjack
It does not allow for gambling with real money
It contained a graphical representation of the game in the middle of the screen, having the user at the bottom of the screen play vs the computer at the top, where the computer plays as if it was the house at the casino.
This includes it pretending it does not know what cards are facedown, even though the code that decides to draw more cards is also the code determining which card is on top of the shuffled deck.

There are some bugs in the code which I assume I didn't manage to fix in time before project submission

## Built with
PHP, CSS

## Features
- Plays Blackjack
- Allows for user signin/login
- Forces phone numbers entered to be 11 characters long
- Forces usernames to be unique
- Forces passwords to match
- Stores user data in local storage
- Has a rankings page, but ranking the scores was not implemented
- Visually displays the front or back of drawn cards for both players on screen for easy tracking

## Running it
- Install PHP 8.3
- go to www folder
- php -S localhost:8080
- go to localhost:8080 in browser
