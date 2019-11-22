<!-- Login Page -->

<?php

//Import the shared functions and output the head, heading, logo and navigation bar
include('common.php');

outputHeading('Home');
outputNavBar();
?>

<!--Main Body-->
<div id=mainbodylogin>
        <form>
            Username: <br>
            <input id=username type="text" name="username"><br> <br> Password: <br>
            <input id=password type="text" name="password"><br> <br>
            <button type="button" onclick="login()">Log In</button> 
        </form>
        <div id=sidebar>
            <div id=button>
                Sign in instead?
            </div>
            <div id=logininfo>
                Use this form to log into a pre-existing account so that your game scores can be tracked. High scores will be added to the Rankings page. Games played while not logged in will not be tracked.
            </div>
        </div>
    </div>
    
<?php

//Output the footer and closing HTML tags
outputFooter();
?>