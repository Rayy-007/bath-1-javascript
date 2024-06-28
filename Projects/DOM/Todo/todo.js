// Select necessary elements
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Add event listener for adding tasks
addButton.addEventListener("click", addTask);

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return; // Prevent adding empty tasks

  // Create task elements
  const li = document.createElement("li");
  const span = document.createElement("span");
  const completeButton = document.createElement("button");
  const removeButton = document.createElement("button");

  // Set text and classes
  span.textContent = taskText;
  completeButton.textContent = "Complete";
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove");

  // Append elements to the list item
  li.appendChild(span);
  li.appendChild(completeButton);
  li.appendChild(removeButton);

  // Append the list item to the task list
  taskList.appendChild(li);

  // Clear input field
  // taskInput.value = "";

  // Add event listeners for complete and remove buttons
  completeButton.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  removeButton.addEventListener("click", () => {
    taskList.removeChild(li);
  });
}

// Optional: Allow adding tasks by pressing Enter key
taskInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
