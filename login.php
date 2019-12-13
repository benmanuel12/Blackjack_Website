<!-- Login Page -->

<?php

//Import the shared functions and output the head, heading, logo and navigation bar
include('common.php');

outputHead('Log In');
outputNavBar();
?>

<!--Main Body-->
<div id=mainbodylogin>
    <form>
        Username: <br>
        <input id=username type="text" name="username"><br> <br> Password: <br>
        <input id=password type="password" name="password"><br> <br>
        <button type="button" onclick="login()">Log In</button> <br>
        <p>The button below will log you out of the site.
            Pressing it while not logged in will have no effect.
            Closing the tab will also log you out but this is more obvious.
        </p> <br>
        <button type="button" onclick="logout()">Log Out</button>
</form>

    <div id=sidebar>
        <div id=button>
        <a href=signup.php>Sign in instead?</a>
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
<script src="scripts/login.js"></script>
</body>
</html>