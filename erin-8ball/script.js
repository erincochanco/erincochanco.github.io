const answers = [
    "Signs point to yes!",
    "Absolutely yes!",
    "Most definitely!",
    "Why wouldn't you?",
    "Yazzz!",
    "Of course!",
    "The answer is yes!"
];

function askQuestion() {
    const dropdown = document.getElementById('question-dropdown');
    const answerElement = document.getElementById('answer');
    
    const index = dropdown.value;
    if (index) {
        answerElement.textContent = answers[index];
    } else {
        answerElement.textContent = "select a question";
    }
}
