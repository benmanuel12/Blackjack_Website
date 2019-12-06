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
        document.getElementById("name" + i.toString()).innerHTML = currentUsername;
        document.getElementById("score" + i.toString()).innerHTML = currentScore;
    }
}

function getTotalUserCount() {
    document.getElementById("totalcounter").innerHTML = localStorage.length.toString() + " accounts made";
}

window.onload = populateRankings;
window.onload = getTotalUserCount;