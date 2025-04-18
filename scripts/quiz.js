
function showQuiz() {
  const quiz = document.getElementById("quiz-section");
  quiz.classList.remove("hidden");
}

function checkAnswer(button, correct) {
  const feedback = document.getElementById("quiz-feedback");
  const studentAnswer = button.textContent;
  const modelAnswer = "It sparked nationwide civil disobedience and international attention.";

  let resultMessage = "";
  if (correct) {
    resultMessage = "Correct!";
    feedback.style.color = "green";
  } else {
    resultMessage = "Not quite. Review the model answer below.";
    feedback.style.color = "red";
  }

  feedback.innerHTML = `
    <div><strong>${resultMessage}</strong></div>
    <div class="mt-2"><strong>Your Answer:</strong> ${studentAnswer}</div>
    <div><strong>Model Answer:</strong> ${modelAnswer}</div>

    <div class="mt-4 text-sm">
      <p><strong>Reflection 1:</strong><br>
      Compare your response with the model answer. What points did you miss or interpret differently? How could you make your answer more complete next time?</p>
      <p class="mt-2"><strong>Reflection 2:</strong><br>
      Gandhi Memorial Intercontinental School carries Gandhi’s name. What value(s) do you think GMIS should adopt to truly reflect Gandhi’s legacy? Explain your reasoning with one example.</p>
    </div>
  `;
}
