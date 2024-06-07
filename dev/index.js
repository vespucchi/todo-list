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
/* harmony import */ var _modules_domController_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/domController.js */ "./src/modules/domController.js");
/* harmony import */ var _modules_locationDropdown_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/locationDropdown.js */ "./src/modules/locationDropdown.js");
/* harmony import */ var _modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/tasksDomController.js */ "./src/modules/tasksDomController.js");
/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/localStorage.js */ "./src/modules/localStorage.js");









const main = document.querySelector('main');
const section = document.querySelector('section');
const sidebar = document.querySelector('.sidebar');


// Start with Inbox model
(0,_modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__.currentTab)();
(0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateTaskCounter)()
;(0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateProjectList)();
(0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateFavoriteList)();


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
    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].add(taskNameInput.value, taskDescInput.value, taskDateInput.value, false, taskLocationInput.value);

    handleSelectedTab();
    const taskLocationTab = categoryDiv.querySelector(`[data-index='${taskLocationInput.value}']`);
    taskLocationTab.classList.add('selected');

    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateTaskCounter)()
    newTaskModal.close();
    taskForm.reset();
    submitTaskBtn.disabled = true;
    (0,_modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__.currentTab)();
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
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateProjectList)();
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateFavoriteList)();

    handleSelectedTab();
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
    handleSelectedTab();
    e.target.closest('button').classList.add('selected');
    (0,_modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__.currentTab)();
})


// event listener for switching projects
projectItems.forEach(tab => {
    tab.addEventListener('click', (e) => {
        if(e.target.classList.contains('project-options')) {
            console.log('To do options');
        } else {
            handleSelectedTab();
            e.target.closest('button').classList.add('selected');
            (0,_modules_tasksDomController_js__WEBPACK_IMPORTED_MODULE_6__.currentTab)(); 
        }
    });
});

// function for handling selected tabs
function handleSelectedTab() {
    const projectBtns = categoryDiv.querySelectorAll('.tab');
    const filterBtns = filters.querySelectorAll('.tab');

    filterBtns.forEach(b => b.classList.remove('selected'));
    projectBtns.forEach(b => b.classList.remove('selected'));
}

/***/ }),

/***/ "./src/modules/domController.js":
/*!**************************************!*\
  !*** ./src/modules/domController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateFavoriteList: () => (/* binding */ updateFavoriteList),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList),
/* harmony export */   updateTaskCounter: () => (/* binding */ updateTaskCounter)
/* harmony export */ });
/* harmony import */ var _assets_icons_hashtag_blue_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/icons/hashtag-blue.svg */ "./src/assets/icons/hashtag-blue.svg");
/* harmony import */ var _assets_icons_hashtag_red_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/hashtag-red.svg */ "./src/assets/icons/hashtag-red.svg");
/* harmony import */ var _assets_icons_hashtag_coal_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/hashtag-coal.svg */ "./src/assets/icons/hashtag-coal.svg");
/* harmony import */ var _assets_icons_hashtag_lime_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/hashtag-lime.svg */ "./src/assets/icons/hashtag-lime.svg");
/* harmony import */ var _assets_icons_hashtag_mag_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/hashtag-mag.svg */ "./src/assets/icons/hashtag-mag.svg");
/* harmony import */ var _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/dots.svg */ "./src/assets/icons/dots.svg");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");
/* harmony import */ var _tasksDomController_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasksDomController.js */ "./src/modules/tasksDomController.js");









function updateTaskCounter() {
    const categories = document.querySelector('.categories');
    const tabs = categories.querySelectorAll('.tab');

    tabs.forEach(tab => {
        if (tab.dataset.index === 'inbox') {
            const counter = document.getElementById('inbox');
            counter.textContent = (0,_tasksDomController_js__WEBPACK_IMPORTED_MODULE_7__.inboxTasks)().length;
        } else if (tab.dataset.index === 'today') {
            const counter = document.getElementById('today');
            counter.textContent = (0,_tasksDomController_js__WEBPACK_IMPORTED_MODULE_7__.todayTasks)().length;
        } else if (tab.dataset.index === 'upcoming') {
            const counter = document.getElementById('upcoming');
            counter.textContent = (0,_tasksDomController_js__WEBPACK_IMPORTED_MODULE_7__.upcomingTasks)().length;
        } else if (tab.dataset.index === 'completed') {
            const counter = document.getElementById('completed');
            counter.textContent = (0,_tasksDomController_js__WEBPACK_IMPORTED_MODULE_7__.completedTasks)().length;
        }
    })
}

function updateProjectList() {
    const list = document.querySelector('.my-projects');
    list.textContent = '';

    let projectArray = [];
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_6__.getStorage)('projectArray')) {
        projectArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_6__.getStorage)('projectArray');
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
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_6__.getStorage)('projectArray')) {
        favProjects = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_6__.getStorage)('projectArray');
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
            hash.src = _assets_icons_hashtag_blue_svg__WEBPACK_IMPORTED_MODULE_0__;
            break;
        case 'red':
            hash.src = _assets_icons_hashtag_red_svg__WEBPACK_IMPORTED_MODULE_1__;
            break;
        case 'charCoal':
            hash.src = _assets_icons_hashtag_coal_svg__WEBPACK_IMPORTED_MODULE_2__;
            break;
        case 'magenta':
            hash.src = _assets_icons_hashtag_mag_svg__WEBPACK_IMPORTED_MODULE_4__;
            break;
        case 'limeGreen':
            hash.src = _assets_icons_hashtag_lime_svg__WEBPACK_IMPORTED_MODULE_3__;
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
    optionsIcon.src = _assets_icons_dots_svg__WEBPACK_IMPORTED_MODULE_5__;

    optionsBtn.append(optionsIcon);

    btn.append(hash, p, taskCount, optionsBtn);
    return btn;
};



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
    const locationList = document.getElementById('task-location');

    // remove current options starting from option 3 included
    const options = locationList.querySelectorAll('.project');
    options.forEach(option => option.remove());

    // create new options
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('projectArray')) {
        const projects = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getStorage)('projectArray');
        projects.forEach((project, index) => {
            const projectSelect = document.createElement('option');
            projectSelect.textContent = project.name;
            projectSelect.value = index;
            projectSelect.classList.add('project');

            locationList.append(projectSelect);
        })
    }
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
/* harmony import */ var _domController_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./domController.js */ "./src/modules/domController.js");












const body = document.querySelector('body');
const main = document.querySelector('main');
let taskList = document.querySelector('#task-list');


function inboxTasks() {
    let taskArray = [];
    if ((0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')) {
        taskArray = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray');
        taskArray = taskArray
                        .map((task, index) => ({ task, index }))
                        .filter(({ task }) => task.completed === false);
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

// function for manipulating tasks upon eventlistener call
function manipulateTask(e) {
    const taskItem = taskList.querySelector(`[data-index="${e.target.closest('.task-item').dataset.index}"]`);
    const taskInfo = taskItem.querySelector('.task-info');
    const editBtn = taskItem.querySelector('.edit-btn');
    const removeBtn = taskItem.querySelector('.remove-btn');


    if (e.target.closest('.complete-btn')) {
        let completed = (0,_localStorage_js__WEBPACK_IMPORTED_MODULE_8__.getStorage)('taskArray')[e.target.closest('.task-item').dataset.index]['completed'];
        _tasks_js__WEBPACK_IMPORTED_MODULE_9__["default"].edit(e.target.closest('.task-item').dataset.index, [['completed', !completed]]);
        currentTab();
        (0,_domController_js__WEBPACK_IMPORTED_MODULE_10__.updateTaskCounter)();
    } else if (e.target.closest('.edit-btn')) {
        editBtn.style.display = 'none';
        removeBtn.style.visibility = 'visible';

        const cancelBtn = newButtonItem({ 'btnClass': 'cancel-btn' }, { 'imgClass': 'cancel-icon' }, { 'imgSrc': _assets_icons_cancel_svg__WEBPACK_IMPORTED_MODULE_5__ });
        const saveBtn = newButtonItem({ 'btnClass': 'save-btn' }, { 'imgClass': 'save-icon' }, { 'imgSrc': _assets_icons_save_svg__WEBPACK_IMPORTED_MODULE_6__ });

        editBtn.insertAdjacentElement('afterend', cancelBtn);
        cancelBtn.insertAdjacentElement('afterend', saveBtn);

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
            }

            body.addEventListener('mouseup', disableEditable);
        });

        function disableEditable(e) {
            if (!e.target.closest('.task-info')) {
                if (e.target.closest('.save-btn')) {
                    let updatedInfo = [];
                    taskInfo.childNodes.forEach(child => {
                        updatedInfo.push([child.getAttribute('id'), child.textContent]);
                    });
                    _tasks_js__WEBPACK_IMPORTED_MODULE_9__["default"].edit(taskItem.dataset.index, updatedInfo);

                } else {
                    taskInfo.childNodes.forEach(node => {
                        node.contentEditable = 'false';
                        body.removeEventListener('mouseup', disableEditable);
                    })
                };

                editBtn.style = '';
                removeBtn.style = '';
                cancelBtn.remove();
                saveBtn.remove();
                taskInfo.childNodes.forEach(node => {
                    node.style = '';
                })
                currentTab();
            };
        };

    } else if (e.target.closest('.remove-btn')) {
        _tasks_js__WEBPACK_IMPORTED_MODULE_9__["default"].remove(e.target.closest('.task-item').dataset.index);
        currentTab();
        (0,_domController_js__WEBPACK_IMPORTED_MODULE_10__.updateTaskCounter)();
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
        date = newDateItem(taskObj.task.date);
    }

    taskItemDate.textContent = date;


    taskItemInfo.append(taskItemName, taskItemDesc, taskItemDate);
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
}

function newDateItem(_taskDate) {
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

}




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXgtc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvc2lkZWJhci1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90YXNrRG9tLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9jYXRpb25Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrc0RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJy4vaW5kZXgtc3R5bGUuY3NzJztcbmltcG9ydCB7IGNvbGxhcHNlU2lkZWJhciwgZW5hYmxlU2lkZWJhciB9IGZyb20gJy4vbW9kdWxlcy90b2dnbGVTaWRlYmFyLmpzJztcbmltcG9ydCB0YXNrIGZyb20gJy4vbW9kdWxlcy90YXNrcy5qcyc7XG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMuanMnO1xuaW1wb3J0IHsgdXBkYXRlVGFza0NvdW50ZXIsIHVwZGF0ZVByb2plY3RMaXN0LCB1cGRhdGVGYXZvcml0ZUxpc3QgfSBmcm9tICcuL21vZHVsZXMvZG9tQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgdXBkYXRlTG9jYXRpb25Ecm9wZG93biBmcm9tICcuL21vZHVsZXMvbG9jYXRpb25Ecm9wZG93bi5qcyc7XG5pbXBvcnQgeyBjdXJyZW50VGFiIH0gZnJvbSAnLi9tb2R1bGVzL3Rhc2tzRG9tQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSAnLi9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XG5cblxuLy8gU3RhcnQgd2l0aCBJbmJveCBtb2RlbFxuY3VycmVudFRhYigpO1xudXBkYXRlVGFza0NvdW50ZXIoKVxudXBkYXRlUHJvamVjdExpc3QoKTtcbnVwZGF0ZUZhdm9yaXRlTGlzdCgpO1xuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciB0b2dnbGluZyBzaWRlYmFyXG5jb25zdCB0b2dnbGVTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG50b2dnbGVTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgIGVuYWJsZVNpZGViYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZVNpZGViYXIoKTtcbiAgICB9XG59KTtcblxuLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBhZGRpbmcgdGFza3NcbmNvbnN0IG5ld1Rhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrLW1vZGFsJyk7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrLWZvcm0nKTtcblxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpO1xuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdUYXNrTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgdXBkYXRlTG9jYXRpb25Ecm9wZG93bigpO1xufSk7XG5cbmNvbnN0IGNsb3NlVGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXRhc2snKTtcbmNsb3NlVGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbmV3VGFza01vZGFsLmNsb3NlKCk7XG4gICAgfVxuKTtcblxuY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtdGFzaycpO1xuY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKTtcbnRhc2tOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgaWYodGFza05hbWVJbnB1dC52YWx1ZSA9PT0gJycpIHN1Ym1pdFRhc2tCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGVsc2Ugc3VibWl0VGFza0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xufSk7XG5cbmNvbnN0IHRhc2tMb2NhdGlvbklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbG9jYXRpb24nKTtcbmNvbnN0IHRhc2tEZXNjSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjJyk7XG5jb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGF0ZScpO1xuY29uc3QgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpO1xuc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRhc2suYWRkKHRhc2tOYW1lSW5wdXQudmFsdWUsIHRhc2tEZXNjSW5wdXQudmFsdWUsIHRhc2tEYXRlSW5wdXQudmFsdWUsIGZhbHNlLCB0YXNrTG9jYXRpb25JbnB1dC52YWx1ZSk7XG5cbiAgICBoYW5kbGVTZWxlY3RlZFRhYigpO1xuICAgIGNvbnN0IHRhc2tMb2NhdGlvblRhYiA9IGNhdGVnb3J5RGl2LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke3Rhc2tMb2NhdGlvbklucHV0LnZhbHVlfSddYCk7XG4gICAgdGFza0xvY2F0aW9uVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICB1cGRhdGVUYXNrQ291bnRlcigpXG4gICAgbmV3VGFza01vZGFsLmNsb3NlKCk7XG4gICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICBzdWJtaXRUYXNrQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjdXJyZW50VGFiKCk7XG59KTtcblxuXG4vLyBldmVudCBsaXN0ZW5lcnMgZm9yIGFkZGluZyBwcm9qZWN0c1xuY29uc3QgbmV3UHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QtbW9kYWwnKTtcbmNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Byb2plY3QtZm9ybScpO1xuXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC1wcm9qZWN0Jyk7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG5ld1Byb2plY3RNb2RhbC5zaG93TW9kYWwoKTtcbn0pO1xuXG5jb25zdCBjaGVja2JveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpO1xuY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgIGNoZWNrYm94LnZhbHVlID09PSAnZmFsc2UnID8gY2hlY2tib3gudmFsdWUgPSAndHJ1ZScgOiBjaGVja2JveC52YWx1ZSA9ICdmYWxzZSc7XG59KVxuXG5jb25zdCBjbG9zZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS1wcm9qZWN0Jyk7XG5jbG9zZVByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgbmV3UHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgY2hlY2tib3gudmFsdWUgPSAnZmFsc2UnO1xuICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbn0pO1xuXG5jb25zdCBzdWJtaXRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1wcm9qZWN0Jyk7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtbmFtZScpO1xucHJvamVjdE5hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBpZiAocHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9PT0gJycpIHN1Ym1pdFByb2plY3RCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGVsc2Ugc3VibWl0UHJvamVjdEJ0bi5kaXNhYmxlZCA9IGZhbHNlO1xufSk7XG5cbmNvbnN0IHByb2plY3RDb2xvcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtY29sb3InKTtcbmNvbnN0IHByb2plY3RJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWxpc3QnKTtcbnN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qZWN0LmFkZChwcm9qZWN0TmFtZUlucHV0LnZhbHVlLCBwcm9qZWN0Q29sb3JJbnB1dC52YWx1ZSwgY2hlY2tib3gudmFsdWUpO1xuICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgdXBkYXRlRmF2b3JpdGVMaXN0KCk7XG5cbiAgICBoYW5kbGVTZWxlY3RlZFRhYigpO1xuICAgIGNvbnN0IHRhc2tMb2NhdGlvblRhYiA9IGNhdGVnb3J5RGl2LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2dldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpLmxlbmd0aCAtIDF9J11gKTtcbiAgICB0YXNrTG9jYXRpb25UYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgIG5ld1Byb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgIGNoZWNrYm94LnZhbHVlID0gJ2ZhbHNlJztcbiAgICBwcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIGN1cnJlbnRUYWIoKTtcbn0pO1xuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBzd2l0Y2hpbmcgZmlsdGVyc1xuY29uc3QgZmlsdGVycyA9IGNhdGVnb3J5RGl2LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZy1maWx0ZXJzJyk7XG5maWx0ZXJzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBoYW5kbGVTZWxlY3RlZFRhYigpO1xuICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgY3VycmVudFRhYigpO1xufSlcblxuXG4vLyBldmVudCBsaXN0ZW5lciBmb3Igc3dpdGNoaW5nIHByb2plY3RzXG5wcm9qZWN0SXRlbXMuZm9yRWFjaCh0YWIgPT4ge1xuICAgIHRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJvamVjdC1vcHRpb25zJykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUbyBkbyBvcHRpb25zJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBoYW5kbGVTZWxlY3RlZFRhYigpO1xuICAgICAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYWIoKTsgXG4gICAgICAgIH1cbiAgICB9KTtcbn0pO1xuXG4vLyBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgc2VsZWN0ZWQgdGFic1xuZnVuY3Rpb24gaGFuZGxlU2VsZWN0ZWRUYWIoKSB7XG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBjYXRlZ29yeURpdi5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgY29uc3QgZmlsdGVyQnRucyA9IGZpbHRlcnMucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuXG4gICAgZmlsdGVyQnRucy5mb3JFYWNoKGIgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICBwcm9qZWN0QnRucy5mb3JFYWNoKGIgPT4gYi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbn0iLCJpbXBvcnQgaGFzaHRhZ0JsdWUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2hhc2h0YWctYmx1ZS5zdmcnO1xuaW1wb3J0IGhhc2h0YWdSZWQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2hhc2h0YWctcmVkLnN2Zyc7XG5pbXBvcnQgaGFzaHRhZ0NvYWwgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2hhc2h0YWctY29hbC5zdmcnO1xuaW1wb3J0IGhhc2h0YWdMaW1lIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWxpbWUuc3ZnJztcbmltcG9ydCBoYXNodGFnTWFnIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLW1hZy5zdmcnO1xuaW1wb3J0IGRvdHMgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2RvdHMuc3ZnJztcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBpbmJveFRhc2tzLCB0b2RheVRhc2tzLCB1cGNvbWluZ1Rhc2tzLCBjb21wbGV0ZWRUYXNrcyB9IGZyb20gJy4vdGFza3NEb21Db250cm9sbGVyLmpzJztcblxuZnVuY3Rpb24gdXBkYXRlVGFza0NvdW50ZXIoKSB7XG4gICAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzJyk7XG4gICAgY29uc3QgdGFicyA9IGNhdGVnb3JpZXMucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuXG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIGlmICh0YWIuZGF0YXNldC5pbmRleCA9PT0gJ2luYm94Jykge1xuICAgICAgICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmJveCcpO1xuICAgICAgICAgICAgY291bnRlci50ZXh0Q29udGVudCA9IGluYm94VGFza3MoKS5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGFiLmRhdGFzZXQuaW5kZXggPT09ICd0b2RheScpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kYXknKTtcbiAgICAgICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSB0b2RheVRhc2tzKCkubGVuZ3RoO1xuICAgICAgICB9IGVsc2UgaWYgKHRhYi5kYXRhc2V0LmluZGV4ID09PSAndXBjb21pbmcnKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwY29taW5nJyk7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gdXBjb21pbmdUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0YWIuZGF0YXNldC5pbmRleCA9PT0gJ2NvbXBsZXRlZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGVkJyk7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gY29tcGxldGVkVGFza3MoKS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LXByb2plY3RzJyk7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKSkge1xuICAgICAgICBwcm9qZWN0QXJyYXkgPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKTtcbiAgICAgICAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5Lm1hcCgocHJvamVjdCwgaW5kZXgpID0+ICh7IHByb2plY3QsIGluZGV4IH0pKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gbmV3UHJvamVjdEJ0bihwcm9qZWN0KTtcbiAgICAgICAgbGlzdC5hcHBlbmQoYnRuKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiB1cGRhdGVGYXZvcml0ZUxpc3QoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mYXZvcml0ZS1pdGVtcycpO1xuICAgIGxpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCBmYXZQcm9qZWN0cyA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKSkge1xuICAgICAgICBmYXZQcm9qZWN0cyA9IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpO1xuICAgICAgICBmYXZQcm9qZWN0cyA9IGZhdlByb2plY3RzXG4gICAgICAgICAgICAubWFwKChwcm9qZWN0LCBpbmRleCkgPT4gKHsgcHJvamVjdCwgaW5kZXggfSkpXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHByb2plY3QgfSkgPT4gcHJvamVjdC5mYXZvcml0ZSA9PT0gdHJ1ZSk7XG4gICAgfSAgICBcbiAgICBcbiAgICBmYXZQcm9qZWN0cy5mb3JFYWNoKHByb2plY3QgPT4ge1xuICAgICAgICBjb25zdCBidG4gPSBuZXdQcm9qZWN0QnRuKHByb2plY3QpO1xuICAgICAgICBsaXN0LmFwcGVuZChidG4pO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIG5ld1Byb2plY3RCdG4ocHJvKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICBidG4uZGF0YXNldC5pbmRleCA9IHByby5pbmRleDtcblxuICAgIGNvbnN0IGhhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBoYXNoLmNsYXNzTGlzdC5hZGQoJ2hhc2gnKTtcblxuICAgIHN3aXRjaCAocHJvLnByb2plY3QuY29sb3IpIHtcbiAgICAgICAgY2FzZSAnc2t5Qmx1ZSc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdCbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlZCc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdSZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hhckNvYWwnOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnQ29hbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYWdlbnRhJzpcbiAgICAgICAgICAgIGhhc2guc3JjID0gaGFzaHRhZ01hZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaW1lR3JlZW4nOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnTGltZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICBwLnRleHRDb250ZW50ID0gcHJvLnByb2plY3QubmFtZTtcblxuICAgIGNvbnN0IHRhc2tDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBvcHRpb25zQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgb3B0aW9uc0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBvcHRpb25zQnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9ucycpO1xuICAgIG9wdGlvbnNJY29uLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3Qtb3B0aW9ucycpO1xuICAgIG9wdGlvbnNJY29uLnNyYyA9IGRvdHM7XG5cbiAgICBvcHRpb25zQnRuLmFwcGVuZChvcHRpb25zSWNvbik7XG5cbiAgICBidG4uYXBwZW5kKGhhc2gsIHAsIHRhc2tDb3VudCwgb3B0aW9uc0J0bik7XG4gICAgcmV0dXJuIGJ0bjtcbn07XG5cbmV4cG9ydCB7IHVwZGF0ZVRhc2tDb3VudGVyLCB1cGRhdGVQcm9qZWN0TGlzdCwgdXBkYXRlRmF2b3JpdGVMaXN0IH07IiwiLy8gVEFTS1MgJiBQUk9KRUNUU1xuZnVuY3Rpb24gc2V0U3RvcmFnZShpdGVtLCBuYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xufTtcblxuZnVuY3Rpb24gZ2V0U3RvcmFnZShuYW1lKSB7XG4gICAgbGV0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgaWYgKCFzYXZlZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgc2F2ZWQgPSBKU09OLnBhcnNlKHNhdmVkKTtcbiAgICBzYXZlZCA9IE9iamVjdC52YWx1ZXMoc2F2ZWQpO1xuXG4gICAgc2F2ZWQuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgaWYgKCdkYXRlJyBpbiBlbGVtZW50KSB7XG4gICAgICAgICAgICBlbGVtZW50LmRhdGUgPSBuZXcgRGF0ZShlbGVtZW50LmRhdGUpO1xuICAgICAgICAgICAgZWxlbWVudC5kYXRlLnNldEhvdXJzKDAsMCwwLDApO1xuICAgICAgICAgICAgZWxlbWVudC5kYXRlID0gZWxlbWVudC5kYXRlLmdldFRpbWUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNhdmVkO1xufTtcblxuZXhwb3J0IHsgc2V0U3RvcmFnZSwgZ2V0U3RvcmFnZSB9OyIsImltcG9ydCB7IHNldFN0b3JhZ2UsIGdldFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb25Ecm9wZG93bigpIHtcbiAgICBjb25zdCBsb2NhdGlvbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1sb2NhdGlvbicpO1xuXG4gICAgLy8gcmVtb3ZlIGN1cnJlbnQgb3B0aW9ucyBzdGFydGluZyBmcm9tIG9wdGlvbiAzIGluY2x1ZGVkXG4gICAgY29uc3Qgb3B0aW9ucyA9IGxvY2F0aW9uTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgIG9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4gb3B0aW9uLnJlbW92ZSgpKTtcblxuICAgIC8vIGNyZWF0ZSBuZXcgb3B0aW9uc1xuICAgIGlmIChnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC50ZXh0Q29udGVudCA9IHByb2plY3QubmFtZTtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QudmFsdWUgPSBpbmRleDtcbiAgICAgICAgICAgIHByb2plY3RTZWxlY3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuXG4gICAgICAgICAgICBsb2NhdGlvbkxpc3QuYXBwZW5kKHByb2plY3RTZWxlY3QpO1xuICAgICAgICB9KVxuICAgIH1cbn07IiwiaW1wb3J0IHsgc2V0U3RvcmFnZSwgZ2V0U3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG4vLyBwcm9qZWN0IG9iamVjdHNcbmNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IHByb2plY3RBcnJheTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5JykgPT09IGZhbHNlKSB7XG4gICAgICAgIHByb2plY3RBcnJheSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RBcnJheSA9IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpO1xuICAgIH1cblxuICAgIGNvbnN0IGFkZCA9IChuYW1lLCBjb2xvciwgZmF2KSA9PiB7XG4gICAgICAgIGNvbnN0IGZhdm9yaXRlID0gKGZhdiA9PT0gJ3RydWUnKTtcbiAgICAgICAgcHJvamVjdEFycmF5LnB1c2goeyBuYW1lLCBjb2xvciwgZmF2b3JpdGUgfSk7XG4gICAgICAgIHJldHVybiBzZXRTdG9yYWdlKHByb2plY3RBcnJheSwgJ3Byb2plY3RBcnJheScpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZSA9IChwcm9qZWN0SW5kZXgpID0+IHtcbiAgICAgICAgcHJvamVjdEFycmF5LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZShwcm9qZWN0QXJyYXksICdwcm9qZWN0QXJyYXknKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBhZGQsIHJlbW92ZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdCgpOyIsImltcG9ydCB7IGdldFN0b3JhZ2UsIHNldFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuLy8gdGFzayBvYmplY3RzXG5jb25zdCB0YXNrID0gKCkgPT4ge1xuXG4gICAgbGV0IHRhc2tBcnJheTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykgPT09IGZhbHNlKSB7XG4gICAgICAgIHRhc2tBcnJheSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tBcnJheSA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGQgPSAobmFtZSwgZGVzYywgX2RhdGUsIGNvbXBsZXRlZCwgbG9jYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9ICEhX2RhdGUgPyBuZXcgRGF0ZShfZGF0ZSkgOiAnJztcbiAgICAgICAgdGFza0FycmF5LnB1c2goeyBuYW1lLCBkZXNjLCBkYXRlLCBjb21wbGV0ZWQsIGxvY2F0aW9uIH0pO1xuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZSh0YXNrQXJyYXksICd0YXNrQXJyYXknKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWRpdCA9IChpbmRleCwgbmV3SW5mbykgPT4ge1xuICAgICAgICBuZXdJbmZvLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgICAgICAgICAgdGFza0FycmF5W2luZGV4XVtwcm9wZXJ0eVswXV0gPSBwcm9wZXJ0eVsxXTtcbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZSh0YXNrQXJyYXksICd0YXNrQXJyYXknKTtcbiAgICB9O1xuXG4gICAgY29uc3QgcmVtb3ZlID0gKHRhc2tJbmRleCkgPT4ge1xuICAgICAgICB0YXNrQXJyYXkuc3BsaWNlKHRhc2tJbmRleCwgMSk7XG4gICAgICAgIHJldHVybiBzZXRTdG9yYWdlKHRhc2tBcnJheSwgJ3Rhc2tBcnJheScpO1xuICAgIH07XG5cbiAgICByZXR1cm4geyBhZGQsIGVkaXQsIHJlbW92ZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdGFzaygpOyIsImltcG9ydCAnLi4vc3R5bGVzL3Rhc2tEb20tc3R5bGUuY3NzJztcbmltcG9ydCBjaXJjbGUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NpcmNsZS5zdmcnO1xuaW1wb3J0IGNpcmNsZUdyZWVuIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jaXJjbGUtY2hlY2stZ3JlZW4uc3ZnJztcbmltcG9ydCBlZGl0IGZyb20gJy4uL2Fzc2V0cy9pY29ucy9lZGl0LnN2Zyc7XG5pbXBvcnQgdHJhc2ggZnJvbSAnLi4vYXNzZXRzL2ljb25zL3RyYXNoLnN2Zyc7XG5pbXBvcnQgY2FuY2VsIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jYW5jZWwuc3ZnJztcbmltcG9ydCBzYXZlIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9zYXZlLnN2Zyc7XG5pbXBvcnQgc2F2ZURpc2FibGVkIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9zYXZlLWRpc2FibGVkLnN2Zyc7XG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHRhc2sgZnJvbSAnLi90YXNrcy5qcyc7XG5pbXBvcnQgeyB1cGRhdGVUYXNrQ291bnRlciB9IGZyb20gJy4vZG9tQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xubGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG5cbmZ1bmN0aW9uIGluYm94VGFza3MoKSB7XG4gICAgbGV0IHRhc2tBcnJheSA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSkge1xuICAgICAgICB0YXNrQXJyYXkgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKTtcbiAgICAgICAgdGFza0FycmF5ID0gdGFza0FycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKCh0YXNrLCBpbmRleCkgPT4gKHsgdGFzaywgaW5kZXggfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IHRhc2sgfSkgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRhc2tBcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuIHRhc2tBcnJheTtcbn1cblxuZnVuY3Rpb24gdG9kYXlUYXNrcygpIHtcbiAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0b2RheURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgdG9kYXlEYXRlID0gdG9kYXlEYXRlLmdldFRpbWUoKTtcblxuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykpIHtcbiAgICAgICAgdGFza0FycmF5ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5Jyk7XG4gICAgICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+ICh7IHRhc2ssIGluZGV4IH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoeyB0YXNrIH0pID0+IHRhc2suZGF0ZSA9PT0gdG9kYXlEYXRlICYmIHRhc2suY29tcGxldGVkID09PSBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0YXNrQXJyYXk7XG4gICAgfSBlbHNlIHJldHVybiB0YXNrQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHVwY29taW5nVGFza3MoKSB7XG4gICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdG9kYXlEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5nZXRUaW1lKCk7XG5cblxuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykpIHtcbiAgICAgICAgdGFza0FycmF5ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5Jyk7XG4gICAgICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheVxuICAgICAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+ICh7IHRhc2ssIGluZGV4IH0pKVxuICAgICAgICAgICAgLmZpbHRlcigoeyB0YXNrIH0pID0+IHRhc2suZGF0ZSA+IHRvZGF5RGF0ZSAmJiB0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGFza0FycmF5O1xuICAgIH0gZWxzZSByZXR1cm4gdGFza0FycmF5O1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZWRUYXNrcygpIHtcbiAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0b2RheURhdGUgPSB0b2RheURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBsZXQgdGFza0FycmF5ID0gW107XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpKSB7XG4gICAgICAgIHRhc2tBcnJheSA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpO1xuICAgICAgICB0YXNrQXJyYXkgPSB0YXNrQXJyYXlcbiAgICAgICAgICAgIC5tYXAoKHRhc2ssIGluZGV4KSA9PiAoeyB0YXNrLCBpbmRleCB9KSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdGFzayB9KSA9PiB0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0YXNrQXJyYXk7XG4gICAgfSBlbHNlIHJldHVybiB0YXNrQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGluYm94VGFiKCkge1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgdGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luYm94Jyk7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG5cbiAgICAvLyBnZXQgdGFza3MgZnJvbSBzdG9yYWdlXG4gICAgbGV0IHRhc2tzID0gaW5ib3hUYXNrcygpO1xuXG4gICAgLy8gZHluYW1pY2FsbHkgY3JlYXRlIHRhc2tzIGxpc3QgaXRlbXNcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IG5ld1Rhc2tJdGVtKHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH0pXG5cbiAgICBzZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsIHRhc2tMaXN0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn07XG5cbmZ1bmN0aW9uIHRvZGF5VGFiKCkge1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgdGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheScpO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuXG4gICAgbGV0IHRhc2tzID0gdG9kYXlUYXNrcygpO1xuXG4gICAgLy8gZHluYW1pY2FsbHkgY3JlYXRlIHRhc2tzIGxpc3QgaXRlbXNcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IG5ld1Rhc2tJdGVtKHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH0pXG5cbiAgICBzZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsIHRhc2tMaXN0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn07XG5cbmZ1bmN0aW9uIHVwY29taW5nVGFiKCkge1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgdGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdVcGNvbWluZyc7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VwY29taW5nJyk7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG5cblxuICAgIGxldCB0YXNrcyA9IHVwY29taW5nVGFza3MoKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBuZXdUYXNrSXRlbSh0YXNrKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9KVxuXG4gICAgc2VjdGlvbi5hcHBlbmQoc2VjdGlvblRpdGxlLCB0YXNrTGlzdCk7XG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG59O1xuXG5mdW5jdGlvbiBwcm9qZWN0VGFiKGluZGV4KSB7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGl0bGUnKTtcbiAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpW2luZGV4XTtcblxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGl0bGUnKTtcbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdC5uYW1lKTtcbiAgICBzZWN0aW9uLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcblxuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcblxuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSkgdGFza0FycmF5ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5JylcblxuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IHRhc2tBcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHRhc2ssIGluZGV4KSA9PiAoeyB0YXNrLCBpbmRleCB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IHRhc2sgfSkgPT4gdGFzay5sb2NhdGlvbiA9PT0gaW5kZXggJiYgdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgcHJvamVjdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gbmV3VGFza0l0ZW0odGFzayk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfSlcblxuICAgIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZWRUYWIoKSB7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGl0bGUnKTtcbiAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXBsZXRlZCcpO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuXG4gICAgLy8gZ2V0IHRhc2tzIGZyb20gc3RvcmFnZVxuICAgIGxldCB0YXNrcyA9IGNvbXBsZXRlZFRhc2tzKCk7XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgdGFza3MgbGlzdCBpdGVtc1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gbmV3VGFza0l0ZW0odGFzayk7XG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZWRJY29uID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrLWljb24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlZEljb24uc3JjID0gY2lyY2xlR3JlZW47XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfSlcblxuICAgIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50VGFiKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG5cbiAgICBpZiAoc2VsZWN0ZWRUYWIuZGF0YXNldC5pbmRleCA9PT0gJ2luYm94JykgaW5ib3hUYWIoKTtcbiAgICBlbHNlIGlmIChzZWxlY3RlZFRhYi5kYXRhc2V0LmluZGV4ID09PSAndG9kYXknKSB0b2RheVRhYigpO1xuICAgIGVsc2UgaWYgKHNlbGVjdGVkVGFiLmRhdGFzZXQuaW5kZXggPT09ICd1cGNvbWluZycpIHVwY29taW5nVGFiKCk7XG4gICAgZWxzZSBpZiAoc2VsZWN0ZWRUYWIuZGF0YXNldC5pbmRleCA9PT0gJ2NvbXBsZXRlZCcpIGNvbXBsZXRlZFRhYigpO1xuICAgIGVsc2UgcHJvamVjdFRhYihzZWxlY3RlZFRhYi5kYXRhc2V0LmluZGV4KTtcblxuICAgIHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFuaXB1bGF0ZVRhc2spO1xufVxuXG4vLyBmdW5jdGlvbiBmb3IgbWFuaXB1bGF0aW5nIHRhc2tzIHVwb24gZXZlbnRsaXN0ZW5lciBjYWxsXG5mdW5jdGlvbiBtYW5pcHVsYXRlVGFzayhlKSB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSB0YXNrTGlzdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD1cIiR7ZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmRhdGFzZXQuaW5kZXh9XCJdYCk7XG4gICAgY29uc3QgdGFza0luZm8gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcudGFzay1pbmZvJyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtYnRuJyk7XG5cblxuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuY29tcGxldGUtYnRuJykpIHtcbiAgICAgICAgbGV0IGNvbXBsZXRlZCA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpW2UudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKS5kYXRhc2V0LmluZGV4XVsnY29tcGxldGVkJ107XG4gICAgICAgIHRhc2suZWRpdChlLnRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJykuZGF0YXNldC5pbmRleCwgW1snY29tcGxldGVkJywgIWNvbXBsZXRlZF1dKTtcbiAgICAgICAgY3VycmVudFRhYigpO1xuICAgICAgICB1cGRhdGVUYXNrQ291bnRlcigpO1xuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmVkaXQtYnRuJykpIHtcbiAgICAgICAgZWRpdEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICByZW1vdmVCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgICAgICBjb25zdCBjYW5jZWxCdG4gPSBuZXdCdXR0b25JdGVtKHsgJ2J0bkNsYXNzJzogJ2NhbmNlbC1idG4nIH0sIHsgJ2ltZ0NsYXNzJzogJ2NhbmNlbC1pY29uJyB9LCB7ICdpbWdTcmMnOiBjYW5jZWwgfSk7XG4gICAgICAgIGNvbnN0IHNhdmVCdG4gPSBuZXdCdXR0b25JdGVtKHsgJ2J0bkNsYXNzJzogJ3NhdmUtYnRuJyB9LCB7ICdpbWdDbGFzcyc6ICdzYXZlLWljb24nIH0sIHsgJ2ltZ1NyYyc6IHNhdmUgfSk7XG5cbiAgICAgICAgZWRpdEJ0bi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgY2FuY2VsQnRuKTtcbiAgICAgICAgY2FuY2VsQnRuLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBzYXZlQnRuKTtcblxuICAgICAgICB0YXNrSW5mby5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBub2RlLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzU2KSc7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUJ0bi5kaXNhYmxlZCA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVCdG4uY2hpbGROb2Rlc1swXS5zcmMgPSBzYXZlRGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVCdG4uY2hpbGROb2Rlc1swXS5zcmMgPSBzYXZlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGRpc2FibGVFZGl0YWJsZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGVFZGl0YWJsZShlKSB7XG4gICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWluZm8nKSkge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuc2F2ZS1idG4nKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdXBkYXRlZEluZm8gPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0luZm8uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRJbmZvLnB1c2goW2NoaWxkLmdldEF0dHJpYnV0ZSgnaWQnKSwgY2hpbGQudGV4dENvbnRlbnRdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2suZWRpdCh0YXNrSXRlbS5kYXRhc2V0LmluZGV4LCB1cGRhdGVkSW5mbyk7XG5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXNrSW5mby5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLmNvbnRlbnRFZGl0YWJsZSA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkaXNhYmxlRWRpdGFibGUpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBlZGl0QnRuLnN0eWxlID0gJyc7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQnRuLnN0eWxlID0gJyc7XG4gICAgICAgICAgICAgICAgY2FuY2VsQnRuLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIHNhdmVCdG4ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgdGFza0luZm8uY2hpbGROb2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgICAgICAgICAgICAgICBub2RlLnN0eWxlID0gJyc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjdXJyZW50VGFiKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucmVtb3ZlLWJ0bicpKSB7XG4gICAgICAgIHRhc2sucmVtb3ZlKGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgY3VycmVudFRhYigpO1xuICAgICAgICB1cGRhdGVUYXNrQ291bnRlcigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gbmV3VGFza0l0ZW0odGFza09iaikge1xuICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICB0YXNrSXRlbS5kYXRhc2V0LmluZGV4ID0gdGFza09iai5pbmRleDtcblxuICAgIGNvbnN0IHRhc2tDb21wbGV0ZUJ0biA9IG5ld0J1dHRvbkl0ZW0oeyAnYnRuQ2xhc3MnOiAnY29tcGxldGUtYnRuJyB9LCB7J2ltZ0NsYXNzJzogJ2NoZWNrLWljb24nIH0sIHsnaW1nU3JjJzogY2lyY2xlIH0pO1xuICAgIGNvbnN0IHRhc2tFZGl0QnRuID0gbmV3QnV0dG9uSXRlbSh7ICdidG5DbGFzcyc6ICdlZGl0LWJ0bicgfSwgeyAnaW1nQ2xhc3MnOiAnZWRpdC1pY29uJyB9LCB7ICdpbWdTcmMnOiBlZGl0IH0pO1xuICAgIGNvbnN0IHRhc2tSZW1vdmVCdG4gPSBuZXdCdXR0b25JdGVtKHsgJ2J0bkNsYXNzJzogJ3JlbW92ZS1idG4nIH0sIHsgJ2ltZ0NsYXNzJzogJ3RyYXNoLWljb24nIH0sIHsgJ2ltZ1NyYyc6IHRyYXNoIH0pO1xuXG4gICAgY29uc3QgdGFza0l0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0l0ZW1JbmZvLmNsYXNzTGlzdC5hZGQoJ3Rhc2staW5mbycpO1xuXG4gICAgY29uc3QgdGFza0l0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICB0YXNrSXRlbU5hbWUuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lJyk7XG4gICAgdGFza0l0ZW1OYW1lLnRleHRDb250ZW50ID0gdGFza09iai50YXNrLm5hbWU7XG5cbiAgICBjb25zdCB0YXNrSXRlbURlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza0l0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzYycpO1xuICAgIHRhc2tJdGVtRGVzYy5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2Rlc2MnKTtcbiAgICB0YXNrSXRlbURlc2MudGV4dENvbnRlbnQgPSB0YXNrT2JqLnRhc2suZGVzYztcblxuICAgIGNvbnN0IHRhc2tJdGVtRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrSXRlbURhdGUuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XG4gICAgdGFza0l0ZW1EYXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAnZGF0ZScpO1xuICAgIGxldCBkYXRlID0gJyc7XG5cbiAgICBpZiAoISF0YXNrT2JqLnRhc2suZGF0ZSkge1xuICAgICAgICBkYXRlID0gbmV3RGF0ZUl0ZW0odGFza09iai50YXNrLmRhdGUpO1xuICAgIH1cblxuICAgIHRhc2tJdGVtRGF0ZS50ZXh0Q29udGVudCA9IGRhdGU7XG5cblxuICAgIHRhc2tJdGVtSW5mby5hcHBlbmQodGFza0l0ZW1OYW1lLCB0YXNrSXRlbURlc2MsIHRhc2tJdGVtRGF0ZSk7XG4gICAgdGFza0l0ZW0uYXBwZW5kKHRhc2tDb21wbGV0ZUJ0biwgdGFza0l0ZW1JbmZvLCB0YXNrRWRpdEJ0biwgdGFza1JlbW92ZUJ0bik7XG5cbiAgICByZXR1cm4gdGFza0l0ZW07XG59O1xuXG5mdW5jdGlvbiBuZXdCdXR0b25JdGVtKC4uLmF0dHJpYnV0ZXMpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGF0dHJpYnV0ZXMuZm9yRWFjaChhdHRyaWJ1dGUgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBPYmplY3Qua2V5cyhhdHRyaWJ1dGUpWzBdO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IE9iamVjdC52YWx1ZXMoYXR0cmlidXRlKVswXTtcbiAgICAgICAgaWYoa2V5ID09PSAnYnRuQ2xhc3MnKSB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaW1nQ2xhc3MnKSB7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnaW1nU3JjJykge1xuICAgICAgICAgICAgaW1nLnNyYyA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGJ1dHRvbi5hcHBlbmQoaW1nKTtcblxuICAgIHJldHVybiBidXR0b247XG59XG5cbmZ1bmN0aW9uIG5ld0RhdGVJdGVtKF90YXNrRGF0ZSkge1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCB0aGlzWWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICB0b2RheURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBjb25zdCB0b2RheUFuZE5leHRTZXZlbkRheXMgPSBbdG9kYXlEYXRlLmdldFRpbWUoKV07XG4gICAgbGV0IGRheSA9IHRvZGF5RGF0ZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgNzsgaSsrKSB7XG4gICAgICAgIGRheSA9IGRheS5zZXREYXRlKGRheS5nZXREYXRlKCkgKyAxKVxuICAgICAgICBjb25zdCBuZXdEYXkgPSBkYXk7XG4gICAgICAgIHRvZGF5QW5kTmV4dFNldmVuRGF5cy5wdXNoKG5ld0RheSk7XG4gICAgICAgIGRheSA9IG5ldyBEYXRlKGRheSk7XG4gICAgfTtcblxuICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5nZXRUaW1lKCk7XG5cblxuICAgIC8vIHRhc2sgZGF0ZSBpbmZvXG4gICAgbGV0IHRhc2tEYXRlID0gbmV3IERhdGUoX3Rhc2tEYXRlKTtcbiAgICBsZXQgdGFza1RpbWUgPSB0YXNrRGF0ZS5nZXRUaW1lKCk7XG4gICAgbGV0IHN0cmluZyA9ICcnO1xuICAgIHRvZGF5QW5kTmV4dFNldmVuRGF5cy5mb3JFYWNoKChkYXksIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChkYXkgPT09IHRhc2tUaW1lKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IDApIHN0cmluZyA9ICdUb2RheSc7XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA9PT0gMSkgc3RyaW5nID0gJ1RvbW9ycm93JztcbiAgICAgICAgICAgIGVsc2Ugc3RyaW5nID0gbmV3IERhdGUoZGF5KS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIHsgd2Vla2RheTogJ2xvbmcnIH0pO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmIChzdHJpbmcgIT09ICcnKSByZXR1cm4gc3RyaW5nO1xuICAgIGVsc2UgaWYgKHRoaXNZZWFyID09PSB0YXNrRGF0ZS5nZXRGdWxsWWVhcigpKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICBkYXk6ICdudW1lcmljJyxcbiAgICAgICAgICAgIG1vbnRoOiAnc2hvcnQnLFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdGFza0RhdGUudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCBvcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRhc2tEYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0Jywgb3B0aW9ucyk7XG4gICAgfVxuXG59XG5cblxuZXhwb3J0IHsgaW5ib3hUYXNrcywgdG9kYXlUYXNrcywgdXBjb21pbmdUYXNrcywgY29tcGxldGVkVGFza3MsIGluYm94VGFiLCB0b2RheVRhYiwgdXBjb21pbmdUYWIsIHByb2plY3RUYWIsIGN1cnJlbnRUYWIgfTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zaWRlYmFyLXN0eWxlLmNzcyc7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3QgdG9nZ2xlU2lkZWJhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xuXG5cbmZ1bmN0aW9uIGNvbGxhcHNlU2lkZWJhcigpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgIHRvZ2dsZVNpZGViYXJCdG4uY2xhc3NMaXN0LmFkZCgnb2Zmc2V0Jyk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVNpZGViYXIoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB0b2dnbGVTaWRlYmFyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29mZnNldCcpO1xufVxuXG5leHBvcnQgeyBjb2xsYXBzZVNpZGViYXIsIGVuYWJsZVNpZGViYXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJzdHlsZXNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=