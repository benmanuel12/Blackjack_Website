console.log('Script running');
let accounts = [];
function signup() {
    let newUsername = document.getElementById('username').value;
    let newPassword = document.getElementById('password').value;
    let newRepeatPassword = document.getElementById('repeatpassword').value;
    let newEmail = document.getElementById('email').value;
    let newPhone = document.getElementById('number').value;

    if (newPassword == newRepeatPassword) {
        if (newPhone.length == 11) {
            if (!isNaN(newPhone)) {
                //if (newEmail ==/[a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z]+@[a|b|c|d|e|f|g|h|i|j|k|l|m|n|o|p|q|r|s|t|u|v|w|x|y|z]+/){
                let isUnique = true;
                if (localStorage.length != 0){
                    for (i = 0; i < localStorage.length; i++) {
                        current = localStorage.getItem(i);
                        currentString = JSON.parse(current);
                        if (currentString.username == newUsername) {
                            isUnique = false;
                        }
                    }
                }
                
                if (isUnique == true) {
                    let newAccount = {
                        username: newUsername,
                        password: newPassword,
                        email: newEmail,
                        number: newPhone,
                        score: 0
                    };
                    accounts.push(newAccount);
                } else {
                    alert("Username already taken");
                }
            } else {
                alert("Please check your phone number");
            }
        } else {
            alert("Phone number too short");
        }
    } else {
        alert("Passwords don't match");
    }
    newJSON = JSON.stringify(accounts[accounts.length - 1]);
    localStorage.setItem(accounts.length - 1, newJSON);
    alert("Sign up successful");

}
function login() {
    let givenUsername = document.getElementById('username').value;
    let givenPassword = document.getElementById('password').value;
    // check for entry in local storage
    // fetch the entry from local storage with that username and password
    // if they match, alert user that they successfully logged in
    let success = false;
    for (i = 0; i < localStorage.length; i++) {
        current = localStorage.getItem(i);
        console.log(current);
        currentString = JSON.parse(current);
        if ((currentString.username == givenUsername) && (currentString.password == givenPassword)) {
            alert("You are logged in");
            success = true;
        }
    }
    if (success == false) {
        alert("No account found");
    }
}

