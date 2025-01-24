// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
    
    // Get the selected radio button
    const userAnswer = document.querySelector('input[name="quiz"]:checked');
    
    // Feedback element
    const feedback = document.getElementById("feedback");
    
    // Check if an answer is selected
    if (userAnswer) {
        // Compare user's answer with the correct answer
        if (userAnswer.value === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
