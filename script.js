const taskInput = document.getElementById('UserInput');
const taskList = document.getElementById('ToDoList');
const addButton = document.getElementById('Add');

function addTask() {
    if(taskInput.value === ''){
        alert('Please enter a task!');
    }else{
        let li = document.createElement('li');
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
        span.className = 'close';
    }
    taskInput.value = '';
}
