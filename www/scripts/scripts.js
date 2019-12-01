let accounts = [];

function signup() {
    let newUsername = document.getElementById('username').value;
    let newPassword = document.getElementById('password').value;
    let newRepeatPassword = document.getElementById('repeatpassword').value;
    let newEmail = document.getElementById('email').value;
    let newPhone = document.getElementById('number').value;

    let myRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

    let passwordsMatch = false;
    let phonecorrectLength = false;
    let phonecorrectFormat = false;
    let passwordcorrectFormat = false;
    let usernameUnique = true;

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
            if (currentString.username == newUsername) {
                usernameUnique = false;
            }
        }
        if (!usernameUnique) {
            alert("Username already taken");
        }
    }

    if (passwordsMatch && phonecorrectLength && phonecorrectFormat && passwordcorrectFormat && usernameUnique) {
        let newAccount = {
            username: newUsername,
            password: newPassword,
            email: newEmail,
            number: newPhone,
            score: 0
        };
        accounts.push(newAccount);
        newJSON = JSON.stringify(accounts[accounts.length - 1]);
        localStorage.setItem(accounts.length - 1, newJSON);
        alert("Sign up successful");
    }
}

function login() {
    let givenUsername = document.getElementById('username').value;
    let givenPassword = document.getElementById('password').value;
    // check for entry in local storage
    // fetch the entry from local storage with that username and password
    // if they match, alert user that they successfully logged in
    let success = false;
    let userIndex = -1;
    for (i = 0; i < localStorage.length; i++) {
        current = localStorage.getItem(i);
        currentString = JSON.parse(current);
        if ((currentString.username == givenUsername) && (currentString.password == givenPassword)) {
            success = true;
            userIndex = i;
        }
    }
    if (success == true) {
        sessionStorage.setItem('activeUserStorageIndex', i)
        alert("You are logged in");
    }
    if (success == false) {
        alert("No account found");
    }
}

function adminWipeStorage() {
    localStorage.clear();
    sessionStorage.clear();
}