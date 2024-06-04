import inboxTab from '../modules/inbox.js';
import task from '../modules/tasks.js';
import project from '../modules/projects.js';
import hashtagBlue from '../assets/icons/hashtag-blue.svg';
import hashtagRed from '../assets/icons/hashtag-red.svg';
import hashtagCoal from '../assets/icons/hashtag-coal.svg';
import hashtagLime from '../assets/icons/hashtag-lime.svg';
import hashtagMag from '../assets/icons/hashtag-mag.svg';
import { getStorageTasks } from './localStorage.js';

// Handle index dom manipulation
function sectionDom() {
    const section = document.querySelector('section');

    if(section.getAttribute('id') === 'inbox') {
        inboxDom();
        taskListeners();
    }
}

function categoryItemDom(button) {
    button.classList.add('selected');

    if(button.classList.contains('inbox')) {
        inboxDom();
    } else if (button.classList.contains('today')) {
        todayDom();
    } else if (button.classList.contains('upcoming')) {
        upcomingDom();
    }
}

function inboxDom() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.append(inboxTab());
};

function todayDom() {
    const main = document.querySelector('main');
    main.textContent = '';
    // main.append(todayTab());
};

function upcomingDom() {
    const main = document.querySelector('main');
    main.textContent = '';
    // main.append(upcomingTab());
};

function updateProjectList() {
    const list = document.querySelector('.project-items');
    list.textContent = '';

    for(let i = 0; i < project.instances.length; i++) {
        const btn = newProjectBtn(project.instances, i);

        list.append(btn);
    };
}

function updateFavoriteList() {
    const list = document.querySelector('.favorite-items');
    list.textContent = '';

    const favProjects = project.instances.filter(pro => pro.favorite === true);

    favProjects.forEach(function (project, index) {
        const btn = newProjectBtn(favProjects, index);
        list.append(btn);
    })
}

function newProjectBtn(array, index) {
    const btn = document.createElement('button');
    btn.classList.add('project-item');
    btn.dataset.index = index;

    const hash = document.createElement('img');
    hash.classList.add('hash');

    switch (array[index].color) {
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
    p.textContent = array[index].name;

    btn.append(hash, p);
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

export { sectionDom, categoryItemDom, updateProjectList, updateFavoriteList };