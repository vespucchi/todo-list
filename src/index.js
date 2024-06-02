import './index-style.css';
import { collapseSidebar, enableSidebar } from './modules/toggleSidebar.js';
import task from './modules/tasks.js';
import inboxTab from './modules/inbox.js';
import { sectionDom } from './modules/domController.js';

const main = document.querySelector('main');
const sidebar = document.querySelector('.sidebar');
const newTaskModal = document.getElementById('newTask-modal');
const newProjectModal = document.getElementById('newProject-modal');

// Start with Inbox model
main.textContent = '';
main.append(inboxTab());

const section = document.querySelector('section');

// event listener for toggling sidebar
const toggleSidebar = document.getElementById('toggle-sidebar');
toggleSidebar.addEventListener('click', (e) => {
    if (sidebar.classList.contains('collapsed')) {
        enableSidebar();
    } else {
        collapseSidebar();
    }
});

// event listeners for adding tasks
const addTask = document.getElementById('add-task');
addTask.addEventListener('click', () => {
    newTaskModal.showModal();
})

const closeTaskModal = document.getElementById('closeTask-modal');
closeTaskModal.addEventListener('click', (e) => {
        newTaskModal.close();
        e.preventDefault();
    }
);

const submitTaskBtn = document.getElementById('submit-task');
const taskNameInput = document.getElementById('task-name');
taskNameInput.addEventListener('keyup', () => {
    if(taskNameInput.value === '') submitTaskBtn.disabled = true;
    else submitTaskBtn.disabled = false;
})

const taskDescInput = document.getElementById('task-desc');
const taskDateInput = document.getElementById('task-date');
submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    task.add(taskNameInput.value, taskDescInput.value, taskDateInput.value);
    newTaskModal.close();
    sectionDom();
})


// event listener for switching tabs



