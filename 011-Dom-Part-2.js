const buttonEl = document.getElementById("btn");

buttonEl.addEventListener("keydown", () => {
  alert("Hello World");
  buttonEl.style.backgroundColor = "green";
  buttonEl.style.color = "red";
});

buttonEl.onclick = () => {
  alert("hello world");
};

buttonEl.addEventListener("click", (event) => {
  console.log(event.type);
});
