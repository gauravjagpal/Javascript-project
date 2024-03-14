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
      "question": "How many wives did Henry VIII have?",
      "choice1": "2",
      "choice2": "5",
      "choice3": "1",
      "choice4": "6",
      "answer": 4
    },
    {
      "question": "When did the first world war end?",
      "choice1": "1914",
      "choice2": "1928",
      "choice3": "1901",
      "choice4": "1066",
      "answer": 1
    },
    {
      "question": "When did Thomas Edison invent the light bulb?",
      "choice1": "1066",
      "choice2": "1879",
      "choice3": "1923",
      "choice4": "1615",
      "answer": 2
    }
];

let correct_value = 1;
let total_question = 3;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter >= total_question ) {
        localStorage.setItem('mostRecentScore', score);
        //Go to end page
        return window.location.assign("end.html");
    }
    questionCounter++;
    progressText.innerText = "Questions completed: " + (questionCounter-1) + "/" + total_question;

    //Increase progress bar
    progressBarFull.style.width = `${((questionCounter -1 ) * 100/ total_question)}%`;

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
            classToApply = "incorrect"
        }

        if(classToApply ==='correct') {
            total_score(correct_value);
        }


        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout ( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 200);
        
    });
});

total_score = num => {
    score += num ;
    scoreText.innerText= score;
}

startQuiz();



const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
console.log(total_question);