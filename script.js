var quest = document.querySelector("#question");
var aOne = document.querySelector("#button1");
var aTwo = document.querySelector("#button2");
var aThree = document.querySelector("#button3");
var aFour = document.querySelector("#button4");
var result = document.querySelector("#empty");
var timer = document.querySelector("#timer");
var qcontainer = document.querySelector("#questions");
var container = document.querySelector("#container");
var input = document.querySelector("#initials");
var submit = document.querySelector("#submit");
container.style.display = "none";
var points = 0;
var index = 0;
var seconds = 120;
var questions = [
    { question: 'Commonly used data types do NOT include _____.', answers: ['booleans', 'alerts', 'strings', 'numbers'], correct: 1 },
    { question: 'Which of these is a type of loop?', answers: ['for', 'if/else', 'boolean', 'confirm'], correct: 0 },
    { question: 'A _____ can be passed to a function.', answers: ['prompt', 'confirm', 'parameter', 'loop'], correct: 2 },
    { question: 'What CSS attribute changes the font type of text?', answers: ['font-family', 'font-style', 'font', 'font-type'], correct: 0 },
    { question: 'What must go before a JavaScript variable in order to declare it?', answers: ['variable', 'declare', 'nothing', 'var'], correct: 3 },
];

timer.innerHTML = seconds;

setInterval(function () {
    if (seconds > 0 && index < questions.length) {
        seconds--;
        timer.innerHTML = seconds;
        checkEnd();
    }
}, 1000);

display();
aOne.addEventListener("click", function () {
    if (questions[index].correct === 0) {
        displayCorrect();
    }
    else {
        displayIncorrect();
    }
    displayNext();

});
aTwo.addEventListener("click", function () {
    if (questions[index].correct === 1) {
        displayCorrect();
    }
    else {
        displayIncorrect();
    }
    displayNext();

});
aThree.addEventListener("click", function () {
    if (questions[index].correct === 2) {
        displayCorrect();
    }
    else {
        displayIncorrect();
    }
    displayNext();

});
aFour.addEventListener("click", function () {
    if (questions[index].correct === 3) {
        displayCorrect();
    }
    else {
        displayIncorrect();
    }
    displayNext();

});

function display() {
    quest.innerHTML = questions[index].question;
    aOne.innerHTML = 'a) ' + questions[index].answers[0];
    aTwo.innerHTML = 'b) ' + questions[index].answers[1];
    aThree.innerHTML = 'c) ' + questions[index].answers[2];
    aFour.innerHTML = 'd) ' + questions[index].answers[3];
    result.innerHTML = "";
}

function displayCorrect() {
    result.innerHTML = "<hr> Right!";
    points += 5;
}

function displayNext() {
    index++;
    if (index < questions.length) {
        setTimeout(display, 1000);
    }
    setTimeout(checkEnd, 1000);
}

function displayIncorrect() {
    seconds -= 10;
    result.innerHTML = "<hr> Wrong!";
}

function checkEnd() {
    if (seconds < 1 || index === questions.length) {
        qcontainer.style.display = "none";
        container.style.display = "block";
        var score = document.querySelector("#score");
        score.innerHTML = points;
        submit.addEventListener("click", function () {
            var highscores = JSON.parse(localStorage.getItem("highscores"));
            if (highscores === null) {
                var highscores = {
                    initials: [],
                    points: []
                };
            }
            highscores.initials.push(input.value);
            highscores.points.push(points);
            localStorage.setItem("highscores", JSON.stringify(highscores));
            input.value = "";
            window.location.href = "highscores.html";
        });
    }
}

