import { inboxTab, todayTab, upcomingTab } from './tabs.js';
import task from '../modules/tasks.js';
import hashtagBlue from '../assets/icons/hashtag-blue.svg';
import hashtagRed from '../assets/icons/hashtag-red.svg';
import hashtagCoal from '../assets/icons/hashtag-coal.svg';
import hashtagLime from '../assets/icons/hashtag-lime.svg';
import hashtagMag from '../assets/icons/hashtag-mag.svg';
import dots from '../assets/icons/dots.svg';
import { getStorage } from './localStorage.js';
import { inboxTasks, todayTasks, upcomingTasks, projectTab } from './tabs.js';

function categoryItemDom(button) {
    if(button.classList.contains('inbox')) {
        inboxTab();
    } else if (button.classList.contains('today')) {
        todayTab();
    } else if (button.classList.contains('upcoming')) {
        upcomingTab();
    }
}

function updateTaskCounter() {
    const categories = document.querySelector('.categories');
    const tabs = categories.querySelectorAll('.tab');

    tabs.forEach(tab => {
        const counter = tab.querySelector('.filter-count');
        if (tab.classList.contains('inbox')) {
            counter.textContent = inboxTasks().length;
        } else if (tab.classList.contains('today')) {
            counter.textContent = todayTasks().length;
        } else if (tab.classList.contains('upcoming')) {
            counter.textContent = upcomingTasks().length;
        }
    })
}

function projectDom(index) {
    const main = document.querySelector('main');
    main.textContent = '';
    main.append(projectTab(index));
};

function updateProjectList() {
    const list = document.querySelector('.my-projects');
    list.textContent = '';

    let projectArray = [];
    if (getStorage('projectArray')) projectArray = getStorage('projectArray');
    projectArray = projectArray.map((project, index) => ({ project, index }));

    projectArray.forEach(project => {
        const btn = newProjectBtn(project);
        list.append(btn);
    })
}

function updateFavoriteList() {
    const list = document.querySelector('.favorite-items');
    list.textContent = '';

    let projectArray = [];
    if (getStorage('projectArray')) projectArray = getStorage('projectArray');

    const favProjects = projectArray
                            .map((project, index) => ({ project, index }))
                            .filter(({ project }) => project.favorite === true);
    
    favProjects.forEach(project => {
        const btn = newProjectBtn(project);
        list.append(btn);
    })
}

function newProjectBtn(pro) {
    const btn = document.createElement('button');
    btn.classList.add('tab');
    btn.classList.add('project-item');
    btn.dataset.index = pro.index;

    const hash = document.createElement('img');
    hash.classList.add('hash');

    switch (pro.project.color) {
        case 'skyBlue':
            hash.src = hashtagBlue;
            break;
        case 'red':
            hash.src = hashtagRed;
            break;
        case 'charCoal':
            hash.src = hashtagCoal;
            break;
        case 'magenta':
            hash.src = hashtagMag;
            break;
        case 'limeGreen':
            hash.src = hashtagLime;
            break;
    }

    const p = document.createElement('p');
    p.classList.add('project-name');
    p.textContent = pro.project.name;

    const taskCount = document.createElement('p');
    const optionsBtn = document.createElement('button');
    const optionsIcon = document.createElement('img');
    optionsBtn.classList.add('project-options');
    optionsIcon.classList.add('project-options');
    optionsIcon.src = dots;

    optionsBtn.append(optionsIcon);

    btn.append(hash, p, taskCount, optionsBtn);
    return btn;
};

// Event listeners for removing tasks
function taskListeners() {
    const listItem = document.querySelectorAll('li');
    listItem.forEach(item => {
        const itemBtn = item.querySelector('button');
        itemBtn.addEventListener('click', (e) => {
            if (item.classList.contains('task-item')) {
                task.remove(item.dataset.index);
                return sectionDom();
            }
        })
    })
}

export { updateTaskCounter, categoryItemDom, updateProjectList, updateFavoriteList, projectDom };