// ===============================
//  QUIZ QUESTIONS ARRAY
// ===============================

const quizQuestions = [
    {
        question: "What is the capital of India?",
        answer: "delhi"
    },
    {
        question: "What does HTML stand for?",
        answer: "hypertext markup language"
    },
    {
        question: "What is 5 + 5?",
        answer: "10"
    },
    {
        question: "Which language runs in a web browser?",
        answer: "javascript"
    },
    {
        question: "What is the largest planet in our solar system?",
        answer: "jupiter"
    }
];


// ===============================
//  FUNCTION TO RUN THE QUIZ
// ===============================

function runQuiz() {
    let score = 0; // Score tracker

    alert("Welcome to the JavaScript Console Quiz! Click OK to begin.");

    // Loop through each question
    for (let i = 0; i < quizQuestions.length; i++) {
        let userInput = prompt(quizQuestions[i].question);

        // If user presses Cancel, stop quiz
        if (userInput === null) {
            alert("Quiz Cancelled!");
            return;
        }

        // Normalize input
        userInput = userInput.toLowerCase().trim();

        // Check answer
        if (userInput === quizQuestions[i].answer) {
            score++;
            alert("Correct! 🎉");
        } else {
            alert(`Wrong ❌\nCorrect Answer: ${quizQuestions[i].answer}`);
        }
    }

    // Final score
    alert(`Quiz Completed!\nYour Score: ${score} / ${quizQuestions.length}`);
}

// ===============================
//  START THE QUIZ
// ===============================

runQuiz();
