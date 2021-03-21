(function () {
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('answers');
    var submitButton = document.getElementById('confirm');

    function buildQuiz() {}
    var output = [];

    function showAnswers() {}


    var quizQuestions = [{
        question: "what school is this program affilated with?",
        answers: {
            1.: "University of Toronto",
            2.: "Queen's University",
            3.: "UBC",
            4.: "McMaster",
        },
        correctAnswer: "1."
    }, {
        question: "Which module are we in?",
        answers: {
            1.: "Module 1",
            2.: "Module 2",
            3.: "Module 3",
            4.: "Module 4",
        },
        correctAnswer: "4."
    }, {
        question: "What is the foundation of coding?",
        answers: {
            1.: "Snacks",
            2.: "Caffeine",
            3.: "Procrastination",
            4.: "JavaScript",
        },
        correctAnswer: "4."
    }, {
        question: "What is our professors name?",
        answers: {
            1.: "Ali",
            2.: "Nick",
            3.: "Alison",
            4.: "Marina",
        },
        correctAnswer: "1."
    }];

    quizQuestions.forEach((currentQuestion, questionNumber)); {
        var answers = [];
        for (number in currentQuestion.answers) {
            answers.push( 
                <label>
                <input type = "radio">
                name = "question${questionNumber}"
                value = "${letter}"</input>
                $ {
                    letter
                }:
                $ {
                    currentQuestion.answers[letter]
                } 
                </label>
            );
        }
        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join(' ')} </div>`
        );

        quizContainer.innerHTML = output.join('');
    }

    var answerContainers = quizContainer.querySelectorAll('.answers');
    let score = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
            answerContainers[questionNumber].prompt = "correct";
        } else {
            answerContainers[questionNumber].prompt = "incorrect";
        }
    });

    answersContainer.innerHTML =
        `${score} out of ${myQuestions.length}`;


    buildQuiz();
    submitButton.addEventListener('click', showAnswers);
})();
