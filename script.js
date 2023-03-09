// Array to store all tasks
let taskList = [];

// Function to add a new task to the array and update the UI
function addTask(title, description) {
  let newTask = {
    title: title,
    description: description,
    completed: false
  };
  taskList.push(newTask);
  updateTaskList();
}

// Function to update the UI with the task list
function updateTaskList() {
  let taskListDiv = document.getElementById("task-list");
  taskListDiv.innerHTML = "";
  taskList.forEach(function(task, index) {
    let taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.completed) {
      taskDiv.classList.add("completed");
    }
    let taskTitle = document.createElement("h2");
    taskTitle.textContent = task.title;
    let taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;
    let taskCompleted = document.createElement("button");
    taskCompleted.textContent = task.completed ? "Completed" : "Pending";
    taskCompleted.addEventListener("click", function() {
      task.completed = !task.completed;
      if (task.completed) {
        taskDiv.classList.add("completed");
      } else {
        taskDiv.classList.remove("completed");
      }
      updateTaskList();
    });
    let taskDelete = document.createElement("button");
    taskDelete.textContent = "Delete";
    taskDelete.addEventListener("click", function() {
      taskList.splice(index, 1);
      updateTaskList();
    });
    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(taskDescription);
    taskDiv.appendChild(taskCompleted);
    taskDiv.appendChild(taskDelete);
    taskListDiv.appendChild(taskDiv);
  });
}

// Function to show a form to add a new task
function showAddTaskForm() {
  let title = prompt("Enter the title of the task");
  let description = prompt("Enter the description of the task");
  addTask(title, description);
}

// Event listener for the add task button
let addTaskButton = document.getElementById("add-task-button");
addTaskButton.addEventListener("click", showAddTaskForm);

// Update the task list on page load
updateTaskList();




