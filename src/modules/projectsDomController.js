import '../styles/projectDom-style.css';
import hashtagBlue from '../assets/icons/hashtag-blue.svg';
import hashtagRed from '../assets/icons/hashtag-red.svg';
import hashtagCoal from '../assets/icons/hashtag-coal.svg';
import hashtagLime from '../assets/icons/hashtag-lime.svg';
import hashtagMag from '../assets/icons/hashtag-mag.svg';
import dots from '../assets/icons/dots.svg';
import { getStorage } from './localStorage.js';
import { inboxTasks, todayTasks, upcomingTasks, completedTasks } from './tasksDomController.js';
import project from './projects.js';

const body = document.querySelector('body');

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
};

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
};

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
};

function newProjectBtn(_project) {
    const btn = document.createElement('button');
    btn.classList.add('tab');
    btn.classList.add('project-item');
    btn.dataset.index = _project.index;

    const btnContent = document.createElement('div');
    btnContent.classList.add('project-info');
    const hash = document.createElement('img');
    hash.classList.add('hash');

    switch (_project.project.color) {
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
    p.textContent = _project.project.name;

    const taskCount = document.createElement('p');

    btnContent.append(hash, p, taskCount);

    const optionsBtn = document.createElement('button');
    const optionsIcon = document.createElement('img');
    optionsBtn.classList.add('project-options');
    optionsIcon.classList.add('options-icon');
    optionsIcon.src = dots;

    optionsBtn.append(optionsIcon);

    btn.append(btnContent, optionsBtn);
    return btn;
};

function projectOptionsMenu(projectTab) {
    const menu = document.createElement('div');
    menu.classList.add('options-menu');
    
    const edit = document.createElement('button');
    edit.classList.add('menu-option', 'edit-tab');
    edit.textContent = 'Edit';

    const remove = document.createElement('button');
    remove.classList.add('menu-option', 'remove-tab');
    remove.textContent = 'Remove';

    menu.append(edit, remove);
    projectTab.append(menu);

    const index = projectTab.closest('.project-item').dataset.index;
    
    menu.addEventListener('click', (e) => {
        if (e.target.closest('.edit-tab')) {
            openEditModal(index);
            menu.remove();
        } else if (e.target.closest('.remove-tab')) {
            openRemoveModal(index);
            menu.remove();
        };
    })

    window.addEventListener('mouseup', (e) => {
        if (!e.target.closest('.options-menu')) {
            menu.remove();
            window.removeEventListener('mouseup', this);
        }
    });
};

function openEditModal(index) {
    const projectInfo = getStorage('projectArray')[index];

    const modal = document.createElement('div');
    modal.setAttribute('popover', true);
    modal.classList.add('modal', 'edit-modal');

    const form = document.createElement('form');
    form.setAttribute('id', 'editProject-form');
    const h1 = document.createElement('h1');
    h1.textContent = 'Edit project';

    const formDiv = document.createElement('div');
    formDiv.classList.add('form-div');

    const labelName = document.createElement('label');
    labelName.setAttribute('for', 'project-name');
    labelName.textContent = 'Name';

    const inputName = document.createElement('input');
    inputName.setAttribute('id', 'project-name');
    inputName.setAttribute('maxlength', '20');
    inputName.setAttribute('autocomplete', 'off');
    inputName.setAttribute('required', 'true');
    inputName.value = projectInfo.name;

    const labelColor = document.createElement('label');
    labelColor.setAttribute('for', 'project-color');
    labelColor.textContent = 'Color';

    const selectColor = document.createElement('select');
    selectColor.setAttribute('id', 'project-color');

    const colors = [
        ['red', 'Red'],
        ['limeGreen', 'Lime Green'],
        ['skyBlue', 'Sky Blue'],
        ['charCoal', 'Charcoal'],
        ['magenta', 'Magenta']
    ]

    for(let i = 0; i < 5; i++) {
        const color = document.createElement('option');
        color.value = colors[i][0];
        color.textContent = colors[i][1];

        if(color.value === projectInfo.color) {
            color.setAttribute('selected', '');
        }

        selectColor.append(color);
    }

    const labelFavorite = document.createElement('label');
    labelFavorite.classList.add('project-switch');

    const inputFavorite = document.createElement('input');
    inputFavorite.setAttribute('type', 'checkbox');
    inputFavorite.setAttribute('class', 'checkbox');
    inputFavorite.setAttribute('id', 'project-fav');
    if (projectInfo.favorite === true) inputFavorite.checked = true;

    // inputFavorite.addEventListener('change', () => {
    //     inputFavorite.value === 'false' ? inputFavorite.value = 'true' : inputFavorite.value = 'false';
    //     console.log(inputFavorite.value)
    // })

    const spanFavorite = document.createElement('span');
    spanFavorite.setAttribute('class', 'slider round');

    const favText = document.createElement('p');
    favText.textContent = 'Add to favorites';
    
    labelFavorite.append(inputFavorite, spanFavorite, favText);

    formDiv.append(labelName, inputName, labelColor, selectColor, labelFavorite);

    const formButtons = document.createElement('div');
    formButtons.classList.add('form-buttons');
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('class', 'close-modal');
    cancelBtn.setAttribute('id', 'close-project');
    cancelBtn.textContent = 'Cancel';
    const saveBtn = document.createElement('button');
    saveBtn.setAttribute('form', 'editProject-form');
    saveBtn.setAttribute('class', 'submit-modal');
    saveBtn.setAttribute('id', 'submit-project');
    saveBtn.disabled = false
    saveBtn.textContent = 'Save';
    
    formButtons.append(cancelBtn, saveBtn);
    form.append(formDiv, formButtons);
    modal.append(form);
    body.append(modal);
    modal.showPopover();

    inputName.addEventListener('keyup', () => {
        if (inputName.value === '') saveBtn.disabled = true;
        else saveBtn.disabled = false;
    });

    formButtons.addEventListener('click', (e) => {
        if (e.target.closest('.close-modal')) {
            modal.remove();
        } else if (e.target.closest('.submit-modal')) {
            if (inputName.value !== '') {
                e.preventDefault();
                project.edit(index, [['name', inputName.value], ['color', selectColor.value], ['favorite', inputFavorite.checked]]);
                updateProjectList();
                updateFavoriteList();
                handleSelectedTab();
                modal.remove();
            }
        }
    })
};

function openRemoveModal(index) {
    console.log('test')
    const projectInfo = getStorage('projectArray')[index];

    const modal = document.createElement('div');
    modal.setAttribute('popover', true);
    modal.classList.add('modal', 'remove-modal');

    const h3 = document.createElement('h3');
    h3.textContent = `Are you sure you want to remove "${projectInfo.name}" project?`;

    const formButtons = document.createElement('div');
    formButtons.classList.add('form-buttons');
    const cancelBtn = document.createElement('button');
    cancelBtn.setAttribute('type', 'button');
    cancelBtn.setAttribute('class', 'close-modal');
    cancelBtn.setAttribute('id', 'close-project');
    cancelBtn.textContent = 'Cancel';
    const saveBtn = document.createElement('button');
    saveBtn.setAttribute('form', 'editProject-form');
    saveBtn.setAttribute('class', 'submit-modal');
    saveBtn.setAttribute('id', 'submit-project');
    saveBtn.textContent = 'Remove';

    formButtons.append(cancelBtn, saveBtn);

    modal.append(h3, formButtons);
    body.append(modal);
    modal.showPopover();

    formButtons.addEventListener('click', (e) => {
        if (e.target.closest('.close-modal')) {
            modal.remove();
        } else if (e.target.closest('.submit-modal')) {
            e.preventDefault();
            project.remove(index);
            updateProjectList();
            updateFavoriteList();
            handleSelectedTab();
            modal.remove();
        }
    })
};

// function for handling selected tabs
function handleSelectedTab() {
    const projectBtns = document.querySelectorAll('.tab');
    const filterBtns = document.querySelectorAll('.tab');

    filterBtns.forEach(b => b.classList.remove('selected'));
    projectBtns.forEach(b => b.classList.remove('selected'));
}

export { updateTaskCounter, updateProjectList, updateFavoriteList, projectOptionsMenu, handleSelectedTab };