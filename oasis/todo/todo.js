// Get the input field and lists
var input = document.getElementById("task-input");
var pendingList = document.getElementById("pending-list");
var completedList = document.getElementById("completed-list");

// Add task function
function addTask() {
  var task = input.value;
  if (task === "") {
    alert("Please enter a task.");
    return;
  }
  var listItem = document.createElement("li");
  var text = document.createTextNode(task);
  listItem.appendChild(text);
  pendingList.appendChild(listItem);
  input.value = "";
  addButtons(listItem);
  addDateTime(listItem, "added");
}

// Add edit and delete buttons to list item
function addButtons(listItem) {
  var deleteButton = document.createElement("span");
  deleteButton.innerHTML = "&times;";
  deleteButton.className = "delete-button";
  deleteButton.onclick = function() {
    listItem.remove();
  };
  listItem.appendChild(deleteButton);
  var editButton = document.createElement("span");
  editButton.innerHTML = "&#9998;";
  editButton.className = "edit-button";
  editButton.onclick = function() {
    var task = prompt("Edit task", listItem.innerText);
    if (task !== null) {
      listItem.innerText = task;
      addDateTime(listItem, "edited");
    }
  };
  listItem.appendChild(editButton);
}

// Add date and time when task is added or completed
function addDateTime(listItem, action) {
    var date = new Date();
    var dateTimeString = date.toLocaleString();
    var dateTimeSpan = document.createElement("span");
    dateTimeSpan.innerHTML = "(" + dateTimeString + ")";
    if (action === "added") {
    listItem.appendChild(dateTimeSpan);
    } else if (action === "completed") {
    var completedSpan = listItem.querySelector(".completed");
    completedSpan.appendChild(dateTimeSpan);
    }
    }
    
    // Move task from pending list to completed list
    function completeTask(listItem) {
    var completedItem = listItem.cloneNode(true);
    completedItem.classList.add("completed");
    completedList.appendChild(completedItem);
    listItem.remove();
    addDateTime(completedItem, "completed");
    addButtons(completedItem);
    }
    
    // Event listener for clicking on a pending task
    pendingList.addEventListener("click", function(event) {
    var listItem = event.target;
    completeTask(listItem);
    });
    
    // Event listener for clicking on a completed task
    completedList.addEventListener("click", function(event) {
    var listItem = event.target;
    if (listItem.classList.contains("completed")) {
    listItem.remove();
    } else {
    completeTask(listItem);
    }
    });
    
    
    
