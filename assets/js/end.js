let finalScore = document.getElementById("finalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");

// Displays final score
finalScore.innerText = mostRecentScore;