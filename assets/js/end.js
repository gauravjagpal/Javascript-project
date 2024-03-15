let finalScore = document.getElementById("finalScore");
let mostRecentScore = localStorage.getItem("mostRecentScore");

finalScore.innerText = mostRecentScore;