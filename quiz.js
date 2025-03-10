// Function to check the selected answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";
    
    // Get the selected radio button
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");
    
    if (selectedOption) {
        // Get the value of the selected radio button
        const userAnswer = selectedOption.value;
        
        // Compare with correct answer and display feedback
        if (userAnswer === correctAnswer) {
            feedbackElement.textContent = "Correct! Well done.";
            feedbackElement.style.color = "green";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
    } else {
        feedbackElement.textContent = "Please select an answer before submitting.";
        feedbackElement.style.color = "orange";
    }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
