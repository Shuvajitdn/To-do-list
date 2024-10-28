let inputField = document.getElementById("inp");
let taskList = document.getElementById("task-list");
let noTasksMessage = document.querySelector(".no-tasks");
let clearButton = document.querySelector(".clear-btn");

function addTask() {
  if (inputField.value.trim() === "") {
    alert("Please enter a task.");
    return;
  }

  let newTask = document.createElement("li");
  newTask.innerHTML = `${inputField.value} <i class="fa-solid fa-trash delete-icon"></i>`;

  // Add click event to mark as completed
  newTask.addEventListener("click", () => {
    newTask.classList.toggle("completed");
  });

  // Add delete functionality
  newTask.querySelector(".delete-icon").addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent marking as completed
    newTask.remove();
    checkEmptyList();
  });

  taskList.appendChild(newTask);
  inputField.value = "";
  checkEmptyList();
}

// Function to clear all tasks
function clearAll() {
  taskList.innerHTML = "";
  checkEmptyList();
}

// Function to check if task list is empty
function checkEmptyList() {
  noTasksMessage.style.display = taskList.childElementCount === 0 ? "block" : "none";
  clearButton.style.display = taskList.childElementCount === 0 ? "none" : "block";
}

// Initial check for empty list
checkEmptyList();
