// Initialize the todo list
let todos = [];

// Function to add a new task
function addTask(task) {
  todos.push({
    description: task,
    completed: false,
  });
}

// Function to toggle the completion status of a task
function toggleTaskCompletion(taskDescription) {
  todos = todos.map((task) =>
    task.description === taskDescription
      ? { ...task, completed: !task.completed }
      : task
  );
}

// Function to remove a task
function removeTask(taskDescription) {
  todos = todos.filter((task) => task.description !== taskDescription);
}

// Example usage
addTask("Buy groceries");
addTask("Complete homework");
console.log("Tasks after adding:", todos);

toggleTaskCompletion("Buy groceries");
console.log("Tasks after toggling completion:", todos);

removeTask("Complete homework");
console.log("Tasks after removing:", todos);
