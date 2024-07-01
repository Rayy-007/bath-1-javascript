const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
  {
    question: "Huh?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
];

const quizDiv = document.getElementById("quiz");
function loadQuiz() {
  questions.forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerHTML = `<p>${q.question}</p>`;

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";

    q.options.forEach((option) => {
      const label = document.createElement("label");
      label.innerHTML = `<input type="radio" name="question${index}" value="${option}"> ${option}`;
      optionsDiv.appendChild(label);
    });

    questionDiv.appendChild(optionsDiv);
    quizDiv.appendChild(questionDiv);
  });
}

function submitQuiz() {
  let score = 0;
  questions.forEach((q, index) => {
    const selectedOption = document.querySelector(
      `input[name="question${index}"]:checked`
    );

    if (selectedOption && selectedOption.value === q.answer) {
      score++;
    }
  });
  document.getElementById("result").textContent = `You scored ${score}/${
    questions.length - 2
  }`;
}

document.getElementById("submitBtn").addEventListener("click", submitQuiz);
loadQuiz();
