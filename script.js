const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

let tasks = [];

function Task(title, priority, dueDate, subtasks) {
  this.title = title;
  this.priority = priority;
  this.dueDate = dueDate;
  this.subtasks = subtasks || [];
  this.completed = false;
}

function addTask() {
  const taskTitle = taskInput.value.trim();
  if (taskTitle !== '') {
    const task = new Task(taskTitle, 'medium', null, []);
    tasks.push(task);
    renderTasks();
    taskInput.value = '';
  }
}

function renderTasks() {
  taskList.innerHTML = ''; // Clear existing tasks
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.title;
    taskList.appendChild(li);
  });
}

addButton.addEventListener('click', addTask);
// ... previous code

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
      const li = document.createElement('li');
      li.textContent = task.title;
  
      const editButton = document.createElement('button');
      editButton.classList.add('edit-button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', () => {
        const newTitle = prompt('Edit task:', task.title);
        if (newTitle !== null && newTitle.trim() !== '') {
          tasks[index].title = newTitle;
          renderTasks();
        }
      });
  
      const deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        tasks.splice(index, 1);
        renderTasks();
      });
  
      li.appendChild(editButton);
      li.appendChild(deleteButton);
      taskList.appendChild(li);
    });
  }