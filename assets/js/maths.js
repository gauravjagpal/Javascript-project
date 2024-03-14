let question = document.getElementById("question");
let choices = Array.from(document.getElementsByClassName("choice-text"));
let progressText = document.getElementById("progressText");
let scoreText = document.getElementById("score");
let progressBarFull = document.getElementById("progressBarFull");
let acceptingAnswers = false;
let currentQuestion = {};
let score=0;
let questionCounter = 0;
let availableQuestions =[];

let questions = [
    {
      "question": "A train travels at 120mph. How far does it travel in 45 minutes",
      "choice1": "30 miles",
      "choice2": "90 miles",
      "choice3": "60 miles",
      "choice4": "45 miles",
      "answer": 2
    },
    {
      "question": "How many degrees between 2 perpendicular lines?",
      "choice1": "90",
      "choice2": "45",
      "choice3": "They do not intersect",
      "choice4": "180",
      "answer": 1
    },
    {
      "question": "Solve 2𝒙 - 1 = 13",
      "choice1": "x = 7.5",
      "choice2": "x = 6",
      "choice3": "x = 7",
      "choice4": "x = 6.5",
      "answer": 3
    }
];

let correctValue = 1;
let totalQuestion = 3;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= totalQuestion ) {
        localStorage.setItem('mostRecentScore', score);
        //Go to end page
        return window.location.assign("end.html");
    }
    questionCounter++;
    progressText.innerText = "Questions completed: " + (questionCounter-1) + "/" + totalQuestion;

    //Increase progress bar
    progressBarFull.style.width = `${((questionCounter -1 ) * 100/ totalQuestion)}%`;

    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        let number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e=> {
        if(acceptingAnswers === false) return;

        acceptingAnswers = false;
        let selectedChoice = e.target;
        let selectedAnswer = selectedChoice.dataset["number"];

        let classToApply = "";
        if(selectedAnswer == currentQuestion.answer) {
            classToApply = "correct";
        } else {
            classToApply = "incorrect";
        }

        if(classToApply ==='correct') {
            totalScore(correctValue);
        }


        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout ( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 200);
        
    });
});

totalScore = num => {
    score += num ;
    scoreText.innerText= score;
};

startQuiz();



const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');