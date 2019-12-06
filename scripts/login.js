function login() {
    document.getElementById("logininfo").innerHTML = "hi";
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
        sessionStorage.setItem('activeUserStorageIndex', userIndex);
        alert("You are logged in");
    }
    if (success == false) {
        sessionStorage.removeItem('activeUserStorageIndex');
        alert("No account found");
    }
}