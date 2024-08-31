const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

document.addEventListener('DOMContentLoaded', loadTasks);

addTaskBtn.addEventListener('click', addTask);

// Function to add a task
function addTask() {
    const taskValue = taskInput.value.trim();

    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    const newTask = document.createElement('li');
    newTask.textContent = taskValue;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('deleteBtn');
    deleteBtn.addEventListener('click', function() {
        taskList.removeChild(newTask);
    });

    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);

    taskInput.value = '';
    
    saveData();

}

function saveData() {
    localStorage.setItem("taskData", taskList.innerHTML);
}

function loadTasks() {
    taskList.innerHTML = localStorage.getItem("taskData") || '';
    
    const deleteBtns = document.querySelectorAll('.deleteBtn');
    deleteBtns.forEach(deleteBtn => {
        deleteBtn.addEventListener('click', function() {
            const taskItem = deleteBtn.parentElement;
            taskList.removeChild(taskItem);
            saveData(); 
        });
    });
}
