const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let score=0;
let questionCounter = 0;
let availableQuestions =[];

let questions = [
    {
      "question": "What's 1+1",
      "choice1": "2",
      "choice2": "5",
      "choice3": "1",
      "choice4": "3",
      "answer": 1
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

const correct_value = 1;
const total_question = 3;

startQuiz = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions]
    console.log(availableQuestions);
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 ) {
        return window.location.assign("/end.html")
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });
    
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener("click", e=> {
        if(acceptingAnswers === false) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        getNewQuestion();
    })
})

startQuiz();