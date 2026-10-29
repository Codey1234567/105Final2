let question = ["What is the competition's date?", "what year did ww2 start?", "whats the name of our college?", "what color is the sky?", "what year is it?", "who is a strategist in marvel rivals?", "who is a duelist in marvel rivals?", "who is a vanguard in marvel rivals?", "what is the biggest planet in our solar system?", "how many continents are on earth?"];
let answer1Text = ["10/29", "1939", "thaddeus stevens", "blue", "2026", "invisible woman", "black widow", "emma frost", "jupiter", "7"];
let answer2Text = ["10/3", "1920", "penn state", "red", "2038", "rogue", "cloak and dagger", "daredevil","saturn", "5"];
let answer3Text = ["10/4", "1953", "temple", "purple", "2027", "angela", "thor", "gorr", "earth", "9"];
let answer4Text = ["10/1", "1963", "millersville", "green", "2020", "scarlet witch", "gambit", "white fox", "pluto", "4"];
let counter = 0;
let userAnswers = [];

let quiz = document.getElementById("quiz");


function createQuestion() {
    quiz.innerHTML = "";
    if (counter >= question.length) {
        let score = 0;
        for (let i = 0; i < userAnswers.length; i++) {
            if (userAnswers[i] === answer1Text[i]) {
                score++;
            }
        }
        quiz.innerHTML = `<p>Quiz Complete! Your Score: ${score} out of ${question.length}</p>
                            <button onclick="location.reload()">Restart Quiz</button>`;
        submit.style.display = "none";
        return;
    }
    let container = document.createElement("DIV");
    container.style.backgroundColor = "gray";
    container.style.borderRadius = "15px";
    let title = document.createElement("P");
    title.style.padding = "0 20px";
    title.innerText = question[counter];
    container.appendChild(title);
    let options = [
        answer1Text[counter], 
        answer2Text[counter], 
        answer3Text[counter], 
        answer4Text[counter]
    ];
    for (let i = 0; i < 4; i++) {
        let randomIndex = Math.floor(Math.random() * 4);
        let temp = options[i];
        options[i] = options[randomIndex];
        options[randomIndex] = temp;
    }
    for (let i = 0; i < 4; i++) {
        let radio = document.createElement("INPUT");
        radio.type = "radio";
        radio.name = "quizOption";
        radio.value = options[i];
        radio.id = "opt" + i;

        let label = document.createElement("LABEL");
        label.htmlFor = "opt" + i;
        label.innerText = options[i];

        container.appendChild(radio);
        container.appendChild(label);
        container.appendChild(document.createElement("BR"));
    }
    quiz.appendChild(container);
}

submit.onclick = function() {
    let selectedOption = document.querySelector('input[name="quizOption"]:checked');
    if (!selectedOption) {
        alert("Please select an answer before submitting!");
        return;
    }
    userAnswers.push(selectedOption.value);
    counter++;
    createQuestion();
}

createQuestion();