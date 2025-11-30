// 1. Quiz Questions Array
// Create an array of objects, each containing a question and its correct answer.
// Requirement: Ensure a minimum of 5 questions[cite: 72].
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "Mars"
    },
    {
        question: "What is 5 + 7?",
        answer: "12"
    },
    {
        question: "Which language is used for web development?",
        answer: "JavaScript"
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: "Pacific Ocean"
    }
];

// 2. Function to Run the Quiz
function runQuiz() {
    // 3. Score Initialization
    let score = 0; // Tracks the number of correct answers[cite: 33, 34].

    console.log("Welcome to Prompt Quizzer! The quiz will now begin.");
    console.log("You will be prompted for an answer for each question.");

    // 4. Loop Through Questions
    // Use a for loop to iterate through each question in the array[cite: 8, 35].
    for (let i = 0; i < quizQuestions.length; i++) {
        const currentQuestion = quizQuestions[i];

        // 5. Prompt for User Input
        // Use prompt() to ask the question and collect the answer[cite: 8, 37].
        let userAnswer = prompt(currentQuestion.question);

        // Check if the user pressed Cancel or closed the prompt (userAnswer will be null)
        if (userAnswer === null) {
            alert("Quiz interrupted! Restart the quiz to continue.");
            return; // Exit the function if the user cancels
        }

        // 6. Normalize the Input
        // Convert input to lowercase and remove extra spaces using toLowerCase() and trim()[cite: 9, 39, 55].
        const normalizedAnswer = userAnswer.toLowerCase().trim();
        const correctAnswer = currentQuestion.answer.toLowerCase().trim();

        // 7. Check the Answer and Provide Immediate Feedback
        // Compare the normalized input with the normalized correct answer[cite: 41].
        if (normalizedAnswer === correctAnswer) {
            // Correct answer[cite: 44].
            alert("Correct!");
            score++; // Increase the score[cite: 42].
        } else {
            // Wrong answer[cite: 45].
            alert(`Wrong! The correct answer is: ${currentQuestion.answer}`);
        }
    }

    // 8. Display the Final Score
    // Show an alert with the final score out of the total number of questions[cite: 10, 46, 59, 72].
    alert(`Quiz Over! Your final score is ${score} out of ${quizQuestions.length}.`);
}

// 9. Run the Quiz in the Browser Console
// Uncomment the line below, paste the entire code into your browser console, and press Enter to start the quiz.
// runQuiz();