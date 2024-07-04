const formEl = document.getElementById("signupForm");
const userNameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");

const divNameEl = document.getElementById("userNameGP");
const divPassEl = document.getElementById("passwordNameGp");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (userNameEl.value === "") {
    createError(divNameEl, "name");
  }

  if (passwordEl.value === "") {
    createError(divPassEl, "password");
  }
});

userNameEl.addEventListener("input", () => {
  const renderedErrorEl = document.getElementById("nameError");
  divNameEl.removeChild(renderedErrorEl);
});

const createError = (parentEl, message) => {
  const errorEl = document.createElement("div");
  errorEl.innerText = `User ${message} is invalid!`;
  errorEl.id = "nameError";
  errorEl.classList.add("error");
  parentEl.append(errorEl);
};
