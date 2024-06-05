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

/***/ "./src/styles/inbox-style.css":
/*!************************************!*\
  !*** ./src/styles/inbox-style.css ***!
  \************************************/
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
submitProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__["default"].add(projectNameInput.value, projectColorInput.value, checkbox.value);
    newProjectModal.close();
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateProjectList)();
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateFavoriteList)();
    projectForm.reset();
});


// event listener for switching tabs
const buttons = categoryDiv.querySelectorAll('.tab');
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.categoryItemDom)(btn);
    })
})


// event listener for switching projects
const projectItems = document.querySelector('.project-items');
projectItems.addEventListener('click', (e) => {
    const projectIndex = e.target.dataset.index;
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.projectDom)(projectIndex);
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
/* harmony import */ var _modules_myProjectItem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/myProjectItem.js */ "./src/modules/myProjectItem.js");
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/projects.js */ "./src/modules/projects.js");
/* harmony import */ var _assets_icons_hashtag_blue_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/hashtag-blue.svg */ "./src/assets/icons/hashtag-blue.svg");
/* harmony import */ var _assets_icons_hashtag_red_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/hashtag-red.svg */ "./src/assets/icons/hashtag-red.svg");
/* harmony import */ var _assets_icons_hashtag_coal_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/hashtag-coal.svg */ "./src/assets/icons/hashtag-coal.svg");
/* harmony import */ var _assets_icons_hashtag_lime_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/hashtag-lime.svg */ "./src/assets/icons/hashtag-lime.svg");
/* harmony import */ var _assets_icons_hashtag_mag_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/icons/hashtag-mag.svg */ "./src/assets/icons/hashtag-mag.svg");
/* harmony import */ var _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/dots.svg */ "./src/assets/icons/dots.svg");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");













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
    main.append((0,_modules_myProjectItem_js__WEBPACK_IMPORTED_MODULE_1__["default"])(index));
};

function updateProjectList() {
    const list = document.querySelector('.project-items');
    list.textContent = '';

    let projectArray = [];
    if((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_10__.getStorage)('projectArray')) projectArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_10__.getStorage)('projectArray');


    for(let i = 0; i < projectArray.length; i++) {
        const btn = newProjectBtn(projectArray, i);

        list.append(btn);
    };
}

function updateFavoriteList() {
    const list = document.querySelector('.favorite-items');
    list.textContent = '';

    let projectArray = [];
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_10__.getStorage)('projectArray')) projectArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_10__.getStorage)('projectArray');

    const favProjects = projectArray.filter(pro => pro.favorite === true);

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
            hash.src = _assets_icons_hashtag_blue_svg__WEBPACK_IMPORTED_MODULE_4__;
            break;
        case 'red':
            hash.src = _assets_icons_hashtag_red_svg__WEBPACK_IMPORTED_MODULE_5__;
            break;
        case 'charCoal':
            hash.src = _assets_icons_hashtag_coal_svg__WEBPACK_IMPORTED_MODULE_6__;
            break;
        case 'magenta':
            hash.src = _assets_icons_hashtag_mag_svg__WEBPACK_IMPORTED_MODULE_8__;
            break;
        case 'limeGreen':
            hash.src = _assets_icons_hashtag_lime_svg__WEBPACK_IMPORTED_MODULE_7__;
            break;
    }

    const p = document.createElement('p');
    p.classList.add('project-name');
    p.textContent = array[index].name;

    const taskCount = document.createElement('p');
    const optionsBtn = document.createElement('button');
    optionsBtn.classList.add('project-options');
    const optionsIcon = document.createElement('img');
    optionsIcon.src = _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_9__;
    optionsBtn.addEventListener('click', () => {
        console.log('test');
    })

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
                _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].remove(item.dataset.index);
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

/***/ "./src/modules/myProjectItem.js":
/*!**************************************!*\
  !*** ./src/modules/myProjectItem.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ projectTab)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");
/* harmony import */ var _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/circle.svg */ "./src/assets/icons/circle.svg");




function projectTab(index) {
    const projectSection = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const taskList = document.createElement('ul');

    const project = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getStorage)('projectArray')[index];

    sectionTitle.classList.add('sectionTitle');
    sectionTitle.textContent = project.name;
    projectSection.setAttribute('id', project.name);
    projectSection.dataset.index = index;
    taskList.classList.add('task-list');

    let taskArray = [];

    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getStorage)('taskArray')) taskArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_0__.getStorage)('taskArray')

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
        taskCompleteIcon.src = _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__;
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
/* harmony export */   todayTab: () => (/* binding */ todayTab),
/* harmony export */   todayTasks: () => (/* binding */ todayTasks),
/* harmony export */   upcomingTab: () => (/* binding */ upcomingTab),
/* harmony export */   upcomingTasks: () => (/* binding */ upcomingTasks)
/* harmony export */ });
/* harmony import */ var _styles_inbox_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/inbox-style.css */ "./src/styles/inbox-style.css");
/* harmony import */ var _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/circle.svg */ "./src/assets/icons/circle.svg");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");




const section = document.createElement('section');
const sectionTitle = document.createElement('h1');
const taskList = document.createElement('ul');
sectionTitle.classList.add('sectionTitle');

function inboxTasks() {
    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getStorage)('taskArray')) return (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getStorage)('taskArray');
    else return [];
}

function todayTasks() {
    let todayDate = new Date();
    todayDate = todayDate.setHours(0, 0, 0, 0);

    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getStorage)('taskArray')) return (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getStorage)('taskArray').filter(task => task.date === todayDate);
    else return [];
}

function upcomingTasks() {
    let todayDate = new Date();
    todayDate = todayDate.setHours(0, 0, 0, 0);

    if ((0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getStorage)('taskArray')) return (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getStorage)('taskArray').filter(task => task.date > todayDate);
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
        taskCompleteIcon.src = _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__;
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
        taskCompleteIcon.src = _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__;
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
        taskItem.dataset.index = i;

        const taskCompleteBtn = document.createElement('button');
        taskCompleteBtn.classList.add('complete-btn');
        const taskCompleteIcon = document.createElement('img');
        taskCompleteIcon.classList.add('check-icon');
        taskCompleteIcon.src = _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWpEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL2luYm94LXN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3NpZGViYXItc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2NhdGlvbkRyb3Bkb3duLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL215UHJvamVjdEl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFicy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2dnbGVTaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9pbmRleC1zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY29sbGFwc2VTaWRlYmFyLCBlbmFibGVTaWRlYmFyIH0gZnJvbSAnLi9tb2R1bGVzL3RvZ2dsZVNpZGViYXIuanMnO1xuaW1wb3J0IHRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2tzLmpzJztcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyB1cGRhdGVUYXNrQ291bnRlciwgY2F0ZWdvcnlJdGVtRG9tLCB1cGRhdGVQcm9qZWN0TGlzdCwgdXBkYXRlRmF2b3JpdGVMaXN0LCBwcm9qZWN0RG9tIH0gZnJvbSAnLi9tb2R1bGVzL2RvbUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHVwZGF0ZUxvY2F0aW9uRHJvcGRvd24gZnJvbSAnLi9tb2R1bGVzL2xvY2F0aW9uRHJvcGRvd24uanMnO1xuaW1wb3J0IHsgaW5ib3hUYWIgfSBmcm9tICcuL21vZHVsZXMvdGFicy5qcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcblxuLy8gU3RhcnQgd2l0aCBJbmJveCBtb2RlbFxuaW5ib3hUYWIoKTtcbnVwZGF0ZVRhc2tDb3VudGVyKClcbnVwZGF0ZVByb2plY3RMaXN0KCk7XG51cGRhdGVGYXZvcml0ZUxpc3QoKTtcblxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHRvZ2dsaW5nIHNpZGViYXJcbmNvbnN0IHRvZ2dsZVNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcbnRvZ2dsZVNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2VkJykpIHtcbiAgICAgICAgZW5hYmxlU2lkZWJhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlU2lkZWJhcigpO1xuICAgIH1cbn0pO1xuXG4vLyBldmVudCBsaXN0ZW5lcnMgZm9yIGFkZGluZyB0YXNrc1xuY29uc3QgbmV3VGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2stbW9kYWwnKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2stZm9ybScpO1xuXG5jb25zdCBhZGRUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FkZC10YXNrJyk7XG5hZGRUYXNrLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1Rhc2tNb2RhbC5zaG93TW9kYWwoKTtcbiAgICB1cGRhdGVMb2NhdGlvbkRyb3Bkb3duKCk7XG59KTtcblxuY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtdGFzaycpO1xuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBuZXdUYXNrTW9kYWwuY2xvc2UoKTtcbiAgICB9XG4pO1xuXG5jb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10YXNrJyk7XG5jb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpO1xudGFza05hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBpZih0YXNrTmFtZUlucHV0LnZhbHVlID09PSAnJykgc3VibWl0VGFza0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZWxzZSBzdWJtaXRUYXNrQnRuLmRpc2FibGVkID0gZmFsc2U7XG59KTtcblxuY29uc3QgdGFza0xvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1sb2NhdGlvbicpO1xuY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2MnKTtcbmNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJyk7XG5jb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzJyk7XG5zdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFzay5hZGQodGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0Rlc2NJbnB1dC52YWx1ZSwgdGFza0RhdGVJbnB1dC52YWx1ZSwgdGFza0xvY2F0aW9uSW5wdXQudmFsdWUpO1xuICAgIHVwZGF0ZVRhc2tDb3VudGVyKClcbiAgICBuZXdUYXNrTW9kYWwuY2xvc2UoKTtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgIHN1Ym1pdFRhc2tCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGNvbnN0IGN1cnJlbnRGaWx0ZXIgPSBjYXRlZ29yeURpdi5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0ZWQnKVxuICAgIGNhdGVnb3J5SXRlbURvbShjdXJyZW50RmlsdGVyKTtcbn0pO1xuXG5cbi8vIGV2ZW50IGxpc3RlbmVycyBmb3IgYWRkaW5nIHByb2plY3RzXG5jb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdC1tb2RhbCcpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdC1mb3JtJyk7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3UHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xufSk7XG5cbmNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgY2hlY2tib3gudmFsdWUgPT09ICdmYWxzZScgPyBjaGVja2JveC52YWx1ZSA9ICd0cnVlJyA6IGNoZWNrYm94LnZhbHVlID0gJ2ZhbHNlJztcbn0pXG5cbmNvbnN0IGNsb3NlUHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXByb2plY3QnKTtcbmNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBuZXdQcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICBjaGVja2JveC52YWx1ZSA9ICdmYWxzZSc7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xufSk7XG5cbmNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXByb2plY3QnKTtcbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG5wcm9qZWN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0TmFtZUlucHV0LnZhbHVlID09PSAnJykgc3VibWl0UHJvamVjdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZWxzZSBzdWJtaXRQcm9qZWN0QnRuLmRpc2FibGVkID0gZmFsc2U7XG59KTtcblxuY29uc3QgcHJvamVjdENvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jb2xvcicpO1xuc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3QuYWRkKHByb2plY3ROYW1lSW5wdXQudmFsdWUsIHByb2plY3RDb2xvcklucHV0LnZhbHVlLCBjaGVja2JveC52YWx1ZSk7XG4gICAgbmV3UHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICB1cGRhdGVGYXZvcml0ZUxpc3QoKTtcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xufSk7XG5cblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHN3aXRjaGluZyB0YWJzXG5jb25zdCBidXR0b25zID0gY2F0ZWdvcnlEaXYucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuYnV0dG9ucy5mb3JFYWNoKGJ0biA9PiB7XG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKGIgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGNhdGVnb3J5SXRlbURvbShidG4pO1xuICAgIH0pXG59KVxuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBzd2l0Y2hpbmcgcHJvamVjdHNcbmNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWl0ZW1zJyk7XG5wcm9qZWN0SXRlbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJbmRleCA9IGUudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gICAgcHJvamVjdERvbShwcm9qZWN0SW5kZXgpO1xufSk7IiwiaW1wb3J0IHsgaW5ib3hUYWIsIHRvZGF5VGFiLCB1cGNvbWluZ1RhYiB9IGZyb20gJy4vdGFicy5qcyc7XG5pbXBvcnQgcHJvamVjdFRhYiBmcm9tICcuLi9tb2R1bGVzL215UHJvamVjdEl0ZW0uanMnXG5pbXBvcnQgdGFzayBmcm9tICcuLi9tb2R1bGVzL3Rhc2tzLmpzJztcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4uL21vZHVsZXMvcHJvamVjdHMuanMnO1xuaW1wb3J0IGhhc2h0YWdCbHVlIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWJsdWUuc3ZnJztcbmltcG9ydCBoYXNodGFnUmVkIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLXJlZC5zdmcnO1xuaW1wb3J0IGhhc2h0YWdDb2FsIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWNvYWwuc3ZnJztcbmltcG9ydCBoYXNodGFnTGltZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvaGFzaHRhZy1saW1lLnN2Zyc7XG5pbXBvcnQgaGFzaHRhZ01hZyBmcm9tICcuLi9hc3NldHMvaWNvbnMvaGFzaHRhZy1tYWcuc3ZnJztcbmltcG9ydCBkb3RzIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9kb3RzLnN2Zyc7XG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgaW5ib3hUYXNrcywgdG9kYXlUYXNrcywgdXBjb21pbmdUYXNrcyB9IGZyb20gJy4vdGFicy5qcyc7XG5cbmZ1bmN0aW9uIGNhdGVnb3J5SXRlbURvbShidXR0b24pIHtcbiAgICBpZihidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmJveCcpKSB7XG4gICAgICAgIGluYm94VGFiKCk7XG4gICAgfSBlbHNlIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RheScpKSB7XG4gICAgICAgIHRvZGF5VGFiKCk7XG4gICAgfSBlbHNlIGlmIChidXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCd1cGNvbWluZycpKSB7XG4gICAgICAgIHVwY29taW5nVGFiKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVUYXNrQ291bnRlcigpIHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMnKTtcbiAgICBjb25zdCB0YWJzID0gY2F0ZWdvcmllcy5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgY29uc3QgY291bnRlciA9IHRhYi5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWNvdW50Jyk7XG4gICAgICAgIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmJveCcpKSB7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gaW5ib3hUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCd0b2RheScpKSB7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gdG9kYXlUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0YWIuY2xhc3NMaXN0LmNvbnRhaW5zKCd1cGNvbWluZycpKSB7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gdXBjb21pbmdUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIHByb2plY3REb20oaW5kZXgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICBtYWluLmFwcGVuZChwcm9qZWN0VGFiKGluZGV4KSk7XG59O1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtaXRlbXMnKTtcbiAgICBsaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBsZXQgcHJvamVjdEFycmF5ID0gW107XG4gICAgaWYoZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5JykpIHByb2plY3RBcnJheSA9IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpO1xuXG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ld1Byb2plY3RCdG4ocHJvamVjdEFycmF5LCBpKTtcblxuICAgICAgICBsaXN0LmFwcGVuZChidG4pO1xuICAgIH07XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUZhdm9yaXRlTGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZhdm9yaXRlLWl0ZW1zJyk7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKSkgcHJvamVjdEFycmF5ID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG5cbiAgICBjb25zdCBmYXZQcm9qZWN0cyA9IHByb2plY3RBcnJheS5maWx0ZXIocHJvID0+IHByby5mYXZvcml0ZSA9PT0gdHJ1ZSk7XG5cbiAgICBmYXZQcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uIChwcm9qZWN0LCBpbmRleCkge1xuICAgICAgICBjb25zdCBidG4gPSBuZXdQcm9qZWN0QnRuKGZhdlByb2plY3RzLCBpbmRleCk7XG5cbiAgICAgICAgbGlzdC5hcHBlbmQoYnRuKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0QnRuKGFycmF5LCBpbmRleCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICBidG4uZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gICAgY29uc3QgaGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhhc2guY2xhc3NMaXN0LmFkZCgnaGFzaCcpO1xuXG4gICAgc3dpdGNoIChhcnJheVtpbmRleF0uY29sb3IpIHtcbiAgICAgICAgY2FzZSAnc2t5Qmx1ZSc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdCbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlZCc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdSZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hhckNvYWwnOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnQ29hbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYWdlbnRhJzpcbiAgICAgICAgICAgIGhhc2guc3JjID0gaGFzaHRhZ01hZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaW1lR3JlZW4nOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnTGltZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwLnRleHRDb250ZW50ID0gYXJyYXlbaW5kZXhdLm5hbWU7XG5cbiAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9wdGlvbnNCdG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1vcHRpb25zJyk7XG4gICAgY29uc3Qgb3B0aW9uc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBvcHRpb25zSWNvbi5zcmMgPSBkb3RzO1xuICAgIG9wdGlvbnNCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0ZXN0Jyk7XG4gICAgfSlcblxuICAgIG9wdGlvbnNCdG4uYXBwZW5kKG9wdGlvbnNJY29uKTtcblxuICAgIGJ0bi5hcHBlbmQoaGFzaCwgcCwgdGFza0NvdW50LCBvcHRpb25zQnRuKTtcbiAgICByZXR1cm4gYnRuO1xufTtcblxuLy8gRXZlbnQgbGlzdGVuZXJzIGZvciByZW1vdmluZyB0YXNrc1xuZnVuY3Rpb24gdGFza0xpc3RlbmVycygpIHtcbiAgICBjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJyk7XG4gICAgbGlzdEl0ZW0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgY29uc3QgaXRlbUJ0biA9IGl0ZW0ucXVlcnlTZWxlY3RvcignYnV0dG9uJyk7XG4gICAgICAgIGl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCd0YXNrLWl0ZW0nKSkge1xuICAgICAgICAgICAgICAgIHRhc2sucmVtb3ZlKGl0ZW0uZGF0YXNldC5pbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb25Eb20oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9KVxufVxuXG5leHBvcnQgeyB1cGRhdGVUYXNrQ291bnRlciwgY2F0ZWdvcnlJdGVtRG9tLCB1cGRhdGVQcm9qZWN0TGlzdCwgdXBkYXRlRmF2b3JpdGVMaXN0LCBwcm9qZWN0RG9tIH07IiwiLy8gVEFTS1MgJiBQUk9KRUNUU1xuZnVuY3Rpb24gc2V0U3RvcmFnZShpdGVtLCBuYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xufTtcblxuZnVuY3Rpb24gZ2V0U3RvcmFnZShuYW1lKSB7XG4gICAgbGV0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgaWYgKCFzYXZlZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgc2F2ZWQgPSBKU09OLnBhcnNlKHNhdmVkKTtcbiAgICBzYXZlZCA9IE9iamVjdC52YWx1ZXMoc2F2ZWQpO1xuXG4gICAgc2F2ZWQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKCdkYXRlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGUgPSBuZXcgRGF0ZShlbGVtZW50LmRhdGUpO1xuICAgICAgICAgICAgZWxlbWVudC5kYXRlID0gZWxlbWVudC5kYXRlLnNldEhvdXJzKDAsMCwwLDApO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gc2F2ZWQ7XG59O1xuXG5leHBvcnQgeyBzZXRTdG9yYWdlLCBnZXRTdG9yYWdlIH07IiwiaW1wb3J0IHsgc2V0U3RvcmFnZSwgZ2V0U3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbkRyb3Bkb3duKCkge1xuICAgIGNvbnN0IGxvY2F0aW9uTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWxvY2F0aW9uJyk7XG5cbiAgICBjb25zdCBwcm9qZWN0cyA9IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpO1xuXG4gICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCwgaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICBwcm9qZWN0U2VsZWN0LnZhbHVlID0gaW5kZXg7XG5cbiAgICAgICAgbG9jYXRpb25MaXN0LmFwcGVuZChwcm9qZWN0U2VsZWN0KTtcbiAgICB9KVxufTsiLCJpbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IGNpcmNsZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2lyY2xlLnN2Zyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJvamVjdFRhYihpbmRleCkge1xuICAgIGNvbnN0IHByb2plY3RTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpW2luZGV4XTtcblxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGl0bGUnKTtcbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgcHJvamVjdFNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3QubmFtZSk7XG4gICAgcHJvamVjdFNlY3Rpb24uZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuXG4gICAgbGV0IHRhc2tBcnJheSA9IFtdO1xuXG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpKSB0YXNrQXJyYXkgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKVxuXG4gICAgY29uc3QgcHJvamVjdFRhc2tzID0gdGFza0FycmF5LmZpbHRlcih0YXNrID0+IHRhc2subG9jYXRpb24gPT09IGluZGV4KTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0VGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgdGFza0l0ZW0uZGF0YXNldC5pbmRleCA9IGk7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZS1idG4nKTtcbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrQ29tcGxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWljb24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlSWNvbi5zcmMgPSBjaXJjbGU7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ0bi5hcHBlbmQodGFza0NvbXBsZXRlSWNvbik7XG5cbiAgICAgICAgY29uc3QgdGFza0l0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJdGVtSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcblxuICAgICAgICBjb25zdCB0YXNrSXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICAgICAgdGFza0l0ZW1OYW1lLnRleHRDb250ZW50ID0gdGFza0FycmF5W2ldLm5hbWU7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0l0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzYycpO1xuICAgICAgICB0YXNrSXRlbURlc2MudGV4dENvbnRlbnQgPSB0YXNrQXJyYXlbaV0uZGVzYztcblxuICAgICAgICB0YXNrSXRlbUluZm8uYXBwZW5kKHRhc2tJdGVtTmFtZSwgdGFza0l0ZW1EZXNjKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kKHRhc2tDb21wbGV0ZUJ0biwgdGFza0l0ZW1JbmZvKTtcblxuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH1cblxuICAgIHByb2plY3RTZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsIHRhc2tMaXN0KTtcblxuICAgIHJldHVybiBwcm9qZWN0U2VjdGlvbjtcbn0iLCJpbXBvcnQgeyBzZXRTdG9yYWdlLCBnZXRTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbi8vIHByb2plY3Qgb2JqZWN0c1xuY29uc3QgcHJvamVjdCA9ICgpID0+IHtcbiAgICBsZXQgcHJvamVjdEFycmF5O1xuICAgIGlmIChnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcHJvamVjdEFycmF5ID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJvamVjdEFycmF5ID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkID0gKG5hbWUsIGNvbG9yLCBmYXYpID0+IHtcbiAgICAgICAgY29uc3QgZmF2b3JpdGUgPSAoZmF2ID09PSAndHJ1ZScpO1xuICAgICAgICBwcm9qZWN0QXJyYXkucHVzaCh7IG5hbWUsIGNvbG9yLCBmYXZvcml0ZSB9KTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UocHJvamVjdEFycmF5LCAncHJvamVjdEFycmF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlID0gKHByb2plY3RJbmRleCkgPT4ge1xuICAgICAgICBwcm9qZWN0QXJyYXkuc3BsaWNlKHByb2plY3RJbmRleCwgMSk7XG4gICAgICAgIHJldHVybiBzZXRTdG9yYWdlKHByb2plY3RBcnJheSwgJ3Byb2plY3RBcnJheScpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZCwgcmVtb3ZlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwcm9qZWN0KCk7IiwiaW1wb3J0ICcuLi9zdHlsZXMvaW5ib3gtc3R5bGUuY3NzJztcbmltcG9ydCBjaXJjbGUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NpcmNsZS5zdmcnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbmNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG5jb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5zZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG5cbmZ1bmN0aW9uIGluYm94VGFza3MoKSB7XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpKSByZXR1cm4gZ2V0U3RvcmFnZSgndGFza0FycmF5Jyk7XG4gICAgZWxzZSByZXR1cm4gW107XG59XG5cbmZ1bmN0aW9uIHRvZGF5VGFza3MoKSB7XG4gICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdG9kYXlEYXRlID0gdG9kYXlEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpKSByZXR1cm4gZ2V0U3RvcmFnZSgndGFza0FycmF5JykuZmlsdGVyKHRhc2sgPT4gdGFzay5kYXRlID09PSB0b2RheURhdGUpO1xuICAgIGVsc2UgcmV0dXJuIFtdO1xufVxuXG5mdW5jdGlvbiB1cGNvbWluZ1Rhc2tzKCkge1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSkgcmV0dXJuIGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpLmZpbHRlcih0YXNrID0+IHRhc2suZGF0ZSA+IHRvZGF5RGF0ZSk7XG4gICAgZWxzZSByZXR1cm4gW107XG59XG5cbmZ1bmN0aW9uIGluYm94VGFiKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdpbmJveCcpO1xuICAgIHRhc2tMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1saXN0Jyk7XG5cbiAgICAvLyBnZXQgdGFza3MgZnJvbSBzdG9yYWdlXG4gICAgbGV0IHRhc2tzID0gaW5ib3hUYXNrcygpO1xuXG4gICAgLy8gZHluYW1pY2FsbHkgY3JlYXRlIHRhc2tzIGxpc3QgaXRlbXNcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgdGFza0l0ZW0uZGF0YXNldC5pbmRleCA9IGk7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZS1idG4nKTtcbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrQ29tcGxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWljb24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlSWNvbi5zcmMgPSBjaXJjbGU7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ0bi5hcHBlbmQodGFza0NvbXBsZXRlSWNvbik7XG5cbiAgICAgICAgY29uc3QgdGFza0l0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJdGVtSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcblxuICAgICAgICBjb25zdCB0YXNrSXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICAgICAgdGFza0l0ZW1OYW1lLnRleHRDb250ZW50ID0gdGFza3NbaV0ubmFtZTtcbiAgICAgICAgY29uc3QgdGFza0l0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrSXRlbURlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG4gICAgICAgIHRhc2tJdGVtRGVzYy50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmRlc2M7XG5cbiAgICAgICAgdGFza0l0ZW1JbmZvLmFwcGVuZCh0YXNrSXRlbU5hbWUsIHRhc2tJdGVtRGVzYyk7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZCh0YXNrQ29tcGxldGVCdG4sIHRhc2tJdGVtSW5mbyk7XG5cbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9XG5cbiAgICBzZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsIHRhc2tMaXN0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn07XG5cbmZ1bmN0aW9uIHRvZGF5VGFiKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheScpO1xuICAgIHRhc2tMaXN0LnNldEF0dHJpYnV0ZSgnaWQnLCAndGFzay1saXN0Jyk7XG5cbiAgICBsZXQgdGFza3MgPSB0b2RheVRhc2tzKCk7XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgdGFza3MgbGlzdCBpdGVtc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFza3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgdGFza0l0ZW0uZGF0YXNldC5pbmRleCA9IGk7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZS1idG4nKTtcbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrQ29tcGxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWljb24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlSWNvbi5zcmMgPSBjaXJjbGU7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ0bi5hcHBlbmQodGFza0NvbXBsZXRlSWNvbik7XG5cbiAgICAgICAgY29uc3QgdGFza0l0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJdGVtSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcblxuICAgICAgICBjb25zdCB0YXNrSXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICAgICAgdGFza0l0ZW1OYW1lLnRleHRDb250ZW50ID0gdGFza3NbaV0ubmFtZTtcbiAgICAgICAgY29uc3QgdGFza0l0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrSXRlbURlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG4gICAgICAgIHRhc2tJdGVtRGVzYy50ZXh0Q29udGVudCA9IHRhc2tzW2ldLmRlc2M7XG5cbiAgICAgICAgdGFza0l0ZW1JbmZvLmFwcGVuZCh0YXNrSXRlbU5hbWUsIHRhc2tJdGVtRGVzYyk7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZCh0YXNrQ29tcGxldGVCdG4sIHRhc2tJdGVtSW5mbyk7XG5cbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9XG5cbiAgICBzZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsIHRhc2tMaXN0KTtcblxuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xufTtcblxuZnVuY3Rpb24gdXBjb21pbmdUYWIoKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgdGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdVcGNvbWluZyc7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VwY29taW5nJyk7XG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWxpc3QnKTtcblxuICAgIGxldCB0YXNrcyA9IHVwY29taW5nVGFza3MoKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXNrcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICB0YXNrSXRlbS5kYXRhc2V0LmluZGV4ID0gaTtcblxuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlLWJ0bicpO1xuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUljb24uY2xhc3NMaXN0LmFkZCgnY2hlY2staWNvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVJY29uLnNyYyA9IGNpcmNsZTtcbiAgICAgICAgdGFza0NvbXBsZXRlQnRuLmFwcGVuZCh0YXNrQ29tcGxldGVJY29uKTtcblxuICAgICAgICBjb25zdCB0YXNrSXRlbUluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0l0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0l0ZW1OYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbmFtZScpO1xuICAgICAgICB0YXNrSXRlbU5hbWUudGV4dENvbnRlbnQgPSB0YXNrc1tpXS5uYW1lO1xuICAgICAgICBjb25zdCB0YXNrSXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tJdGVtRGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2MnKTtcbiAgICAgICAgdGFza0l0ZW1EZXNjLnRleHRDb250ZW50ID0gdGFza3NbaV0uZGVzYztcblxuICAgICAgICB0YXNrSXRlbUluZm8uYXBwZW5kKHRhc2tJdGVtTmFtZSwgdGFza0l0ZW1EZXNjKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kKHRhc2tDb21wbGV0ZUJ0biwgdGFza0l0ZW1JbmZvKTtcblxuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH1cblxuICAgIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuXG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG59O1xuXG5leHBvcnQgeyBpbmJveFRhYiwgdG9kYXlUYWIsIHVwY29taW5nVGFiLCBpbmJveFRhc2tzLCB0b2RheVRhc2tzLCB1cGNvbWluZ1Rhc2tzIH07IiwiaW1wb3J0IHsgZ2V0U3RvcmFnZSwgc2V0U3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG4vLyB0YXNrIG9iamVjdHNcbmNvbnN0IHRhc2sgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2tBcnJheTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykgPT09IGZhbHNlKSB7XG4gICAgICAgIHRhc2tBcnJheSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tBcnJheSA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZCA9IChuYW1lLCBkZXNjLCBfZGF0ZSwgbG9jYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKF9kYXRlKTtcbiAgICAgICAgdGFza0FycmF5LnB1c2goeyBuYW1lLCBkZXNjLCBkYXRlLCBsb2NhdGlvbiB9KTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UodGFza0FycmF5LCAndGFza0FycmF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlID0gKHRhc2tJbmRleCkgPT4ge1xuICAgICAgICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICAgIHJldHVybiBzZXRTdG9yYWdlKHRhc2tBcnJheSwgJ3Rhc2tBcnJheScpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGFkZCwgcmVtb3ZlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrKCk7IiwiaW1wb3J0ICcuLi9zdHlsZXMvc2lkZWJhci1zdHlsZS5jc3MnO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IHRvZ2dsZVNpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcblxuXG5mdW5jdGlvbiBjb2xsYXBzZVNpZGViYXIoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICB0b2dnbGVTaWRlYmFyQnRuLmNsYXNzTGlzdC5hZGQoJ29mZnNldCcpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVTaWRlYmFyKCkge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgdG9nZ2xlU2lkZWJhckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvZmZzZXQnKTtcbn1cblxuZXhwb3J0IHsgY29sbGFwc2VTaWRlYmFyLCBlbmFibGVTaWRlYmFyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3R5bGVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9