import hashtagBlue from '../assets/icons/hashtag-blue.svg';
import hashtagRed from '../assets/icons/hashtag-red.svg';
import hashtagCoal from '../assets/icons/hashtag-coal.svg';
import hashtagLime from '../assets/icons/hashtag-lime.svg';
import hashtagMag from '../assets/icons/hashtag-mag.svg';
import dots from '../assets/icons/dots.svg';
import { getStorage } from './localStorage.js';
import { inboxTasks, todayTasks, upcomingTasks, completedTasks } from './tasksDomController.js';

function updateTaskCounter() {
    const categories = document.querySelector('.categories');
    const tabs = categories.querySelectorAll('.tab');

    tabs.forEach(tab => {
        if (tab.dataset.index === 'inbox') {
            const counter = document.getElementById('inbox');
            counter.textContent = inboxTasks().length;
        } else if (tab.dataset.index === 'today') {
            const counter = document.getElementById('today');
            counter.textContent = todayTasks().length;
        } else if (tab.dataset.index === 'upcoming') {
            const counter = document.getElementById('upcoming');
            counter.textContent = upcomingTasks().length;
        } else if (tab.dataset.index === 'completed') {
            const counter = document.getElementById('completed');
            counter.textContent = completedTasks().length;
        }
    })
}

function updateProjectList() {
    const list = document.querySelector('.my-projects');
    list.textContent = '';

    let projectArray = [];
    if (getStorage('projectArray')) {
        projectArray = getStorage('projectArray');
        projectArray = projectArray.map((project, index) => ({ project, index }));
    }

    projectArray.forEach(project => {
        const btn = newProjectBtn(project);
        list.append(btn);
    })
}

function updateFavoriteList() {
    const list = document.querySelector('.favorite-items');
    list.textContent = '';

    let favProjects = [];
    if (getStorage('projectArray')) {
        favProjects = getStorage('projectArray');
        favProjects = favProjects
            .map((project, index) => ({ project, index }))
            .filter(({ project }) => project.favorite === true);
    }    
    
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

export { updateTaskCounter, updateProjectList, updateFavoriteList };