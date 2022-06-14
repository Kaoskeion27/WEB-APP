import Ajax from "./ajax.js";
import Counter from "./Score.js";

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const letsgoButton = document.getElementById("lets-go-btn");
const exitButton = document.getElementById("exit-btn");
const viewResultsButton = document.getElementById("results-btn");
const restartButton = document.getElementById("restart-btn");

const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const infoTitle = document.getElementById("info-title");
const infoList = document.getElementById("list");
const results = document.getElementById("results-box");
const userResult = document.getElementById("user-result");

let questions;
let shuffledQuestions;
let currentQuestionIndex;

let scoreCounter = 0;

document.addEventListener("DOMContentLoaded", init);

// ajax query retrieval
function init (){
    Ajax.query({
        type: "getQuestions"
    }).then(function (response_object){
        console.log(response_object);
        questions = response_object.questions;
        console.log(questions);
    });
}

// All UI direct involvement functions.
// When the start button is pressed
startButton.addEventListener("click", rules_regulations);

// When the let's go button is pressed
letsgoButton.onclick = function () {
    startGame();
};

// When the view results button is pressed
viewResultsButton.addEventListener("click", results_page);

// When the next button is pressed
nextButton.onclick = function () {
    restartButton.classList.add("hide");
    currentQuestionIndex++;
    setNextQuestion();
};

// When the exit button is pressed
exitButton.onclick = function () {
    close_window();
};

// When the restart button is pressed
restartButton.onclick = function (){
    restart();
    restartButton.classList.add("hide");
    clearStatusClass(answerButtonsElement);
    resetState();
    scoreCounter = 0;
};



// Game's base functionality without UI
// restart the game to the info menu
function restart() {
    console.log("YOo");
    // show elements
    infoList.classList.remove("hide");
    infoTitle.classList.remove("hide");
    startButton.classList.remove("hide");
    results.classList.remove("hide");
    letsgoButton.classList.remove("hide");

    // hide elements
    userResult.classList.add("hide");
    results.classList.add("hide");
    startButton.classList.add("hide");

    //functions
    resetState();
}


// results page display
function results_page(){
    console.log("hi");
    // show elements
    answerButtonsElement.classList.remove("hide");
    results.classList.remove("hide");
    exitButton.classList.remove("hide");
    restartButton.classList.remove("hide");
    userResult.innerHTML = scoreCounter;
    userResult.classList.remove("hide");

    // hide elements
    exitButton.classList.remove("hide");
    nextButton.classList.add("hide");
    questionElement.classList.add("hide");
    answerButtonsElement.classList.add("hide");
    startButton.classList.add("hide");
    viewResultsButton.classList.add("hide");
    timerText.classList.add("hide");
    timerSec.classList.add("hide");
    timer.classList.add("hide");

    // functions
    resetState();
}

// rules and regulations display page
function rules_regulations(){

    // remove elements
    startButton.classList.add("hide");
    restartButton.classList.add("hide");
    answerButtonsElement.classList.add("hide");
    questionElement.classList.add("hide");
    viewResultsButton.classList.add("hide");

    // show elements
    infoList.classList.remove("hide");
    infoTitle.classList.remove("hide");
    exitButton.classList.remove("hide");
    letsgoButton.classList.remove("hide");
    questionContainerElement.classList.remove("hide");
}

// start the game display
function startGame(){
    console.log("hi");

    // hide elements
    infoList.classList.add("hide");
    infoTitle.classList.add("hide");
    exitButton.classList.add("hide");
    letsgoButton.classList.add("hide");
    restartButton.classList.add("hide");

    // hide elements
    questionElement.classList.remove("hide");
    answerButtonsElement.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    setNextQuestion();
}

// next question function
function setNextQuestion(){
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

// displays question
function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach (answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

//resets the background after next button is pressed
function resetState(){
    clearStatusClass(document.body);
    nextButton.classList.add("hide");
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// selecting the correct answer
function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    scoreCounter = Counter.newScore(scoreCounter, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove("hide");
    } else {
        viewResultsButton.classList.remove("hide");
        exitButton.classList.add("hide");
    }
}

// setting the color of green or red to whether it is correct or not
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add("correct");
    } else {
        element.classList.add("wrong");
    }
}

// clearing the previous function, to set the neutral
function clearStatusClass(element){
    element.classList.remove("correct");
    element.classList.remove("wrong");
}

// close window when exit button is pressed
function close_window() {
    if (confirm("Close Window?")) {
      window.close();
    }
  }


