// Setup EventListener for Page Load
document.addEventListener('DOMContentLoaded', function() {
    // Selecting DOM Elements by their ID's
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');
  
    // Creating the addTask Function
    function addTask() {
      // Retrieve then trim the value from the task input field
      const taskText = taskInput.value.trim();
  
      // Confirm if taskText is empty or not
      if (taskText === "") {
        alert("Please enter a task");
        return;
      }
  
      // Creating a new li element
      const li = document.createElement('li');
      li.textContent = taskText;
  
      // Creating a new button element for removing the task
      const removeButton = document.createElement('button');
      removeButton.textContent = "Remove";
      removeButton.className = 'remove-btn';
  
      // Connecting an onclick event to the remove button
      removeButton.onclick = function() {
        taskList.removeChild(li);
      };
  
      // Appending the remove button to the li element, then append the li to taskList
      li.appendChild(removeButton);
      taskList.appendChild(li);
  
      // Clearing the input field
      taskInput.value = "";
    }
  
    // Connecting the EventListener
    addButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter') {
        addTask();
      }
    });
  
    // Calling the addTask function
    addTask();
  });