const addBtn = document.getElementById('add-btn');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', function(e){
    if(e.key === 'Enter') addTask();
});

function addTask() {
    const taskText = taskInput.value.trim();
    if(taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    // Complete task on click
    li.addEventListener('click', function(){
        li.classList.toggle('completed');
    });

    // Delete button
    const delBtn = document.createElement('button');
    delBtn.textContent = 'X';
    delBtn.classList.add('delete-btn');
    delBtn.addEventListener('click', function(e){
        e.stopPropagation(); // prevent marking as completed
        taskList.removeChild(li);
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = '';
}
