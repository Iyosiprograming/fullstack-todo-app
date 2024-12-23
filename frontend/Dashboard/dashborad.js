// Select elements
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');
const logoutBtn = document.getElementById('logoutBtn');

// Event Listener: Add Task
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const taskText = todoInput.value.trim();
  if (taskText) {
    addTask(taskText);
    todoInput.value = ''; // Clear input
  }
});

// Function: Add Task
function addTask(task) {
  const listItem = document.createElement('li');
  listItem.innerHTML = `
    <span>${task}</span>
    <button onclick="deleteTask(this)">Delete</button>
  `;
  todoList.appendChild(listItem);
}

// Function: Delete Task
function deleteTask(button) {
  const taskItem = button.parentElement;
  todoList.removeChild(taskItem);
}

// Logout Button Action (for demo)
logoutBtn.addEventListener('click', () => {
  alert('Logged out!');
  // Redirect to login page (placeholder)
  window.location.href = 'login.html';
});
