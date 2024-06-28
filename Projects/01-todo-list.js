// Initialize the todo list
let todos = [
  {
    task: "Homework",
    completed: false,
  },
];

/** ------- Adding a new Task ------- */
function addTask(newTask) {
  todos.push({
    task: newTask,
    completed: false,
  });
}
addTask("Buy groceries");
addTask("Complete homework");
console.log(todos);

/** Changing Task Completed -----  */
function toggleTaskCompletion(completedTask) {
  todos.forEach((task) => {
    if (task.task === completedTask) {
      task.completed = true;
    }
  });
}
toggleTaskCompletion("Homework");
console.log(todos);

/** ------ Removing Task ------- */
function removeTask(removedTask) {
  todos = todos.filter((task) => task.task !== removedTask);
} // [""]

removeTask("Homework");
console.log(todos);
