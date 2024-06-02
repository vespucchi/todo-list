import inboxTab from '../modules/inbox.js';
import task from '../modules/tasks.js';

// Handle index dom manipulation
function sectionDom() {
    const section = document.querySelector('section');

    if(section.getAttribute('id') === 'inbox') {
        inboxDom();
        listEvents();
    }
}

function inboxDom() {
    const main = document.querySelector('main');
    main.textContent = '';
    main.append(inboxTab());
};

// Event listeners for removing tasks/projects
function listEvents() {
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

export { sectionDom };