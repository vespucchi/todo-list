import './index-style.css';
import { collapseSidebar, enableSidebar } from './modules/toggleSidebar.js';
import task from './modules/tasks.js';
import project from './modules/projects.js';
import { updateTaskCounter, updateCurrentTabContent, updateProjectList, updateFavoriteList, projectDom } from './modules/domController.js';
import updateLocationDropdown from './modules/locationDropdown.js';
import { inboxTab } from './modules/tasksDomController.js';

const main = document.querySelector('main');
const sidebar = document.querySelector('.sidebar');

// Start with Inbox model
inboxTab();
updateTaskCounter()
updateProjectList();
updateFavoriteList();

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
const newTaskModal = document.getElementById('newTask-modal');
const taskForm = document.getElementById('newTask-form');

const addTask = document.getElementById('add-task');
addTask.addEventListener('click', () => {
    newTaskModal.showModal();
    updateLocationDropdown();
});

const closeTaskModal = document.getElementById('close-task');
closeTaskModal.addEventListener('click', (e) => {
        newTaskModal.close();
    }
);

const submitTaskBtn = document.getElementById('submit-task');
const taskNameInput = document.getElementById('task-name');
taskNameInput.addEventListener('keyup', () => {
    if(taskNameInput.value === '') submitTaskBtn.disabled = true;
    else submitTaskBtn.disabled = false;
});

const taskLocationInput = document.getElementById('task-location');
const taskDescInput = document.getElementById('task-desc');
const taskDateInput = document.getElementById('task-date');
const categoryDiv = document.querySelector('.categories');
submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    task.add(taskNameInput.value, taskDescInput.value, taskDateInput.value, taskLocationInput.value);
    updateTaskCounter()
    newTaskModal.close();
    taskForm.reset();
    submitTaskBtn.disabled = true;
    const currentFilter = categoryDiv.querySelector('.selected');
    console.log(currentFilter.classList);
    updateCurrentTabContent(currentFilter);
});


// event listeners for adding projects
const newProjectModal = document.getElementById('newProject-modal');
const projectForm = document.getElementById('newProject-form');

const addProjectBtn = document.querySelector('#add-project');
addProjectBtn.addEventListener('click', () => {
    newProjectModal.showModal();
});

const checkbox = document.querySelector('.checkbox');
checkbox.addEventListener('change', () => {
    checkbox.value === 'false' ? checkbox.value = 'true' : checkbox.value = 'false';
})

const closeProjectModal = document.getElementById('close-project');
closeProjectModal.addEventListener('click', (e) => {
    newProjectModal.close();
    checkbox.value = 'false';
    checkbox.checked = false;
});

const submitProjectBtn = document.getElementById('submit-project');
const projectNameInput = document.getElementById('project-name');
projectNameInput.addEventListener('keyup', () => {
    if (projectNameInput.value === '') submitProjectBtn.disabled = true;
    else submitProjectBtn.disabled = false;
});

const projectColorInput = document.getElementById('project-color');
const projectItems = document.querySelectorAll('.project-list');
submitProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    project.add(projectNameInput.value, projectColorInput.value, checkbox.value);
    newProjectModal.close();
    updateProjectList();
    updateFavoriteList();
    checkbox.value = 'false';
    projectForm.reset();
});

let filters = categoryDiv.querySelector('.categ-filters');
let projectBtns = categoryDiv.querySelectorAll('.tab');
const filterBtns = filters.querySelectorAll('.tab');

// event listener for switching filters
filters.addEventListener('click', (e) => {
    projectBtns.forEach(b => b.classList.remove('selected'));
    filterBtns.forEach(b => b.classList.remove('selected'));
    e.target.closest('button').classList.add('selected');
    categoryItemDom(e.target.closest('button'));
})

// event listener for switching projects
projectItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if(e.target.classList.contains('project-options')) {
            console.log('To do options');
        } else {
            filterBtns.forEach(b => b.classList.remove('selected'));
            const projectIndex = e.target.closest('button').dataset.index;
            projectBtns.forEach(b => b.classList.remove('selected'));
            e.target.closest('button').classList.add('selected');
            projectDom(projectIndex); 
        }
    });
});
