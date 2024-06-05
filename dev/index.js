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

/***/ "./src/styles/sidebar-style.css":
/*!**************************************!*\
  !*** ./src/styles/sidebar-style.css ***!
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
/* harmony import */ var _modules_domController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/domController.js */ "./src/modules/domController.js");
/* harmony import */ var _modules_locationDropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/locationDropdown.js */ "./src/modules/locationDropdown.js");
/* harmony import */ var _modules_tabs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tabs.js */ "./src/modules/tabs.js");








const main = document.querySelector('main');
const sidebar = document.querySelector('.sidebar');

// Start with Inbox model
(0,_modules_tabs_js__WEBPACK_IMPORTED_MODULE_6__.inboxTab)();
(0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateTaskCounter)()
;(0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateProjectList)();
(0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateFavoriteList)();

const section = document.querySelector('section');

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

const addTask = document.getElementById('add-task');
addTask.addEventListener('click', () => {
    newTaskModal.showModal();
    (0,_modules_locationDropdown_js__WEBPACK_IMPORTED_MODULE_5__["default"])();
});

const closeTaskModal = document.getElementById('close-task');
closeTaskModal.addEventListener('click', (e) => {
        newTaskModal.close();
    }
);

const submitTaskBtn = document.getElementById('submit-task');
const taskNameInput = document.getElementById('task-name');
taskNameInput.addEventListener('keyup', () => {
    if(taskNameInput.value === '') submitTaskBtn.disabled = true;
    else submitTaskBtn.disabled = false;
});

const taskLocationInput = document.getElementById('task-location');
const taskDescInput = document.getElementById('task-desc');
const taskDateInput = document.getElementById('task-date');
const categoryDiv = document.querySelector('.categories');
submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].add(taskNameInput.value, taskDescInput.value, taskDateInput.value, taskLocationInput.value);
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateTaskCounter)()
    newTaskModal.close();
    taskForm.reset();
    submitTaskBtn.disabled = true;
    const currentFilter = categoryDiv.querySelector('.selected')
    ;(0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.categoryItemDom)(currentFilter);
});


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
    newProjectModal.close();
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateProjectList)();
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateFavoriteList)();
    checkbox.value = 'false';
    projectForm.reset();
    buttons = categoryDiv.querySelectorAll('.tab');
});

let filters = categoryDiv.querySelector('.categ-filters');
let projectBtns = categoryDiv.querySelectorAll('.tab');
const filterBtns = filters.querySelectorAll('.tab');

// event listener for switching filters
filters.addEventListener('click', (e) => {
    projectBtns.forEach(b => b.classList.remove('selected'));
    filterBtns.forEach(b => b.classList.remove('selected'));
    e.target.closest('button').classList.add('selected');
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.categoryItemDom)(e.target.closest('button'));
})

// event listener for switching projects
projectItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if(e.target.classList.contains('project-options')) {
            console.log('To do options');
        } else {
            filterBtns.forEach(b => b.classList.remove('selected'));
            const projectIndex = e.target.closest('button').dataset.index;
            projectBtns.forEach(b => b.classList.remove('selected'));
            e.target.closest('button').classList.add('selected');
            (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.projectDom)(projectIndex); 
        }
    });
});


/***/ }),

/***/ "./src/modules/domController.js":
/*!**************************************!*\
  !*** ./src/modules/domController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoryItemDom: () => (/* binding */ categoryItemDom),
/* harmony export */   projectDom: () => (/* binding */ projectDom),
/* harmony export */   updateFavoriteList: () => (/* binding */ updateFavoriteList),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList),
/* harmony export */   updateTaskCounter: () => (/* binding */ updateTaskCounter)
/* harmony export */ });
/* harmony import */ var _tabs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.js */ "./src/modules/tabs.js");
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _assets_icons_hashtag_blue_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/hashtag-blue.svg */ "./src/assets/icons/hashtag-blue.svg");
/* harmony import */ var _assets_icons_hashtag_red_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/hashtag-red.svg */ "./src/assets/icons/hashtag-red.svg");
/* harmony import */ var _assets_icons_hashtag_coal_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/hashtag-coal.svg */ "./src/assets/icons/hashtag-coal.svg");
/* harmony import */ var _assets_icons_hashtag_lime_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/hashtag-lime.svg */ "./src/assets/icons/hashtag-lime.svg");
/* harmony import */ var _assets_icons_hashtag_mag_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/hashtag-mag.svg */ "./src/assets/icons/hashtag-mag.svg");
/* harmony import */ var _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/dots.svg */ "./src/assets/icons/dots.svg");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");











function categoryItemDom(button) {
    if(button.classList.contains('inbox')) {
        (0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__.inboxTab)();
    } else if (button.classList.contains('today')) {
        (0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__.todayTab)();
    } else if (button.classList.contains('upcoming')) {
        (0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__.upcomingTab)();
    }
}

function updateTaskCounter() {
    const categories = document.querySelector('.categories');
    const tabs = categories.querySelectorAll('.tab');

    tabs.forEach(tab => {
        const counter = tab.querySelector('.filter-count');
        if (tab.classList.contains('inbox')) {
            counter.textContent = (0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__.inboxTasks)().length;
        } else if (tab.classList.contains('today')) {
            counter.textContent = (0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__.todayTasks)().length;
        } else if (tab.classList.contains('upcoming')) {
            counter.textContent = (0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__.upcomingTasks)().length;
        }
    })
}

function projectDom(index) {
    const main = document.querySelector('main');
    main.textContent = '';
    main.append((0,_tabs_js__WEBPACK_IMPORTED_MODULE_0__.projectTab)(index));
};

function updateProjectList() {
    const list = document.querySelector('.my-projects');
    list.textContent = '';

    let projectArray = [];
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('projectArray')) projectArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('projectArray');
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
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('projectArray')) projectArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('projectArray');

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
            hash.src = _assets_icons_hashtag_blue_svg__WEBPACK_IMPORTED_MODULE_2__;
            break;
        case 'red':
            hash.src = _assets_icons_hashtag_red_svg__WEBPACK_IMPORTED_MODULE_3__;
            break;
        case 'charCoal':
            hash.src = _assets_icons_hashtag_coal_svg__WEBPACK_IMPORTED_MODULE_4__;
            break;
        case 'magenta':
            hash.src = _assets_icons_hashtag_mag_svg__WEBPACK_IMPORTED_MODULE_6__;
            break;
        case 'limeGreen':
            hash.src = _assets_icons_hashtag_lime_svg__WEBPACK_IMPORTED_MODULE_5__;
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
    optionsIcon.src = _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_7__;

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
                _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"].remove(item.dataset.index);
                return sectionDom();
            }
        })
    })
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
            element.date = element.date.setHours(0,0,0,0);
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
    const locationList = document.getElementById('task-location');

    const projects = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('projectArray');

    projects.forEach((project, index) => {
        const projectSelect = document.createElement('option');
        projectSelect.textContent = project.name;
        projectSelect.value = index;

        locationList.append(projectSelect);
    })
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

    const remove = (projectIndex) => {
        projectArray.splice(projectIndex, 1);
        return (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(projectArray, 'projectArray');
    }

    return { add, remove };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (project());

/***/ }),

/***/ "./src/modules/tabs.js":
/*!*****************************!*\
  !*** ./src/modules/tabs.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   inboxTab: () => (/* binding */ inboxTab),
/* harmony export */   inboxTasks: () => (/* binding */ inboxTasks),
/* harmony export */   projectTab: () => (/* binding */ projectTab),
/* harmony export */   todayTab: () => (/* binding */ todayTab),
/* harmony export */   todayTasks: () => (/* binding */ todayTasks),
/* harmony export */   upcomingTab: () => (/* binding */ upcomingTab),
/* harmony export */   upcomingTasks: () => (/* binding */ upcomingTasks)
/* harmony export */ });
/* harmony import */ var _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/circle.svg */ "./src/assets/icons/circle.svg");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");



const section = document.createElement('section');
const sectionTitle = document.createElement('h1');
const taskList = document.createElement('ul');
sectionTitle.classList.add('sectionTitle');

function inboxTasks() {
    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getStorage)('taskArray')) return (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getStorage)('taskArray');
    else return [];
}

function todayTasks() {
    let todayDate = new Date();
    todayDate = todayDate.setHours(0, 0, 0, 0);

    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getStorage)('taskArray')) return (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getStorage)('taskArray').filter(task => task.date === todayDate);
    else return [];
}

function upcomingTasks() {
    let todayDate = new Date();
    todayDate = todayDate.setHours(0, 0, 0, 0);

    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getStorage)('taskArray')) return (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getStorage)('taskArray').filter(task => task.date > todayDate);
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
        taskCompleteIcon.src = _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_0__;
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
        taskCompleteIcon.src = _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_0__;
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
        taskCompleteIcon.src = _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_0__;
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

    const project = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getStorage)('projectArray')[index];

    sectionTitle.classList.add('sectionTitle');
    sectionTitle.textContent = project.name;
    projectSection.setAttribute('id', project.name);
    projectSection.dataset.index = index;
    taskList.classList.add('task-list');

    let taskArray = [];

    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getStorage)('taskArray')) taskArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_1__.getStorage)('taskArray')

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
        taskCompleteIcon.src = _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_0__;
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
    }

    const add = (name, desc, _date, location) => {
        const date = new Date(_date);
        taskArray.push({ name, desc, date, location });
        return (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(taskArray, 'taskArray');
    }

    const remove = (taskIndex) => {
        taskArray.splice(taskIndex, 1);
        return (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.setStorage)(taskArray, 'taskArray');
    }

    return { add, remove };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (task());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXgtc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc2lkZWJhci1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2F0aW9uRHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2dnbGVTaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9pbmRleC1zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY29sbGFwc2VTaWRlYmFyLCBlbmFibGVTaWRlYmFyIH0gZnJvbSAnLi9tb2R1bGVzL3RvZ2dsZVNpZGViYXIuanMnO1xuaW1wb3J0IHRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2tzLmpzJztcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyB1cGRhdGVUYXNrQ291bnRlciwgY2F0ZWdvcnlJdGVtRG9tLCB1cGRhdGVQcm9qZWN0TGlzdCwgdXBkYXRlRmF2b3JpdGVMaXN0LCBwcm9qZWN0RG9tIH0gZnJvbSAnLi9tb2R1bGVzL2RvbUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHVwZGF0ZUxvY2F0aW9uRHJvcGRvd24gZnJvbSAnLi9tb2R1bGVzL2xvY2F0aW9uRHJvcGRvd24uanMnO1xuaW1wb3J0IHsgaW5ib3hUYWIgfSBmcm9tICcuL21vZHVsZXMvdGFicy5qcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcblxuLy8gU3RhcnQgd2l0aCBJbmJveCBtb2RlbFxuaW5ib3hUYWIoKTtcbnVwZGF0ZVRhc2tDb3VudGVyKClcbnVwZGF0ZVByb2plY3RMaXN0KCk7XG51cGRhdGVGYXZvcml0ZUxpc3QoKTtcblxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHRvZ2dsaW5nIHNpZGViYXJcbmNvbnN0IHRvZ2dsZVNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcbnRvZ2dsZVNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2VkJykpIHtcbiAgICAgICAgZW5hYmxlU2lkZWJhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlU2lkZWJhcigpO1xuICAgIH1cbn0pO1xuXG4vLyBldmVudCBsaXN0ZW5lcnMgZm9yIGFkZGluZyB0YXNrc1xuY29uc3QgbmV3VGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2stbW9kYWwnKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2stZm9ybScpO1xuXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJyk7XG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1Rhc2tNb2RhbC5zaG93TW9kYWwoKTtcbiAgICB1cGRhdGVMb2NhdGlvbkRyb3Bkb3duKCk7XG59KTtcblxuY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtdGFzaycpO1xuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBuZXdUYXNrTW9kYWwuY2xvc2UoKTtcbiAgICB9XG4pO1xuXG5jb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10YXNrJyk7XG5jb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpO1xudGFza05hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBpZih0YXNrTmFtZUlucHV0LnZhbHVlID09PSAnJykgc3VibWl0VGFza0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZWxzZSBzdWJtaXRUYXNrQnRuLmRpc2FibGVkID0gZmFsc2U7XG59KTtcblxuY29uc3QgdGFza0xvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1sb2NhdGlvbicpO1xuY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2MnKTtcbmNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJyk7XG5jb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzJyk7XG5zdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFzay5hZGQodGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0Rlc2NJbnB1dC52YWx1ZSwgdGFza0RhdGVJbnB1dC52YWx1ZSwgdGFza0xvY2F0aW9uSW5wdXQudmFsdWUpO1xuICAgIHVwZGF0ZVRhc2tDb3VudGVyKClcbiAgICBuZXdUYXNrTW9kYWwuY2xvc2UoKTtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgIHN1Ym1pdFRhc2tCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IGN1cnJlbnRGaWx0ZXIgPSBjYXRlZ29yeURpdi5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxuICAgIGNhdGVnb3J5SXRlbURvbShjdXJyZW50RmlsdGVyKTtcbn0pO1xuXG5cbi8vIGV2ZW50IGxpc3RlbmVycyBmb3IgYWRkaW5nIHByb2plY3RzXG5jb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdC1tb2RhbCcpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdC1mb3JtJyk7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3UHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xufSk7XG5cbmNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgY2hlY2tib3gudmFsdWUgPT09ICdmYWxzZScgPyBjaGVja2JveC52YWx1ZSA9ICd0cnVlJyA6IGNoZWNrYm94LnZhbHVlID0gJ2ZhbHNlJztcbn0pXG5cbmNvbnN0IGNsb3NlUHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXByb2plY3QnKTtcbmNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBuZXdQcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICBjaGVja2JveC52YWx1ZSA9ICdmYWxzZSc7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xufSk7XG5cbmNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXByb2plY3QnKTtcbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG5wcm9qZWN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0TmFtZUlucHV0LnZhbHVlID09PSAnJykgc3VibWl0UHJvamVjdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZWxzZSBzdWJtaXRQcm9qZWN0QnRuLmRpc2FibGVkID0gZmFsc2U7XG59KTtcblxuY29uc3QgcHJvamVjdENvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jb2xvcicpO1xuY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbGlzdCcpO1xuc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3QuYWRkKHByb2plY3ROYW1lSW5wdXQudmFsdWUsIHByb2plY3RDb2xvcklucHV0LnZhbHVlLCBjaGVja2JveC52YWx1ZSk7XG4gICAgbmV3UHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICB1cGRhdGVGYXZvcml0ZUxpc3QoKTtcbiAgICBjaGVja2JveC52YWx1ZSA9ICdmYWxzZSc7XG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBidXR0b25zID0gY2F0ZWdvcnlEaXYucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xufSk7XG5cbmxldCBmaWx0ZXJzID0gY2F0ZWdvcnlEaXYucXVlcnlTZWxlY3RvcignLmNhdGVnLWZpbHRlcnMnKTtcbmxldCBwcm9qZWN0QnRucyA9IGNhdGVnb3J5RGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbmNvbnN0IGZpbHRlckJ0bnMgPSBmaWx0ZXJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHN3aXRjaGluZyBmaWx0ZXJzXG5maWx0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKGIgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICBmaWx0ZXJCdG5zLmZvckVhY2goYiA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgY2F0ZWdvcnlJdGVtRG9tKGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpKTtcbn0pXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBzd2l0Y2hpbmcgcHJvamVjdHNcbnByb2plY3RJdGVtcy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgdGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcm9qZWN0LW9wdGlvbnMnKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RvIGRvIG9wdGlvbnMnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpbHRlckJ0bnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgcHJvamVjdEJ0bnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgICAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgcHJvamVjdERvbShwcm9qZWN0SW5kZXgpOyBcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCJpbXBvcnQgeyBpbmJveFRhYiwgdG9kYXlUYWIsIHVwY29taW5nVGFiIH0gZnJvbSAnLi90YWJzLmpzJztcbmltcG9ydCB0YXNrIGZyb20gJy4uL21vZHVsZXMvdGFza3MuanMnO1xuaW1wb3J0IGhhc2h0YWdCbHVlIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWJsdWUuc3ZnJztcbmltcG9ydCBoYXNodGFnUmVkIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLXJlZC5zdmcnO1xuaW1wb3J0IGhhc2h0YWdDb2FsIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWNvYWwuc3ZnJztcbmltcG9ydCBoYXNodGFnTGltZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvaGFzaHRhZy1saW1lLnN2Zyc7XG5pbXBvcnQgaGFzaHRhZ01hZyBmcm9tICcuLi9hc3NldHMvaWNvbnMvaGFzaHRhZy1tYWcuc3ZnJztcbmltcG9ydCBkb3RzIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9kb3RzLnN2Zyc7XG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgaW5ib3hUYXNrcywgdG9kYXlUYXNrcywgdXBjb21pbmdUYXNrcywgcHJvamVjdFRhYiB9IGZyb20gJy4vdGFicy5qcyc7XG5cbmZ1bmN0aW9uIGNhdGVnb3J5SXRlbURvbShidXR0b24pIHtcbiAgICBpZihidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmJveCcpKSB7XG4gICAgICAgIGluYm94VGFiKCk7XG4gICAgfSBlbHNlIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RheScpKSB7XG4gICAgICAgIHRvZGF5VGFiKCk7XG4gICAgfSBlbHNlIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCd1cGNvbWluZycpKSB7XG4gICAgICAgIHVwY29taW5nVGFiKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrQ291bnRlcigpIHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMnKTtcbiAgICBjb25zdCB0YWJzID0gY2F0ZWdvcmllcy5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IHRhYi5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWNvdW50Jyk7XG4gICAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmJveCcpKSB7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gaW5ib3hUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RheScpKSB7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gdG9kYXlUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCd1cGNvbWluZycpKSB7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gdXBjb21pbmdUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3REb20oaW5kZXgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZChwcm9qZWN0VGFiKGluZGV4KSk7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LXByb2plY3RzJyk7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKSkgcHJvamVjdEFycmF5ID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG4gICAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5Lm1hcCgocHJvamVjdCwgaW5kZXgpID0+ICh7IHByb2plY3QsIGluZGV4IH0pKTtcblxuICAgIHByb2plY3RBcnJheS5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBidG4gPSBuZXdQcm9qZWN0QnRuKHByb2plY3QpO1xuICAgICAgICBsaXN0LmFwcGVuZChidG4pO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUZhdm9yaXRlTGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlLWl0ZW1zJyk7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKSkgcHJvamVjdEFycmF5ID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG5cbiAgICBjb25zdCBmYXZQcm9qZWN0cyA9IHByb2plY3RBcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoeyBwcm9qZWN0LCBpbmRleCB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IHByb2plY3QgfSkgPT4gcHJvamVjdC5mYXZvcml0ZSA9PT0gdHJ1ZSk7XG4gICAgXG4gICAgZmF2UHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gbmV3UHJvamVjdEJ0bihwcm9qZWN0KTtcbiAgICAgICAgbGlzdC5hcHBlbmQoYnRuKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0QnRuKHBybykge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgYnRuLmRhdGFzZXQuaW5kZXggPSBwcm8uaW5kZXg7XG5cbiAgICBjb25zdCBoYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGFzaC5jbGFzc0xpc3QuYWRkKCdoYXNoJyk7XG5cbiAgICBzd2l0Y2ggKHByby5wcm9qZWN0LmNvbG9yKSB7XG4gICAgICAgIGNhc2UgJ3NreUJsdWUnOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnQmx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWQnOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnUmVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NoYXJDb2FsJzpcbiAgICAgICAgICAgIGhhc2guc3JjID0gaGFzaHRhZ0NvYWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWFnZW50YSc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdNYWc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGltZUdyZWVuJzpcbiAgICAgICAgICAgIGhhc2guc3JjID0gaGFzaHRhZ0xpbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IHByby5wcm9qZWN0Lm5hbWU7XG5cbiAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG9wdGlvbnNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgb3B0aW9uc0J0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKTtcbiAgICBvcHRpb25zSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKTtcbiAgICBvcHRpb25zSWNvbi5zcmMgPSBkb3RzO1xuXG4gICAgb3B0aW9uc0J0bi5hcHBlbmQob3B0aW9uc0ljb24pO1xuXG4gICAgYnRuLmFwcGVuZChoYXNoLCBwLCB0YXNrQ291bnQsIG9wdGlvbnNCdG4pO1xuICAgIHJldHVybiBidG47XG59O1xuXG4vLyBFdmVudCBsaXN0ZW5lcnMgZm9yIHJlbW92aW5nIHRhc2tzXG5mdW5jdGlvbiB0YXNrTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBsaXN0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtQnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgICAgaXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2staXRlbScpKSB7XG4gICAgICAgICAgICAgICAgdGFzay5yZW1vdmUoaXRlbS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbkRvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IHVwZGF0ZVRhc2tDb3VudGVyLCBjYXRlZ29yeUl0ZW1Eb20sIHVwZGF0ZVByb2plY3RMaXN0LCB1cGRhdGVGYXZvcml0ZUxpc3QsIHByb2plY3REb20gfTsiLCIvLyBUQVNLUyAmIFBST0pFQ1RTXG5mdW5jdGlvbiBzZXRTdG9yYWdlKGl0ZW0sIG5hbWUpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShuYW1lLCBKU09OLnN0cmluZ2lmeShpdGVtKSk7XG59O1xuXG5mdW5jdGlvbiBnZXRTdG9yYWdlKG5hbWUpIHtcbiAgICBsZXQgc2F2ZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShuYW1lKTtcbiAgICBpZiAoIXNhdmVkKSByZXR1cm4gZmFsc2U7XG5cbiAgICBzYXZlZCA9IEpTT04ucGFyc2Uoc2F2ZWQpO1xuICAgIHNhdmVkID0gT2JqZWN0LnZhbHVlcyhzYXZlZCk7XG5cbiAgICBzYXZlZC5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICBpZiAoJ2RhdGUnIGluIGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0ZSA9IG5ldyBEYXRlKGVsZW1lbnQuZGF0ZSk7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGUgPSBlbGVtZW50LmRhdGUuc2V0SG91cnMoMCwwLDAsMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzYXZlZDtcbn07XG5cbmV4cG9ydCB7IHNldFN0b3JhZ2UsIGdldFN0b3JhZ2UgfTsiLCJpbXBvcnQgeyBzZXRTdG9yYWdlLCBnZXRTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uRHJvcGRvd24oKSB7XG4gICAgY29uc3QgbG9jYXRpb25MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbG9jYXRpb24nKTtcblxuICAgIGNvbnN0IHByb2plY3RzID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgIHByb2plY3RTZWxlY3QudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBpbmRleDtcblxuICAgICAgICBsb2NhdGlvbkxpc3QuYXBwZW5kKHByb2plY3RTZWxlY3QpO1xuICAgIH0pXG59OyIsImltcG9ydCB7IHNldFN0b3JhZ2UsIGdldFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuLy8gcHJvamVjdCBvYmplY3RzXG5jb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0QXJyYXk7XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpID09PSBmYWxzZSkge1xuICAgICAgICBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0QXJyYXkgPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGQgPSAobmFtZSwgY29sb3IsIGZhdikgPT4ge1xuICAgICAgICBjb25zdCBmYXZvcml0ZSA9IChmYXYgPT09ICd0cnVlJyk7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHsgbmFtZSwgY29sb3IsIGZhdm9yaXRlIH0pO1xuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZShwcm9qZWN0QXJyYXksICdwcm9qZWN0QXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmUgPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UocHJvamVjdEFycmF5LCAncHJvamVjdEFycmF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCByZW1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3QoKTsiLCJpbXBvcnQgY2lyY2xlIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jaXJjbGUuc3ZnJztcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZSc7XG5cbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG5jb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuc2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25UaXRsZScpO1xuXG5mdW5jdGlvbiBpbmJveFRhc2tzKCkge1xuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSkgcmV0dXJuIGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpO1xuICAgIGVsc2UgcmV0dXJuIFtdO1xufVxuXG5mdW5jdGlvbiB0b2RheVRhc2tzKCkge1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSkgcmV0dXJuIGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpLmZpbHRlcih0YXNrID0+IHRhc2suZGF0ZSA9PT0gdG9kYXlEYXRlKTtcbiAgICBlbHNlIHJldHVybiBbXTtcbn1cblxuZnVuY3Rpb24gdXBjb21pbmdUYXNrcygpIHtcbiAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0b2RheURhdGUgPSB0b2RheURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykpIHJldHVybiBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKS5maWx0ZXIodGFzayA9PiB0YXNrLmRhdGUgPiB0b2RheURhdGUpO1xuICAgIGVsc2UgcmV0dXJuIFtdO1xufVxuXG5mdW5jdGlvbiBpbmJveFRhYigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAnaW5ib3gnKTtcbiAgICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stbGlzdCcpO1xuXG4gICAgLy8gZ2V0IHRhc2tzIGZyb20gc3RvcmFnZVxuICAgIGxldCB0YXNrcyA9IGluYm94VGFza3MoKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIHRhc2tJdGVtLmRhdGFzZXQuaW5kZXggPSBpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtYnRuJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0NvbXBsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1pY29uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUljb24uc3JjID0gY2lyY2xlO1xuICAgICAgICB0YXNrQ29tcGxldGVCdG4uYXBwZW5kKHRhc2tDb21wbGV0ZUljb24pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSXRlbUluZm8uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0l0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrSXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgICAgIHRhc2tJdGVtTmFtZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLm5hbWU7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0l0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzYycpO1xuICAgICAgICB0YXNrSXRlbURlc2MudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5kZXNjO1xuXG4gICAgICAgIHRhc2tJdGVtSW5mby5hcHBlbmQodGFza0l0ZW1OYW1lLCB0YXNrSXRlbURlc2MpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmQodGFza0NvbXBsZXRlQnRuLCB0YXNrSXRlbUluZm8pO1xuXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfVxuXG4gICAgc2VjdGlvbi5hcHBlbmQoc2VjdGlvblRpdGxlLCB0YXNrTGlzdCk7XG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG59O1xuXG5mdW5jdGlvbiB0b2RheVRhYigpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXknKTtcbiAgICB0YXNrTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2stbGlzdCcpO1xuXG4gICAgbGV0IHRhc2tzID0gdG9kYXlUYXNrcygpO1xuXG4gICAgLy8gZHluYW1pY2FsbHkgY3JlYXRlIHRhc2tzIGxpc3QgaXRlbXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhc2tzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIHRhc2tJdGVtLmRhdGFzZXQuaW5kZXggPSBpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtYnRuJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0NvbXBsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1pY29uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUljb24uc3JjID0gY2lyY2xlO1xuICAgICAgICB0YXNrQ29tcGxldGVCdG4uYXBwZW5kKHRhc2tDb21wbGV0ZUljb24pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSXRlbUluZm8uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0l0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrSXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgICAgIHRhc2tJdGVtTmFtZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLm5hbWU7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0l0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzYycpO1xuICAgICAgICB0YXNrSXRlbURlc2MudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5kZXNjO1xuXG4gICAgICAgIHRhc2tJdGVtSW5mby5hcHBlbmQodGFza0l0ZW1OYW1lLCB0YXNrSXRlbURlc2MpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmQodGFza0NvbXBsZXRlQnRuLCB0YXNrSXRlbUluZm8pO1xuXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfVxuXG4gICAgc2VjdGlvbi5hcHBlbmQoc2VjdGlvblRpdGxlLCB0YXNrTGlzdCk7XG5cbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn07XG5cbmZ1bmN0aW9uIHVwY29taW5nVGFiKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnVXBjb21pbmcnO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICd1cGNvbWluZycpO1xuICAgIHRhc2tMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1saXN0Jyk7XG5cbiAgICBsZXQgdGFza3MgPSB1cGNvbWluZ1Rhc2tzKCk7XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgdGFza3MgbGlzdCBpdGVtc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgdGFza0l0ZW0uZGF0YXNldC5pbmRleCA9IHRhc2tzLmluZGV4O1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtYnRuJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0NvbXBsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1pY29uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUljb24uc3JjID0gY2lyY2xlO1xuICAgICAgICB0YXNrQ29tcGxldGVCdG4uYXBwZW5kKHRhc2tDb21wbGV0ZUljb24pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSXRlbUluZm8uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0l0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrSXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgICAgIHRhc2tJdGVtTmFtZS50ZXh0Q29udGVudCA9IHRhc2tzW2ldLnRhc2submFtZTtcbiAgICAgICAgY29uc3QgdGFza0l0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrSXRlbURlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG4gICAgICAgIHRhc2tJdGVtRGVzYy50ZXh0Q29udGVudCA9IHRhc2tzW2ldLnRhc2suZGVzYztcblxuICAgICAgICB0YXNrSXRlbUluZm8uYXBwZW5kKHRhc2tJdGVtTmFtZSwgdGFza0l0ZW1EZXNjKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kKHRhc2tDb21wbGV0ZUJ0biwgdGFza0l0ZW1JbmZvKTtcblxuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH1cblxuICAgIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuXG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG59O1xuXG5mdW5jdGlvbiBwcm9qZWN0VGFiKGluZGV4KSB7XG4gICAgY29uc3QgcHJvamVjdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5JylbaW5kZXhdO1xuXG4gICAgc2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25UaXRsZScpO1xuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICBwcm9qZWN0U2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdC5uYW1lKTtcbiAgICBwcm9qZWN0U2VjdGlvbi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG5cbiAgICBsZXQgdGFza0FycmF5ID0gW107XG5cbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykpIHRhc2tBcnJheSA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpXG5cbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSB0YXNrQXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5sb2NhdGlvbiA9PT0gaW5kZXgpO1xuXG4gICAgLy8gZHluYW1pY2FsbHkgY3JlYXRlIHRhc2tzIGxpc3QgaXRlbXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RUYXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICB0YXNrSXRlbS5kYXRhc2V0LmluZGV4ID0gaTtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlLWJ0bicpO1xuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnY2hlY2staWNvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVJY29uLnNyYyA9IGNpcmNsZTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnRuLmFwcGVuZCh0YXNrQ29tcGxldGVJY29uKTtcblxuICAgICAgICBjb25zdCB0YXNrSXRlbUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0l0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0l0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgICAgICB0YXNrSXRlbU5hbWUudGV4dENvbnRlbnQgPSB0YXNrQXJyYXlbaV0ubmFtZTtcbiAgICAgICAgY29uc3QgdGFza0l0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrSXRlbURlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG4gICAgICAgIHRhc2tJdGVtRGVzYy50ZXh0Q29udGVudCA9IHRhc2tBcnJheVtpXS5kZXNjO1xuXG4gICAgICAgIHRhc2tJdGVtSW5mby5hcHBlbmQodGFza0l0ZW1OYW1lLCB0YXNrSXRlbURlc2MpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmQodGFza0NvbXBsZXRlQnRuLCB0YXNrSXRlbUluZm8pO1xuXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfVxuXG4gICAgcHJvamVjdFNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuXG4gICAgcmV0dXJuIHByb2plY3RTZWN0aW9uO1xufVxuXG5leHBvcnQgeyBpbmJveFRhc2tzLCB0b2RheVRhc2tzLCB1cGNvbWluZ1Rhc2tzLCBpbmJveFRhYiwgdG9kYXlUYWIsIHVwY29taW5nVGFiLCBwcm9qZWN0VGFiIH07IiwiaW1wb3J0IHsgZ2V0U3RvcmFnZSwgc2V0U3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG4vLyB0YXNrIG9iamVjdHNcbmNvbnN0IHRhc2sgPSAoKSA9PiB7XG5cbiAgICBsZXQgdGFza0FycmF5O1xuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGFza0FycmF5ID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0FycmF5ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkID0gKG5hbWUsIGRlc2MsIF9kYXRlLCBsb2NhdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoX2RhdGUpO1xuICAgICAgICB0YXNrQXJyYXkucHVzaCh7IG5hbWUsIGRlc2MsIGRhdGUsIGxvY2F0aW9uIH0pO1xuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZSh0YXNrQXJyYXksICd0YXNrQXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmUgPSAodGFza0luZGV4KSA9PiB7XG4gICAgICAgIHRhc2tBcnJheS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UodGFza0FycmF5LCAndGFza0FycmF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCByZW1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2soKTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zaWRlYmFyLXN0eWxlLmNzcyc7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3QgdG9nZ2xlU2lkZWJhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xuXG5cbmZ1bmN0aW9uIGNvbGxhcHNlU2lkZWJhcigpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgIHRvZ2dsZVNpZGViYXJCdG4uY2xhc3NMaXN0LmFkZCgnb2Zmc2V0Jyk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVNpZGViYXIoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB0b2dnbGVTaWRlYmFyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29mZnNldCcpO1xufVxuXG5leHBvcnQgeyBjb2xsYXBzZVNpZGViYXIsIGVuYWJsZVNpZGViYXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJzdHlsZXNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=