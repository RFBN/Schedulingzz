let taskList = [];

function addTask() {
    const taskType = document.getElementById('taskType').value;
    const taskTitle = document.getElementById('taskTitle').value;
    const taskTime = document.getElementById('taskTime').value;

    if (taskType && taskTitle && taskTime) {
        const task = {
            type: taskType,
            title: taskTitle,
            time: taskTime
        };
        taskList.push(task);
        displayTasks();
        
        document.getElementById('taskType').value = '';
        document.getElementById('taskTitle').value = '';
        document.getElementById('taskTime').value = '';
    } else {
        alert('Please select a task type, and enter both a title and time for the task.');
    }
}

function displayTasks() {
    const taskListElement = document.getElementById('taskList');
    taskListElement.innerHTML = '';

    taskList.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        const taskContent = document.createElement('span');
        taskContent.innerText = `[${task.type}] ${task.title} - ${task.time}`;
        
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteTask(index);
        
        taskItem.appendChild(taskContent);
        taskItem.appendChild(deleteButton);
        taskListElement.appendChild(taskItem);
    });
}

function deleteTask(index) {
    taskList.splice(index, 1);
    displayTasks();
}
