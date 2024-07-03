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
    question: "Huh3?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Huh4",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript",
  },
];

const quizDiv = document.getElementById("quiz");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");
const nextBtnEl = document.getElementById("nextBtn");

let currentQuestion = 0;
const renderQuiz = () => {
  quizDiv.innerText = "";
  result.innerText = "";
  //
  questions.slice(currentQuestion, currentQuestion + 2).forEach((q, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";
    questionDiv.innerHTML = `<p>${q.question}</p>`;

    const optionsDiv = document.createElement("div");
    optionsDiv.className = "options";

    q.options.forEach((option) => {
      const labelEl = document.createElement("label");
      labelEl.innerHTML = `<input type="radio" value=${option} name='question${index}'/> ${option}`;
      optionsDiv.append(labelEl);
    });

    questionDiv.append(optionsDiv);
    quizDiv.append(questionDiv);
  });
};

renderQuiz();

const checkAnswer = () => {
  let score = 0;

  questions.slice(currentQuestion, currentQuestion + 2).forEach((q, index) => {
    const userSelectedAnswer = document.querySelector(
      `input[name="question${index}"]:checked`
    );
    if (userSelectedAnswer && userSelectedAnswer.value === q.answer) {
      score++;
    }
    result.textContent = `You scored ${score} / ${questions.length - 2}`;
  });

  if (score === 2) {
    nextBtnEl.style.display = "block";
  }
};

submitBtn.addEventListener("click", checkAnswer);

const renderNextQuiz = () => {
  if (currentQuestion + 2 <= questions.length - 1) {
    currentQuestion += 2;

    renderQuiz();
  } else {
    quizDiv.innerText = "";

    submitBtn.style.display = "none";
    nextBtnEl.style.display = "none";
    result.textContent = "Congratulations you have completed all question 🤩";
  }
};

nextBtnEl.addEventListener("click", renderNextQuiz);
