// signup function
function signup() {

    // pull data from form
    let newUsername = document.getElementById('username').value;
    let newPassword = document.getElementById('password').value;
    let newRepeatPassword = document.getElementById('repeatpassword').value;
    let newEmail = document.getElementById('email').value;
    let newPhone = document.getElementById('number').value;

    let myRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    // set up booleans
    let passwordsMatch = false;
    let phonecorrectLength = false;
    let phonecorrectFormat = false;
    let passwordcorrectFormat = false;
    let usernameUnique = true;

    // check data is suitable
    if (newPassword == newRepeatPassword) {
        passwordsMatch = true;
    } else {
        alert("Passwords don't match");
    }

    if (newPhone.length == 11) {
        phonecorrectLength = true;
    } else {
        alert("Phone number is either too short or too long");
    }

    if (!isNaN(newPhone)) {
        phonecorrectFormat = true;
    } else {
        alert("Please check your phone number");
    }

    if (myRegex.test(newPassword)) {
        passwordcorrectFormat = true;
    } else {
        alert("Password is too weak");
    }

    if (localStorage.length != 0) {
        for (i = 0; i < localStorage.length; i++) {
            current = localStorage.getItem(i);
            currentString = JSON.parse(current);
            console.log(currentString);
            if (currentString.username == newUsername) {
                usernameUnique = false;
                alert("Username already taken");
            }
        }
    }

    //create new account
    if (passwordsMatch && phonecorrectLength && phonecorrectFormat && passwordcorrectFormat && usernameUnique) {
        let newAccount = {
            username: newUsername,
            password: newPassword,
            email: newEmail,
            number: newPhone,
            score: 0
        };

        // push to storage
        newJSON = JSON.stringify(newAccount);
        let newKey = localStorage.length;
        console.log(newKey);
        localStorage.setItem(newKey, newJSON);
        alert("Sign up successful");
        sessionStorage.setItem('activeUserStorageIndex', newKey);
        alert("You are logged in");
    } else {
        alert("Sign up failed");
    }
}