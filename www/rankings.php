<!-- Ranking Page -->

<?php
//Import the shared functions and output the head, heading, logo and navigation bar
include('common.php');

outputHeading('Home');
outputNavBar();
?>

<div id=mainbodyrankings>
        <div id=leftrankings>
            <div id=toprankings>
                <!--table of scores- can be switched out for a pull from database or local storage or whatever when the time is right -->
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>playerName</td>
                        <td>playerScore</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>playerName</td>
                        <td>playerScore</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>playerName</td>
                        <td>playerScore</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>playerName</td>
                        <td>playerScore</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>playerName</td>
                        <td>playerScore</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>playerName</td>
                        <td>playerScore</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>playerName</td>
                        <td>playerScore</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>playerName</td>
                        <td>playerScore</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>playerName</td>
                        <td>playerScore</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>playerName</td>
                        <td>playerScore</td>
                    </tr>
                </table>
            </div>
            <div id=totalcounter>
                List the total number of accounts on the site here
            </div>
        </div>
        <div id=rightrankings>
            On the left you can see the top 10 player accounts.<br> They are ranked by their total score accrued over all instances of the game they have played. <br>The higher their score the higher they rank and the further up the page they appear.
        </div>
    </div>

<?php
//Output the footer and closing HTML tags
outputFooter();
?>