import circle from '../assets/icons/circle.svg';
import { getStorage } from './localStorage';

const section = document.createElement('section');
const sectionTitle = document.createElement('h1');
const taskList = document.createElement('ul');
sectionTitle.classList.add('sectionTitle');

function inboxTasks() {
    if (getStorage('taskArray')) return getStorage('taskArray');
    else return [];
}

function todayTasks() {
    let todayDate = new Date();
    todayDate = todayDate.setHours(0, 0, 0, 0);

    if (getStorage('taskArray')) return getStorage('taskArray').filter(task => task.date === todayDate);
    else return [];
}

function upcomingTasks() {
    let todayDate = new Date();
    todayDate = todayDate.setHours(0, 0, 0, 0);

    if (getStorage('taskArray')) return getStorage('taskArray').filter(task => task.date > todayDate);
    else return [];
}

function inboxTab() {
    const main = document.querySelector('main');
    main.textContent = '';
    taskList.textContent = '';

    sectionTitle.textContent = 'Inbox';
    section.setAttribute('id', 'inbox');
    taskList.setAttribute('id', 'task-list');

    // get tasks from storage
    let tasks = inboxTasks();

    // dynamically create tasks list items
    for(let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.dataset.index = i;

        const taskCompleteBtn = document.createElement('button');
        taskCompleteBtn.classList.add('complete-btn');
        const taskCompleteIcon = document.createElement('img');
        taskCompleteIcon.classList.add('check-icon');
        taskCompleteIcon.src = circle;
        taskCompleteBtn.append(taskCompleteIcon);

        const taskItemInfo = document.createElement('div');
        taskItemInfo.classList.add('task-info');

        const taskItemName = document.createElement('p');
        taskItemName.classList.add('task-name');
        taskItemName.textContent = tasks[i].name;
        const taskItemDesc = document.createElement('p');
        taskItemDesc.classList.add('task-desc');
        taskItemDesc.textContent = tasks[i].desc;

        taskItemInfo.append(taskItemName, taskItemDesc);
        taskItem.append(taskCompleteBtn, taskItemInfo);

        taskList.append(taskItem);
    }

    section.append(sectionTitle, taskList);
    main.append(section);
};

function todayTab() {
    const main = document.querySelector('main');
    main.textContent = '';
    taskList.textContent = '';

    sectionTitle.textContent = 'Today';
    section.setAttribute('id', 'today');
    taskList.setAttribute('id', 'task-list');

    let tasks = todayTasks();

    // dynamically create tasks list items
    for (let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.dataset.index = i;

        const taskCompleteBtn = document.createElement('button');
        taskCompleteBtn.classList.add('complete-btn');
        const taskCompleteIcon = document.createElement('img');
        taskCompleteIcon.classList.add('check-icon');
        taskCompleteIcon.src = circle;
        taskCompleteBtn.append(taskCompleteIcon);

        const taskItemInfo = document.createElement('div');
        taskItemInfo.classList.add('task-info');

        const taskItemName = document.createElement('p');
        taskItemName.classList.add('task-name');
        taskItemName.textContent = tasks[i].name;
        const taskItemDesc = document.createElement('p');
        taskItemDesc.classList.add('task-desc');
        taskItemDesc.textContent = tasks[i].desc;

        taskItemInfo.append(taskItemName, taskItemDesc);
        taskItem.append(taskCompleteBtn, taskItemInfo);

        taskList.append(taskItem);
    }

    section.append(sectionTitle, taskList);

    main.append(section);
};

function upcomingTab() {
    const main = document.querySelector('main');
    main.textContent = '';
    taskList.textContent = '';

    sectionTitle.textContent = 'Upcoming';
    section.setAttribute('id', 'upcoming');
    taskList.setAttribute('id', 'task-list');

    let tasks = upcomingTasks();

    // dynamically create tasks list items
    for (let i = 0; i < tasks.length; i++) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.dataset.index = tasks.index;

        const taskCompleteBtn = document.createElement('button');
        taskCompleteBtn.classList.add('complete-btn');
        const taskCompleteIcon = document.createElement('img');
        taskCompleteIcon.classList.add('check-icon');
        taskCompleteIcon.src = circle;
        taskCompleteBtn.append(taskCompleteIcon);

        const taskItemInfo = document.createElement('div');
        taskItemInfo.classList.add('task-info');

        const taskItemName = document.createElement('p');
        taskItemName.classList.add('task-name');
        taskItemName.textContent = tasks[i].task.name;
        const taskItemDesc = document.createElement('p');
        taskItemDesc.classList.add('task-desc');
        taskItemDesc.textContent = tasks[i].task.desc;

        taskItemInfo.append(taskItemName, taskItemDesc);
        taskItem.append(taskCompleteBtn, taskItemInfo);

        taskList.append(taskItem);
    }

    section.append(sectionTitle, taskList);

    main.append(section);
};

function projectTab(index) {
    const projectSection = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const taskList = document.createElement('ul');

    const project = getStorage('projectArray')[index];

    sectionTitle.classList.add('sectionTitle');
    sectionTitle.textContent = project.name;
    projectSection.setAttribute('id', project.name);
    projectSection.dataset.index = index;
    taskList.classList.add('task-list');

    let taskArray = [];

    if (getStorage('taskArray')) taskArray = getStorage('taskArray')

    const projectTasks = taskArray.filter(task => task.location === index);

    // dynamically create tasks list items
    for (let i = 0; i < projectTasks.length; i++) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.dataset.index = i;

        const taskCompleteBtn = document.createElement('button');
        taskCompleteBtn.classList.add('complete-btn');
        const taskCompleteIcon = document.createElement('img');
        taskCompleteIcon.classList.add('check-icon');
        taskCompleteIcon.src = circle;
        taskCompleteBtn.append(taskCompleteIcon);

        const taskItemInfo = document.createElement('div');
        taskItemInfo.classList.add('task-info');

        const taskItemName = document.createElement('p');
        taskItemName.classList.add('task-name');
        taskItemName.textContent = taskArray[i].name;
        const taskItemDesc = document.createElement('p');
        taskItemDesc.classList.add('task-desc');
        taskItemDesc.textContent = taskArray[i].desc;

        taskItemInfo.append(taskItemName, taskItemDesc);
        taskItem.append(taskCompleteBtn, taskItemInfo);

        taskList.append(taskItem);
    }

    projectSection.append(sectionTitle, taskList);

    return projectSection;
}

export { inboxTasks, todayTasks, upcomingTasks, inboxTab, todayTab, upcomingTab, projectTab };