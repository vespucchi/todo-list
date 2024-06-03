import inboxTab from '../modules/inbox.js';
import task from '../modules/tasks.js';
import project from '../modules/projects.js';

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

    const inboxTaskCount = document.querySelector('#inbox');
    inboxTaskCount.textContent = task.instances.length;
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

function projectList() {
    const list = document.querySelector('.project-items');
    list.textContent = '';

    for(let i = 0; i < project.instances.length; i++) {
        const btn = document.createElement('button');
        btn.classList.add('project-item');
        btn.dataset.index = i;

        const p = document.createElement('p');
        p.classList.add('project-name');
        p.textContent = project.instances[i].name;

        btn.append(p);
        list.append(btn);
    };
}

// Event listeners for removing tasks/projects
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

export { sectionDom, categoryItemDom, projectList };