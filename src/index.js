import './index-style.css';
import { collapseSidebar, enableSidebar } from './modules/toggleSidebar.js';
import task from './modules/tasks.js';
import project from './modules/projects.js';
import { updateTaskCounter, updateProjectList, updateFavoriteList } from './modules/domController.js';
import updateLocationDropdown from './modules/locationDropdown.js';
import { currentTab } from './modules/tasksDomController.js';
import { getStorage } from './modules/localStorage.js';

const main = document.querySelector('main');
const section = document.querySelector('section');
const sidebar = document.querySelector('.sidebar');


// Start with Inbox model
currentTab();
updateTaskCounter()
updateProjectList();
updateFavoriteList();


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
    task.add(taskNameInput.value, taskDescInput.value, taskDateInput.value, false, taskLocationInput.value);

    handleSelectedTab();
    const taskLocationTab = categoryDiv.querySelector(`[data-index='${taskLocationInput.value}']`);
    taskLocationTab.classList.add('selected');

    updateTaskCounter()
    newTaskModal.close();
    taskForm.reset();
    submitTaskBtn.disabled = true;
    currentTab();
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
    updateProjectList();
    updateFavoriteList();

    handleSelectedTab();
    const taskLocationTab = categoryDiv.querySelector(`[data-index='${getStorage('projectArray').length - 1}']`);
    taskLocationTab.classList.add('selected');

    newProjectModal.close();
    checkbox.value = 'false';
    projectForm.reset();
    currentTab();
});


// event listener for switching filters
const filters = categoryDiv.querySelector('.categ-filters');
filters.addEventListener('click', (e) => {
    handleSelectedTab();
    e.target.closest('button').classList.add('selected');
    currentTab();
})


// event listener for switching projects
projectItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if(e.target.classList.contains('project-options')) {
            console.log('To do options');
        } else {
            handleSelectedTab();
            e.target.closest('button').classList.add('selected');
            currentTab(); 
        }
    });
});

// function for handling selected tabs
function handleSelectedTab() {
    const projectBtns = categoryDiv.querySelectorAll('.tab');
    const filterBtns = filters.querySelectorAll('.tab');

    filterBtns.forEach(b => b.classList.remove('selected'));
    projectBtns.forEach(b => b.classList.remove('selected'));
}