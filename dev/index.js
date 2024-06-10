/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index-style.css":
/*!*****************************!*\
  !*** ./src/index-style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/projectDom-style.css":
/*!*****************************************!*\
  !*** ./src/styles/projectDom-style.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/sidebar-style.css":
/*!**************************************!*\
  !*** ./src/styles/sidebar-style.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/taskDom-style.css":
/*!**************************************!*\
  !*** ./src/styles/taskDom-style.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-style.css */ "./src/index-style.css");
/* harmony import */ var _modules_toggleSidebar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/toggleSidebar.js */ "./src/modules/toggleSidebar.js");
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/projects.js */ "./src/modules/projects.js");
/* harmony import */ var _modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/projectsDomController.js */ "./src/modules/projectsDomController.js");
/* harmony import */ var _modules_locationDropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/locationDropdown.js */ "./src/modules/locationDropdown.js");
/* harmony import */ var _modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tasksDomController.js */ "./src/modules/tasksDomController.js");
/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/localStorage.js */ "./src/modules/localStorage.js");









const main = document.querySelector('main');
const section = document.querySelector('section');
const sidebar = document.querySelector('.sidebar');


// Start with Inbox model
(0,_modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__.currentTab)();
(0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.updateTaskCounter)()
;(0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.updateProjectList)();
(0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.updateFavoriteList)();


// event listener for toggling sidebar
const toggleSidebar = document.getElementById('toggle-sidebar');
toggleSidebar.addEventListener('click', (e) => {
    if (sidebar.classList.contains('collapsed')) {
        (0,_modules_toggleSidebar_js__WEBPACK_IMPORTED_MODULE_1__.enableSidebar)();
    } else {
        (0,_modules_toggleSidebar_js__WEBPACK_IMPORTED_MODULE_1__.collapseSidebar)();
    }
});

// event listeners for adding tasks
const newTaskModal = document.getElementById('newTask-modal');
const taskForm = document.getElementById('newTask-form');
const formDiv = document.querySelector('.form-div');
const formBtns = document.querySelector('.form-buttons');
const categoryDiv = document.querySelector('.categories');
const submitTaskBtn = document.getElementById('submit-task');

const addTask = document.getElementById('add-task');
addTask.addEventListener('click', () => {
    newTaskModal.showModal();
    console.log('test')

    formDiv.append((0,_modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__.newDateInput)());

    const locationDropdown = (0,_modules_locationDropdown_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
    locationDropdown.classList.add('form');
    formBtns.insertBefore(locationDropdown, formBtns.firstChild);

    const taskNameInput = document.getElementById('task-name');
    taskNameInput.addEventListener('keyup', () => {
        if (taskNameInput.value === '') submitTaskBtn.disabled = true;
        else submitTaskBtn.disabled = false;
    });


    submitTaskBtn.addEventListener('click', submitTask);
});

const closeTaskModal = document.getElementById('close-task');
closeTaskModal.addEventListener('click', (e) => {
        const date = newTaskModal.querySelector('#date');
        const location = newTaskModal.querySelector('.js-task-location');
        location.remove();
        date.remove();
        newTaskModal.close();
        formBtns.removeChild(formBtns.firstChild);
        submitTaskBtn.removeEventListener('click', submitTask);
    }
);

function submitTask(e) {
    e.preventDefault();

    const taskLocationInput = document.querySelector('.js-task-location');
    const taskNameInput = document.getElementById('task-name');
    const taskDescInput = document.getElementById('task-desc');
    const taskDateInput = document.getElementById('date');

    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].add(taskNameInput.value, taskDescInput.value, taskDateInput.value, false, taskLocationInput.value);

    (0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.handleSelectedTab)();
    const taskLocationTab = categoryDiv.querySelector(`[data-index='${taskLocationInput.value}']`);
    taskLocationTab.classList.add('selected');

    (0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.updateTaskCounter)()
    newTaskModal.close();
    taskForm.reset();
    submitTaskBtn.disabled = true;
    const date = newTaskModal.querySelector('#date');
    const location = newTaskModal.querySelector('.js-task-location');
    location.remove();
    date.remove();
    (0,_modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__.currentTab)();
}

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
    _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__["default"].add(projectNameInput.value, projectColorInput.value, checkbox.value);
    (0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.updateProjectList)();
    (0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.updateFavoriteList)();

    (0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.handleSelectedTab)();
    const taskLocationTab = categoryDiv.querySelector(`[data-index='${(0,_modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.getStorage)('projectArray').length - 1}']`);
    taskLocationTab.classList.add('selected');

    newProjectModal.close();
    checkbox.value = 'false';
    projectForm.reset();
    (0,_modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__.currentTab)();
});


// event listener for switching filters
const filters = categoryDiv.querySelector('.categ-filters');
filters.addEventListener('click', (e) => {
    (0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.handleSelectedTab)();
    e.target.closest('button').classList.add('selected');
    (0,_modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__.currentTab)();
})


// event listener for switching projects
const categories = document.querySelector('.categories');
categories.addEventListener('click', handleProject);

// for handling project clicks
function handleProject(e) {
    if (e.target.closest('.project-options')) {
        const projectOptions = e.target.closest('.project-options');
        (0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.projectOptionsMenu)(projectOptions);
    } else if (e.target.closest('.project-item')) {
        (0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.handleSelectedTab)();
        e.target.closest('.project-item').classList.add('selected');
        (0,_modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__.currentTab)();
    }
}



/***/ }),

/***/ "./src/modules/localStorage.js":
/*!*************************************!*\
  !*** ./src/modules/localStorage.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getStorage: () => (/* binding */ getStorage),
/* harmony export */   setStorage: () => (/* binding */ setStorage)
/* harmony export */ });
// TASKS & PROJECTS
function setStorage(item, name) {
    localStorage.setItem(name, JSON.stringify(item));
};

function getStorage(name) {
    let saved = localStorage.getItem(name);
    if (!saved) return false;

    saved = JSON.parse(saved);
    saved = Object.values(saved);

    saved.forEach(element => {
        if ('date' in element) {
            element.date = new Date(element.date);
            element.date.setHours(0,0,0,0);
            element.date = element.date.getTime();
        }
    });

    return saved;
};



/***/ }),

/***/ "./src/modules/locationDropdown.js":
/*!*****************************************!*\
  !*** ./src/modules/locationDropdown.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ updateLocationDropdown)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");



function updateLocationDropdown() {
    // remove current dropdown
    let taskItemLocationList = document.createElement('select');
    taskItemLocationList.setAttribute('id', 'location');
    taskItemLocationList.classList.add('js-task-location');

    const taskItemLocationInboxOption = document.createElement('option');
    taskItemLocationInboxOption.value = 'inbox';
    taskItemLocationInboxOption.textContent = 'Inbox';

    const taskItemLocationDisabledOption = document.createElement('option');
    taskItemLocationDisabledOption.value = '';
    taskItemLocationDisabledOption.textContent = '-- My projects --';
    taskItemLocationDisabledOption.disabled = 'true';

    taskItemLocationList.append(taskItemLocationInboxOption, taskItemLocationDisabledOption);

    // create new options
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('projectArray')) {
        const projects = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('projectArray');
        projects.forEach((project, index) => {
            const projectSelect = document.createElement('option');
            projectSelect.textContent = project.name;
            projectSelect.value = index;
            projectSelect.classList.add('project');

            taskItemLocationList.append(projectSelect);
        })
    }

    return taskItemLocationList;
};

/***/ }),

/***/ "./src/modules/projects.js":
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");


// project objects
const project = () => {
    let projectArray;
    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getStorage)('projectArray') === false) {
        projectArray = [];
    } else {
        projectArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getStorage)('projectArray');
    }

    const add = (name, color, fav) => {
        const favorite = (fav === 'true');
        projectArray.push({ name, color, favorite });
        return (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(projectArray, 'projectArray');
    }

    const edit = (index, newInfo) => {
        newInfo.forEach(property => {
            projectArray[index][property[0]] = property[1];
        })

        return (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(projectArray, 'projectArray');
    };

    const remove = (projectIndex) => {
        projectArray.splice(projectIndex, 1);
        return (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(projectArray, 'projectArray');
    }

    return { add, edit, remove };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project());

/***/ }),

/***/ "./src/modules/projectsDomController.js":
/*!**********************************************!*\
  !*** ./src/modules/projectsDomController.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleSelectedTab: () => (/* binding */ handleSelectedTab),
/* harmony export */   projectOptionsMenu: () => (/* binding */ projectOptionsMenu),
/* harmony export */   updateFavoriteList: () => (/* binding */ updateFavoriteList),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList),
/* harmony export */   updateTaskCounter: () => (/* binding */ updateTaskCounter)
/* harmony export */ });
/* harmony import */ var _styles_projectDom_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/projectDom-style.css */ "./src/styles/projectDom-style.css");
/* harmony import */ var _assets_icons_hashtag_blue_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/hashtag-blue.svg */ "./src/assets/icons/hashtag-blue.svg");
/* harmony import */ var _assets_icons_hashtag_red_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/hashtag-red.svg */ "./src/assets/icons/hashtag-red.svg");
/* harmony import */ var _assets_icons_hashtag_coal_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/hashtag-coal.svg */ "./src/assets/icons/hashtag-coal.svg");
/* harmony import */ var _assets_icons_hashtag_lime_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/hashtag-lime.svg */ "./src/assets/icons/hashtag-lime.svg");
/* harmony import */ var _assets_icons_hashtag_mag_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/hashtag-mag.svg */ "./src/assets/icons/hashtag-mag.svg");
/* harmony import */ var _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/dots.svg */ "./src/assets/icons/dots.svg");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");
/* harmony import */ var _tasksDomController_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tasksDomController.js */ "./src/modules/tasksDomController.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects.js */ "./src/modules/projects.js");











const body = document.querySelector('body');

function updateTaskCounter() {
    const categories = document.querySelector('.categories');
    const tabs = categories.querySelectorAll('.tab');

    tabs.forEach(tab => {
        if (tab.dataset.index === 'inbox') {
            const counter = document.getElementById('inbox');
            counter.textContent = (0,_tasksDomController_js__WEBPACK_IMPORTED_MODULE_8__.inboxTasks)().length;
        } else if (tab.dataset.index === 'today') {
            const counter = document.getElementById('today');
            counter.textContent = (0,_tasksDomController_js__WEBPACK_IMPORTED_MODULE_8__.todayTasks)().length;
        } else if (tab.dataset.index === 'upcoming') {
            const counter = document.getElementById('upcoming');
            counter.textContent = (0,_tasksDomController_js__WEBPACK_IMPORTED_MODULE_8__.upcomingTasks)().length;
        } else if (tab.dataset.index === 'completed') {
            const counter = document.getElementById('completed');
            counter.textContent = (0,_tasksDomController_js__WEBPACK_IMPORTED_MODULE_8__.completedTasks)().length;
        }
    })
};

function updateProjectList() {
    const list = document.querySelector('.my-projects');
    list.textContent = '';

    let projectArray = [];
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.getStorage)('projectArray')) {
        projectArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.getStorage)('projectArray');
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
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.getStorage)('projectArray')) {
        favProjects = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.getStorage)('projectArray');
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
            hash.src = _assets_icons_hashtag_blue_svg__WEBPACK_IMPORTED_MODULE_1__;
            break;
        case 'red':
            hash.src = _assets_icons_hashtag_red_svg__WEBPACK_IMPORTED_MODULE_2__;
            break;
        case 'charCoal':
            hash.src = _assets_icons_hashtag_coal_svg__WEBPACK_IMPORTED_MODULE_3__;
            break;
        case 'magenta':
            hash.src = _assets_icons_hashtag_mag_svg__WEBPACK_IMPORTED_MODULE_5__;
            break;
        case 'limeGreen':
            hash.src = _assets_icons_hashtag_lime_svg__WEBPACK_IMPORTED_MODULE_4__;
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
    optionsIcon.src = _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_6__;

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
    const projectInfo = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.getStorage)('projectArray')[index];

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
                _projects_js__WEBPACK_IMPORTED_MODULE_9__["default"].edit(index, [['name', inputName.value], ['color', selectColor.value], ['favorite', inputFavorite.checked]]);
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
    const projectInfo = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_7__.getStorage)('projectArray')[index];

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
            _projects_js__WEBPACK_IMPORTED_MODULE_9__["default"].remove(index);
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



/***/ }),

/***/ "./src/modules/tasks.js":
/*!******************************!*\
  !*** ./src/modules/tasks.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");


// task objects
const task = () => {
    let taskArray;
    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getStorage)('taskArray') === false) {
        taskArray = [];
    } else {
        taskArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getStorage)('taskArray');
    };

    const add = (name, desc, _date, completed, location) => {
        const date = !!_date ? new Date(_date) : '';
        taskArray.push({ name, desc, date, completed, location });
        return (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(taskArray, 'taskArray');
    };

    const edit = (index, newInfo) => {
        newInfo.forEach(property => {
            if (property[0] === 'date') {
                !!property[1] ? new Date(newInfo[2][1]) : '';
            };

            taskArray[index][property[0]] = property[1];
        })

        return (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(taskArray, 'taskArray');
    };

    const remove = (taskIndex) => {
        taskArray.splice(taskIndex, 1);
        return (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(taskArray, 'taskArray');
    };

    return { add, edit, remove };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task());

/***/ }),

/***/ "./src/modules/tasksDomController.js":
/*!*******************************************!*\
  !*** ./src/modules/tasksDomController.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   completedTasks: () => (/* binding */ completedTasks),
/* harmony export */   currentTab: () => (/* binding */ currentTab),
/* harmony export */   inboxTab: () => (/* binding */ inboxTab),
/* harmony export */   inboxTasks: () => (/* binding */ inboxTasks),
/* harmony export */   newDateInput: () => (/* binding */ newDateInput),
/* harmony export */   projectTab: () => (/* binding */ projectTab),
/* harmony export */   todayTab: () => (/* binding */ todayTab),
/* harmony export */   todayTasks: () => (/* binding */ todayTasks),
/* harmony export */   upcomingTab: () => (/* binding */ upcomingTab),
/* harmony export */   upcomingTasks: () => (/* binding */ upcomingTasks)
/* harmony export */ });
/* harmony import */ var _styles_taskDom_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/taskDom-style.css */ "./src/styles/taskDom-style.css");
/* harmony import */ var _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/circle.svg */ "./src/assets/icons/circle.svg");
/* harmony import */ var _assets_icons_circle_check_green_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/circle-check-green.svg */ "./src/assets/icons/circle-check-green.svg");
/* harmony import */ var _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/edit.svg */ "./src/assets/icons/edit.svg");
/* harmony import */ var _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/trash.svg */ "./src/assets/icons/trash.svg");
/* harmony import */ var _assets_icons_cancel_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/cancel.svg */ "./src/assets/icons/cancel.svg");
/* harmony import */ var _assets_icons_save_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/save.svg */ "./src/assets/icons/save.svg");
/* harmony import */ var _assets_icons_save_disabled_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/save-disabled.svg */ "./src/assets/icons/save-disabled.svg");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");
/* harmony import */ var _tasks_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _projectsDomController_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projectsDomController.js */ "./src/modules/projectsDomController.js");
/* harmony import */ var _locationDropdown_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locationDropdown.js */ "./src/modules/locationDropdown.js");














const body = document.querySelector('body');
const main = document.querySelector('main');
let taskList = document.querySelector('#task-list');


function inboxTasks() {
    let taskArray = [];
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')) {
        taskArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray');
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
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')) {
        taskArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray');
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
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')) {
        taskArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray');
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
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')) {
        taskArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray');
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
        taskCompletedIcon.src = _assets_icons_circle_check_green_svg__WEBPACK_IMPORTED_MODULE_2__;
        taskList.append(taskItem);
    })

    section.append(sectionTitle, taskList);
    main.append(section);
}

function projectTab(index) {
    main.textContent = '';

    const section = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const taskList = document.createElement('ul');

    sectionTitle.classList.add('sectionTitle');
    taskList.textContent = '';

    const project = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('projectArray')[index];

    sectionTitle.classList.add('sectionTitle');
    sectionTitle.textContent = project.name;
    section.setAttribute('id', project.name);
    section.dataset.index = index;
    taskList.classList.add('task-list');

    let taskArray = [];

    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')) taskArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')

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
        let completed = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')[e.target.closest('.task-item').dataset.index]['completed'];
        _tasks_js__WEBPACK_IMPORTED_MODULE_9__["default"].edit(e.target.closest('.task-item').dataset.index, [['completed', !completed]]);
        currentTab();
        (0,_projectsDomController_js__WEBPACK_IMPORTED_MODULE_10__.updateTaskCounter)();
    } else if (e.target.closest('.edit-btn')) {
        editBtn.style.display = 'none';
        removeBtn.style.visibility = 'visible';

        const cancelBtn = newButtonItem({ 'btnClass': 'cancel-btn' }, { 'imgClass': 'cancel-icon' }, { 'imgSrc': _assets_icons_cancel_svg__WEBPACK_IMPORTED_MODULE_5__ });
        const saveBtn = newButtonItem({ 'btnClass': 'save-btn' }, { 'imgClass': 'save-icon' }, { 'imgSrc': _assets_icons_save_svg__WEBPACK_IMPORTED_MODULE_6__ });

        editBtn.insertAdjacentElement('afterend', cancelBtn);
        cancelBtn.insertAdjacentElement('afterend', saveBtn);

        const dateInput = newDateInput();

        const taskItemLocationDropdown = (0,_locationDropdown_js__WEBPACK_IMPORTED_MODULE_11__["default"])();
        const taskItemLocationIndex = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')[e.target.closest('.task-item').dataset.index]['location'];
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
                        saveBtn.childNodes[0].src = _assets_icons_save_disabled_svg__WEBPACK_IMPORTED_MODULE_7__;
                    } else {
                        saveBtn.removeAttribute('disabled');
                        saveBtn.childNodes[0].src = _assets_icons_save_svg__WEBPACK_IMPORTED_MODULE_6__;
                    };
                })
            } else if(node.getAttribute('id') === 'date') {
                if (node.textContent) {
                    dateInput.value = getFullDateForInput(new Date((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')[e.target.closest('.task-item').dataset.index]['date']));
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

                    _tasks_js__WEBPACK_IMPORTED_MODULE_9__["default"].edit(taskItem.dataset.index, updatedInfo);
                    body.removeEventListener('mouseup', disableEditable);
                    currentTab();
                    (0,_projectsDomController_js__WEBPACK_IMPORTED_MODULE_10__.updateTaskCounter)();

                } else if (e.target.closest('.cancel-btn')) {

                    body.removeEventListener('mouseup', disableEditable);
                    currentTab();

                } else if (e.target.closest('.remove-btn')) {
                    _tasks_js__WEBPACK_IMPORTED_MODULE_9__["default"].remove(e.target.closest('.task-item').dataset.index);
                    body.removeEventListener('mouseup', disableEditable);
                    currentTab();
                    (0,_projectsDomController_js__WEBPACK_IMPORTED_MODULE_10__.updateTaskCounter)();
                }

            } else {
                body.removeEventListener('mouseup', disableEditable);
                currentTab();
            }
        };

    } else if (e.target.closest('.remove-btn')) {
        _tasks_js__WEBPACK_IMPORTED_MODULE_9__["default"].remove(e.target.closest('.task-item').dataset.index);
        currentTab();
        (0,_projectsDomController_js__WEBPACK_IMPORTED_MODULE_10__.updateTaskCounter)();
    }
}

function newTaskItem(taskObj) {
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.dataset.index = taskObj.index;

    const taskCompleteBtn = newButtonItem({ 'btnClass': 'complete-btn' }, {'imgClass': 'check-icon' }, {'imgSrc': _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__ });
    const taskEditBtn = newButtonItem({ 'btnClass': 'edit-btn' }, { 'imgClass': 'edit-icon' }, { 'imgSrc': _assets_icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__ });
    const taskRemoveBtn = newButtonItem({ 'btnClass': 'remove-btn' }, { 'imgClass': 'trash-icon' }, { 'imgSrc': _assets_icons_trash_svg__WEBPACK_IMPORTED_MODULE_4__ });

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
        const taskLocation = taskObj.task.location !== 'inbox' ? (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('projectArray')[taskObj.task.location]['name'] : 'inbox';
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



/***/ }),

/***/ "./src/modules/toggleSidebar.js":
/*!**************************************!*\
  !*** ./src/modules/toggleSidebar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collapseSidebar: () => (/* binding */ collapseSidebar),
/* harmony export */   enableSidebar: () => (/* binding */ enableSidebar)
/* harmony export */ });
/* harmony import */ var _styles_sidebar_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/sidebar-style.css */ "./src/styles/sidebar-style.css");


const sidebar = document.querySelector('.sidebar');
const toggleSidebarBtn = document.getElementById('toggle-sidebar');


function collapseSidebar() {
    sidebar.classList.remove('visible');
    sidebar.classList.add('collapsed');
    toggleSidebarBtn.classList.add('offset');
}

function enableSidebar() {
    sidebar.classList.remove('collapsed');
    sidebar.classList.add('visible');
    toggleSidebarBtn.classList.remove('offset');
}



/***/ }),

/***/ "./src/assets/icons/cancel.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/cancel.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cancel.svg";

/***/ }),

/***/ "./src/assets/icons/circle-check-green.svg":
/*!*************************************************!*\
  !*** ./src/assets/icons/circle-check-green.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "circle-check-green.svg";

/***/ }),

/***/ "./src/assets/icons/circle.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/circle.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "circle.svg";

/***/ }),

/***/ "./src/assets/icons/dots.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/dots.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dots.svg";

/***/ }),

/***/ "./src/assets/icons/edit.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/edit.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "edit.svg";

/***/ }),

/***/ "./src/assets/icons/hashtag-blue.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/hashtag-blue.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hashtag-blue.svg";

/***/ }),

/***/ "./src/assets/icons/hashtag-coal.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/hashtag-coal.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hashtag-coal.svg";

/***/ }),

/***/ "./src/assets/icons/hashtag-lime.svg":
/*!*******************************************!*\
  !*** ./src/assets/icons/hashtag-lime.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hashtag-lime.svg";

/***/ }),

/***/ "./src/assets/icons/hashtag-mag.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/hashtag-mag.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hashtag-mag.svg";

/***/ }),

/***/ "./src/assets/icons/hashtag-red.svg":
/*!******************************************!*\
  !*** ./src/assets/icons/hashtag-red.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "hashtag-red.svg";

/***/ }),

/***/ "./src/assets/icons/save-disabled.svg":
/*!********************************************!*\
  !*** ./src/assets/icons/save-disabled.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "save-disabled.svg";

/***/ }),

/***/ "./src/assets/icons/save.svg":
/*!***********************************!*\
  !*** ./src/assets/icons/save.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "save.svg";

/***/ }),

/***/ "./src/assets/icons/trash.svg":
/*!************************************!*\
  !*** ./src/assets/icons/trash.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "trash.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0,
/******/ 			"styles": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["styles"], () => (__webpack_require__("./src/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDaUQ7QUFDdEM7QUFDTTtBQUN5RztBQUNsRjtBQUNRO0FBQ3BCOztBQUV2RDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsMEVBQVU7QUFDVixvRkFBaUI7QUFDakIscUZBQWlCO0FBQ2pCLHFGQUFrQjs7O0FBR2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3RUFBYTtBQUNyQixNQUFNO0FBQ04sUUFBUSwwRUFBZTtBQUN2QjtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRFQUFZOztBQUUvQiw2QkFBNkIsd0VBQXNCO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUkseURBQUk7O0FBRVIsSUFBSSxvRkFBaUI7QUFDckIsc0VBQXNFLHdCQUF3QjtBQUM5Rjs7QUFFQSxJQUFJLG9GQUFpQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQVU7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw0REFBTztBQUNYLElBQUksb0ZBQWlCO0FBQ3JCLElBQUkscUZBQWtCOztBQUV0QixJQUFJLG9GQUFpQjtBQUNyQixzRUFBc0Usb0VBQVUsNEJBQTRCO0FBQzVHOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUksMEVBQVU7QUFDZCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLG9GQUFpQjtBQUNyQjtBQUNBLElBQUksMEVBQVU7QUFDZCxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFGQUFrQjtBQUMxQixNQUFNO0FBQ04sUUFBUSxvRkFBaUI7QUFDekI7QUFDQSxRQUFRLDBFQUFVO0FBQ2xCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdktBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQjJEOzs7QUFHNUM7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxRQUFRLDREQUFVO0FBQ2xCLHlCQUF5Qiw0REFBVTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xDd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVU7QUFDbEI7QUFDQSxNQUFNO0FBQ04sdUJBQXVCLHlEQUFVO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25ELGVBQWUseURBQVU7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVCxlQUFlLHlEQUFVO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHlEQUFVO0FBQ3pCOztBQUVBLGFBQWE7QUFDYjs7QUFFQSxpRUFBZSxTQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakNnQjtBQUNtQjtBQUNGO0FBQ0U7QUFDQTtBQUNGO0FBQ2I7QUFDRztBQUNpRDtBQUM1RDs7QUFFcEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrRUFBVTtBQUM1QyxVQUFVO0FBQ1Y7QUFDQSxrQ0FBa0Msa0VBQVU7QUFDNUMsVUFBVTtBQUNWO0FBQ0Esa0NBQWtDLHFFQUFhO0FBQy9DLFVBQVU7QUFDVjtBQUNBLGtDQUFrQyxzRUFBYztBQUNoRDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDREQUFVO0FBQ2xCLHVCQUF1Qiw0REFBVTtBQUNqQywrREFBK0QsZ0JBQWdCO0FBQy9FOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDREQUFVO0FBQ2xCLHNCQUFzQiw0REFBVTtBQUNoQztBQUNBLHdDQUF3QyxnQkFBZ0I7QUFDeEQsdUJBQXVCLFNBQVM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQVc7QUFDbEM7QUFDQTtBQUNBLHVCQUF1QiwwREFBVTtBQUNqQztBQUNBO0FBQ0EsdUJBQXVCLDJEQUFXO0FBQ2xDO0FBQ0E7QUFDQSx1QkFBdUIsMERBQVU7QUFDakM7QUFDQTtBQUNBLHVCQUF1QiwyREFBVztBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixtREFBSTs7QUFFMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx3QkFBd0IsNERBQVU7O0FBRWxDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFROztBQUVSO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLGdCQUFnQixvREFBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHdCQUF3Qiw0REFBVTs7QUFFbEM7QUFDQTtBQUNBOztBQUVBO0FBQ0EseURBQXlELGlCQUFpQjs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxZQUFZLG9EQUFPO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pVd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVU7QUFDbEI7QUFDQSxNQUFNO0FBQ04sb0JBQW9CLHlEQUFVO0FBQzlCOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsdUNBQXVDO0FBQ2hFLGVBQWUseURBQVU7QUFDekI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFNBQVM7O0FBRVQsZUFBZSx5REFBVTtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx5REFBVTtBQUN6Qjs7QUFFQSxhQUFhO0FBQ2I7O0FBRUEsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ2dCO0FBQ1c7QUFDaUI7QUFDckI7QUFDRTtBQUNFO0FBQ0o7QUFDaUI7QUFDZDtBQUNqQjtBQUNpQztBQUNKOzs7QUFHM0Q7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsUUFBUSw0REFBVTtBQUNsQixvQkFBb0IsNERBQVU7QUFDOUI7QUFDQSxpREFBaUQsYUFBYTtBQUM5RCxtQ0FBbUMsTUFBTTtBQUN6QztBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQVEsNERBQVU7QUFDbEIsb0JBQW9CLDREQUFVO0FBQzlCO0FBQ0EsaURBQWlELGFBQWE7QUFDOUQsbUNBQW1DLE1BQU07QUFDekM7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0EsUUFBUSw0REFBVTtBQUNsQixvQkFBb0IsNERBQVU7QUFDOUI7QUFDQSxxQ0FBcUMsYUFBYTtBQUNsRCx1QkFBdUIsTUFBTTtBQUM3QjtBQUNBLE1BQU07QUFDTjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLDREQUFVO0FBQ2xCLG9CQUFvQiw0REFBVTtBQUM5QjtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xELHVCQUF1QixNQUFNO0FBQzdCO0FBQ0EsTUFBTTtBQUNOOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpRUFBVztBQUMzQztBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsb0JBQW9CLDREQUFVOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFFBQVEsNERBQVUsMkJBQTJCLDREQUFVOztBQUV2RDtBQUNBLGlDQUFpQyxhQUFhO0FBQzlDLG1CQUFtQixNQUFNOztBQUV6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0REFBNEQsNkNBQTZDO0FBQ3pHO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3Qiw0REFBVTtBQUNsQyxRQUFRLGlEQUFJO0FBQ1o7QUFDQSxRQUFRLDZFQUFpQjtBQUN6QixNQUFNO0FBQ047QUFDQTs7QUFFQSwwQ0FBMEMsMEJBQTBCLElBQUksMkJBQTJCLElBQUksVUFBVSxxREFBTSxFQUFFO0FBQ3pILHdDQUF3Qyx3QkFBd0IsSUFBSSx5QkFBeUIsSUFBSSxVQUFVLG1EQUFJLEVBQUU7O0FBRWpIO0FBQ0E7O0FBRUE7O0FBRUEseUNBQXlDLGlFQUFzQjtBQUMvRCxzQ0FBc0MsNERBQVU7QUFDaEQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCw0REFBWTtBQUNoRSxzQkFBc0I7QUFDdEI7QUFDQSxvREFBb0QsbURBQUk7QUFDeEQ7QUFDQSxpQkFBaUI7QUFDakIsY0FBYztBQUNkO0FBQ0EsbUVBQW1FLDREQUFVO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQixvQkFBb0IsaURBQUk7QUFDeEI7QUFDQTtBQUNBLG9CQUFvQiw2RUFBaUI7O0FBRXJDLGtCQUFrQjs7QUFFbEI7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEIsb0JBQW9CLGlEQUFJO0FBQ3hCO0FBQ0E7QUFDQSxvQkFBb0IsNkVBQWlCO0FBQ3JDOztBQUVBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNO0FBQ04sUUFBUSxpREFBSTtBQUNaO0FBQ0EsUUFBUSw2RUFBaUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0Q0FBNEMsNEJBQTRCLEdBQUcsMEJBQTBCLEdBQUcsVUFBVSxxREFBTSxFQUFFO0FBQzFILHdDQUF3Qyx3QkFBd0IsSUFBSSx5QkFBeUIsSUFBSSxVQUFVLG1EQUFJLEVBQUU7QUFDakgsMENBQTBDLDBCQUEwQixJQUFJLDBCQUEwQixJQUFJLFVBQVUsb0RBQUssRUFBRTs7QUFFdkg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUUsNERBQVU7QUFDM0U7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsbUJBQW1CLE9BQU87QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0UsaUJBQWlCO0FBQ3JGO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6ZHFDOztBQUVyQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9wcm9qZWN0RG9tLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3NpZGViYXItc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvdGFza0RvbS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2NhdGlvbkRyb3Bkb3duLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzRG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrc0RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJy4vaW5kZXgtc3R5bGUuY3NzJztcbmltcG9ydCB7IGNvbGxhcHNlU2lkZWJhciwgZW5hYmxlU2lkZWJhciB9IGZyb20gJy4vbW9kdWxlcy90b2dnbGVTaWRlYmFyLmpzJztcbmltcG9ydCB0YXNrIGZyb20gJy4vbW9kdWxlcy90YXNrcy5qcyc7XG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMuanMnO1xuaW1wb3J0IHsgdXBkYXRlVGFza0NvdW50ZXIsIHVwZGF0ZVByb2plY3RMaXN0LCB1cGRhdGVGYXZvcml0ZUxpc3QsIHByb2plY3RPcHRpb25zTWVudSwgaGFuZGxlU2VsZWN0ZWRUYWIgfSBmcm9tICcuL21vZHVsZXMvcHJvamVjdHNEb21Db250cm9sbGVyLmpzJztcbmltcG9ydCB1cGRhdGVMb2NhdGlvbkRyb3Bkb3duIGZyb20gJy4vbW9kdWxlcy9sb2NhdGlvbkRyb3Bkb3duLmpzJztcbmltcG9ydCB7IGN1cnJlbnRUYWIsIG5ld0RhdGVJbnB1dCB9IGZyb20gJy4vbW9kdWxlcy90YXNrc0RvbUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJy4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuXG5cbi8vIFN0YXJ0IHdpdGggSW5ib3ggbW9kZWxcbmN1cnJlbnRUYWIoKTtcbnVwZGF0ZVRhc2tDb3VudGVyKClcbnVwZGF0ZVByb2plY3RMaXN0KCk7XG51cGRhdGVGYXZvcml0ZUxpc3QoKTtcblxuXG4vLyBldmVudCBsaXN0ZW5lciBmb3IgdG9nZ2xpbmcgc2lkZWJhclxuY29uc3QgdG9nZ2xlU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xudG9nZ2xlU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsYXBzZWQnKSkge1xuICAgICAgICBlbmFibGVTaWRlYmFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGFwc2VTaWRlYmFyKCk7XG4gICAgfVxufSk7XG5cbi8vIGV2ZW50IGxpc3RlbmVycyBmb3IgYWRkaW5nIHRhc2tzXG5jb25zdCBuZXdUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFzay1tb2RhbCcpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFzay1mb3JtJyk7XG5jb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZGl2Jyk7XG5jb25zdCBmb3JtQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1dHRvbnMnKTtcbmNvbnN0IGNhdGVnb3J5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMnKTtcbmNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXRhc2snKTtcblxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpO1xuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdUYXNrTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKVxuXG4gICAgZm9ybURpdi5hcHBlbmQobmV3RGF0ZUlucHV0KCkpO1xuXG4gICAgY29uc3QgbG9jYXRpb25Ecm9wZG93biA9IHVwZGF0ZUxvY2F0aW9uRHJvcGRvd24oKTtcbiAgICBsb2NhdGlvbkRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgICBmb3JtQnRucy5pbnNlcnRCZWZvcmUobG9jYXRpb25Ecm9wZG93biwgZm9ybUJ0bnMuZmlyc3RDaGlsZCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpO1xuICAgIHRhc2tOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0YXNrTmFtZUlucHV0LnZhbHVlID09PSAnJykgc3VibWl0VGFza0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGVsc2Ugc3VibWl0VGFza0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG5cbiAgICBzdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VGFzayk7XG59KTtcblxuY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtdGFzaycpO1xuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJyNkYXRlJyk7XG4gICAgICAgIGNvbnN0IGxvY2F0aW9uID0gbmV3VGFza01vZGFsLnF1ZXJ5U2VsZWN0b3IoJy5qcy10YXNrLWxvY2F0aW9uJyk7XG4gICAgICAgIGxvY2F0aW9uLnJlbW92ZSgpO1xuICAgICAgICBkYXRlLnJlbW92ZSgpO1xuICAgICAgICBuZXdUYXNrTW9kYWwuY2xvc2UoKTtcbiAgICAgICAgZm9ybUJ0bnMucmVtb3ZlQ2hpbGQoZm9ybUJ0bnMuZmlyc3RDaGlsZCk7XG4gICAgICAgIHN1Ym1pdFRhc2tCdG4ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRUYXNrKTtcbiAgICB9XG4pO1xuXG5mdW5jdGlvbiBzdWJtaXRUYXNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB0YXNrTG9jYXRpb25JbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10YXNrLWxvY2F0aW9uJyk7XG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKTtcbiAgICBjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGVzYycpO1xuICAgIGNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuXG4gICAgdGFzay5hZGQodGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0Rlc2NJbnB1dC52YWx1ZSwgdGFza0RhdGVJbnB1dC52YWx1ZSwgZmFsc2UsIHRhc2tMb2NhdGlvbklucHV0LnZhbHVlKTtcblxuICAgIGhhbmRsZVNlbGVjdGVkVGFiKCk7XG4gICAgY29uc3QgdGFza0xvY2F0aW9uVGFiID0gY2F0ZWdvcnlEaXYucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7dGFza0xvY2F0aW9uSW5wdXQudmFsdWV9J11gKTtcbiAgICB0YXNrTG9jYXRpb25UYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgIHVwZGF0ZVRhc2tDb3VudGVyKClcbiAgICBuZXdUYXNrTW9kYWwuY2xvc2UoKTtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgIHN1Ym1pdFRhc2tCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IGRhdGUgPSBuZXdUYXNrTW9kYWwucXVlcnlTZWxlY3RvcignI2RhdGUnKTtcbiAgICBjb25zdCBsb2NhdGlvbiA9IG5ld1Rhc2tNb2RhbC5xdWVyeVNlbGVjdG9yKCcuanMtdGFzay1sb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLnJlbW92ZSgpO1xuICAgIGRhdGUucmVtb3ZlKCk7XG4gICAgY3VycmVudFRhYigpO1xufVxuXG4vLyBldmVudCBsaXN0ZW5lcnMgZm9yIGFkZGluZyBwcm9qZWN0c1xuY29uc3QgbmV3UHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QtbW9kYWwnKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QtZm9ybScpO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0Jyk7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1Byb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcbn0pO1xuXG5jb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpO1xuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNoZWNrYm94LnZhbHVlID09PSAnZmFsc2UnID8gY2hlY2tib3gudmFsdWUgPSAndHJ1ZScgOiBjaGVja2JveC52YWx1ZSA9ICdmYWxzZSc7XG59KVxuXG5jb25zdCBjbG9zZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1wcm9qZWN0Jyk7XG5jbG9zZVByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbmV3UHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgY2hlY2tib3gudmFsdWUgPSAnZmFsc2UnO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbn0pO1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1wcm9qZWN0Jyk7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xucHJvamVjdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBpZiAocHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9PT0gJycpIHN1Ym1pdFByb2plY3RCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGVsc2Ugc3VibWl0UHJvamVjdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xufSk7XG5cbmNvbnN0IHByb2plY3RDb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29sb3InKTtcbmNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWxpc3QnKTtcbnN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qZWN0LmFkZChwcm9qZWN0TmFtZUlucHV0LnZhbHVlLCBwcm9qZWN0Q29sb3JJbnB1dC52YWx1ZSwgY2hlY2tib3gudmFsdWUpO1xuICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgdXBkYXRlRmF2b3JpdGVMaXN0KCk7XG5cbiAgICBoYW5kbGVTZWxlY3RlZFRhYigpO1xuICAgIGNvbnN0IHRhc2tMb2NhdGlvblRhYiA9IGNhdGVnb3J5RGl2LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2dldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpLmxlbmd0aCAtIDF9J11gKTtcbiAgICB0YXNrTG9jYXRpb25UYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgIG5ld1Byb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgIGNoZWNrYm94LnZhbHVlID0gJ2ZhbHNlJztcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIGN1cnJlbnRUYWIoKTtcbn0pO1xuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBzd2l0Y2hpbmcgZmlsdGVyc1xuY29uc3QgZmlsdGVycyA9IGNhdGVnb3J5RGl2LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZy1maWx0ZXJzJyk7XG5maWx0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBoYW5kbGVTZWxlY3RlZFRhYigpO1xuICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgY3VycmVudFRhYigpO1xufSlcblxuXG4vLyBldmVudCBsaXN0ZW5lciBmb3Igc3dpdGNoaW5nIHByb2plY3RzXG5jb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMnKTtcbmNhdGVnb3JpZXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0KTtcblxuLy8gZm9yIGhhbmRsaW5nIHByb2plY3QgY2xpY2tzXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0KGUpIHtcbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3Qtb3B0aW9ucycpKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RPcHRpb25zID0gZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3Qtb3B0aW9ucycpO1xuICAgICAgICBwcm9qZWN0T3B0aW9uc01lbnUocHJvamVjdE9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtaXRlbScpKSB7XG4gICAgICAgIGhhbmRsZVNlbGVjdGVkVGFiKCk7XG4gICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJy5wcm9qZWN0LWl0ZW0nKS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICBjdXJyZW50VGFiKCk7XG4gICAgfVxufVxuXG4iLCIvLyBUQVNLUyAmIFBST0pFQ1RTXG5mdW5jdGlvbiBzZXRTdG9yYWdlKGl0ZW0sIG5hbWUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdG9yYWdlKG5hbWUpIHtcbiAgICBsZXQgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICBpZiAoIXNhdmVkKSByZXR1cm4gZmFsc2U7XG5cbiAgICBzYXZlZCA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xuICAgIHNhdmVkID0gT2JqZWN0LnZhbHVlcyhzYXZlZCk7XG5cbiAgICBzYXZlZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoJ2RhdGUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0ZSA9IG5ldyBEYXRlKGVsZW1lbnQuZGF0ZSk7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGUuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGUgPSBlbGVtZW50LmRhdGUuZ2V0VGltZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2F2ZWQ7XG59O1xuXG5leHBvcnQgeyBzZXRTdG9yYWdlLCBnZXRTdG9yYWdlIH07IiwiaW1wb3J0IHsgc2V0U3RvcmFnZSwgZ2V0U3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbkRyb3Bkb3duKCkge1xuICAgIC8vIHJlbW92ZSBjdXJyZW50IGRyb3Bkb3duXG4gICAgbGV0IHRhc2tJdGVtTG9jYXRpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkxpc3Quc2V0QXR0cmlidXRlKCdpZCcsICdsb2NhdGlvbicpO1xuICAgIHRhc2tJdGVtTG9jYXRpb25MaXN0LmNsYXNzTGlzdC5hZGQoJ2pzLXRhc2stbG9jYXRpb24nKTtcblxuICAgIGNvbnN0IHRhc2tJdGVtTG9jYXRpb25JbmJveE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHRhc2tJdGVtTG9jYXRpb25JbmJveE9wdGlvbi52YWx1ZSA9ICdpbmJveCc7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkluYm94T3B0aW9uLnRleHRDb250ZW50ID0gJ0luYm94JztcblxuICAgIGNvbnN0IHRhc2tJdGVtTG9jYXRpb25EaXNhYmxlZE9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHRhc2tJdGVtTG9jYXRpb25EaXNhYmxlZE9wdGlvbi52YWx1ZSA9ICcnO1xuICAgIHRhc2tJdGVtTG9jYXRpb25EaXNhYmxlZE9wdGlvbi50ZXh0Q29udGVudCA9ICctLSBNeSBwcm9qZWN0cyAtLSc7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkRpc2FibGVkT3B0aW9uLmRpc2FibGVkID0gJ3RydWUnO1xuXG4gICAgdGFza0l0ZW1Mb2NhdGlvbkxpc3QuYXBwZW5kKHRhc2tJdGVtTG9jYXRpb25JbmJveE9wdGlvbiwgdGFza0l0ZW1Mb2NhdGlvbkRpc2FibGVkT3B0aW9uKTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgb3B0aW9uc1xuICAgIGlmIChnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBpbmRleDtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgICAgICAgICB0YXNrSXRlbUxvY2F0aW9uTGlzdC5hcHBlbmQocHJvamVjdFNlbGVjdCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHRhc2tJdGVtTG9jYXRpb25MaXN0O1xufTsiLCJpbXBvcnQgeyBzZXRTdG9yYWdlLCBnZXRTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbi8vIHByb2plY3Qgb2JqZWN0c1xuY29uc3QgcHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdEFycmF5O1xuICAgIGlmIChnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcHJvamVjdEFycmF5ID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdEFycmF5ID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkID0gKG5hbWUsIGNvbG9yLCBmYXYpID0+IHtcbiAgICAgICAgY29uc3QgZmF2b3JpdGUgPSAoZmF2ID09PSAndHJ1ZScpO1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaCh7IG5hbWUsIGNvbG9yLCBmYXZvcml0ZSB9KTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UocHJvamVjdEFycmF5LCAncHJvamVjdEFycmF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgZWRpdCA9IChpbmRleCwgbmV3SW5mbykgPT4ge1xuICAgICAgICBuZXdJbmZvLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdEFycmF5W2luZGV4XVtwcm9wZXJ0eVswXV0gPSBwcm9wZXJ0eVsxXTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZShwcm9qZWN0QXJyYXksICdwcm9qZWN0QXJyYXknKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICAgIHJldHVybiBzZXRTdG9yYWdlKHByb2plY3RBcnJheSwgJ3Byb2plY3RBcnJheScpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZCwgZWRpdCwgcmVtb3ZlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0KCk7IiwiaW1wb3J0ICcuLi9zdHlsZXMvcHJvamVjdERvbS1zdHlsZS5jc3MnO1xuaW1wb3J0IGhhc2h0YWdCbHVlIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWJsdWUuc3ZnJztcbmltcG9ydCBoYXNodGFnUmVkIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLXJlZC5zdmcnO1xuaW1wb3J0IGhhc2h0YWdDb2FsIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWNvYWwuc3ZnJztcbmltcG9ydCBoYXNodGFnTGltZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvaGFzaHRhZy1saW1lLnN2Zyc7XG5pbXBvcnQgaGFzaHRhZ01hZyBmcm9tICcuLi9hc3NldHMvaWNvbnMvaGFzaHRhZy1tYWcuc3ZnJztcbmltcG9ydCBkb3RzIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9kb3RzLnN2Zyc7XG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgaW5ib3hUYXNrcywgdG9kYXlUYXNrcywgdXBjb21pbmdUYXNrcywgY29tcGxldGVkVGFza3MgfSBmcm9tICcuL3Rhc2tzRG9tQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL3Byb2plY3RzLmpzJztcblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvdW50ZXIoKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzJyk7XG4gICAgY29uc3QgdGFicyA9IGNhdGVnb3JpZXMucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIGlmICh0YWIuZGF0YXNldC5pbmRleCA9PT0gJ2luYm94Jykge1xuICAgICAgICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmJveCcpO1xuICAgICAgICAgICAgY291bnRlci50ZXh0Q29udGVudCA9IGluYm94VGFza3MoKS5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGFiLmRhdGFzZXQuaW5kZXggPT09ICd0b2RheScpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbiAgICAgICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSB0b2RheVRhc2tzKCkubGVuZ3RoO1xuICAgICAgICB9IGVsc2UgaWYgKHRhYi5kYXRhc2V0LmluZGV4ID09PSAndXBjb21pbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwY29taW5nJyk7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gdXBjb21pbmdUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0YWIuZGF0YXNldC5pbmRleCA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3MoKS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9KVxufTtcblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1wcm9qZWN0cycpO1xuICAgIGxpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5JykpIHtcbiAgICAgICAgcHJvamVjdEFycmF5ID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG4gICAgICAgIHByb2plY3RBcnJheSA9IHByb2plY3RBcnJheS5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoeyBwcm9qZWN0LCBpbmRleCB9KSk7XG4gICAgfVxuXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ld1Byb2plY3RCdG4ocHJvamVjdCk7XG4gICAgICAgIGxpc3QuYXBwZW5kKGJ0bik7XG4gICAgfSlcbn07XG5cbmZ1bmN0aW9uIHVwZGF0ZUZhdm9yaXRlTGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlLWl0ZW1zJyk7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IGZhdlByb2plY3RzID0gW107XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpKSB7XG4gICAgICAgIGZhdlByb2plY3RzID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG4gICAgICAgIGZhdlByb2plY3RzID0gZmF2UHJvamVjdHNcbiAgICAgICAgICAgIC5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoeyBwcm9qZWN0LCBpbmRleCB9KSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgcHJvamVjdCB9KSA9PiBwcm9qZWN0LmZhdm9yaXRlID09PSB0cnVlKTtcbiAgICB9ICAgIFxuICAgIFxuICAgIGZhdlByb2plY3RzLmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ld1Byb2plY3RCdG4ocHJvamVjdCk7XG4gICAgICAgIGxpc3QuYXBwZW5kKGJ0bik7XG4gICAgfSlcbn07XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RCdG4oX3Byb2plY3QpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICAgIGJ0bi5kYXRhc2V0LmluZGV4ID0gX3Byb2plY3QuaW5kZXg7XG5cbiAgICBjb25zdCBidG5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnRuQ29udGVudC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWluZm8nKTtcbiAgICBjb25zdCBoYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGFzaC5jbGFzc0xpc3QuYWRkKCdoYXNoJyk7XG5cbiAgICBzd2l0Y2ggKF9wcm9qZWN0LnByb2plY3QuY29sb3IpIHtcbiAgICAgICAgY2FzZSAnc2t5Qmx1ZSc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdCbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlZCc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdSZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hhckNvYWwnOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnQ29hbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYWdlbnRhJzpcbiAgICAgICAgICAgIGhhc2guc3JjID0gaGFzaHRhZ01hZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaW1lR3JlZW4nOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnTGltZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwLnRleHRDb250ZW50ID0gX3Byb2plY3QucHJvamVjdC5uYW1lO1xuXG4gICAgY29uc3QgdGFza0NvdW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgYnRuQ29udGVudC5hcHBlbmQoaGFzaCwgcCwgdGFza0NvdW50KTtcblxuICAgIGNvbnN0IG9wdGlvbnNCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBvcHRpb25zSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG9wdGlvbnNCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb25zJyk7XG4gICAgb3B0aW9uc0ljb24uY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy1pY29uJyk7XG4gICAgb3B0aW9uc0ljb24uc3JjID0gZG90cztcblxuICAgIG9wdGlvbnNCdG4uYXBwZW5kKG9wdGlvbnNJY29uKTtcblxuICAgIGJ0bi5hcHBlbmQoYnRuQ29udGVudCwgb3B0aW9uc0J0bik7XG4gICAgcmV0dXJuIGJ0bjtcbn07XG5cbmZ1bmN0aW9uIHByb2plY3RPcHRpb25zTWVudShwcm9qZWN0VGFiKSB7XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnb3B0aW9ucy1tZW51Jyk7XG4gICAgXG4gICAgY29uc3QgZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGVkaXQuY2xhc3NMaXN0LmFkZCgnbWVudS1vcHRpb24nLCAnZWRpdC10YWInKTtcbiAgICBlZGl0LnRleHRDb250ZW50ID0gJ0VkaXQnO1xuXG4gICAgY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ21lbnUtb3B0aW9uJywgJ3JlbW92ZS10YWInKTtcbiAgICByZW1vdmUudGV4dENvbnRlbnQgPSAnUmVtb3ZlJztcblxuICAgIG1lbnUuYXBwZW5kKGVkaXQsIHJlbW92ZSk7XG4gICAgcHJvamVjdFRhYi5hcHBlbmQobWVudSk7XG5cbiAgICBjb25zdCBpbmRleCA9IHByb2plY3RUYWIuY2xvc2VzdCgnLnByb2plY3QtaXRlbScpLmRhdGFzZXQuaW5kZXg7XG4gICAgXG4gICAgbWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuZWRpdC10YWInKSkge1xuICAgICAgICAgICAgb3BlbkVkaXRNb2RhbChpbmRleCk7XG4gICAgICAgICAgICBtZW51LnJlbW92ZSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5yZW1vdmUtdGFiJykpIHtcbiAgICAgICAgICAgIG9wZW5SZW1vdmVNb2RhbChpbmRleCk7XG4gICAgICAgICAgICBtZW51LnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgIH0pXG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChlKSA9PiB7XG4gICAgICAgIGlmICghZS50YXJnZXQuY2xvc2VzdCgnLm9wdGlvbnMtbWVudScpKSB7XG4gICAgICAgICAgICBtZW51LnJlbW92ZSgpO1xuICAgICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gb3BlbkVkaXRNb2RhbChpbmRleCkge1xuICAgIGNvbnN0IHByb2plY3RJbmZvID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5JylbaW5kZXhdO1xuXG4gICAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtb2RhbC5zZXRBdHRyaWJ1dGUoJ3BvcG92ZXInLCB0cnVlKTtcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbCcsICdlZGl0LW1vZGFsJyk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGZvcm0uc2V0QXR0cmlidXRlKCdpZCcsICdlZGl0UHJvamVjdC1mb3JtJyk7XG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ0VkaXQgcHJvamVjdCc7XG5cbiAgICBjb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybURpdi5jbGFzc0xpc3QuYWRkKCdmb3JtLWRpdicpO1xuXG4gICAgY29uc3QgbGFiZWxOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbE5hbWUuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1uYW1lJyk7XG4gICAgbGFiZWxOYW1lLnRleHRDb250ZW50ID0gJ05hbWUnO1xuXG4gICAgY29uc3QgaW5wdXROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LW5hbWUnKTtcbiAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnLCAnMjAnKTtcbiAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCdhdXRvY29tcGxldGUnLCAnb2ZmJyk7XG4gICAgaW5wdXROYW1lLnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAndHJ1ZScpO1xuICAgIGlucHV0TmFtZS52YWx1ZSA9IHByb2plY3RJbmZvLm5hbWU7XG5cbiAgICBjb25zdCBsYWJlbENvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbENvbG9yLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtY29sb3InKTtcbiAgICBsYWJlbENvbG9yLnRleHRDb250ZW50ID0gJ0NvbG9yJztcblxuICAgIGNvbnN0IHNlbGVjdENvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgc2VsZWN0Q29sb3Iuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWNvbG9yJyk7XG5cbiAgICBjb25zdCBjb2xvcnMgPSBbXG4gICAgICAgIFsncmVkJywgJ1JlZCddLFxuICAgICAgICBbJ2xpbWVHcmVlbicsICdMaW1lIEdyZWVuJ10sXG4gICAgICAgIFsnc2t5Qmx1ZScsICdTa3kgQmx1ZSddLFxuICAgICAgICBbJ2NoYXJDb2FsJywgJ0NoYXJjb2FsJ10sXG4gICAgICAgIFsnbWFnZW50YScsICdNYWdlbnRhJ11cbiAgICBdXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIGNvbG9yLnZhbHVlID0gY29sb3JzW2ldWzBdO1xuICAgICAgICBjb2xvci50ZXh0Q29udGVudCA9IGNvbG9yc1tpXVsxXTtcblxuICAgICAgICBpZihjb2xvci52YWx1ZSA9PT0gcHJvamVjdEluZm8uY29sb3IpIHtcbiAgICAgICAgICAgIGNvbG9yLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBzZWxlY3RDb2xvci5hcHBlbmQoY29sb3IpO1xuICAgIH1cblxuICAgIGNvbnN0IGxhYmVsRmF2b3JpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsRmF2b3JpdGUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1zd2l0Y2gnKTtcblxuICAgIGNvbnN0IGlucHV0RmF2b3JpdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0RmF2b3JpdGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgaW5wdXRGYXZvcml0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrYm94Jyk7XG4gICAgaW5wdXRGYXZvcml0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtZmF2Jyk7XG4gICAgaWYgKHByb2plY3RJbmZvLmZhdm9yaXRlID09PSB0cnVlKSBpbnB1dEZhdm9yaXRlLmNoZWNrZWQgPSB0cnVlO1xuXG4gICAgLy8gaW5wdXRGYXZvcml0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgLy8gICAgIGlucHV0RmF2b3JpdGUudmFsdWUgPT09ICdmYWxzZScgPyBpbnB1dEZhdm9yaXRlLnZhbHVlID0gJ3RydWUnIDogaW5wdXRGYXZvcml0ZS52YWx1ZSA9ICdmYWxzZSc7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGlucHV0RmF2b3JpdGUudmFsdWUpXG4gICAgLy8gfSlcblxuICAgIGNvbnN0IHNwYW5GYXZvcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBzcGFuRmF2b3JpdGUuc2V0QXR0cmlidXRlKCdjbGFzcycsICdzbGlkZXIgcm91bmQnKTtcblxuICAgIGNvbnN0IGZhdlRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZmF2VGV4dC50ZXh0Q29udGVudCA9ICdBZGQgdG8gZmF2b3JpdGVzJztcbiAgICBcbiAgICBsYWJlbEZhdm9yaXRlLmFwcGVuZChpbnB1dEZhdm9yaXRlLCBzcGFuRmF2b3JpdGUsIGZhdlRleHQpO1xuXG4gICAgZm9ybURpdi5hcHBlbmQobGFiZWxOYW1lLCBpbnB1dE5hbWUsIGxhYmVsQ29sb3IsIHNlbGVjdENvbG9yLCBsYWJlbEZhdm9yaXRlKTtcblxuICAgIGNvbnN0IGZvcm1CdXR0b25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9ybUJ1dHRvbnMuY2xhc3NMaXN0LmFkZCgnZm9ybS1idXR0b25zJyk7XG4gICAgY29uc3QgY2FuY2VsQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgndHlwZScsICdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdjbG9zZS1tb2RhbCcpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Nsb3NlLXByb2plY3QnKTtcbiAgICBjYW5jZWxCdG4udGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbiAgICBjb25zdCBzYXZlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2Zvcm0nLCAnZWRpdFByb2plY3QtZm9ybScpO1xuICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKCdjbGFzcycsICdzdWJtaXQtbW9kYWwnKTtcbiAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnc3VibWl0LXByb2plY3QnKTtcbiAgICBzYXZlQnRuLmRpc2FibGVkID0gZmFsc2VcbiAgICBzYXZlQnRuLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgIFxuICAgIGZvcm1CdXR0b25zLmFwcGVuZChjYW5jZWxCdG4sIHNhdmVCdG4pO1xuICAgIGZvcm0uYXBwZW5kKGZvcm1EaXYsIGZvcm1CdXR0b25zKTtcbiAgICBtb2RhbC5hcHBlbmQoZm9ybSk7XG4gICAgYm9keS5hcHBlbmQobW9kYWwpO1xuICAgIG1vZGFsLnNob3dQb3BvdmVyKCk7XG5cbiAgICBpbnB1dE5hbWUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgICAgIGlmIChpbnB1dE5hbWUudmFsdWUgPT09ICcnKSBzYXZlQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgZWxzZSBzYXZlQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgfSk7XG5cbiAgICBmb3JtQnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuY2xvc2UtbW9kYWwnKSkge1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnN1Ym1pdC1tb2RhbCcpKSB7XG4gICAgICAgICAgICBpZiAoaW5wdXROYW1lLnZhbHVlICE9PSAnJykge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmVkaXQoaW5kZXgsIFtbJ25hbWUnLCBpbnB1dE5hbWUudmFsdWVdLCBbJ2NvbG9yJywgc2VsZWN0Q29sb3IudmFsdWVdLCBbJ2Zhdm9yaXRlJywgaW5wdXRGYXZvcml0ZS5jaGVja2VkXV0pO1xuICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRmF2b3JpdGVMaXN0KCk7XG4gICAgICAgICAgICAgICAgaGFuZGxlU2VsZWN0ZWRUYWIoKTtcbiAgICAgICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59O1xuXG5mdW5jdGlvbiBvcGVuUmVtb3ZlTW9kYWwoaW5kZXgpIHtcbiAgICBjb25zb2xlLmxvZygndGVzdCcpXG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKVtpbmRleF07XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgncG9wb3ZlcicsIHRydWUpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ3JlbW92ZS1tb2RhbCcpO1xuXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLnRleHRDb250ZW50ID0gYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byByZW1vdmUgXCIke3Byb2plY3RJbmZvLm5hbWV9XCIgcHJvamVjdD9gO1xuXG4gICAgY29uc3QgZm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nsb3NlLW1vZGFsJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtcHJvamVjdCcpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZSgnZm9ybScsICdlZGl0UHJvamVjdC1mb3JtJyk7XG4gICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1Ym1pdC1tb2RhbCcpO1xuICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtcHJvamVjdCcpO1xuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnUmVtb3ZlJztcblxuICAgIGZvcm1CdXR0b25zLmFwcGVuZChjYW5jZWxCdG4sIHNhdmVCdG4pO1xuXG4gICAgbW9kYWwuYXBwZW5kKGgzLCBmb3JtQnV0dG9ucyk7XG4gICAgYm9keS5hcHBlbmQobW9kYWwpO1xuICAgIG1vZGFsLnNob3dQb3BvdmVyKCk7XG5cbiAgICBmb3JtQnV0dG9ucy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuY2xvc2UtbW9kYWwnKSkge1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnN1Ym1pdC1tb2RhbCcpKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBwcm9qZWN0LnJlbW92ZShpbmRleCk7XG4gICAgICAgICAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgICAgICAgICAgdXBkYXRlRmF2b3JpdGVMaXN0KCk7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3RlZFRhYigpO1xuICAgICAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICB9KVxufTtcblxuLy8gZnVuY3Rpb24gZm9yIGhhbmRsaW5nIHNlbGVjdGVkIHRhYnNcbmZ1bmN0aW9uIGhhbmRsZVNlbGVjdGVkVGFiKCkge1xuICAgIGNvbnN0IHByb2plY3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICAgIGNvbnN0IGZpbHRlckJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbiAgICBmaWx0ZXJCdG5zLmZvckVhY2goYiA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuICAgIHByb2plY3RCdG5zLmZvckVhY2goYiA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xufVxuXG5leHBvcnQgeyB1cGRhdGVUYXNrQ291bnRlciwgdXBkYXRlUHJvamVjdExpc3QsIHVwZGF0ZUZhdm9yaXRlTGlzdCwgcHJvamVjdE9wdGlvbnNNZW51LCBoYW5kbGVTZWxlY3RlZFRhYiB9OyIsImltcG9ydCB7IGdldFN0b3JhZ2UsIHNldFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuLy8gdGFzayBvYmplY3RzXG5jb25zdCB0YXNrID0gKCkgPT4ge1xuICAgIGxldCB0YXNrQXJyYXk7XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpID09PSBmYWxzZSkge1xuICAgICAgICB0YXNrQXJyYXkgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrQXJyYXkgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkID0gKG5hbWUsIGRlc2MsIF9kYXRlLCBjb21wbGV0ZWQsIGxvY2F0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSAhIV9kYXRlID8gbmV3IERhdGUoX2RhdGUpIDogJyc7XG4gICAgICAgIHRhc2tBcnJheS5wdXNoKHsgbmFtZSwgZGVzYywgZGF0ZSwgY29tcGxldGVkLCBsb2NhdGlvbiB9KTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UodGFza0FycmF5LCAndGFza0FycmF5Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVkaXQgPSAoaW5kZXgsIG5ld0luZm8pID0+IHtcbiAgICAgICAgbmV3SW5mby5mb3JFYWNoKHByb3BlcnR5ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVswXSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgISFwcm9wZXJ0eVsxXSA/IG5ldyBEYXRlKG5ld0luZm9bMl1bMV0pIDogJyc7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0YXNrQXJyYXlbaW5kZXhdW3Byb3BlcnR5WzBdXSA9IHByb3BlcnR5WzFdO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBzZXRTdG9yYWdlKHRhc2tBcnJheSwgJ3Rhc2tBcnJheScpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmUgPSAodGFza0luZGV4KSA9PiB7XG4gICAgICAgIHRhc2tBcnJheS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UodGFza0FycmF5LCAndGFza0FycmF5Jyk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGFkZCwgZWRpdCwgcmVtb3ZlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrKCk7IiwiaW1wb3J0ICcuLi9zdHlsZXMvdGFza0RvbS1zdHlsZS5jc3MnO1xuaW1wb3J0IGNpcmNsZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2lyY2xlLnN2Zyc7XG5pbXBvcnQgY2lyY2xlR3JlZW4gZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NpcmNsZS1jaGVjay1ncmVlbi5zdmcnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2VkaXQuc3ZnJztcbmltcG9ydCB0cmFzaCBmcm9tICcuLi9hc3NldHMvaWNvbnMvdHJhc2guc3ZnJztcbmltcG9ydCBjYW5jZWwgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NhbmNlbC5zdmcnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL3NhdmUuc3ZnJztcbmltcG9ydCBzYXZlRGlzYWJsZWQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL3NhdmUtZGlzYWJsZWQuc3ZnJztcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgdGFzayBmcm9tICcuL3Rhc2tzLmpzJztcbmltcG9ydCB7IHVwZGF0ZVRhc2tDb3VudGVyIH0gZnJvbSAnLi9wcm9qZWN0c0RvbUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHVwZGF0ZUxvY2F0aW9uRHJvcGRvd24gZnJvbSAnLi9sb2NhdGlvbkRyb3Bkb3duLmpzJztcblxuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmxldCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWxpc3QnKTtcblxuXG5mdW5jdGlvbiBpbmJveFRhc2tzKCkge1xuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykpIHtcbiAgICAgICAgdGFza0FycmF5ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5Jyk7XG4gICAgICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+ICh7IHRhc2ssIGluZGV4IH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoeyB0YXNrIH0pID0+IHRhc2suY29tcGxldGVkID09PSBmYWxzZSAmJiB0YXNrLmxvY2F0aW9uID09ICdpbmJveCcpO1xuICAgICAgICByZXR1cm4gdGFza0FycmF5O1xuICAgIH0gZWxzZSByZXR1cm4gdGFza0FycmF5O1xufVxuXG5mdW5jdGlvbiB0b2RheVRhc2tzKCkge1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB0b2RheURhdGUgPSB0b2RheURhdGUuZ2V0VGltZSgpO1xuXG4gICAgbGV0IHRhc2tBcnJheSA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSkge1xuICAgICAgICB0YXNrQXJyYXkgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKTtcbiAgICAgICAgdGFza0FycmF5ID0gdGFza0FycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKCh0YXNrLCBpbmRleCkgPT4gKHsgdGFzaywgaW5kZXggfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IHRhc2sgfSkgPT4gdGFzay5kYXRlID09PSB0b2RheURhdGUgJiYgdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRhc2tBcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuIHRhc2tBcnJheTtcbn1cblxuZnVuY3Rpb24gdXBjb21pbmdUYXNrcygpIHtcbiAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0b2RheURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgdG9kYXlEYXRlID0gdG9kYXlEYXRlLmdldFRpbWUoKTtcblxuXG4gICAgbGV0IHRhc2tBcnJheSA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSkge1xuICAgICAgICB0YXNrQXJyYXkgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKTtcbiAgICAgICAgdGFza0FycmF5ID0gdGFza0FycmF5XG4gICAgICAgICAgICAubWFwKCh0YXNrLCBpbmRleCkgPT4gKHsgdGFzaywgaW5kZXggfSkpXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHRhc2sgfSkgPT4gdGFzay5kYXRlID4gdG9kYXlEYXRlICYmIHRhc2suY29tcGxldGVkID09PSBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0YXNrQXJyYXk7XG4gICAgfSBlbHNlIHJldHVybiB0YXNrQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZFRhc2tzKCkge1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykpIHtcbiAgICAgICAgdGFza0FycmF5ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5Jyk7XG4gICAgICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheVxuICAgICAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+ICh7IHRhc2ssIGluZGV4IH0pKVxuICAgICAgICAgICAgLmZpbHRlcigoeyB0YXNrIH0pID0+IHRhc2suY29tcGxldGVkID09PSB0cnVlKTtcbiAgICAgICAgcmV0dXJuIHRhc2tBcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuIHRhc2tBcnJheTtcbn1cblxuZnVuY3Rpb24gaW5ib3hUYWIoKSB7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGl0bGUnKTtcbiAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5ib3gnKTtcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcblxuICAgIC8vIGdldCB0YXNrcyBmcm9tIHN0b3JhZ2VcbiAgICBsZXQgdGFza3MgPSBpbmJveFRhc2tzKCk7XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgdGFza3MgbGlzdCBpdGVtc1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gbmV3VGFza0l0ZW0odGFzayk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfSlcblxuICAgIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xufTtcblxuZnVuY3Rpb24gdG9kYXlUYWIoKSB7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGl0bGUnKTtcbiAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdUb2RheSc7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3RvZGF5Jyk7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG5cbiAgICBsZXQgdGFza3MgPSB0b2RheVRhc2tzKCk7XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgdGFza3MgbGlzdCBpdGVtc1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gbmV3VGFza0l0ZW0odGFzayk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfSlcblxuICAgIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xufTtcblxuZnVuY3Rpb24gdXBjb21pbmdUYWIoKSB7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGl0bGUnKTtcbiAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ1VwY29taW5nJztcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndXBjb21pbmcnKTtcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcblxuXG4gICAgbGV0IHRhc2tzID0gdXBjb21pbmdUYXNrcygpO1xuXG4gICAgLy8gZHluYW1pY2FsbHkgY3JlYXRlIHRhc2tzIGxpc3QgaXRlbXNcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IG5ld1Rhc2tJdGVtKHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH0pXG5cbiAgICBzZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsIHRhc2tMaXN0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn07XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZFRhYigpIHtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgc2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25UaXRsZScpO1xuICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnQ29tcGxldGVkJztcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnY29tcGxldGVkJyk7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG5cbiAgICAvLyBnZXQgdGFza3MgZnJvbSBzdG9yYWdlXG4gICAgbGV0IHRhc2tzID0gY29tcGxldGVkVGFza3MoKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBuZXdUYXNrSXRlbSh0YXNrKTtcbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlZEljb24gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcuY2hlY2staWNvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVkSWNvbi5zcmMgPSBjaXJjbGVHcmVlbjtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9KVxuXG4gICAgc2VjdGlvbi5hcHBlbmQoc2VjdGlvblRpdGxlLCB0YXNrTGlzdCk7XG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG59XG5cbmZ1bmN0aW9uIHByb2plY3RUYWIoaW5kZXgpIHtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgc2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25UaXRsZScpO1xuICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5JylbaW5kZXhdO1xuXG4gICAgc2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25UaXRsZScpO1xuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCBwcm9qZWN0Lm5hbWUpO1xuICAgIHNlY3Rpb24uZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuXG4gICAgbGV0IHRhc2tBcnJheSA9IFtdO1xuXG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpKSB0YXNrQXJyYXkgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKVxuXG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gdGFza0FycmF5XG4gICAgICAgIC5tYXAoKHRhc2ssIGluZGV4KSA9PiAoeyB0YXNrLCBpbmRleCB9KSlcbiAgICAgICAgLmZpbHRlcigoeyB0YXNrIH0pID0+IHRhc2subG9jYXRpb24gPT09IGluZGV4ICYmIHRhc2suY29tcGxldGVkID09PSBmYWxzZSk7XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgdGFza3MgbGlzdCBpdGVtc1xuICAgIHByb2plY3RUYXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IG5ld1Rhc2tJdGVtKHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH0pXG5cbiAgICBzZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsIHRhc2tMaXN0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gY3VycmVudFRhYigpIHtcbiAgICBjb25zdCBzZWxlY3RlZFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuXG4gICAgaWYgKHNlbGVjdGVkVGFiLmRhdGFzZXQuaW5kZXggPT09ICdpbmJveCcpIGluYm94VGFiKCk7XG4gICAgZWxzZSBpZiAoc2VsZWN0ZWRUYWIuZGF0YXNldC5pbmRleCA9PT0gJ3RvZGF5JykgdG9kYXlUYWIoKTtcbiAgICBlbHNlIGlmIChzZWxlY3RlZFRhYi5kYXRhc2V0LmluZGV4ID09PSAndXBjb21pbmcnKSB1cGNvbWluZ1RhYigpO1xuICAgIGVsc2UgaWYgKHNlbGVjdGVkVGFiLmRhdGFzZXQuaW5kZXggPT09ICdjb21wbGV0ZWQnKSBjb21wbGV0ZWRUYWIoKTtcbiAgICBlbHNlIHByb2plY3RUYWIoc2VsZWN0ZWRUYWIuZGF0YXNldC5pbmRleCk7XG5cbiAgICB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWxpc3QnKTtcbiAgICB0YXNrTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1hbmlwdWxhdGVUYXNrKTtcbn1cblxuZnVuY3Rpb24gbWFuaXB1bGF0ZVRhc2soZSkge1xuICAgIGNvbnN0IHRhc2tJdGVtID0gdGFza0xpc3QucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9XCIke2UudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKS5kYXRhc2V0LmluZGV4fVwiXWApO1xuICAgIGNvbnN0IHRhc2tJbmZvID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignLnRhc2staW5mbycpO1xuICAgIGNvbnN0IGVkaXRCdG4gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcuZWRpdC1idG4nKTtcbiAgICBjb25zdCByZW1vdmVCdG4gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcucmVtb3ZlLWJ0bicpO1xuXG4gICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5jb21wbGV0ZS1idG4nKSkge1xuICAgICAgICBsZXQgY29tcGxldGVkID0gZ2V0U3RvcmFnZSgndGFza0FycmF5JylbZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmRhdGFzZXQuaW5kZXhdWydjb21wbGV0ZWQnXTtcbiAgICAgICAgdGFzay5lZGl0KGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKS5kYXRhc2V0LmluZGV4LCBbWydjb21wbGV0ZWQnLCAhY29tcGxldGVkXV0pO1xuICAgICAgICBjdXJyZW50VGFiKCk7XG4gICAgICAgIHVwZGF0ZVRhc2tDb3VudGVyKCk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuZWRpdC1idG4nKSkge1xuICAgICAgICBlZGl0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHJlbW92ZUJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICAgIGNvbnN0IGNhbmNlbEJ0biA9IG5ld0J1dHRvbkl0ZW0oeyAnYnRuQ2xhc3MnOiAnY2FuY2VsLWJ0bicgfSwgeyAnaW1nQ2xhc3MnOiAnY2FuY2VsLWljb24nIH0sIHsgJ2ltZ1NyYyc6IGNhbmNlbCB9KTtcbiAgICAgICAgY29uc3Qgc2F2ZUJ0biA9IG5ld0J1dHRvbkl0ZW0oeyAnYnRuQ2xhc3MnOiAnc2F2ZS1idG4nIH0sIHsgJ2ltZ0NsYXNzJzogJ3NhdmUtaWNvbicgfSwgeyAnaW1nU3JjJzogc2F2ZSB9KTtcblxuICAgICAgICBlZGl0QnRuLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBjYW5jZWxCdG4pO1xuICAgICAgICBjYW5jZWxCdG4uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIHNhdmVCdG4pO1xuXG4gICAgICAgIGNvbnN0IGRhdGVJbnB1dCA9IG5ld0RhdGVJbnB1dCgpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtTG9jYXRpb25Ecm9wZG93biA9IHVwZGF0ZUxvY2F0aW9uRHJvcGRvd24oKTtcbiAgICAgICAgY29uc3QgdGFza0l0ZW1Mb2NhdGlvbkluZGV4ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5JylbZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmRhdGFzZXQuaW5kZXhdWydsb2NhdGlvbiddO1xuICAgICAgICB0YXNrSXRlbUxvY2F0aW9uRHJvcGRvd24uY2hpbGROb2Rlcy5mb3JFYWNoKGxvY2F0aW9uID0+IHtcbiAgICAgICAgICAgIGxvY2F0aW9uLnZhbHVlID09PSB0YXNrSXRlbUxvY2F0aW9uSW5kZXggPyBsb2NhdGlvbi5zZWxlY3RlZCA9IHRydWUgOiBsb2NhdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgdGFza0luZm8uY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgbm9kZS5jb250ZW50RWRpdGFibGUgPSAndHJ1ZSc7XG4gICAgICAgICAgICBub2RlLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjM1NiknO1xuXG4gICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICduYW1lJykge1xuICAgICAgICAgICAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5vZGUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVCdG4uZGlzYWJsZWQgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlQnRuLmNoaWxkTm9kZXNbMF0uc3JjID0gc2F2ZURpc2FibGVkO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUJ0bi5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlQnRuLmNoaWxkTm9kZXNbMF0uc3JjID0gc2F2ZTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmKG5vZGUuZ2V0QXR0cmlidXRlKCdpZCcpID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICBpZiAobm9kZS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICBkYXRlSW5wdXQudmFsdWUgPSBnZXRGdWxsRGF0ZUZvcklucHV0KG5ldyBEYXRlKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpW2UudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKS5kYXRhc2V0LmluZGV4XVsnZGF0ZSddKSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH0gXG5cbiAgICAgICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRpc2FibGVFZGl0YWJsZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRhc2tJbmZvLmNoaWxkTm9kZXMubGVuZ3RoID09PSA0KSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgZGF0ZSBhbmQgbG9jYXRpb24gZWxlbWVudHMsIHdpbGwgYmUgcmUtY3JlYXRlZCB3aGVuIHBhZ2UgcmUtcmVuZGVyc1xuICAgICAgICAgICAgdGFza0luZm8ucmVtb3ZlQ2hpbGQodGFza0luZm8ubGFzdENoaWxkKTtcbiAgICAgICAgICAgIHRhc2tJbmZvLnJlbW92ZUNoaWxkKHRhc2tJbmZvLmxhc3RDaGlsZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyByZW1vdmUgbG9jYXRpb24gZWxlbWVudCwgd2lsbCBiZSByZS1jcmVhdGVkIHdoZW4gcGFnZSByZS1yZW5kZXJzXG4gICAgICAgICAgICB0YXNrSW5mby5yZW1vdmVDaGlsZCh0YXNrSW5mby5sYXN0Q2hpbGQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gYXBwZW5kIGVkaXQgZGF0ZSBhbmQgZWRpdCBsb2NhdGlvbiBlbGVtZW50cywgd2lsbCBiZSByZW1vdmVkIHdoZW4gcGFnZSByZS1yZW5kZXJzXG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZChkYXRlSW5wdXQpO1xuICAgICAgICB0YXNrSW5mby5hcHBlbmQodGFza0l0ZW1Mb2NhdGlvbkRyb3Bkb3duKTtcblxuICAgICAgICBmdW5jdGlvbiBkaXNhYmxlRWRpdGFibGUoZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuc2F2ZS1idG4nKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlZEluZm8gPSBbXTtcblxuICAgICAgICAgICAgICAgICAgICB0YXNrSW5mby5jaGlsZE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEluZm8ucHVzaChbIGNoaWxkLmdldEF0dHJpYnV0ZSgnaWQnKSwgY2hpbGQubm9kZU5hbWUgPT0gJ0lOUFVUJyA/IGNoaWxkLnZhbHVlICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hpbGQubm9kZU5hbWUgPT0gJ1NFTEVDVCcgPyBjaGlsZC52YWx1ZSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY2hpbGQudGV4dENvbnRlbnQgXSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhc2suZWRpdCh0YXNrSXRlbS5kYXRhc2V0LmluZGV4LCB1cGRhdGVkSW5mbyk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRpc2FibGVFZGl0YWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGFza0NvdW50ZXIoKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmNhbmNlbC1idG4nKSkge1xuXG4gICAgICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRpc2FibGVFZGl0YWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIoKTtcblxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnJlbW92ZS1idG4nKSkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrLnJlbW92ZShlLnRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJykuZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRpc2FibGVFZGl0YWJsZSk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIoKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGFza0NvdW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZGlzYWJsZUVkaXRhYmxlKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5yZW1vdmUtYnRuJykpIHtcbiAgICAgICAgdGFzay5yZW1vdmUoZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICBjdXJyZW50VGFiKCk7XG4gICAgICAgIHVwZGF0ZVRhc2tDb3VudGVyKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBuZXdUYXNrSXRlbSh0YXNrT2JqKSB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgIHRhc2tJdGVtLmRhdGFzZXQuaW5kZXggPSB0YXNrT2JqLmluZGV4O1xuXG4gICAgY29uc3QgdGFza0NvbXBsZXRlQnRuID0gbmV3QnV0dG9uSXRlbSh7ICdidG5DbGFzcyc6ICdjb21wbGV0ZS1idG4nIH0sIHsnaW1nQ2xhc3MnOiAnY2hlY2staWNvbicgfSwgeydpbWdTcmMnOiBjaXJjbGUgfSk7XG4gICAgY29uc3QgdGFza0VkaXRCdG4gPSBuZXdCdXR0b25JdGVtKHsgJ2J0bkNsYXNzJzogJ2VkaXQtYnRuJyB9LCB7ICdpbWdDbGFzcyc6ICdlZGl0LWljb24nIH0sIHsgJ2ltZ1NyYyc6IGVkaXQgfSk7XG4gICAgY29uc3QgdGFza1JlbW92ZUJ0biA9IG5ld0J1dHRvbkl0ZW0oeyAnYnRuQ2xhc3MnOiAncmVtb3ZlLWJ0bicgfSwgeyAnaW1nQ2xhc3MnOiAndHJhc2gtaWNvbicgfSwgeyAnaW1nU3JjJzogdHJhc2ggfSk7XG5cbiAgICBjb25zdCB0YXNrSXRlbUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YXNrSXRlbUluZm8uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG5cbiAgICBjb25zdCB0YXNrSXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza0l0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgIHRhc2tJdGVtTmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ25hbWUnKTtcbiAgICB0YXNrSXRlbU5hbWUudGV4dENvbnRlbnQgPSB0YXNrT2JqLnRhc2submFtZTtcblxuICAgIGNvbnN0IHRhc2tJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrSXRlbURlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG4gICAgdGFza0l0ZW1EZXNjLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGVzYycpO1xuICAgIHRhc2tJdGVtRGVzYy50ZXh0Q29udGVudCA9IHRhc2tPYmoudGFzay5kZXNjO1xuXG4gICAgY29uc3QgdGFza0l0ZW1EYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tJdGVtRGF0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRhdGUnKTtcbiAgICB0YXNrSXRlbURhdGUuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgbGV0IGRhdGUgPSAnJztcbiAgICBpZiAoISF0YXNrT2JqLnRhc2suZGF0ZSkge1xuICAgICAgICBkYXRlID0gcGFyc2VEYXRlKHRhc2tPYmoudGFzay5kYXRlKTtcbiAgICB9XG4gICAgdGFza0l0ZW1EYXRlLnRleHRDb250ZW50ID0gZGF0ZTtcblxuICAgIHRhc2tJdGVtSW5mby5hcHBlbmQodGFza0l0ZW1OYW1lLCB0YXNrSXRlbURlc2MsIHRhc2tJdGVtRGF0ZSk7XG5cbiAgICBjb25zdCBzZWxlY3RlZFRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RlZCcpO1xuICAgIGlmIChzZWxlY3RlZFRhYi5kYXRhc2V0LmluZGV4ID09PSAndG9kYXknIHx8IHNlbGVjdGVkVGFiLmRhdGFzZXQuaW5kZXggPT09ICd1cGNvbWluZycpIHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW1Mb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0l0ZW1Mb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWxvY2F0aW9uJyk7XG4gICAgICAgIHRhc2tJdGVtTG9jYXRpb24uc2V0QXR0cmlidXRlKCdpZCcsICdsb2NhdGlvbicpO1xuICAgICAgICBjb25zdCB0YXNrTG9jYXRpb24gPSB0YXNrT2JqLnRhc2subG9jYXRpb24gIT09ICdpbmJveCcgPyBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKVt0YXNrT2JqLnRhc2subG9jYXRpb25dWyduYW1lJ10gOiAnaW5ib3gnO1xuICAgICAgICB0YXNrSXRlbUxvY2F0aW9uLnRleHRDb250ZW50ID0gdGFza0xvY2F0aW9uO1xuXG4gICAgICAgIHRhc2tJdGVtSW5mby5hcHBlbmQodGFza0l0ZW1Mb2NhdGlvbik7XG4gICAgfVxuXG4gICAgXG4gICAgdGFza0l0ZW0uYXBwZW5kKHRhc2tDb21wbGV0ZUJ0biwgdGFza0l0ZW1JbmZvLCB0YXNrRWRpdEJ0biwgdGFza1JlbW92ZUJ0bik7XG5cbiAgICByZXR1cm4gdGFza0l0ZW07XG59O1xuXG5mdW5jdGlvbiBuZXdCdXR0b25JdGVtKC4uLmF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGUpWzBdO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE9iamVjdC52YWx1ZXMoYXR0cmlidXRlKVswXTtcbiAgICAgICAgaWYoa2V5ID09PSAnYnRuQ2xhc3MnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaW1nQ2xhc3MnKSB7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaW1nU3JjJykge1xuICAgICAgICAgICAgaW1nLnNyYyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hcHBlbmQoaW1nKTtcblxuICAgIHJldHVybiBidXR0b247XG59O1xuXG5mdW5jdGlvbiBuZXdEYXRlSW5wdXQoKSB7XG4gICAgY29uc3QgZGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkYXRlSW5wdXQudHlwZSA9ICdkYXRlJztcbiAgICBkYXRlSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdkYXRlJyk7XG4gICAgZGF0ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgZ2V0RnVsbERhdGVGb3JJbnB1dChuZXcgRGF0ZSgpKSk7XG5cbiAgICByZXR1cm4gZGF0ZUlucHV0O1xufTtcblxuZnVuY3Rpb24gcGFyc2VEYXRlKF90YXNrRGF0ZSkge1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0aGlzWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICB0b2RheURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBjb25zdCB0b2RheUFuZE5leHRTZXZlbkRheXMgPSBbdG9kYXlEYXRlLmdldFRpbWUoKV07XG4gICAgbGV0IGRheSA9IHRvZGF5RGF0ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGRheSA9IGRheS5zZXREYXRlKGRheS5nZXREYXRlKCkgKyAxKVxuICAgICAgICBjb25zdCBuZXdEYXkgPSBkYXk7XG4gICAgICAgIHRvZGF5QW5kTmV4dFNldmVuRGF5cy5wdXNoKG5ld0RheSk7XG4gICAgICAgIGRheSA9IG5ldyBEYXRlKGRheSk7XG4gICAgfTtcbiAgICB0b2RheURhdGUgPSB0b2RheURhdGUuZ2V0VGltZSgpO1xuXG4gICAgLy8gdGFzayBkYXRlIGluZm9cbiAgICBsZXQgdGFza0RhdGUgPSBuZXcgRGF0ZShfdGFza0RhdGUpO1xuICAgIGxldCB0YXNrVGltZSA9IHRhc2tEYXRlLmdldFRpbWUoKTtcbiAgICBsZXQgc3RyaW5nID0gJyc7XG4gICAgdG9kYXlBbmROZXh0U2V2ZW5EYXlzLmZvckVhY2goKGRheSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGRheSA9PT0gdGFza1RpbWUpIHtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCkgc3RyaW5nID0gJ1RvZGF5JztcbiAgICAgICAgICAgIGVsc2UgaWYgKGluZGV4ID09PSAxKSBzdHJpbmcgPSAnVG9tb3Jyb3cnO1xuICAgICAgICAgICAgZWxzZSBzdHJpbmcgPSBuZXcgRGF0ZShkYXkpLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0JywgeyB3ZWVrZGF5OiAnbG9uZycgfSk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgaWYgKHN0cmluZyAhPT0gJycpIHJldHVybiBzdHJpbmc7XG4gICAgZWxzZSBpZiAodGhpc1llYXIgPT09IHRhc2tEYXRlLmdldEZ1bGxZZWFyKCkpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0YXNrRGF0ZS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIG9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICAgICAgeWVhcjogJ251bWVyaWMnLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGFza0RhdGUudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCBvcHRpb25zKTtcbiAgICB9XG5cbn07XG5cbmZ1bmN0aW9uIGdldEZ1bGxEYXRlRm9ySW5wdXQoZGF0ZSkge1xuICAgIGlmICghZGF0ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGRheSA9IChcIjBcIiArIGRhdGUuZ2V0RGF0ZSgpKS5zbGljZSgtMik7XG4gICAgY29uc3QgbW9udGggPSAoXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBmdWxsRGF0ZSA9IGRhdGUuZ2V0RnVsbFllYXIoKSArIFwiLVwiICsgKG1vbnRoKSArIFwiLVwiICsgKGRheSk7XG4gICAgcmV0dXJuIGZ1bGxEYXRlO1xufTtcblxuZXhwb3J0IHsgaW5ib3hUYXNrcywgdG9kYXlUYXNrcywgdXBjb21pbmdUYXNrcywgY29tcGxldGVkVGFza3MsIGluYm94VGFiLCB0b2RheVRhYiwgdXBjb21pbmdUYWIsIHByb2plY3RUYWIsIGN1cnJlbnRUYWIsIG5ld0RhdGVJbnB1dCB9OyIsImltcG9ydCAnLi4vc3R5bGVzL3NpZGViYXItc3R5bGUuY3NzJztcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5jb25zdCB0b2dnbGVTaWRlYmFyQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG5cblxuZnVuY3Rpb24gY29sbGFwc2VTaWRlYmFyKCkge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgnY29sbGFwc2VkJyk7XG4gICAgdG9nZ2xlU2lkZWJhckJ0bi5jbGFzc0xpc3QuYWRkKCdvZmZzZXQnKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlU2lkZWJhcigpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ2NvbGxhcHNlZCcpO1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgIHRvZ2dsZVNpZGViYXJCdG4uY2xhc3NMaXN0LnJlbW92ZSgnb2Zmc2V0Jyk7XG59XG5cbmV4cG9ydCB7IGNvbGxhcHNlU2lkZWJhciwgZW5hYmxlU2lkZWJhciB9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwLFxuXHRcInN0eWxlc1wiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RcIl0gPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19saXN0XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJzdHlsZXNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==