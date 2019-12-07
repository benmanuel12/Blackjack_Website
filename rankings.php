<!-- Ranking Page -->

<?php
//Import the shared functions and output the head, heading, logo and navigation bar
include('common.php');

outputHead('Home');
outputNavBar();
?>

<!--Main Body-->
<div id=mainbodyrankings>
        <div id=leftrankings>
            <div id=toprankings>
                <table>
                    <tr>
                        <th>Rank</th>
                        <th>Username</th>
                        <th>Score</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td id="name0">playerName</td>
                        <td id="score0">playerScore</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td id="name1">playerName</td>
                        <td id="score1">playerScore</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td id="name2">playerName</td>
                        <td id="score2">playerScore</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td id="name3">playerName</td>
                        <td id="score3">playerScore</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td id="name4">playerName</td>
                        <td id="score4">playerScore</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td id="name5">playerName</td>
                        <td id="score5">playerScore</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td id="name6">playerName</td>
                        <td id="score6">playerScore</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td id="name7">playerName</td>
                        <td id="score7">playerScore</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td id="name8">playerName</td>
                        <td id="score8">playerScore</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td id="name9">playerName</td>
                        <td id="score9">playerScore</td>
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
<script src="scripts/populaterankings.js"></script>
</html>