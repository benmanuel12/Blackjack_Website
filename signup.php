<!-- Signup Page -->

<?php
//Import the shared functions and output the head, heading, logo and navigation bar
include('common.php');

outputHead('Signup');
outputNavBar();
?>

<!--Main Body-->
<div id=mainbodysignup>
    <form>
        Username: <br>
        <input id=username type="text" name="username"><br> <br> Password: <br>
        <input id=password type="password" name="password"><br> <br> Repeat Password: <br>
        <input id=repeatpassword type="password" name="password"><br> <br> Email Address: <br>
        <input id=email type="email" name="email"><br> <br> Phone Number <br>
        <input id=number type="tel" name="number"><br>
        <button type="button" onclick="signup()">Sign Up</button>
</form>
    <div id=sidebar>
        <div id=button>
        <a href=login.php>Log in instead?</a>
        </div>
        <div id=signininfo>
            Use this form to sign up to the website and create an new player account. This allows the website to track your scores across games and update the Rankings page with high scores.
        </div>
    </div>
</div>

<?php
//Output the footer and closing HTML tags
outputFooter();
?>
<script src="scripts/signup.js"></script>
</body>
</html>