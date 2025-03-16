
var pomodoroScore = 0;
var activeRecallScore = 0;
var mindMappingScore = 0;
var feynmanScore = 0;

var questionCount = 0; 

var result = document.getElementById("result");
var restartButton = document.getElementById("restart");


var buttons = {
    "q1a1": "pomodoro", "q1a2": "activeRecall", "q1a3": "mindMapping", "q1a4": "feynman",
    "q2a1": "pomodoro", "q2a2": "activeRecall", "q2a3": "mindMapping", "q2a4": "feynman",
    "q3a1": "pomodoro", "q3a2": "activeRecall", "q3a3": "mindMapping", "q3a4": "feynman",
    "q4a1": "pomodoro", "q4a2": "activeRecall", "q4a3": "mindMapping", "q4a4": "feynman",
    "q5a1": "pomodoro", "q5a2": "activeRecall", "q5a3": "mindMapping", "q5a4": "feynman",
    "q6a1": "pomodoro", "q6a2": "activeRecall", "q6a3": "mindMapping", "q6a4": "feynman",
    "q7a1": "pomodoro", "q7a2": "activeRecall", "q7a3": "mindMapping", "q7a4": "feynman",
    "q8a1": "pomodoro", "q8a2": "activeRecall", "q8a3": "mindMapping", "q8a4": "feynman",
    "q9a1": "pomodoro", "q9a2": "activeRecall", "q9a3": "mindMapping", "q9a4": "feynman",
    "q10a1": "pomodoro", "q10a2": "activeRecall", "q10a3": "mindMapping", "q10a4": "feynman"
};


for (let id in buttons) {
    document.getElementById(id).addEventListener("click", function () {
        selectAnswer(buttons[id]);
    });
}


restartButton.addEventListener("click", restartQuiz);

function selectAnswer(studyMethod) {
    eval(studyMethod + "Score++");
    questionCount++;

    if (questionCount === 10) {
        updateResult();
    }
}

function updateResult() {
    let maxScore = Math.max(pomodoroScore, activeRecallScore, mindMappingScore, feynmanScore);
    result.innerHTML = maxScore === pomodoroScore ? "Try the Pomodoro Method!" :
                       maxScore === activeRecallScore ? "Try Active Recall!" :
                       maxScore === mindMappingScore ? "Try Mind Mapping!" :
                       "Try the Feyman Technique!";
}

function restartQuiz() {
    pomodoroScore = activeRecallScore = mindMappingScore = feynmanScore = questionCount = 0;
    result.innerHTML = "Your result is...";
}
