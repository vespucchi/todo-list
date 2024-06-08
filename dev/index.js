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
const formDiv = document.querySelector('.form-div');
const formBtns = document.querySelector('.form-buttons');
const categoryDiv = document.querySelector('.categories');
const submitTaskBtn = document.getElementById('submit-task');

const addTask = document.getElementById('add-task');
addTask.addEventListener('click', () => {
    newTaskModal.showModal();
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
    const taskDateInput = document.getElementById('task-date');

    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].add(taskNameInput.value, taskDescInput.value, taskDateInput.value, false, taskLocationInput.value);

    handleSelectedTab();
    const taskLocationTab = categoryDiv.querySelector(`[data-index='${taskLocationInput.value}']`);
    taskLocationTab.classList.add('selected');

    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_4__.updateTaskCounter)()
    newTaskModal.close();
    taskForm.reset();
    submitTaskBtn.disabled = true;
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
/* harmony import */ var _domController_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./domController.js */ "./src/modules/domController.js");
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
                    (0,_domController_js__WEBPACK_IMPORTED_MODULE_10__.updateTaskCounter)();

                } else if (e.target.closest('.cancel-btn')) {

                    body.removeEventListener('mouseup', disableEditable);
                    currentTab();

                } else if (e.target.closest('.remove-btn')) {
                    _tasks_js__WEBPACK_IMPORTED_MODULE_9__["default"].remove(e.target.closest('.task-item').dataset.index);
                    body.removeEventListener('mouseup', disableEditable);
                    currentTab();
                    (0,_domController_js__WEBPACK_IMPORTED_MODULE_10__.updateTaskCounter)();
                }

            } else {
                body.removeEventListener('mouseup', disableEditable);
                currentTab();
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC1zdHlsZS5jc3M/ZWFlZCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3NpZGViYXItc3R5bGUuY3NzP2Q1ODYiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy90YXNrRG9tLXN0eWxlLmNzcz8zZGE0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2NhdGlvbkRyb3Bkb3duLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2tzRG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2dnbGVTaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9pbmRleC1zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY29sbGFwc2VTaWRlYmFyLCBlbmFibGVTaWRlYmFyIH0gZnJvbSAnLi9tb2R1bGVzL3RvZ2dsZVNpZGViYXIuanMnO1xuaW1wb3J0IHRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2tzLmpzJztcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgeyB1cGRhdGVUYXNrQ291bnRlciwgdXBkYXRlUHJvamVjdExpc3QsIHVwZGF0ZUZhdm9yaXRlTGlzdCB9IGZyb20gJy4vbW9kdWxlcy9kb21Db250cm9sbGVyLmpzJztcbmltcG9ydCB1cGRhdGVMb2NhdGlvbkRyb3Bkb3duIGZyb20gJy4vbW9kdWxlcy9sb2NhdGlvbkRyb3Bkb3duLmpzJztcbmltcG9ydCB7IGN1cnJlbnRUYWIsIG5ld0RhdGVJbnB1dCB9IGZyb20gJy4vbW9kdWxlcy90YXNrc0RvbUNvbnRyb2xsZXIuanMnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJy4vbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMnO1xuXG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKTtcbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuXG5cbi8vIFN0YXJ0IHdpdGggSW5ib3ggbW9kZWxcbmN1cnJlbnRUYWIoKTtcbnVwZGF0ZVRhc2tDb3VudGVyKClcbnVwZGF0ZVByb2plY3RMaXN0KCk7XG51cGRhdGVGYXZvcml0ZUxpc3QoKTtcblxuXG4vLyBldmVudCBsaXN0ZW5lciBmb3IgdG9nZ2xpbmcgc2lkZWJhclxuY29uc3QgdG9nZ2xlU2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xudG9nZ2xlU2lkZWJhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaWYgKHNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsYXBzZWQnKSkge1xuICAgICAgICBlbmFibGVTaWRlYmFyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29sbGFwc2VTaWRlYmFyKCk7XG4gICAgfVxufSk7XG5cbi8vIGV2ZW50IGxpc3RlbmVycyBmb3IgYWRkaW5nIHRhc2tzXG5jb25zdCBuZXdUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFzay1tb2RhbCcpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3VGFzay1mb3JtJyk7XG5jb25zdCBmb3JtRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm0tZGl2Jyk7XG5jb25zdCBmb3JtQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWJ1dHRvbnMnKTtcbmNvbnN0IGNhdGVnb3J5RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMnKTtcbmNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXRhc2snKTtcblxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpO1xuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdUYXNrTW9kYWwuc2hvd01vZGFsKCk7XG4gICAgZm9ybURpdi5hcHBlbmQobmV3RGF0ZUlucHV0KCkpO1xuXG4gICAgY29uc3QgbG9jYXRpb25Ecm9wZG93biA9IHVwZGF0ZUxvY2F0aW9uRHJvcGRvd24oKTtcbiAgICBsb2NhdGlvbkRyb3Bkb3duLmNsYXNzTGlzdC5hZGQoJ2Zvcm0nKTtcbiAgICBmb3JtQnRucy5pbnNlcnRCZWZvcmUobG9jYXRpb25Ecm9wZG93biwgZm9ybUJ0bnMuZmlyc3RDaGlsZCk7XG5cbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpO1xuICAgIHRhc2tOYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgICAgIGlmICh0YXNrTmFtZUlucHV0LnZhbHVlID09PSAnJykgc3VibWl0VGFza0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIGVsc2Ugc3VibWl0VGFza0J0bi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgIH0pO1xuXG4gICAgc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRhc2spO1xufSk7XG5cbmNvbnN0IGNsb3NlVGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXRhc2snKTtcbmNsb3NlVGFza01vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbmV3VGFza01vZGFsLmNsb3NlKCk7XG4gICAgICAgIGZvcm1CdG5zLnJlbW92ZUNoaWxkKGZvcm1CdG5zLmZpcnN0Q2hpbGQpO1xuICAgICAgICBzdWJtaXRUYXNrQnRuLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc3VibWl0VGFzayk7XG4gICAgfVxuKTtcblxuZnVuY3Rpb24gc3VibWl0VGFzayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgdGFza0xvY2F0aW9uSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdGFzay1sb2NhdGlvbicpO1xuICAgIGNvbnN0IHRhc2tOYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1uYW1lJyk7XG4gICAgY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2MnKTtcbiAgICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZGF0ZScpO1xuXG4gICAgdGFzay5hZGQodGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0Rlc2NJbnB1dC52YWx1ZSwgdGFza0RhdGVJbnB1dC52YWx1ZSwgZmFsc2UsIHRhc2tMb2NhdGlvbklucHV0LnZhbHVlKTtcblxuICAgIGhhbmRsZVNlbGVjdGVkVGFiKCk7XG4gICAgY29uc3QgdGFza0xvY2F0aW9uVGFiID0gY2F0ZWdvcnlEaXYucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7dGFza0xvY2F0aW9uSW5wdXQudmFsdWV9J11gKTtcbiAgICB0YXNrTG9jYXRpb25UYWIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcblxuICAgIHVwZGF0ZVRhc2tDb3VudGVyKClcbiAgICBuZXdUYXNrTW9kYWwuY2xvc2UoKTtcbiAgICB0YXNrRm9ybS5yZXNldCgpO1xuICAgIHN1Ym1pdFRhc2tCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGN1cnJlbnRUYWIoKTtcbn1cblxuLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBhZGRpbmcgcHJvamVjdHNcbmNvbnN0IG5ld1Byb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0LWZvcm0nKTtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdQcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XG59KTtcblxuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcbmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjaGVja2JveC52YWx1ZSA9PT0gJ2ZhbHNlJyA/IGNoZWNrYm94LnZhbHVlID0gJ3RydWUnIDogY2hlY2tib3gudmFsdWUgPSAnZmFsc2UnO1xufSlcblxuY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtcHJvamVjdCcpO1xuY2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG5ld1Byb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgIGNoZWNrYm94LnZhbHVlID0gJ2ZhbHNlJztcbiAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG59KTtcblxuY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtcHJvamVjdCcpO1xuY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKTtcbnByb2plY3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgaWYgKHByb2plY3ROYW1lSW5wdXQudmFsdWUgPT09ICcnKSBzdWJtaXRQcm9qZWN0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBlbHNlIHN1Ym1pdFByb2plY3RCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbn0pO1xuXG5jb25zdCBwcm9qZWN0Q29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbG9yJyk7XG5jb25zdCBwcm9qZWN0SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1saXN0Jyk7XG5zdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvamVjdC5hZGQocHJvamVjdE5hbWVJbnB1dC52YWx1ZSwgcHJvamVjdENvbG9ySW5wdXQudmFsdWUsIGNoZWNrYm94LnZhbHVlKTtcbiAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgIHVwZGF0ZUZhdm9yaXRlTGlzdCgpO1xuXG4gICAgaGFuZGxlU2VsZWN0ZWRUYWIoKTtcbiAgICBjb25zdCB0YXNrTG9jYXRpb25UYWIgPSBjYXRlZ29yeURpdi5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHtnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKS5sZW5ndGggLSAxfSddYCk7XG4gICAgdGFza0xvY2F0aW9uVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICBuZXdQcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICBjaGVja2JveC52YWx1ZSA9ICdmYWxzZSc7XG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgICBjdXJyZW50VGFiKCk7XG59KTtcblxuXG4vLyBldmVudCBsaXN0ZW5lciBmb3Igc3dpdGNoaW5nIGZpbHRlcnNcbmNvbnN0IGZpbHRlcnMgPSBjYXRlZ29yeURpdi5xdWVyeVNlbGVjdG9yKCcuY2F0ZWctZmlsdGVycycpO1xuZmlsdGVycy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgaGFuZGxlU2VsZWN0ZWRUYWIoKTtcbiAgICBlLnRhcmdldC5jbG9zZXN0KCdidXR0b24nKS5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIGN1cnJlbnRUYWIoKTtcbn0pXG5cblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHN3aXRjaGluZyBwcm9qZWN0c1xucHJvamVjdEl0ZW1zLmZvckVhY2godGFiID0+IHtcbiAgICB0YWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Byb2plY3Qtb3B0aW9ucycpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG8gZG8gb3B0aW9ucycpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaGFuZGxlU2VsZWN0ZWRUYWIoKTtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBjdXJyZW50VGFiKCk7IFxuICAgICAgICB9XG4gICAgfSk7XG59KTtcblxuLy8gZnVuY3Rpb24gZm9yIGhhbmRsaW5nIHNlbGVjdGVkIHRhYnNcbmZ1bmN0aW9uIGhhbmRsZVNlbGVjdGVkVGFiKCkge1xuICAgIGNvbnN0IHByb2plY3RCdG5zID0gY2F0ZWdvcnlEaXYucXVlcnlTZWxlY3RvckFsbCgnLnRhYicpO1xuICAgIGNvbnN0IGZpbHRlckJ0bnMgPSBmaWx0ZXJzLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcblxuICAgIGZpbHRlckJ0bnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgcHJvamVjdEJ0bnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG59IiwiaW1wb3J0IGhhc2h0YWdCbHVlIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWJsdWUuc3ZnJztcbmltcG9ydCBoYXNodGFnUmVkIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLXJlZC5zdmcnO1xuaW1wb3J0IGhhc2h0YWdDb2FsIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWNvYWwuc3ZnJztcbmltcG9ydCBoYXNodGFnTGltZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvaGFzaHRhZy1saW1lLnN2Zyc7XG5pbXBvcnQgaGFzaHRhZ01hZyBmcm9tICcuLi9hc3NldHMvaWNvbnMvaGFzaHRhZy1tYWcuc3ZnJztcbmltcG9ydCBkb3RzIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9kb3RzLnN2Zyc7XG5pbXBvcnQgeyBnZXRTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgaW5ib3hUYXNrcywgdG9kYXlUYXNrcywgdXBjb21pbmdUYXNrcywgY29tcGxldGVkVGFza3MgfSBmcm9tICcuL3Rhc2tzRG9tQ29udHJvbGxlci5qcyc7XG5cbmZ1bmN0aW9uIHVwZGF0ZVRhc2tDb3VudGVyKCkge1xuICAgIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpO1xuICAgIGNvbnN0IHRhYnMgPSBjYXRlZ29yaWVzLnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcblxuICAgIHRhYnMuZm9yRWFjaCh0YWIgPT4ge1xuICAgICAgICBpZiAodGFiLmRhdGFzZXQuaW5kZXggPT09ICdpbmJveCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ib3gnKTtcbiAgICAgICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSBpbmJveFRhc2tzKCkubGVuZ3RoO1xuICAgICAgICB9IGVsc2UgaWYgKHRhYi5kYXRhc2V0LmluZGV4ID09PSAndG9kYXknKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZGF5Jyk7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gdG9kYXlUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0YWIuZGF0YXNldC5pbmRleCA9PT0gJ3VwY29taW5nJykge1xuICAgICAgICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGNvbWluZycpO1xuICAgICAgICAgICAgY291bnRlci50ZXh0Q29udGVudCA9IHVwY29taW5nVGFza3MoKS5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGFiLmRhdGFzZXQuaW5kZXggPT09ICdjb21wbGV0ZWQnKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXBsZXRlZCcpO1xuICAgICAgICAgICAgY291bnRlci50ZXh0Q29udGVudCA9IGNvbXBsZXRlZFRhc2tzKCkubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5teS1wcm9qZWN0cycpO1xuICAgIGxpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5JykpIHtcbiAgICAgICAgcHJvamVjdEFycmF5ID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG4gICAgICAgIHByb2plY3RBcnJheSA9IHByb2plY3RBcnJheS5tYXAoKHByb2plY3QsIGluZGV4KSA9PiAoeyBwcm9qZWN0LCBpbmRleCB9KSk7XG4gICAgfVxuXG4gICAgcHJvamVjdEFycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ld1Byb2plY3RCdG4ocHJvamVjdCk7XG4gICAgICAgIGxpc3QuYXBwZW5kKGJ0bik7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGVMaXN0KCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtaXRlbXMnKTtcbiAgICBsaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBsZXQgZmF2UHJvamVjdHMgPSBbXTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5JykpIHtcbiAgICAgICAgZmF2UHJvamVjdHMgPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKTtcbiAgICAgICAgZmF2UHJvamVjdHMgPSBmYXZQcm9qZWN0c1xuICAgICAgICAgICAgLm1hcCgocHJvamVjdCwgaW5kZXgpID0+ICh7IHByb2plY3QsIGluZGV4IH0pKVxuICAgICAgICAgICAgLmZpbHRlcigoeyBwcm9qZWN0IH0pID0+IHByb2plY3QuZmF2b3JpdGUgPT09IHRydWUpO1xuICAgIH0gICAgXG4gICAgXG4gICAgZmF2UHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gbmV3UHJvamVjdEJ0bihwcm9qZWN0KTtcbiAgICAgICAgbGlzdC5hcHBlbmQoYnRuKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0QnRuKHBybykge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgYnRuLmRhdGFzZXQuaW5kZXggPSBwcm8uaW5kZXg7XG5cbiAgICBjb25zdCBoYXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgaGFzaC5jbGFzc0xpc3QuYWRkKCdoYXNoJyk7XG5cbiAgICBzd2l0Y2ggKHByby5wcm9qZWN0LmNvbG9yKSB7XG4gICAgICAgIGNhc2UgJ3NreUJsdWUnOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnQmx1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdyZWQnOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnUmVkO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2NoYXJDb2FsJzpcbiAgICAgICAgICAgIGhhc2guc3JjID0gaGFzaHRhZ0NvYWw7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbWFnZW50YSc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdNYWc7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGltZUdyZWVuJzpcbiAgICAgICAgICAgIGhhc2guc3JjID0gaGFzaHRhZ0xpbWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHAuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lJyk7XG4gICAgcC50ZXh0Q29udGVudCA9IHByby5wcm9qZWN0Lm5hbWU7XG5cbiAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG9wdGlvbnNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgb3B0aW9uc0J0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKTtcbiAgICBvcHRpb25zSWNvbi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKTtcbiAgICBvcHRpb25zSWNvbi5zcmMgPSBkb3RzO1xuXG4gICAgb3B0aW9uc0J0bi5hcHBlbmQob3B0aW9uc0ljb24pO1xuXG4gICAgYnRuLmFwcGVuZChoYXNoLCBwLCB0YXNrQ291bnQsIG9wdGlvbnNCdG4pO1xuICAgIHJldHVybiBidG47XG59O1xuXG5leHBvcnQgeyB1cGRhdGVUYXNrQ291bnRlciwgdXBkYXRlUHJvamVjdExpc3QsIHVwZGF0ZUZhdm9yaXRlTGlzdCB9OyIsIi8vIFRBU0tTICYgUFJPSkVDVFNcbmZ1bmN0aW9uIHNldFN0b3JhZ2UoaXRlbSwgbmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0b3JhZ2UobmFtZSkge1xuICAgIGxldCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgIGlmICghc2F2ZWQpIHJldHVybiBmYWxzZTtcblxuICAgIHNhdmVkID0gSlNPTi5wYXJzZShzYXZlZCk7XG4gICAgc2F2ZWQgPSBPYmplY3QudmFsdWVzKHNhdmVkKTtcblxuICAgIHNhdmVkLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmICgnZGF0ZScgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5kYXRlID0gbmV3IERhdGUoZWxlbWVudC5kYXRlKTtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0ZS5zZXRIb3VycygwLDAsMCwwKTtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0ZSA9IGVsZW1lbnQuZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzYXZlZDtcbn07XG5cbmV4cG9ydCB7IHNldFN0b3JhZ2UsIGdldFN0b3JhZ2UgfTsiLCJpbXBvcnQgeyBzZXRTdG9yYWdlLCBnZXRTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uRHJvcGRvd24oKSB7XG4gICAgLy8gcmVtb3ZlIGN1cnJlbnQgZHJvcGRvd25cbiAgICBsZXQgdGFza0l0ZW1Mb2NhdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0YXNrSXRlbUxvY2F0aW9uTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uJyk7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkxpc3QuY2xhc3NMaXN0LmFkZCgnanMtdGFzay1sb2NhdGlvbicpO1xuXG4gICAgY29uc3QgdGFza0l0ZW1Mb2NhdGlvbkluYm94T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkluYm94T3B0aW9uLnZhbHVlID0gJ2luYm94JztcbiAgICB0YXNrSXRlbUxvY2F0aW9uSW5ib3hPcHRpb24udGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuXG4gICAgY29uc3QgdGFza0l0ZW1Mb2NhdGlvbkRpc2FibGVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkRpc2FibGVkT3B0aW9uLnZhbHVlID0gJyc7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkRpc2FibGVkT3B0aW9uLnRleHRDb250ZW50ID0gJy0tIE15IHByb2plY3RzIC0tJztcbiAgICB0YXNrSXRlbUxvY2F0aW9uRGlzYWJsZWRPcHRpb24uZGlzYWJsZWQgPSAndHJ1ZSc7XG5cbiAgICB0YXNrSXRlbUxvY2F0aW9uTGlzdC5hcHBlbmQodGFza0l0ZW1Mb2NhdGlvbkluYm94T3B0aW9uLCB0YXNrSXRlbUxvY2F0aW9uRGlzYWJsZWRPcHRpb24pO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBvcHRpb25zXG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC52YWx1ZSA9IGluZGV4O1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgIHRhc2tJdGVtTG9jYXRpb25MaXN0LmFwcGVuZChwcm9qZWN0U2VsZWN0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza0l0ZW1Mb2NhdGlvbkxpc3Q7XG59OyIsImltcG9ydCB7IHNldFN0b3JhZ2UsIGdldFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuLy8gcHJvamVjdCBvYmplY3RzXG5jb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0QXJyYXk7XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpID09PSBmYWxzZSkge1xuICAgICAgICBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0QXJyYXkgPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGQgPSAobmFtZSwgY29sb3IsIGZhdikgPT4ge1xuICAgICAgICBjb25zdCBmYXZvcml0ZSA9IChmYXYgPT09ICd0cnVlJyk7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHsgbmFtZSwgY29sb3IsIGZhdm9yaXRlIH0pO1xuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZShwcm9qZWN0QXJyYXksICdwcm9qZWN0QXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmUgPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UocHJvamVjdEFycmF5LCAncHJvamVjdEFycmF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCByZW1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3QoKTsiLCJpbXBvcnQgeyBnZXRTdG9yYWdlLCBzZXRTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbi8vIHRhc2sgb2JqZWN0c1xuY29uc3QgdGFzayA9ICgpID0+IHtcblxuICAgIGxldCB0YXNrQXJyYXk7XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpID09PSBmYWxzZSkge1xuICAgICAgICB0YXNrQXJyYXkgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXNrQXJyYXkgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKTtcbiAgICB9O1xuXG4gICAgY29uc3QgYWRkID0gKG5hbWUsIGRlc2MsIF9kYXRlLCBjb21wbGV0ZWQsIGxvY2F0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSAhIV9kYXRlID8gbmV3IERhdGUoX2RhdGUpIDogJyc7XG4gICAgICAgIHRhc2tBcnJheS5wdXNoKHsgbmFtZSwgZGVzYywgZGF0ZSwgY29tcGxldGVkLCBsb2NhdGlvbiB9KTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UodGFza0FycmF5LCAndGFza0FycmF5Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IGVkaXQgPSAoaW5kZXgsIG5ld0luZm8pID0+IHtcbiAgICAgICAgbmV3SW5mby5mb3JFYWNoKHByb3BlcnR5ID0+IHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eVswXSA9PT0gJ2RhdGUnKSB7XG4gICAgICAgICAgICAgICAgISFwcm9wZXJ0eVsxXSA/IG5ldyBEYXRlKG5ld0luZm9bMl1bMV0pIDogJyc7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXNrQXJyYXlbaW5kZXhdW3Byb3BlcnR5WzBdXSA9IHByb3BlcnR5WzFdO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBzZXRTdG9yYWdlKHRhc2tBcnJheSwgJ3Rhc2tBcnJheScpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmUgPSAodGFza0luZGV4KSA9PiB7XG4gICAgICAgIHRhc2tBcnJheS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UodGFza0FycmF5LCAndGFza0FycmF5Jyk7XG4gICAgfTtcblxuICAgIHJldHVybiB7IGFkZCwgZWRpdCwgcmVtb3ZlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrKCk7IiwiaW1wb3J0ICcuLi9zdHlsZXMvdGFza0RvbS1zdHlsZS5jc3MnO1xuaW1wb3J0IGNpcmNsZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2lyY2xlLnN2Zyc7XG5pbXBvcnQgY2lyY2xlR3JlZW4gZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NpcmNsZS1jaGVjay1ncmVlbi5zdmcnO1xuaW1wb3J0IGVkaXQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2VkaXQuc3ZnJztcbmltcG9ydCB0cmFzaCBmcm9tICcuLi9hc3NldHMvaWNvbnMvdHJhc2guc3ZnJztcbmltcG9ydCBjYW5jZWwgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NhbmNlbC5zdmcnO1xuaW1wb3J0IHNhdmUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL3NhdmUuc3ZnJztcbmltcG9ydCBzYXZlRGlzYWJsZWQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL3NhdmUtZGlzYWJsZWQuc3ZnJztcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgdGFzayBmcm9tICcuL3Rhc2tzLmpzJztcbmltcG9ydCB7IHVwZGF0ZVRhc2tDb3VudGVyIH0gZnJvbSAnLi9kb21Db250cm9sbGVyLmpzJztcbmltcG9ydCB1cGRhdGVMb2NhdGlvbkRyb3Bkb3duIGZyb20gJy4vbG9jYXRpb25Ecm9wZG93bi5qcyc7XG5cblxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5sZXQgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1saXN0Jyk7XG5cblxuZnVuY3Rpb24gaW5ib3hUYXNrcygpIHtcbiAgICBsZXQgdGFza0FycmF5ID0gW107XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpKSB7XG4gICAgICAgIHRhc2tBcnJheSA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpO1xuICAgICAgICB0YXNrQXJyYXkgPSB0YXNrQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHRhc2ssIGluZGV4KSA9PiAoeyB0YXNrLCBpbmRleCB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgdGFzayB9KSA9PiB0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UgJiYgdGFzay5sb2NhdGlvbiA9PSAnaW5ib3gnKTtcbiAgICAgICAgcmV0dXJuIHRhc2tBcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuIHRhc2tBcnJheTtcbn1cblxuZnVuY3Rpb24gdG9kYXlUYXNrcygpIHtcbiAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0b2RheURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG4gICAgdG9kYXlEYXRlID0gdG9kYXlEYXRlLmdldFRpbWUoKTtcblxuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykpIHtcbiAgICAgICAgdGFza0FycmF5ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5Jyk7XG4gICAgICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+ICh7IHRhc2ssIGluZGV4IH0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcigoeyB0YXNrIH0pID0+IHRhc2suZGF0ZSA9PT0gdG9kYXlEYXRlICYmIHRhc2suY29tcGxldGVkID09PSBmYWxzZSk7XG4gICAgICAgIHJldHVybiB0YXNrQXJyYXk7XG4gICAgfSBlbHNlIHJldHVybiB0YXNrQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHVwY29taW5nVGFza3MoKSB7XG4gICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdG9kYXlEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5nZXRUaW1lKCk7XG5cblxuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykpIHtcbiAgICAgICAgdGFza0FycmF5ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5Jyk7XG4gICAgICAgIHRhc2tBcnJheSA9IHRhc2tBcnJheVxuICAgICAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+ICh7IHRhc2ssIGluZGV4IH0pKVxuICAgICAgICAgICAgLmZpbHRlcigoeyB0YXNrIH0pID0+IHRhc2suZGF0ZSA+IHRvZGF5RGF0ZSAmJiB0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGFza0FycmF5O1xuICAgIH0gZWxzZSByZXR1cm4gdGFza0FycmF5O1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZWRUYXNrcygpIHtcbiAgICBsZXQgdG9kYXlEYXRlID0gbmV3IERhdGUoKTtcbiAgICB0b2RheURhdGUgPSB0b2RheURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XG5cbiAgICBsZXQgdGFza0FycmF5ID0gW107XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpKSB7XG4gICAgICAgIHRhc2tBcnJheSA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpO1xuICAgICAgICB0YXNrQXJyYXkgPSB0YXNrQXJyYXlcbiAgICAgICAgICAgIC5tYXAoKHRhc2ssIGluZGV4KSA9PiAoeyB0YXNrLCBpbmRleCB9KSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdGFzayB9KSA9PiB0YXNrLmNvbXBsZXRlZCA9PT0gdHJ1ZSk7XG4gICAgICAgIHJldHVybiB0YXNrQXJyYXk7XG4gICAgfSBlbHNlIHJldHVybiB0YXNrQXJyYXk7XG59XG5cbmZ1bmN0aW9uIGluYm94VGFiKCkge1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgdGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdJbmJveCc7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luYm94Jyk7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG5cbiAgICAvLyBnZXQgdGFza3MgZnJvbSBzdG9yYWdlXG4gICAgbGV0IHRhc2tzID0gaW5ib3hUYXNrcygpO1xuXG4gICAgLy8gZHluYW1pY2FsbHkgY3JlYXRlIHRhc2tzIGxpc3QgaXRlbXNcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IG5ld1Rhc2tJdGVtKHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH0pXG5cbiAgICBzZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsIHRhc2tMaXN0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn07XG5cbmZ1bmN0aW9uIHRvZGF5VGFiKCkge1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgdGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICd0b2RheScpO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuXG4gICAgbGV0IHRhc2tzID0gdG9kYXlUYXNrcygpO1xuXG4gICAgLy8gZHluYW1pY2FsbHkgY3JlYXRlIHRhc2tzIGxpc3QgaXRlbXNcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IG5ld1Rhc2tJdGVtKHRhc2spO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH0pXG5cbiAgICBzZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsIHRhc2tMaXN0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn07XG5cbmZ1bmN0aW9uIHVwY29taW5nVGFiKCkge1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgdGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdVcGNvbWluZyc7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3VwY29taW5nJyk7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG5cblxuICAgIGxldCB0YXNrcyA9IHVwY29taW5nVGFza3MoKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBuZXdUYXNrSXRlbSh0YXNrKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9KVxuXG4gICAgc2VjdGlvbi5hcHBlbmQoc2VjdGlvblRpdGxlLCB0YXNrTGlzdCk7XG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG59O1xuXG5mdW5jdGlvbiBwcm9qZWN0VGFiKGluZGV4KSB7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGl0bGUnKTtcbiAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3QgcHJvamVjdCA9IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpW2luZGV4XTtcblxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGl0bGUnKTtcbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgcHJvamVjdC5uYW1lKTtcbiAgICBzZWN0aW9uLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcblxuICAgIGxldCB0YXNrQXJyYXkgPSBbXTtcblxuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSkgdGFza0FycmF5ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5JylcblxuICAgIGNvbnN0IHByb2plY3RUYXNrcyA9IHRhc2tBcnJheVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHRhc2ssIGluZGV4KSA9PiAoeyB0YXNrLCBpbmRleCB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IHRhc2sgfSkgPT4gdGFzay5sb2NhdGlvbiA9PT0gaW5kZXggJiYgdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgcHJvamVjdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gbmV3VGFza0l0ZW0odGFzayk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfSlcblxuICAgIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBjb21wbGV0ZWRUYWIoKSB7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcblxuICAgIHNlY3Rpb25UaXRsZS5jbGFzc0xpc3QuYWRkKCdzZWN0aW9uVGl0bGUnKTtcbiAgICB0YXNrTGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XG4gICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbXBsZXRlZCcpO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuXG4gICAgLy8gZ2V0IHRhc2tzIGZyb20gc3RvcmFnZVxuICAgIGxldCB0YXNrcyA9IGNvbXBsZXRlZFRhc2tzKCk7XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgdGFza3MgbGlzdCBpdGVtc1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gbmV3VGFza0l0ZW0odGFzayk7XG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZWRJY29uID0gdGFza0l0ZW0ucXVlcnlTZWxlY3RvcignLmNoZWNrLWljb24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlZEljb24uc3JjID0gY2lyY2xlR3JlZW47XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfSlcblxuICAgIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50VGFiKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG5cbiAgICBpZiAoc2VsZWN0ZWRUYWIuZGF0YXNldC5pbmRleCA9PT0gJ2luYm94JykgaW5ib3hUYWIoKTtcbiAgICBlbHNlIGlmIChzZWxlY3RlZFRhYi5kYXRhc2V0LmluZGV4ID09PSAndG9kYXknKSB0b2RheVRhYigpO1xuICAgIGVsc2UgaWYgKHNlbGVjdGVkVGFiLmRhdGFzZXQuaW5kZXggPT09ICd1cGNvbWluZycpIHVwY29taW5nVGFiKCk7XG4gICAgZWxzZSBpZiAoc2VsZWN0ZWRUYWIuZGF0YXNldC5pbmRleCA9PT0gJ2NvbXBsZXRlZCcpIGNvbXBsZXRlZFRhYigpO1xuICAgIGVsc2UgcHJvamVjdFRhYihzZWxlY3RlZFRhYi5kYXRhc2V0LmluZGV4KTtcblxuICAgIHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFuaXB1bGF0ZVRhc2spO1xufVxuXG5mdW5jdGlvbiBtYW5pcHVsYXRlVGFzayhlKSB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSB0YXNrTGlzdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD1cIiR7ZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmRhdGFzZXQuaW5kZXh9XCJdYCk7XG4gICAgY29uc3QgdGFza0luZm8gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcudGFzay1pbmZvJyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtYnRuJyk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmNvbXBsZXRlLWJ0bicpKSB7XG4gICAgICAgIGxldCBjb21wbGV0ZWQgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKVtlLnRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJykuZGF0YXNldC5pbmRleF1bJ2NvbXBsZXRlZCddO1xuICAgICAgICB0YXNrLmVkaXQoZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmRhdGFzZXQuaW5kZXgsIFtbJ2NvbXBsZXRlZCcsICFjb21wbGV0ZWRdXSk7XG4gICAgICAgIGN1cnJlbnRUYWIoKTtcbiAgICAgICAgdXBkYXRlVGFza0NvdW50ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LWJ0bicpKSB7XG4gICAgICAgIGVkaXRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmVtb3ZlQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gbmV3QnV0dG9uSXRlbSh7ICdidG5DbGFzcyc6ICdjYW5jZWwtYnRuJyB9LCB7ICdpbWdDbGFzcyc6ICdjYW5jZWwtaWNvbicgfSwgeyAnaW1nU3JjJzogY2FuY2VsIH0pO1xuICAgICAgICBjb25zdCBzYXZlQnRuID0gbmV3QnV0dG9uSXRlbSh7ICdidG5DbGFzcyc6ICdzYXZlLWJ0bicgfSwgeyAnaW1nQ2xhc3MnOiAnc2F2ZS1pY29uJyB9LCB7ICdpbWdTcmMnOiBzYXZlIH0pO1xuXG4gICAgICAgIGVkaXRCdG4uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGNhbmNlbEJ0bik7XG4gICAgICAgIGNhbmNlbEJ0bi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgc2F2ZUJ0bik7XG5cbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gbmV3RGF0ZUlucHV0KCk7XG5cbiAgICAgICAgY29uc3QgdGFza0l0ZW1Mb2NhdGlvbkRyb3Bkb3duID0gdXBkYXRlTG9jYXRpb25Ecm9wZG93bigpO1xuICAgICAgICBjb25zdCB0YXNrSXRlbUxvY2F0aW9uSW5kZXggPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKVtlLnRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJykuZGF0YXNldC5pbmRleF1bJ2xvY2F0aW9uJ107XG4gICAgICAgIHRhc2tJdGVtTG9jYXRpb25Ecm9wZG93bi5jaGlsZE5vZGVzLmZvckVhY2gobG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgbG9jYXRpb24udmFsdWUgPT09IHRhc2tJdGVtTG9jYXRpb25JbmRleCA/IGxvY2F0aW9uLnNlbGVjdGVkID0gdHJ1ZSA6IGxvY2F0aW9uLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0YXNrSW5mby5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBub2RlLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzU2KSc7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUJ0bi5kaXNhYmxlZCA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVCdG4uY2hpbGROb2Rlc1swXS5zcmMgPSBzYXZlRGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVCdG4uY2hpbGROb2Rlc1swXS5zcmMgPSBzYXZlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IGdldEZ1bGxEYXRlRm9ySW5wdXQobmV3IERhdGUoZ2V0U3RvcmFnZSgndGFza0FycmF5JylbZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmRhdGFzZXQuaW5kZXhdWydkYXRlJ10pKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZGlzYWJsZUVkaXRhYmxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGFza0luZm8uY2hpbGROb2Rlcy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBkYXRlIGFuZCBsb2NhdGlvbiBlbGVtZW50cywgd2lsbCBiZSByZS1jcmVhdGVkIHdoZW4gcGFnZSByZS1yZW5kZXJzXG4gICAgICAgICAgICB0YXNrSW5mby5yZW1vdmVDaGlsZCh0YXNrSW5mby5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgdGFza0luZm8ucmVtb3ZlQ2hpbGQodGFza0luZm8ubGFzdENoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBsb2NhdGlvbiBlbGVtZW50LCB3aWxsIGJlIHJlLWNyZWF0ZWQgd2hlbiBwYWdlIHJlLXJlbmRlcnNcbiAgICAgICAgICAgIHRhc2tJbmZvLnJlbW92ZUNoaWxkKHRhc2tJbmZvLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhcHBlbmQgZWRpdCBkYXRlIGFuZCBlZGl0IGxvY2F0aW9uIGVsZW1lbnRzLCB3aWxsIGJlIHJlbW92ZWQgd2hlbiBwYWdlIHJlLXJlbmRlcnNcbiAgICAgICAgdGFza0luZm8uYXBwZW5kKGRhdGVJbnB1dCk7XG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZCh0YXNrSXRlbUxvY2F0aW9uRHJvcGRvd24pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGVFZGl0YWJsZShlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5zYXZlLWJ0bicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVkSW5mbyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbmZvLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkSW5mby5wdXNoKFsgY2hpbGQuZ2V0QXR0cmlidXRlKCdpZCcpLCBjaGlsZC5ub2RlTmFtZSA9PSAnSU5QVVQnID8gY2hpbGQudmFsdWUgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZC5ub2RlTmFtZSA9PSAnU0VMRUNUJyA/IGNoaWxkLnZhbHVlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZC50ZXh0Q29udGVudCBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFzay5lZGl0KHRhc2tJdGVtLmRhdGFzZXQuaW5kZXgsIHVwZGF0ZWRJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZGlzYWJsZUVkaXRhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYigpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUYXNrQ291bnRlcigpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuY2FuY2VsLWJ0bicpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZGlzYWJsZUVkaXRhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYigpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucmVtb3ZlLWJ0bicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sucmVtb3ZlKGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZGlzYWJsZUVkaXRhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYigpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUYXNrQ291bnRlcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkaXNhYmxlRWRpdGFibGUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnJlbW92ZS1idG4nKSkge1xuICAgICAgICB0YXNrLnJlbW92ZShlLnRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJykuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIGN1cnJlbnRUYWIoKTtcbiAgICAgICAgdXBkYXRlVGFza0NvdW50ZXIoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld1Rhc2tJdGVtKHRhc2tPYmopIHtcbiAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgdGFza0l0ZW0uZGF0YXNldC5pbmRleCA9IHRhc2tPYmouaW5kZXg7XG5cbiAgICBjb25zdCB0YXNrQ29tcGxldGVCdG4gPSBuZXdCdXR0b25JdGVtKHsgJ2J0bkNsYXNzJzogJ2NvbXBsZXRlLWJ0bicgfSwgeydpbWdDbGFzcyc6ICdjaGVjay1pY29uJyB9LCB7J2ltZ1NyYyc6IGNpcmNsZSB9KTtcbiAgICBjb25zdCB0YXNrRWRpdEJ0biA9IG5ld0J1dHRvbkl0ZW0oeyAnYnRuQ2xhc3MnOiAnZWRpdC1idG4nIH0sIHsgJ2ltZ0NsYXNzJzogJ2VkaXQtaWNvbicgfSwgeyAnaW1nU3JjJzogZWRpdCB9KTtcbiAgICBjb25zdCB0YXNrUmVtb3ZlQnRuID0gbmV3QnV0dG9uSXRlbSh7ICdidG5DbGFzcyc6ICdyZW1vdmUtYnRuJyB9LCB7ICdpbWdDbGFzcyc6ICd0cmFzaC1pY29uJyB9LCB7ICdpbWdTcmMnOiB0cmFzaCB9KTtcblxuICAgIGNvbnN0IHRhc2tJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tJdGVtSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcblxuICAgIGNvbnN0IHRhc2tJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrSXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgdGFza0l0ZW1OYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIHRhc2tJdGVtTmFtZS50ZXh0Q29udGVudCA9IHRhc2tPYmoudGFzay5uYW1lO1xuXG4gICAgY29uc3QgdGFza0l0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tJdGVtRGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2MnKTtcbiAgICB0YXNrSXRlbURlc2Muc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjJyk7XG4gICAgdGFza0l0ZW1EZXNjLnRleHRDb250ZW50ID0gdGFza09iai50YXNrLmRlc2M7XG5cbiAgICBjb25zdCB0YXNrSXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza0l0ZW1EYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICAgIHRhc2tJdGVtRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICBsZXQgZGF0ZSA9ICcnO1xuICAgIGlmICghIXRhc2tPYmoudGFzay5kYXRlKSB7XG4gICAgICAgIGRhdGUgPSBwYXJzZURhdGUodGFza09iai50YXNrLmRhdGUpO1xuICAgIH1cbiAgICB0YXNrSXRlbURhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuXG4gICAgdGFza0l0ZW1JbmZvLmFwcGVuZCh0YXNrSXRlbU5hbWUsIHRhc2tJdGVtRGVzYywgdGFza0l0ZW1EYXRlKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG4gICAgaWYgKHNlbGVjdGVkVGFiLmRhdGFzZXQuaW5kZXggPT09ICd0b2RheScgfHwgc2VsZWN0ZWRUYWIuZGF0YXNldC5pbmRleCA9PT0gJ3VwY29taW5nJykge1xuICAgICAgICBjb25zdCB0YXNrSXRlbUxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrSXRlbUxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbG9jYXRpb24nKTtcbiAgICAgICAgdGFza0l0ZW1Mb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uJyk7XG4gICAgICAgIGNvbnN0IHRhc2tMb2NhdGlvbiA9IHRhc2tPYmoudGFzay5sb2NhdGlvbiAhPT0gJ2luYm94JyA/IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpW3Rhc2tPYmoudGFzay5sb2NhdGlvbl1bJ25hbWUnXSA6ICdpbmJveCc7XG4gICAgICAgIHRhc2tJdGVtTG9jYXRpb24udGV4dENvbnRlbnQgPSB0YXNrTG9jYXRpb247XG5cbiAgICAgICAgdGFza0l0ZW1JbmZvLmFwcGVuZCh0YXNrSXRlbUxvY2F0aW9uKTtcbiAgICB9XG5cbiAgICBcbiAgICB0YXNrSXRlbS5hcHBlbmQodGFza0NvbXBsZXRlQnRuLCB0YXNrSXRlbUluZm8sIHRhc2tFZGl0QnRuLCB0YXNrUmVtb3ZlQnRuKTtcblxuICAgIHJldHVybiB0YXNrSXRlbTtcbn07XG5cbmZ1bmN0aW9uIG5ld0J1dHRvbkl0ZW0oLi4uYXR0cmlidXRlcykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZSlbMF07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gT2JqZWN0LnZhbHVlcyhhdHRyaWJ1dGUpWzBdO1xuICAgICAgICBpZihrZXkgPT09ICdidG5DbGFzcycpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdpbWdDbGFzcycpIHtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdpbWdTcmMnKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYnV0dG9uLmFwcGVuZChpbWcpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmZ1bmN0aW9uIG5ld0RhdGVJbnB1dCgpIHtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRGdWxsRGF0ZUZvcklucHV0KG5ldyBEYXRlKCkpKTtcblxuICAgIHJldHVybiBkYXRlSW5wdXQ7XG59O1xuXG5mdW5jdGlvbiBwYXJzZURhdGUoX3Rhc2tEYXRlKSB7XG4gICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRoaXNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIHRvZGF5RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGNvbnN0IHRvZGF5QW5kTmV4dFNldmVuRGF5cyA9IFt0b2RheURhdGUuZ2V0VGltZSgpXTtcbiAgICBsZXQgZGF5ID0gdG9kYXlEYXRlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgZGF5ID0gZGF5LnNldERhdGUoZGF5LmdldERhdGUoKSArIDEpXG4gICAgICAgIGNvbnN0IG5ld0RheSA9IGRheTtcbiAgICAgICAgdG9kYXlBbmROZXh0U2V2ZW5EYXlzLnB1c2gobmV3RGF5KTtcbiAgICAgICAgZGF5ID0gbmV3IERhdGUoZGF5KTtcbiAgICB9O1xuICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5nZXRUaW1lKCk7XG5cbiAgICAvLyB0YXNrIGRhdGUgaW5mb1xuICAgIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKF90YXNrRGF0ZSk7XG4gICAgbGV0IHRhc2tUaW1lID0gdGFza0RhdGUuZ2V0VGltZSgpO1xuICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICB0b2RheUFuZE5leHRTZXZlbkRheXMuZm9yRWFjaCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZGF5ID09PSB0YXNrVGltZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSBzdHJpbmcgPSAnVG9kYXknO1xuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDEpIHN0cmluZyA9ICdUb21vcnJvdyc7XG4gICAgICAgICAgICBlbHNlIHN0cmluZyA9IG5ldyBEYXRlKGRheSkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IHdlZWtkYXk6ICdsb25nJyB9KTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc3RyaW5nICE9PSAnJykgcmV0dXJuIHN0cmluZztcbiAgICBlbHNlIGlmICh0aGlzWWVhciA9PT0gdGFza0RhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRhc2tEYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0Jywgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0YXNrRGF0ZS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIG9wdGlvbnMpO1xuICAgIH1cblxufTtcblxuZnVuY3Rpb24gZ2V0RnVsbERhdGVGb3JJbnB1dChkYXRlKSB7XG4gICAgaWYgKCFkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF5ID0gKFwiMFwiICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBtb250aCA9IChcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IGZ1bGxEYXRlID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAobW9udGgpICsgXCItXCIgKyAoZGF5KTtcbiAgICByZXR1cm4gZnVsbERhdGU7XG59O1xuXG5leHBvcnQgeyBpbmJveFRhc2tzLCB0b2RheVRhc2tzLCB1cGNvbWluZ1Rhc2tzLCBjb21wbGV0ZWRUYXNrcywgaW5ib3hUYWIsIHRvZGF5VGFiLCB1cGNvbWluZ1RhYiwgcHJvamVjdFRhYiwgY3VycmVudFRhYiwgbmV3RGF0ZUlucHV0IH07IiwiaW1wb3J0ICcuLi9zdHlsZXMvc2lkZWJhci1zdHlsZS5jc3MnO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IHRvZ2dsZVNpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcblxuXG5mdW5jdGlvbiBjb2xsYXBzZVNpZGViYXIoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICB0b2dnbGVTaWRlYmFyQnRuLmNsYXNzTGlzdC5hZGQoJ29mZnNldCcpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVTaWRlYmFyKCkge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgdG9nZ2xlU2lkZWJhckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvZmZzZXQnKTtcbn1cblxuZXhwb3J0IHsgY29sbGFwc2VTaWRlYmFyLCBlbmFibGVTaWRlYmFyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3R5bGVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9