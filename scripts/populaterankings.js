// pulls data from storage, extracts names and scores, sorts them and inserts into html
function populateRankings() {
    let allUsernames = [];
    let allScores = [];
    let top10 = [];
    for (let i = 0; i < localStorage.length; i++) {
        let current = localStorage.getItem(i);
        let currentObject = JSON.parse(current);
        // read all usernames and scores into two arrays
        allUsernames.push(currentObject.username)
        allScores.push(currentObject.score);
    }

    // find the highest score and respective username
    let limit = -1;
    if (allScores.length >= 10) {
        limit = 10;
    } else {
        limit = allScores.length;
    }
    for (let i = 0; i < limit; i++) {
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
        document.getElementById("name" + i.toString()).innerHTML = currentUsername;
        document.getElementById("score" + i.toString()).innerHTML = currentScore;
    }
}

// changes the html that counts how many accounts are made on the site
function getTotalUserCount() {
    document.getElementById("totalcounter").innerHTML = localStorage.length.toString() + " accounts made";
}

function runAll() {
    populateRankings();
    getTotalUserCount();
}

// runs the functions
window.onload = runAll;