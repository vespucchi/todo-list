import '../styles/taskDom-style.css';
import circle from '../assets/icons/circle.svg';
import circleGreen from '../assets/icons/circle-check-green.svg';
import edit from '../assets/icons/edit.svg';
import trash from '../assets/icons/trash.svg';
import cancel from '../assets/icons/cancel.svg';
import save from '../assets/icons/save.svg';
import saveDisabled from '../assets/icons/save-disabled.svg';
import { getStorage } from './localStorage.js';
import task from './tasks.js';
import { updateTaskCounter } from './domController.js';
import updateLocationDropdown from './locationDropdown.js';


const body = document.querySelector('body');
const main = document.querySelector('main');
let taskList = document.querySelector('#task-list');


function inboxTasks() {
    let taskArray = [];
    if (getStorage('taskArray')) {
        taskArray = getStorage('taskArray');
        taskArray = taskArray
                        .map((task, index) => ({ task, index }))
                        .filter(({ task }) => task.completed === false && task.location == 'inbox');
        return taskArray;
    } else return taskArray;
}

function todayTasks() {
    let todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    todayDate = todayDate.getTime();

    let taskArray = [];
    if (getStorage('taskArray')) {
        taskArray = getStorage('taskArray');
        taskArray = taskArray
                        .map((task, index) => ({ task, index }))
                        .filter(({ task }) => task.date === todayDate && task.completed === false);
        return taskArray;
    } else return taskArray;
}

function upcomingTasks() {
    let todayDate = new Date();
    todayDate.setHours(0, 0, 0, 0);
    todayDate = todayDate.getTime();


    let taskArray = [];
    if (getStorage('taskArray')) {
        taskArray = getStorage('taskArray');
        taskArray = taskArray
            .map((task, index) => ({ task, index }))
            .filter(({ task }) => task.date > todayDate && task.completed === false);
        return taskArray;
    } else return taskArray;
}

function completedTasks() {
    let todayDate = new Date();
    todayDate = todayDate.setHours(0, 0, 0, 0);

    let taskArray = [];
    if (getStorage('taskArray')) {
        taskArray = getStorage('taskArray');
        taskArray = taskArray
            .map((task, index) => ({ task, index }))
            .filter(({ task }) => task.completed === true);
        return taskArray;
    } else return taskArray;
}

function inboxTab() {
    main.textContent = '';

    const section = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const taskList = document.createElement('ul');

    sectionTitle.classList.add('sectionTitle');
    taskList.textContent = '';

    sectionTitle.textContent = 'Inbox';
    section.setAttribute('id', 'inbox');
    taskList.classList.add('task-list');

    // get tasks from storage
    let tasks = inboxTasks();

    // dynamically create tasks list items
    tasks.forEach(task => {
        const taskItem = newTaskItem(task);
        taskList.append(taskItem);
    })

    section.append(sectionTitle, taskList);
    main.append(section);
};

function todayTab() {
    main.textContent = '';

    const section = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const taskList = document.createElement('ul');

    sectionTitle.classList.add('sectionTitle');
    taskList.textContent = '';
    sectionTitle.textContent = 'Today';
    section.setAttribute('id', 'today');
    taskList.classList.add('task-list');

    let tasks = todayTasks();

    // dynamically create tasks list items
    tasks.forEach(task => {
        const taskItem = newTaskItem(task);
        taskList.append(taskItem);
    })

    section.append(sectionTitle, taskList);
    main.append(section);
};

function upcomingTab() {
    main.textContent = '';

    const section = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const taskList = document.createElement('ul');

    sectionTitle.classList.add('sectionTitle');
    taskList.textContent = '';

    sectionTitle.textContent = 'Upcoming';
    section.setAttribute('id', 'upcoming');
    taskList.classList.add('task-list');


    let tasks = upcomingTasks();

    // dynamically create tasks list items
    tasks.forEach(task => {
        const taskItem = newTaskItem(task);
        taskList.append(taskItem);
    })

    section.append(sectionTitle, taskList);
    main.append(section);
};

function projectTab(index) {
    main.textContent = '';

    const section = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const taskList = document.createElement('ul');

    sectionTitle.classList.add('sectionTitle');
    taskList.textContent = '';

    const project = getStorage('projectArray')[index];

    sectionTitle.classList.add('sectionTitle');
    sectionTitle.textContent = project.name;
    section.setAttribute('id', project.name);
    section.dataset.index = index;
    taskList.classList.add('task-list');

    let taskArray = [];

    if (getStorage('taskArray')) taskArray = getStorage('taskArray')

    const projectTasks = taskArray
                            .map((task, index) => ({ task, index }))
                            .filter(({ task }) => task.location === index && task.completed === false);

    // dynamically create tasks list items
    projectTasks.forEach(task => {
        const taskItem = newTaskItem(task);
        taskList.append(taskItem);
    })

    section.append(sectionTitle, taskList);
    main.append(section);
}

function completedTab() {
    main.textContent = '';

    const section = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const taskList = document.createElement('ul');

    sectionTitle.classList.add('sectionTitle');
    taskList.textContent = '';

    sectionTitle.textContent = 'Completed';
    section.setAttribute('id', 'completed');
    taskList.classList.add('task-list');

    // get tasks from storage
    let tasks = completedTasks();

    // dynamically create tasks list items
    tasks.forEach(task => {
        const taskItem = newTaskItem(task);
        const taskCompletedIcon = taskItem.querySelector('.check-icon');
        taskCompletedIcon.src = circleGreen;
        taskList.append(taskItem);
    })

    section.append(sectionTitle, taskList);
    main.append(section);
}

function currentTab() {
    const selectedTab = document.querySelector('.selected');

    if (selectedTab.dataset.index === 'inbox') inboxTab();
    else if (selectedTab.dataset.index === 'today') todayTab();
    else if (selectedTab.dataset.index === 'upcoming') upcomingTab();
    else if (selectedTab.dataset.index === 'completed') completedTab();
    else projectTab(selectedTab.dataset.index);

    taskList = document.querySelector('.task-list');
    taskList.addEventListener('click', manipulateTask);
}

function manipulateTask(e) {
    const taskItem = taskList.querySelector(`[data-index="${e.target.closest('.task-item').dataset.index}"]`);
    const taskInfo = taskItem.querySelector('.task-info');
    const editBtn = taskItem.querySelector('.edit-btn');
    const removeBtn = taskItem.querySelector('.remove-btn');

    if (e.target.closest('.complete-btn')) {
        let completed = getStorage('taskArray')[e.target.closest('.task-item').dataset.index]['completed'];
        task.edit(e.target.closest('.task-item').dataset.index, [['completed', !completed]]);
        currentTab();
        updateTaskCounter();
    } else if (e.target.closest('.edit-btn')) {
        editBtn.style.display = 'none';
        removeBtn.style.visibility = 'visible';

        const cancelBtn = newButtonItem({ 'btnClass': 'cancel-btn' }, { 'imgClass': 'cancel-icon' }, { 'imgSrc': cancel });
        const saveBtn = newButtonItem({ 'btnClass': 'save-btn' }, { 'imgClass': 'save-icon' }, { 'imgSrc': save });

        editBtn.insertAdjacentElement('afterend', cancelBtn);
        cancelBtn.insertAdjacentElement('afterend', saveBtn);

        const dateInput = newDateInput();

        const taskItemLocationDropdown = updateLocationDropdown();
        const taskItemLocationIndex = getStorage('taskArray')[e.target.closest('.task-item').dataset.index]['location'];
        taskItemLocationDropdown.childNodes.forEach(location => {
            location.value === taskItemLocationIndex ? location.selected = true : location.selected = false;
        })
        
        taskInfo.childNodes.forEach(node => {
            node.contentEditable = 'true';
            node.style.border = '1px solid rgba(128, 128, 128, 0.356)';

            if (node.getAttribute('id') === 'name') {
                node.addEventListener('keyup', (e) => {
                    if (!node.textContent) {
                        saveBtn.disabled = 'true';
                        saveBtn.childNodes[0].src = saveDisabled;
                    } else {
                        saveBtn.removeAttribute('disabled');
                        saveBtn.childNodes[0].src = save;
                    };
                })
            } else if(node.getAttribute('id') === 'date') {
                if (node.textContent) {
                    dateInput.value = getFullDateForInput(new Date(getStorage('taskArray')[e.target.closest('.task-item').dataset.index]['date']));
                } 
            } 

            body.addEventListener('mouseup', disableEditable);
        });
        
        if (taskInfo.childNodes.length === 4) {
            // remove date and location elements, will be re-created when page re-renders
            taskInfo.removeChild(taskInfo.lastChild);
            taskInfo.removeChild(taskInfo.lastChild);
        } else {
            // remove location element, will be re-created when page re-renders
            taskInfo.removeChild(taskInfo.lastChild);
        }

        // append edit date and edit location elements, will be removed when page re-renders
        taskInfo.append(dateInput);
        taskInfo.append(taskItemLocationDropdown);

        function disableEditable(e) {
            if (e.target.closest('.task-item')) {
                if (e.target.closest('.save-btn')) {
                    let updatedInfo = [];

                    taskInfo.childNodes.forEach(child => {
                        updatedInfo.push([ child.getAttribute('id'), child.nodeName == 'INPUT' ? child.value  
                                                                        : child.nodeName == 'SELECT' ? child.value 
                                                                        : child.textContent ]);
                    });

                    task.edit(taskItem.dataset.index, updatedInfo);
                    body.removeEventListener('mouseup', disableEditable);
                    currentTab();
                    updateTaskCounter();

                } else if (e.target.closest('.cancel-btn')) {

                    body.removeEventListener('mouseup', disableEditable);
                    currentTab();

                } else if (e.target.closest('.remove-btn')) {
                    task.remove(e.target.closest('.task-item').dataset.index);
                    body.removeEventListener('mouseup', disableEditable);
                    currentTab();
                    updateTaskCounter();
                }

            } else {
                body.removeEventListener('mouseup', disableEditable);
                currentTab();
            }
        };

    } else if (e.target.closest('.remove-btn')) {
        task.remove(e.target.closest('.task-item').dataset.index);
        currentTab();
        updateTaskCounter();
    }
}

function newTaskItem(taskObj) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.dataset.index = taskObj.index;

    const taskCompleteBtn = newButtonItem({ 'btnClass': 'complete-btn' }, {'imgClass': 'check-icon' }, {'imgSrc': circle });
    const taskEditBtn = newButtonItem({ 'btnClass': 'edit-btn' }, { 'imgClass': 'edit-icon' }, { 'imgSrc': edit });
    const taskRemoveBtn = newButtonItem({ 'btnClass': 'remove-btn' }, { 'imgClass': 'trash-icon' }, { 'imgSrc': trash });

    const taskItemInfo = document.createElement('div');
    taskItemInfo.classList.add('task-info');

    const taskItemName = document.createElement('p');
    taskItemName.classList.add('task-name');
    taskItemName.setAttribute('id', 'name');
    taskItemName.textContent = taskObj.task.name;

    const taskItemDesc = document.createElement('p');
    taskItemDesc.classList.add('task-desc');
    taskItemDesc.setAttribute('id', 'desc');
    taskItemDesc.textContent = taskObj.task.desc;

    const taskItemDate = document.createElement('p');
    taskItemDate.classList.add('task-date');
    taskItemDate.setAttribute('id', 'date');
    let date = '';
    if (!!taskObj.task.date) {
        date = parseDate(taskObj.task.date);
    }
    taskItemDate.textContent = date;

    taskItemInfo.append(taskItemName, taskItemDesc, taskItemDate);

    const selectedTab = document.querySelector('.selected');
    if (selectedTab.dataset.index === 'today' || selectedTab.dataset.index === 'upcoming') {
        const taskItemLocation = document.createElement('p');
        taskItemLocation.classList.add('task-location');
        taskItemLocation.setAttribute('id', 'location');
        const taskLocation = taskObj.task.location !== 'inbox' ? getStorage('projectArray')[taskObj.task.location]['name'] : 'inbox';
        taskItemLocation.textContent = taskLocation;

        taskItemInfo.append(taskItemLocation);
    }

    
    taskItem.append(taskCompleteBtn, taskItemInfo, taskEditBtn, taskRemoveBtn);

    return taskItem;
};

function newButtonItem(...attributes) {
    const button = document.createElement('button');
    const img = document.createElement('img');

    attributes.forEach(attribute => {
        const key = Object.keys(attribute)[0];
        const value = Object.values(attribute)[0];
        if(key === 'btnClass') {
            button.classList.add(value);
        } else if (key === 'imgClass') {
            img.classList.add(value);
        } else if (key === 'imgSrc') {
            img.src = value;
        }
    })

    button.append(img);

    return button;
};

function newDateInput() {
    const dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.setAttribute('id', 'date');
    dateInput.classList.add('task-date');
    dateInput.setAttribute("min", getFullDateForInput(new Date()));

    return dateInput;
};

function parseDate(_taskDate) {
    let todayDate = new Date();
    let thisYear = new Date().getFullYear();
    todayDate.setHours(0, 0, 0, 0);

    const todayAndNextSevenDays = [todayDate.getTime()];
    let day = todayDate;
    for(let i = 0; i < 7; i++) {
        day = day.setDate(day.getDate() + 1)
        const newDay = day;
        todayAndNextSevenDays.push(newDay);
        day = new Date(day);
    };
    todayDate = todayDate.getTime();

    // task date info
    let taskDate = new Date(_taskDate);
    let taskTime = taskDate.getTime();
    let string = '';
    todayAndNextSevenDays.forEach((day, index) => {
        if (day === taskTime) {
            if (index === 0) string = 'Today';
            else if (index === 1) string = 'Tomorrow';
            else string = new Date(day).toLocaleString('default', { weekday: 'long' });
        }
    })

    if (string !== '') return string;
    else if (thisYear === taskDate.getFullYear()) {
        const options = {
            day: 'numeric',
            month: 'short',
        };
        return taskDate.toLocaleString('default', options);
    } else {
        const options = {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
        };
        return taskDate.toLocaleString('default', options);
    }

};

function getFullDateForInput(date) {
    if (!date instanceof Date) {
        date = new Date(date);
    }

    const day = ("0" + date.getDate()).slice(-2);
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const fullDate = date.getFullYear() + "-" + (month) + "-" + (day);
    return fullDate;
};

export { inboxTasks, todayTasks, upcomingTasks, completedTasks, inboxTab, todayTab, upcomingTab, projectTab, currentTab, newDateInput };