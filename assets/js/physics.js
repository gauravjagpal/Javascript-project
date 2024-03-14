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
      "question": "Which is the correct formula",
      "choice1": "F=MA",
      "choice2": "F=Ma",
      "choice3": "F=ma",
      "choice4": "f=ma",
      "answer": 3
    },
    {
      "question": "Which is an equation of motion",
      "choice1": "y=mx+c",
      "choice2": "v= u + at",
      "choice3": "V= I * R",
      "choice4": "a = b + c",
      "answer": 1
    },
    {
      "question": "Which of these speeds might be typical for a bicycle?",
      "choice1": "0.6 m/s",
      "choice2": "6 m/s",
      "choice3": "60 m/s",
      "choice4": "600 m/s",
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
