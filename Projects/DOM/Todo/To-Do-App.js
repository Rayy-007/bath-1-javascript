const input = document.querySelector("#newTask");
const addBtn = document.querySelector("#addTaskBtn");
const list = document.querySelector("#taskList");

addBtn.addEventListener("click", () => {
  const task = document.createElement("li");
  task.textContent = input.value;
  list.appendChild(task);
  input.value = "";

  task.addEventListener("click", () => {
    task.classList.toggle("completed");
  });

  task.addEventListener("dblclick", () => {
    list.removeChild(task);
  });
});
