// Initialize the todo list
let todos = [
  {
    description: "Homework",
    completed: false,
  },
];

// Function to add a new task
function addTask(task) {
  todos.push({
    description: task,
    completed: false,
  });
}

// Function to toggle the completion status of a task
function toggleTaskCompletion(taskDescription) {
  todos.forEach((task) => {
    if (task.description === taskDescription) {
      task.completed = !task.completed;
    }
  });
}

// Function to remove a task
function removeTask(taskDescription) {
  todos = todos.filter((task) => task.description !== taskDescription);
}

// Example usage
addTask("Buy groceries");
addTask("Complete homework");
// console.log( todos);

toggleTaskCompletion("Buy groceries");
// console.log( todos);

removeTask("Complete homework");
// console.log(todos);
