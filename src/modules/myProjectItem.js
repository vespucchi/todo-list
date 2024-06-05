import { getStorage } from './localStorage';
import circle from '../assets/icons/circle.svg';


export default function projectTab(index) {
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