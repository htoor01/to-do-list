const taskInput = document.getElementById('UserInput');
const taskList = document.getElementById('ToDoList');
const addButton = document.getElementById('Add');
const clearButton = document.getElementById('Clear');

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

taskList.addEventListener('click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }else if(e.target.className === 'close'){
        e.target.parentElement.remove();
    }   
}, false);

taskInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        addTask();
    }
});

function clearTask(){
    taskList.innerHTML = '';
}

clearButton.addEventListener('click', clearTask);