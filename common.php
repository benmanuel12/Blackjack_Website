<?php   
// Function to output the head and heading
function outputHead ($title) {
echo <<<HEAD
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>$title</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
</head>

<body>
    <!--Logo and Heading-->
    <div id=header>
        <div id=logo>
            <img src="/images/logotemp.png" alt="Logo" height="150" width="auto">
        </div>
        <div id=heading>
            <h1>Blackjack</h1>
        </div>
        <div id=symmetrypadding>

        </div>
    </div>
HEAD;
}

// Function to output the navigation bar
function outputNavBar () {

    // Create arrays of data
    $names = array("Home", "Game", "Login", "Sign Up", "Rankings");
    $links = array("index.php", "game.php", "login.php", "signup.php", "rankings.php");
    echo '<!--Navigation Bar-->
    <div id=navbar>';
    
    // Loop through arrays
    for($i=0; $i<sizeof($names); $i++) {
        echo '<div class=navbutton><a href="' . $links[$i] . '"><h2>' . $names[$i] . '</h2></a></div>';
    }
    echo ' </div>';
}

// Function to output the footer
function outputFooter () {
    echo <<<FOOTER
    <!--Footer-->
    <div id=footer>
    Benjamin Manuel 2019
    </div>
    </body>
FOOTER;
}
?>