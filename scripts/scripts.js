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
        currentObject = JSON.parse(current);
        if ((currentObject.username == givenUsername) && (currentObject.password == givenPassword)) {
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

function populateRanking() {
    let allUsernames = [];
    let allScores = [];
    let top10 = [];
    for (let i = 0; i < localStorage.length; i++) {
        let current = localStorage.getItem(i);
        let currentObject = JSON.parse(current);
        // read all usernames and scores into two arrays
        allUsernames.push(currentObject.username, allScores.push(currentObject.score));
    }
    // find the highest score and respective username
    for (let i = 0; i < 10; i++) {
        let best = 0;
        let bestIndex = -1;
        for (let j = 0; j < allScores.length; j++) {
            if (allScores[j] > best) {
                best = allScores[j];
                bestIndex = j;
            }
        }
        // remove value from arrays and loop 10 times
        allScores[bestIndex] = 0;
        // put in other array
        top10.push([allUsernames[bestIndex], best]);
    }

    // load html from array
    for (let i = 0; i < top10.length; i++) {
        let currentUsername = top10[i][0];
        let currentScore = top10[i][1];
        let nameID = "";
        let scoreID = "";
        document.getElementById("name" + i.asString()).innerHTML = currentUsername;
        document.getElementById("score" + i.asString()).innerHTML = currentScore;
    }
}

function getTotalUserCount() {
    document.getElementById("totalcounter").innerHTML = localStorage.length + " accounts made";
}

window.onload = populateRanking;
window.onload = getTotalUserCount;