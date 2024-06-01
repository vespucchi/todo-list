import './index-style.css';
import { collapseSidebar, enableSidebar } from './modules/toggleSidebar';

const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');
const newTaskModal = document.getElementById('newTask-modal');
const newProjectModal = document.getElementById('newProject-modal');

// event listener for toggling sidebar
const toggleSidebar = document.getElementById('toggle-sidebar');
toggleSidebar.addEventListener('click', (e) => {
    if (sidebar.classList.contains('collapsed')) {
        enableSidebar();
    } else {
        collapseSidebar();
    }
});

// event listener for adding tasks
const addTask = document.getElementById('add-task');
addTask.addEventListener('click', (e) => {
    newTaskModal.showModal();
})

const closeTaskModal = document.getElementById('closeTask-modal');
closeTaskModal.addEventListener('click', () => {
        newTaskModal.close();
        return false;
    }
);


