<!-- Signup Page -->

<?php
//Import the shared functions and output the head, heading, logo and navigation bar
include('common.php');

outputHeading('Home');
outputNavBar();
?>

<!--Main Body-->
<div id=mainbodysignup>
        <form>
            Username: <br>
            <input id=username type="text" name="username"><br> <br> Password: <br>
            <input id=password type="text" name="password"><br> <br> Repeat Password: <br>
            <input id=repeatpassword type="text" name="password"><br> <br> Email Address: <br>
            <input id=email type="text" name="email"><br> <br> Phone Number <br>
            <input id=number type="text" name="number"><br>
            <button type="button" onclick="signup()">Sign Up</button>
        </form>
        <div id=sidebar>
            <div id=button>
                Log in instead?
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