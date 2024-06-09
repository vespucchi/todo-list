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

    (0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.handleSelectedTab)();
    const taskLocationTab = categoryDiv.querySelector(`[data-index='${taskLocationInput.value}']`);
    taskLocationTab.classList.add('selected');

    (0,_modules_projectsDomController_js__WEBPACK_IMPORTED_MODULE_4__.updateTaskCounter)()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFakRBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXgtc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMvcHJvamVjdERvbS1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zaWRlYmFyLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGVzL3Rhc2tEb20tc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbG9jYXRpb25Ecm9wZG93bi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0c0RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza3NEb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZ2dsZVNpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiaW1wb3J0ICcuL2luZGV4LXN0eWxlLmNzcyc7XG5pbXBvcnQgeyBjb2xsYXBzZVNpZGViYXIsIGVuYWJsZVNpZGViYXIgfSBmcm9tICcuL21vZHVsZXMvdG9nZ2xlU2lkZWJhci5qcyc7XG5pbXBvcnQgdGFzayBmcm9tICcuL21vZHVsZXMvdGFza3MuanMnO1xuaW1wb3J0IHByb2plY3QgZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RzLmpzJztcbmltcG9ydCB7IHVwZGF0ZVRhc2tDb3VudGVyLCB1cGRhdGVQcm9qZWN0TGlzdCwgdXBkYXRlRmF2b3JpdGVMaXN0LCBwcm9qZWN0T3B0aW9uc01lbnUsIGhhbmRsZVNlbGVjdGVkVGFiIH0gZnJvbSAnLi9tb2R1bGVzL3Byb2plY3RzRG9tQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgdXBkYXRlTG9jYXRpb25Ecm9wZG93biBmcm9tICcuL21vZHVsZXMvbG9jYXRpb25Ecm9wZG93bi5qcyc7XG5pbXBvcnQgeyBjdXJyZW50VGFiLCBuZXdEYXRlSW5wdXQgfSBmcm9tICcuL21vZHVsZXMvdGFza3NEb21Db250cm9sbGVyLmpzJztcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICcuL21vZHVsZXMvbG9jYWxTdG9yYWdlLmpzJztcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcblxuXG4vLyBTdGFydCB3aXRoIEluYm94IG1vZGVsXG5jdXJyZW50VGFiKCk7XG51cGRhdGVUYXNrQ291bnRlcigpXG51cGRhdGVQcm9qZWN0TGlzdCgpO1xudXBkYXRlRmF2b3JpdGVMaXN0KCk7XG5cblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHRvZ2dsaW5nIHNpZGViYXJcbmNvbnN0IHRvZ2dsZVNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcbnRvZ2dsZVNpZGViYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGlmIChzaWRlYmFyLmNsYXNzTGlzdC5jb250YWlucygnY29sbGFwc2VkJykpIHtcbiAgICAgICAgZW5hYmxlU2lkZWJhcigpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbGxhcHNlU2lkZWJhcigpO1xuICAgIH1cbn0pO1xuXG4vLyBldmVudCBsaXN0ZW5lcnMgZm9yIGFkZGluZyB0YXNrc1xuY29uc3QgbmV3VGFza01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2stbW9kYWwnKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ld1Rhc2stZm9ybScpO1xuY29uc3QgZm9ybURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtLWRpdicpO1xuY29uc3QgZm9ybUJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1idXR0b25zJyk7XG5jb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzJyk7XG5jb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10YXNrJyk7XG5cbmNvbnN0IGFkZFRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXRhc2snKTtcbmFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3VGFza01vZGFsLnNob3dNb2RhbCgpO1xuICAgIGZvcm1EaXYuYXBwZW5kKG5ld0RhdGVJbnB1dCgpKTtcblxuICAgIGNvbnN0IGxvY2F0aW9uRHJvcGRvd24gPSB1cGRhdGVMb2NhdGlvbkRyb3Bkb3duKCk7XG4gICAgbG9jYXRpb25Ecm9wZG93bi5jbGFzc0xpc3QuYWRkKCdmb3JtJyk7XG4gICAgZm9ybUJ0bnMuaW5zZXJ0QmVmb3JlKGxvY2F0aW9uRHJvcGRvd24sIGZvcm1CdG5zLmZpcnN0Q2hpbGQpO1xuXG4gICAgY29uc3QgdGFza05hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLW5hbWUnKTtcbiAgICB0YXNrTmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgICAgICBpZiAodGFza05hbWVJbnB1dC52YWx1ZSA9PT0gJycpIHN1Ym1pdFRhc2tCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBlbHNlIHN1Ym1pdFRhc2tCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIHN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXRUYXNrKTtcbn0pO1xuXG5jb25zdCBjbG9zZVRhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjbG9zZS10YXNrJyk7XG5jbG9zZVRhc2tNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIG5ld1Rhc2tNb2RhbC5jbG9zZSgpO1xuICAgICAgICBmb3JtQnRucy5yZW1vdmVDaGlsZChmb3JtQnRucy5maXJzdENoaWxkKTtcbiAgICAgICAgc3VibWl0VGFza0J0bi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHN1Ym1pdFRhc2spO1xuICAgIH1cbik7XG5cbmZ1bmN0aW9uIHN1Ym1pdFRhc2soZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRhc2tMb2NhdGlvbklucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRhc2stbG9jYXRpb24nKTtcbiAgICBjb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpO1xuICAgIGNvbnN0IHRhc2tEZXNjSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kZXNjJyk7XG4gICAgY29uc3QgdGFza0RhdGVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRhdGUnKTtcblxuICAgIHRhc2suYWRkKHRhc2tOYW1lSW5wdXQudmFsdWUsIHRhc2tEZXNjSW5wdXQudmFsdWUsIHRhc2tEYXRlSW5wdXQudmFsdWUsIGZhbHNlLCB0YXNrTG9jYXRpb25JbnB1dC52YWx1ZSk7XG5cbiAgICBoYW5kbGVTZWxlY3RlZFRhYigpO1xuICAgIGNvbnN0IHRhc2tMb2NhdGlvblRhYiA9IGNhdGVnb3J5RGl2LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke3Rhc2tMb2NhdGlvbklucHV0LnZhbHVlfSddYCk7XG4gICAgdGFza0xvY2F0aW9uVGFiLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICB1cGRhdGVUYXNrQ291bnRlcigpXG4gICAgbmV3VGFza01vZGFsLmNsb3NlKCk7XG4gICAgdGFza0Zvcm0ucmVzZXQoKTtcbiAgICBzdWJtaXRUYXNrQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBjdXJyZW50VGFiKCk7XG59XG5cbi8vIGV2ZW50IGxpc3RlbmVycyBmb3IgYWRkaW5nIHByb2plY3RzXG5jb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdC1tb2RhbCcpO1xuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3UHJvamVjdC1mb3JtJyk7XG5cbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXByb2plY3QnKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmV3UHJvamVjdE1vZGFsLnNob3dNb2RhbCgpO1xufSk7XG5cbmNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG5jaGVja2JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgY2hlY2tib3gudmFsdWUgPT09ICdmYWxzZScgPyBjaGVja2JveC52YWx1ZSA9ICd0cnVlJyA6IGNoZWNrYm94LnZhbHVlID0gJ2ZhbHNlJztcbn0pXG5cbmNvbnN0IGNsb3NlUHJvamVjdE1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Nsb3NlLXByb2plY3QnKTtcbmNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBuZXdQcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICBjaGVja2JveC52YWx1ZSA9ICdmYWxzZSc7XG4gICAgY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xufSk7XG5cbmNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXByb2plY3QnKTtcbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG5wcm9qZWN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0TmFtZUlucHV0LnZhbHVlID09PSAnJykgc3VibWl0UHJvamVjdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZWxzZSBzdWJtaXRQcm9qZWN0QnRuLmRpc2FibGVkID0gZmFsc2U7XG59KTtcblxuY29uc3QgcHJvamVjdENvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jb2xvcicpO1xuY29uc3QgcHJvamVjdEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QtbGlzdCcpO1xuc3VibWl0UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3QuYWRkKHByb2plY3ROYW1lSW5wdXQudmFsdWUsIHByb2plY3RDb2xvcklucHV0LnZhbHVlLCBjaGVja2JveC52YWx1ZSk7XG4gICAgdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICB1cGRhdGVGYXZvcml0ZUxpc3QoKTtcblxuICAgIGhhbmRsZVNlbGVjdGVkVGFiKCk7XG4gICAgY29uc3QgdGFza0xvY2F0aW9uVGFiID0gY2F0ZWdvcnlEaXYucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7Z2V0U3RvcmFnZSgncHJvamVjdEFycmF5JykubGVuZ3RoIC0gMX0nXWApO1xuICAgIHRhc2tMb2NhdGlvblRhYi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgbmV3UHJvamVjdE1vZGFsLmNsb3NlKCk7XG4gICAgY2hlY2tib3gudmFsdWUgPSAnZmFsc2UnO1xuICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG4gICAgY3VycmVudFRhYigpO1xufSk7XG5cblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHN3aXRjaGluZyBmaWx0ZXJzXG5jb25zdCBmaWx0ZXJzID0gY2F0ZWdvcnlEaXYucXVlcnlTZWxlY3RvcignLmNhdGVnLWZpbHRlcnMnKTtcbmZpbHRlcnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGhhbmRsZVNlbGVjdGVkVGFiKCk7XG4gICAgZS50YXJnZXQuY2xvc2VzdCgnYnV0dG9uJykuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICBjdXJyZW50VGFiKCk7XG59KVxuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBzd2l0Y2hpbmcgcHJvamVjdHNcbmNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpO1xuY2F0ZWdvcmllcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3QpO1xuXG4vLyBmb3IgaGFuZGxpbmcgcHJvamVjdCBjbGlja3NcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3QoZSkge1xuICAgIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1vcHRpb25zJykpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbnMgPSBlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1vcHRpb25zJyk7XG4gICAgICAgIHByb2plY3RPcHRpb25zTWVudShwcm9qZWN0T3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucHJvamVjdC1pdGVtJykpIHtcbiAgICAgICAgaGFuZGxlU2VsZWN0ZWRUYWIoKTtcbiAgICAgICAgZS50YXJnZXQuY2xvc2VzdCgnLnByb2plY3QtaXRlbScpLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIGN1cnJlbnRUYWIoKTtcbiAgICB9XG59XG5cbiIsIi8vIFRBU0tTICYgUFJPSkVDVFNcbmZ1bmN0aW9uIHNldFN0b3JhZ2UoaXRlbSwgbmFtZSkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKTtcbn07XG5cbmZ1bmN0aW9uIGdldFN0b3JhZ2UobmFtZSkge1xuICAgIGxldCBzYXZlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKG5hbWUpO1xuICAgIGlmICghc2F2ZWQpIHJldHVybiBmYWxzZTtcblxuICAgIHNhdmVkID0gSlNPTi5wYXJzZShzYXZlZCk7XG4gICAgc2F2ZWQgPSBPYmplY3QudmFsdWVzKHNhdmVkKTtcblxuICAgIHNhdmVkLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmICgnZGF0ZScgaW4gZWxlbWVudCkge1xuICAgICAgICAgICAgZWxlbWVudC5kYXRlID0gbmV3IERhdGUoZWxlbWVudC5kYXRlKTtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0ZS5zZXRIb3VycygwLDAsMCwwKTtcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0ZSA9IGVsZW1lbnQuZGF0ZS5nZXRUaW1lKCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBzYXZlZDtcbn07XG5cbmV4cG9ydCB7IHNldFN0b3JhZ2UsIGdldFN0b3JhZ2UgfTsiLCJpbXBvcnQgeyBzZXRTdG9yYWdlLCBnZXRTdG9yYWdlIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uRHJvcGRvd24oKSB7XG4gICAgLy8gcmVtb3ZlIGN1cnJlbnQgZHJvcGRvd25cbiAgICBsZXQgdGFza0l0ZW1Mb2NhdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICB0YXNrSXRlbUxvY2F0aW9uTGlzdC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uJyk7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkxpc3QuY2xhc3NMaXN0LmFkZCgnanMtdGFzay1sb2NhdGlvbicpO1xuXG4gICAgY29uc3QgdGFza0l0ZW1Mb2NhdGlvbkluYm94T3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkluYm94T3B0aW9uLnZhbHVlID0gJ2luYm94JztcbiAgICB0YXNrSXRlbUxvY2F0aW9uSW5ib3hPcHRpb24udGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuXG4gICAgY29uc3QgdGFza0l0ZW1Mb2NhdGlvbkRpc2FibGVkT3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkRpc2FibGVkT3B0aW9uLnZhbHVlID0gJyc7XG4gICAgdGFza0l0ZW1Mb2NhdGlvbkRpc2FibGVkT3B0aW9uLnRleHRDb250ZW50ID0gJy0tIE15IHByb2plY3RzIC0tJztcbiAgICB0YXNrSXRlbUxvY2F0aW9uRGlzYWJsZWRPcHRpb24uZGlzYWJsZWQgPSAndHJ1ZSc7XG5cbiAgICB0YXNrSXRlbUxvY2F0aW9uTGlzdC5hcHBlbmQodGFza0l0ZW1Mb2NhdGlvbkluYm94T3B0aW9uLCB0YXNrSXRlbUxvY2F0aW9uRGlzYWJsZWRPcHRpb24pO1xuXG4gICAgLy8gY3JlYXRlIG5ldyBvcHRpb25zXG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5Jyk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0U2VsZWN0LnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC52YWx1ZSA9IGluZGV4O1xuICAgICAgICAgICAgcHJvamVjdFNlbGVjdC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgICAgICAgICAgIHRhc2tJdGVtTG9jYXRpb25MaXN0LmFwcGVuZChwcm9qZWN0U2VsZWN0KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXR1cm4gdGFza0l0ZW1Mb2NhdGlvbkxpc3Q7XG59OyIsImltcG9ydCB7IHNldFN0b3JhZ2UsIGdldFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuLy8gcHJvamVjdCBvYmplY3RzXG5jb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0QXJyYXk7XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpID09PSBmYWxzZSkge1xuICAgICAgICBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0QXJyYXkgPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGQgPSAobmFtZSwgY29sb3IsIGZhdikgPT4ge1xuICAgICAgICBjb25zdCBmYXZvcml0ZSA9IChmYXYgPT09ICd0cnVlJyk7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHsgbmFtZSwgY29sb3IsIGZhdm9yaXRlIH0pO1xuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZShwcm9qZWN0QXJyYXksICdwcm9qZWN0QXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBlZGl0ID0gKGluZGV4LCBuZXdJbmZvKSA9PiB7XG4gICAgICAgIG5ld0luZm8uZm9yRWFjaChwcm9wZXJ0eSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0QXJyYXlbaW5kZXhdW3Byb3BlcnR5WzBdXSA9IHByb3BlcnR5WzFdO1xuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiBzZXRTdG9yYWdlKHByb2plY3RBcnJheSwgJ3Byb2plY3RBcnJheScpO1xuICAgIH07XG5cbiAgICBjb25zdCByZW1vdmUgPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UocHJvamVjdEFycmF5LCAncHJvamVjdEFycmF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCBlZGl0LCByZW1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3QoKTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9wcm9qZWN0RG9tLXN0eWxlLmNzcyc7XG5pbXBvcnQgaGFzaHRhZ0JsdWUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2hhc2h0YWctYmx1ZS5zdmcnO1xuaW1wb3J0IGhhc2h0YWdSZWQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2hhc2h0YWctcmVkLnN2Zyc7XG5pbXBvcnQgaGFzaHRhZ0NvYWwgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2hhc2h0YWctY29hbC5zdmcnO1xuaW1wb3J0IGhhc2h0YWdMaW1lIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWxpbWUuc3ZnJztcbmltcG9ydCBoYXNodGFnTWFnIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLW1hZy5zdmcnO1xuaW1wb3J0IGRvdHMgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2RvdHMuc3ZnJztcbmltcG9ydCB7IGdldFN0b3JhZ2UgfSBmcm9tICcuL2xvY2FsU3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBpbmJveFRhc2tzLCB0b2RheVRhc2tzLCB1cGNvbWluZ1Rhc2tzLCBjb21wbGV0ZWRUYXNrcyB9IGZyb20gJy4vdGFza3NEb21Db250cm9sbGVyLmpzJztcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vcHJvamVjdHMuanMnO1xuXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5mdW5jdGlvbiB1cGRhdGVUYXNrQ291bnRlcigpIHtcbiAgICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3JpZXMnKTtcbiAgICBjb25zdCB0YWJzID0gY2F0ZWdvcmllcy5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgaWYgKHRhYi5kYXRhc2V0LmluZGV4ID09PSAnaW5ib3gnKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luYm94Jyk7XG4gICAgICAgICAgICBjb3VudGVyLnRleHRDb250ZW50ID0gaW5ib3hUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfSBlbHNlIGlmICh0YWIuZGF0YXNldC5pbmRleCA9PT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RheScpO1xuICAgICAgICAgICAgY291bnRlci50ZXh0Q29udGVudCA9IHRvZGF5VGFza3MoKS5sZW5ndGg7XG4gICAgICAgIH0gZWxzZSBpZiAodGFiLmRhdGFzZXQuaW5kZXggPT09ICd1cGNvbWluZycpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBjb21pbmcnKTtcbiAgICAgICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSB1cGNvbWluZ1Rhc2tzKCkubGVuZ3RoO1xuICAgICAgICB9IGVsc2UgaWYgKHRhYi5kYXRhc2V0LmluZGV4ID09PSAnY29tcGxldGVkJykge1xuICAgICAgICAgICAgY29uc3QgY291bnRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZWQnKTtcbiAgICAgICAgICAgIGNvdW50ZXIudGV4dENvbnRlbnQgPSBjb21wbGV0ZWRUYXNrcygpLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH0pXG59O1xuXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0TGlzdCgpIHtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LXByb2plY3RzJyk7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgbGV0IHByb2plY3RBcnJheSA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKSkge1xuICAgICAgICBwcm9qZWN0QXJyYXkgPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKTtcbiAgICAgICAgcHJvamVjdEFycmF5ID0gcHJvamVjdEFycmF5Lm1hcCgocHJvamVjdCwgaW5kZXgpID0+ICh7IHByb2plY3QsIGluZGV4IH0pKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0QXJyYXkuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gbmV3UHJvamVjdEJ0bihwcm9qZWN0KTtcbiAgICAgICAgbGlzdC5hcHBlbmQoYnRuKTtcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGVMaXN0KCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtaXRlbXMnKTtcbiAgICBsaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBsZXQgZmF2UHJvamVjdHMgPSBbXTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgncHJvamVjdEFycmF5JykpIHtcbiAgICAgICAgZmF2UHJvamVjdHMgPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKTtcbiAgICAgICAgZmF2UHJvamVjdHMgPSBmYXZQcm9qZWN0c1xuICAgICAgICAgICAgLm1hcCgocHJvamVjdCwgaW5kZXgpID0+ICh7IHByb2plY3QsIGluZGV4IH0pKVxuICAgICAgICAgICAgLmZpbHRlcigoeyBwcm9qZWN0IH0pID0+IHByb2plY3QuZmF2b3JpdGUgPT09IHRydWUpO1xuICAgIH0gICAgXG4gICAgXG4gICAgZmF2UHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gbmV3UHJvamVjdEJ0bihwcm9qZWN0KTtcbiAgICAgICAgbGlzdC5hcHBlbmQoYnRuKTtcbiAgICB9KVxufTtcblxuZnVuY3Rpb24gbmV3UHJvamVjdEJ0bihfcHJvamVjdCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBidG4uY2xhc3NMaXN0LmFkZCgncHJvamVjdC1pdGVtJyk7XG4gICAgYnRuLmRhdGFzZXQuaW5kZXggPSBfcHJvamVjdC5pbmRleDtcblxuICAgIGNvbnN0IGJ0bkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidG5Db250ZW50LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaW5mbycpO1xuICAgIGNvbnN0IGhhc2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBoYXNoLmNsYXNzTGlzdC5hZGQoJ2hhc2gnKTtcblxuICAgIHN3aXRjaCAoX3Byb2plY3QucHJvamVjdC5jb2xvcikge1xuICAgICAgICBjYXNlICdza3lCbHVlJzpcbiAgICAgICAgICAgIGhhc2guc3JjID0gaGFzaHRhZ0JsdWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmVkJzpcbiAgICAgICAgICAgIGhhc2guc3JjID0gaGFzaHRhZ1JlZDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdjaGFyQ29hbCc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdDb2FsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ21hZ2VudGEnOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnTWFnO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2xpbWVHcmVlbic6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdMaW1lO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIHAudGV4dENvbnRlbnQgPSBfcHJvamVjdC5wcm9qZWN0Lm5hbWU7XG5cbiAgICBjb25zdCB0YXNrQ291bnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG5cbiAgICBidG5Db250ZW50LmFwcGVuZChoYXNoLCBwLCB0YXNrQ291bnQpO1xuXG4gICAgY29uc3Qgb3B0aW9uc0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IG9wdGlvbnNJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgb3B0aW9uc0J0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW9wdGlvbnMnKTtcbiAgICBvcHRpb25zSWNvbi5jbGFzc0xpc3QuYWRkKCdvcHRpb25zLWljb24nKTtcbiAgICBvcHRpb25zSWNvbi5zcmMgPSBkb3RzO1xuXG4gICAgb3B0aW9uc0J0bi5hcHBlbmQob3B0aW9uc0ljb24pO1xuXG4gICAgYnRuLmFwcGVuZChidG5Db250ZW50LCBvcHRpb25zQnRuKTtcbiAgICByZXR1cm4gYnRuO1xufTtcblxuZnVuY3Rpb24gcHJvamVjdE9wdGlvbnNNZW51KHByb2plY3RUYWIpIHtcbiAgICBjb25zdCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdvcHRpb25zLW1lbnUnKTtcbiAgICBcbiAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdtZW51LW9wdGlvbicsICdlZGl0LXRhYicpO1xuICAgIGVkaXQudGV4dENvbnRlbnQgPSAnRWRpdCc7XG5cbiAgICBjb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZW1vdmUuY2xhc3NMaXN0LmFkZCgnbWVudS1vcHRpb24nLCAncmVtb3ZlLXRhYicpO1xuICAgIHJlbW92ZS50ZXh0Q29udGVudCA9ICdSZW1vdmUnO1xuXG4gICAgbWVudS5hcHBlbmQoZWRpdCwgcmVtb3ZlKTtcbiAgICBwcm9qZWN0VGFiLmFwcGVuZChtZW51KTtcblxuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdFRhYi5jbG9zZXN0KCcucHJvamVjdC1pdGVtJykuZGF0YXNldC5pbmRleDtcbiAgICBcbiAgICBtZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LXRhYicpKSB7XG4gICAgICAgICAgICBvcGVuRWRpdE1vZGFsKGluZGV4KTtcbiAgICAgICAgICAgIG1lbnUucmVtb3ZlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnJlbW92ZS10YWInKSkge1xuICAgICAgICAgICAgb3BlblJlbW92ZU1vZGFsKGluZGV4KTtcbiAgICAgICAgICAgIG1lbnUucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgfSlcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFlLnRhcmdldC5jbG9zZXN0KCcub3B0aW9ucy1tZW51JykpIHtcbiAgICAgICAgICAgIG1lbnUucmVtb3ZlKCk7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMpO1xuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBvcGVuRWRpdE1vZGFsKGluZGV4KSB7XG4gICAgY29uc3QgcHJvamVjdEluZm8gPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKVtpbmRleF07XG5cbiAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1vZGFsLnNldEF0dHJpYnV0ZSgncG9wb3ZlcicsIHRydWUpO1xuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJywgJ2VkaXQtbW9kYWwnKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2VkaXRQcm9qZWN0LWZvcm0nKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnRWRpdCBwcm9qZWN0JztcblxuICAgIGNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvcm0tZGl2Jyk7XG5cbiAgICBjb25zdCBsYWJlbE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsTmFtZS5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LW5hbWUnKTtcbiAgICBsYWJlbE5hbWUudGV4dENvbnRlbnQgPSAnTmFtZSc7XG5cbiAgICBjb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZScpO1xuICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcsICcyMCcpO1xuICAgIGlucHV0TmFtZS5zZXRBdHRyaWJ1dGUoJ2F1dG9jb21wbGV0ZScsICdvZmYnKTtcbiAgICBpbnB1dE5hbWUuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgaW5wdXROYW1lLnZhbHVlID0gcHJvamVjdEluZm8ubmFtZTtcblxuICAgIGNvbnN0IGxhYmVsQ29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGxhYmVsQ29sb3Iuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1jb2xvcicpO1xuICAgIGxhYmVsQ29sb3IudGV4dENvbnRlbnQgPSAnQ29sb3InO1xuXG4gICAgY29uc3Qgc2VsZWN0Q29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBzZWxlY3RDb2xvci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtY29sb3InKTtcblxuICAgIGNvbnN0IGNvbG9ycyA9IFtcbiAgICAgICAgWydyZWQnLCAnUmVkJ10sXG4gICAgICAgIFsnbGltZUdyZWVuJywgJ0xpbWUgR3JlZW4nXSxcbiAgICAgICAgWydza3lCbHVlJywgJ1NreSBCbHVlJ10sXG4gICAgICAgIFsnY2hhckNvYWwnLCAnQ2hhcmNvYWwnXSxcbiAgICAgICAgWydtYWdlbnRhJywgJ01hZ2VudGEnXVxuICAgIF1cblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgY29uc3QgY29sb3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgY29sb3IudmFsdWUgPSBjb2xvcnNbaV1bMF07XG4gICAgICAgIGNvbG9yLnRleHRDb250ZW50ID0gY29sb3JzW2ldWzFdO1xuXG4gICAgICAgIGlmKGNvbG9yLnZhbHVlID09PSBwcm9qZWN0SW5mby5jb2xvcikge1xuICAgICAgICAgICAgY29sb3Iuc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGVjdENvbG9yLmFwcGVuZChjb2xvcik7XG4gICAgfVxuXG4gICAgY29uc3QgbGFiZWxGYXZvcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgbGFiZWxGYXZvcml0ZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LXN3aXRjaCcpO1xuXG4gICAgY29uc3QgaW5wdXRGYXZvcml0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRGYXZvcml0ZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBpbnB1dEZhdm9yaXRlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3gnKTtcbiAgICBpbnB1dEZhdm9yaXRlLnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1mYXYnKTtcbiAgICBpZiAocHJvamVjdEluZm8uZmF2b3JpdGUgPT09IHRydWUpIGlucHV0RmF2b3JpdGUuY2hlY2tlZCA9IHRydWU7XG5cbiAgICAvLyBpbnB1dEZhdm9yaXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAvLyAgICAgaW5wdXRGYXZvcml0ZS52YWx1ZSA9PT0gJ2ZhbHNlJyA/IGlucHV0RmF2b3JpdGUudmFsdWUgPSAndHJ1ZScgOiBpbnB1dEZhdm9yaXRlLnZhbHVlID0gJ2ZhbHNlJztcbiAgICAvLyAgICAgY29uc29sZS5sb2coaW5wdXRGYXZvcml0ZS52YWx1ZSlcbiAgICAvLyB9KVxuXG4gICAgY29uc3Qgc3BhbkZhdm9yaXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW5GYXZvcml0ZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3NsaWRlciByb3VuZCcpO1xuXG4gICAgY29uc3QgZmF2VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBmYXZUZXh0LnRleHRDb250ZW50ID0gJ0FkZCB0byBmYXZvcml0ZXMnO1xuICAgIFxuICAgIGxhYmVsRmF2b3JpdGUuYXBwZW5kKGlucHV0RmF2b3JpdGUsIHNwYW5GYXZvcml0ZSwgZmF2VGV4dCk7XG5cbiAgICBmb3JtRGl2LmFwcGVuZChsYWJlbE5hbWUsIGlucHV0TmFtZSwgbGFiZWxDb2xvciwgc2VsZWN0Q29sb3IsIGxhYmVsRmF2b3JpdGUpO1xuXG4gICAgY29uc3QgZm9ybUJ1dHRvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb3JtQnV0dG9ucy5jbGFzc0xpc3QuYWRkKCdmb3JtLWJ1dHRvbnMnKTtcbiAgICBjb25zdCBjYW5jZWxCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2Nsb3NlLW1vZGFsJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCAnY2xvc2UtcHJvamVjdCcpO1xuICAgIGNhbmNlbEJ0bi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgIGNvbnN0IHNhdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZSgnZm9ybScsICdlZGl0UHJvamVjdC1mb3JtJyk7XG4gICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ3N1Ym1pdC1tb2RhbCcpO1xuICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdzdWJtaXQtcHJvamVjdCcpO1xuICAgIHNhdmVCdG4uZGlzYWJsZWQgPSBmYWxzZVxuICAgIHNhdmVCdG4udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgXG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kKGNhbmNlbEJ0biwgc2F2ZUJ0bik7XG4gICAgZm9ybS5hcHBlbmQoZm9ybURpdiwgZm9ybUJ1dHRvbnMpO1xuICAgIG1vZGFsLmFwcGVuZChmb3JtKTtcbiAgICBib2R5LmFwcGVuZChtb2RhbCk7XG4gICAgbW9kYWwuc2hvd1BvcG92ZXIoKTtcblxuICAgIGlucHV0TmFtZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICAgICAgaWYgKGlucHV0TmFtZS52YWx1ZSA9PT0gJycpIHNhdmVCdG4uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBlbHNlIHNhdmVCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9KTtcblxuICAgIGZvcm1CdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1tb2RhbCcpKSB7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuc3VibWl0LW1vZGFsJykpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dE5hbWUudmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHByb2plY3QuZWRpdChpbmRleCwgW1snbmFtZScsIGlucHV0TmFtZS52YWx1ZV0sIFsnY29sb3InLCBzZWxlY3RDb2xvci52YWx1ZV0sIFsnZmF2b3JpdGUnLCBpbnB1dEZhdm9yaXRlLmNoZWNrZWRdXSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdExpc3QoKTtcbiAgICAgICAgICAgICAgICB1cGRhdGVGYXZvcml0ZUxpc3QoKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVTZWxlY3RlZFRhYigpO1xuICAgICAgICAgICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn07XG5cbmZ1bmN0aW9uIG9wZW5SZW1vdmVNb2RhbChpbmRleCkge1xuICAgIGNvbnNvbGUubG9nKCd0ZXN0JylcbiAgICBjb25zdCBwcm9qZWN0SW5mbyA9IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpW2luZGV4XTtcblxuICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbW9kYWwuc2V0QXR0cmlidXRlKCdwb3BvdmVyJywgdHJ1ZSk7XG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwnLCAncmVtb3ZlLW1vZGFsJyk7XG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHJlbW92ZSBcIiR7cHJvamVjdEluZm8ubmFtZX1cIiBwcm9qZWN0P2A7XG5cbiAgICBjb25zdCBmb3JtQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvcm1CdXR0b25zLmNsYXNzTGlzdC5hZGQoJ2Zvcm0tYnV0dG9ucycpO1xuICAgIGNvbnN0IGNhbmNlbEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNhbmNlbEJ0bi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnYnV0dG9uJyk7XG4gICAgY2FuY2VsQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2xvc2UtbW9kYWwnKTtcbiAgICBjYW5jZWxCdG4uc2V0QXR0cmlidXRlKCdpZCcsICdjbG9zZS1wcm9qZWN0Jyk7XG4gICAgY2FuY2VsQnRuLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgY29uc3Qgc2F2ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHNhdmVCdG4uc2V0QXR0cmlidXRlKCdmb3JtJywgJ2VkaXRQcm9qZWN0LWZvcm0nKTtcbiAgICBzYXZlQnRuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc3VibWl0LW1vZGFsJyk7XG4gICAgc2F2ZUJ0bi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3N1Ym1pdC1wcm9qZWN0Jyk7XG4gICAgc2F2ZUJ0bi50ZXh0Q29udGVudCA9ICdSZW1vdmUnO1xuXG4gICAgZm9ybUJ1dHRvbnMuYXBwZW5kKGNhbmNlbEJ0biwgc2F2ZUJ0bik7XG5cbiAgICBtb2RhbC5hcHBlbmQoaDMsIGZvcm1CdXR0b25zKTtcbiAgICBib2R5LmFwcGVuZChtb2RhbCk7XG4gICAgbW9kYWwuc2hvd1BvcG92ZXIoKTtcblxuICAgIGZvcm1CdXR0b25zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5jbG9zZS1tb2RhbCcpKSB7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuc3VibWl0LW1vZGFsJykpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHByb2plY3QucmVtb3ZlKGluZGV4KTtcbiAgICAgICAgICAgIHVwZGF0ZVByb2plY3RMaXN0KCk7XG4gICAgICAgICAgICB1cGRhdGVGYXZvcml0ZUxpc3QoKTtcbiAgICAgICAgICAgIGhhbmRsZVNlbGVjdGVkVGFiKCk7XG4gICAgICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH0pXG59O1xuXG4vLyBmdW5jdGlvbiBmb3IgaGFuZGxpbmcgc2VsZWN0ZWQgdGFic1xuZnVuY3Rpb24gaGFuZGxlU2VsZWN0ZWRUYWIoKSB7XG4gICAgY29uc3QgcHJvamVjdEJ0bnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgY29uc3QgZmlsdGVyQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcblxuICAgIGZpbHRlckJ0bnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgcHJvamVjdEJ0bnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG59XG5cbmV4cG9ydCB7IHVwZGF0ZVRhc2tDb3VudGVyLCB1cGRhdGVQcm9qZWN0TGlzdCwgdXBkYXRlRmF2b3JpdGVMaXN0LCBwcm9qZWN0T3B0aW9uc01lbnUsIGhhbmRsZVNlbGVjdGVkVGFiIH07IiwiaW1wb3J0IHsgZ2V0U3RvcmFnZSwgc2V0U3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuXG4vLyB0YXNrIG9iamVjdHNcbmNvbnN0IHRhc2sgPSAoKSA9PiB7XG4gICAgbGV0IHRhc2tBcnJheTtcbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykgPT09IGZhbHNlKSB7XG4gICAgICAgIHRhc2tBcnJheSA9IFtdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRhc2tBcnJheSA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpO1xuICAgIH07XG5cbiAgICBjb25zdCBhZGQgPSAobmFtZSwgZGVzYywgX2RhdGUsIGNvbXBsZXRlZCwgbG9jYXRpb24pID0+IHtcbiAgICAgICAgY29uc3QgZGF0ZSA9ICEhX2RhdGUgPyBuZXcgRGF0ZShfZGF0ZSkgOiAnJztcbiAgICAgICAgdGFza0FycmF5LnB1c2goeyBuYW1lLCBkZXNjLCBkYXRlLCBjb21wbGV0ZWQsIGxvY2F0aW9uIH0pO1xuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZSh0YXNrQXJyYXksICd0YXNrQXJyYXknKTtcbiAgICB9O1xuXG4gICAgY29uc3QgZWRpdCA9IChpbmRleCwgbmV3SW5mbykgPT4ge1xuICAgICAgICBuZXdJbmZvLmZvckVhY2gocHJvcGVydHkgPT4ge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5WzBdID09PSAnZGF0ZScpIHtcbiAgICAgICAgICAgICAgICAhIXByb3BlcnR5WzFdID8gbmV3IERhdGUobmV3SW5mb1syXVsxXSkgOiAnJztcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHRhc2tBcnJheVtpbmRleF1bcHJvcGVydHlbMF1dID0gcHJvcGVydHlbMV07XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UodGFza0FycmF5LCAndGFza0FycmF5Jyk7XG4gICAgfTtcblxuICAgIGNvbnN0IHJlbW92ZSA9ICh0YXNrSW5kZXgpID0+IHtcbiAgICAgICAgdGFza0FycmF5LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZSh0YXNrQXJyYXksICd0YXNrQXJyYXknKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIHsgYWRkLCBlZGl0LCByZW1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2soKTsiLCJpbXBvcnQgJy4uL3N0eWxlcy90YXNrRG9tLXN0eWxlLmNzcyc7XG5pbXBvcnQgY2lyY2xlIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jaXJjbGUuc3ZnJztcbmltcG9ydCBjaXJjbGVHcmVlbiBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2lyY2xlLWNoZWNrLWdyZWVuLnN2Zyc7XG5pbXBvcnQgZWRpdCBmcm9tICcuLi9hc3NldHMvaWNvbnMvZWRpdC5zdmcnO1xuaW1wb3J0IHRyYXNoIGZyb20gJy4uL2Fzc2V0cy9pY29ucy90cmFzaC5zdmcnO1xuaW1wb3J0IGNhbmNlbCBmcm9tICcuLi9hc3NldHMvaWNvbnMvY2FuY2VsLnN2Zyc7XG5pbXBvcnQgc2F2ZSBmcm9tICcuLi9hc3NldHMvaWNvbnMvc2F2ZS5zdmcnO1xuaW1wb3J0IHNhdmVEaXNhYmxlZCBmcm9tICcuLi9hc3NldHMvaWNvbnMvc2F2ZS1kaXNhYmxlZC5zdmcnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlLmpzJztcbmltcG9ydCB0YXNrIGZyb20gJy4vdGFza3MuanMnO1xuaW1wb3J0IHsgdXBkYXRlVGFza0NvdW50ZXIgfSBmcm9tICcuL3Byb2plY3RzRG9tQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgdXBkYXRlTG9jYXRpb25Ecm9wZG93biBmcm9tICcuL2xvY2F0aW9uRHJvcGRvd24uanMnO1xuXG5cbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5jb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xubGV0IHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stbGlzdCcpO1xuXG5cbmZ1bmN0aW9uIGluYm94VGFza3MoKSB7XG4gICAgbGV0IHRhc2tBcnJheSA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSkge1xuICAgICAgICB0YXNrQXJyYXkgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKTtcbiAgICAgICAgdGFza0FycmF5ID0gdGFza0FycmF5XG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKCh0YXNrLCBpbmRleCkgPT4gKHsgdGFzaywgaW5kZXggfSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKCh7IHRhc2sgfSkgPT4gdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlICYmIHRhc2subG9jYXRpb24gPT0gJ2luYm94Jyk7XG4gICAgICAgIHJldHVybiB0YXNrQXJyYXk7XG4gICAgfSBlbHNlIHJldHVybiB0YXNrQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHRvZGF5VGFza3MoKSB7XG4gICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdG9kYXlEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5nZXRUaW1lKCk7XG5cbiAgICBsZXQgdGFza0FycmF5ID0gW107XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpKSB7XG4gICAgICAgIHRhc2tBcnJheSA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpO1xuICAgICAgICB0YXNrQXJyYXkgPSB0YXNrQXJyYXlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHRhc2ssIGluZGV4KSA9PiAoeyB0YXNrLCBpbmRleCB9KSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoKHsgdGFzayB9KSA9PiB0YXNrLmRhdGUgPT09IHRvZGF5RGF0ZSAmJiB0YXNrLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xuICAgICAgICByZXR1cm4gdGFza0FycmF5O1xuICAgIH0gZWxzZSByZXR1cm4gdGFza0FycmF5O1xufVxuXG5mdW5jdGlvbiB1cGNvbWluZ1Rhc2tzKCkge1xuICAgIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIHRvZGF5RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICB0b2RheURhdGUgPSB0b2RheURhdGUuZ2V0VGltZSgpO1xuXG5cbiAgICBsZXQgdGFza0FycmF5ID0gW107XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpKSB7XG4gICAgICAgIHRhc2tBcnJheSA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpO1xuICAgICAgICB0YXNrQXJyYXkgPSB0YXNrQXJyYXlcbiAgICAgICAgICAgIC5tYXAoKHRhc2ssIGluZGV4KSA9PiAoeyB0YXNrLCBpbmRleCB9KSlcbiAgICAgICAgICAgIC5maWx0ZXIoKHsgdGFzayB9KSA9PiB0YXNrLmRhdGUgPiB0b2RheURhdGUgJiYgdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIHRhc2tBcnJheTtcbiAgICB9IGVsc2UgcmV0dXJuIHRhc2tBcnJheTtcbn1cblxuZnVuY3Rpb24gY29tcGxldGVkVGFza3MoKSB7XG4gICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgdG9kYXlEYXRlID0gdG9kYXlEYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuXG4gICAgbGV0IHRhc2tBcnJheSA9IFtdO1xuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSkge1xuICAgICAgICB0YXNrQXJyYXkgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKTtcbiAgICAgICAgdGFza0FycmF5ID0gdGFza0FycmF5XG4gICAgICAgICAgICAubWFwKCh0YXNrLCBpbmRleCkgPT4gKHsgdGFzaywgaW5kZXggfSkpXG4gICAgICAgICAgICAuZmlsdGVyKCh7IHRhc2sgfSkgPT4gdGFzay5jb21wbGV0ZWQgPT09IHRydWUpO1xuICAgICAgICByZXR1cm4gdGFza0FycmF5O1xuICAgIH0gZWxzZSByZXR1cm4gdGFza0FycmF5O1xufVxuXG5mdW5jdGlvbiBpbmJveFRhYigpIHtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgc2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25UaXRsZScpO1xuICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdpbmJveCcpO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuXG4gICAgLy8gZ2V0IHRhc2tzIGZyb20gc3RvcmFnZVxuICAgIGxldCB0YXNrcyA9IGluYm94VGFza3MoKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBuZXdUYXNrSXRlbSh0YXNrKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9KVxuXG4gICAgc2VjdGlvbi5hcHBlbmQoc2VjdGlvblRpdGxlLCB0YXNrTGlzdCk7XG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG59O1xuXG5mdW5jdGlvbiB0b2RheVRhYigpIHtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgc2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25UaXRsZScpO1xuICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ1RvZGF5JztcbiAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLCAndG9kYXknKTtcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcblxuICAgIGxldCB0YXNrcyA9IHRvZGF5VGFza3MoKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBuZXdUYXNrSXRlbSh0YXNrKTtcbiAgICAgICAgdGFza0xpc3QuYXBwZW5kKHRhc2tJdGVtKTtcbiAgICB9KVxuXG4gICAgc2VjdGlvbi5hcHBlbmQoc2VjdGlvblRpdGxlLCB0YXNrTGlzdCk7XG4gICAgbWFpbi5hcHBlbmQoc2VjdGlvbik7XG59O1xuXG5mdW5jdGlvbiB1cGNvbWluZ1RhYigpIHtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpO1xuICAgIGNvbnN0IHNlY3Rpb25UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuXG4gICAgc2VjdGlvblRpdGxlLmNsYXNzTGlzdC5hZGQoJ3NlY3Rpb25UaXRsZScpO1xuICAgIHRhc2tMaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBzZWN0aW9uVGl0bGUudGV4dENvbnRlbnQgPSAnVXBjb21pbmcnO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICd1cGNvbWluZycpO1xuICAgIHRhc2tMaXN0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGlzdCcpO1xuXG5cbiAgICBsZXQgdGFza3MgPSB1cGNvbWluZ1Rhc2tzKCk7XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgdGFza3MgbGlzdCBpdGVtc1xuICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gbmV3VGFza0l0ZW0odGFzayk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfSlcblxuICAgIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xufTtcblxuZnVuY3Rpb24gY29tcGxldGVkVGFiKCkge1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgdGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIHNlY3Rpb25UaXRsZS50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsICdjb21wbGV0ZWQnKTtcbiAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrLWxpc3QnKTtcblxuICAgIC8vIGdldCB0YXNrcyBmcm9tIHN0b3JhZ2VcbiAgICBsZXQgdGFza3MgPSBjb21wbGV0ZWRUYXNrcygpO1xuXG4gICAgLy8gZHluYW1pY2FsbHkgY3JlYXRlIHRhc2tzIGxpc3QgaXRlbXNcbiAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSXRlbSA9IG5ld1Rhc2tJdGVtKHRhc2spO1xuICAgICAgICBjb25zdCB0YXNrQ29tcGxldGVkSWNvbiA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5jaGVjay1pY29uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZWRJY29uLnNyYyA9IGNpcmNsZUdyZWVuO1xuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH0pXG5cbiAgICBzZWN0aW9uLmFwcGVuZChzZWN0aW9uVGl0bGUsIHRhc2tMaXN0KTtcbiAgICBtYWluLmFwcGVuZChzZWN0aW9uKTtcbn1cblxuZnVuY3Rpb24gcHJvamVjdFRhYihpbmRleCkge1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJyk7XG4gICAgY29uc3Qgc2VjdGlvblRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgdGFza0xpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGNvbnN0IHByb2plY3QgPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKVtpbmRleF07XG5cbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdC5uYW1lO1xuICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsIHByb2plY3QubmFtZSk7XG4gICAgc2VjdGlvbi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gICAgdGFza0xpc3QuY2xhc3NMaXN0LmFkZCgndGFzay1saXN0Jyk7XG5cbiAgICBsZXQgdGFza0FycmF5ID0gW107XG5cbiAgICBpZiAoZ2V0U3RvcmFnZSgndGFza0FycmF5JykpIHRhc2tBcnJheSA9IGdldFN0b3JhZ2UoJ3Rhc2tBcnJheScpXG5cbiAgICBjb25zdCBwcm9qZWN0VGFza3MgPSB0YXNrQXJyYXlcbiAgICAgICAgLm1hcCgodGFzaywgaW5kZXgpID0+ICh7IHRhc2ssIGluZGV4IH0pKVxuICAgICAgICAuZmlsdGVyKCh7IHRhc2sgfSkgPT4gdGFzay5sb2NhdGlvbiA9PT0gaW5kZXggJiYgdGFzay5jb21wbGV0ZWQgPT09IGZhbHNlKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgcHJvamVjdFRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gbmV3VGFza0l0ZW0odGFzayk7XG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfSlcblxuICAgIHNlY3Rpb24uYXBwZW5kKHNlY3Rpb25UaXRsZSwgdGFza0xpc3QpO1xuICAgIG1haW4uYXBwZW5kKHNlY3Rpb24pO1xufVxuXG5mdW5jdGlvbiBjdXJyZW50VGFiKCkge1xuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG5cbiAgICBpZiAoc2VsZWN0ZWRUYWIuZGF0YXNldC5pbmRleCA9PT0gJ2luYm94JykgaW5ib3hUYWIoKTtcbiAgICBlbHNlIGlmIChzZWxlY3RlZFRhYi5kYXRhc2V0LmluZGV4ID09PSAndG9kYXknKSB0b2RheVRhYigpO1xuICAgIGVsc2UgaWYgKHNlbGVjdGVkVGFiLmRhdGFzZXQuaW5kZXggPT09ICd1cGNvbWluZycpIHVwY29taW5nVGFiKCk7XG4gICAgZWxzZSBpZiAoc2VsZWN0ZWRUYWIuZGF0YXNldC5pbmRleCA9PT0gJ2NvbXBsZXRlZCcpIGNvbXBsZXRlZFRhYigpO1xuICAgIGVsc2UgcHJvamVjdFRhYihzZWxlY3RlZFRhYi5kYXRhc2V0LmluZGV4KTtcblxuICAgIHRhc2tMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stbGlzdCcpO1xuICAgIHRhc2tMaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFuaXB1bGF0ZVRhc2spO1xufVxuXG5mdW5jdGlvbiBtYW5pcHVsYXRlVGFzayhlKSB7XG4gICAgY29uc3QgdGFza0l0ZW0gPSB0YXNrTGlzdC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD1cIiR7ZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmRhdGFzZXQuaW5kZXh9XCJdYCk7XG4gICAgY29uc3QgdGFza0luZm8gPSB0YXNrSXRlbS5xdWVyeVNlbGVjdG9yKCcudGFzay1pbmZvJyk7XG4gICAgY29uc3QgZWRpdEJ0biA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LWJ0bicpO1xuICAgIGNvbnN0IHJlbW92ZUJ0biA9IHRhc2tJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5yZW1vdmUtYnRuJyk7XG5cbiAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLmNvbXBsZXRlLWJ0bicpKSB7XG4gICAgICAgIGxldCBjb21wbGV0ZWQgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKVtlLnRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJykuZGF0YXNldC5pbmRleF1bJ2NvbXBsZXRlZCddO1xuICAgICAgICB0YXNrLmVkaXQoZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmRhdGFzZXQuaW5kZXgsIFtbJ2NvbXBsZXRlZCcsICFjb21wbGV0ZWRdXSk7XG4gICAgICAgIGN1cnJlbnRUYWIoKTtcbiAgICAgICAgdXBkYXRlVGFza0NvdW50ZXIoKTtcbiAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5lZGl0LWJ0bicpKSB7XG4gICAgICAgIGVkaXRCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgcmVtb3ZlQnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XG5cbiAgICAgICAgY29uc3QgY2FuY2VsQnRuID0gbmV3QnV0dG9uSXRlbSh7ICdidG5DbGFzcyc6ICdjYW5jZWwtYnRuJyB9LCB7ICdpbWdDbGFzcyc6ICdjYW5jZWwtaWNvbicgfSwgeyAnaW1nU3JjJzogY2FuY2VsIH0pO1xuICAgICAgICBjb25zdCBzYXZlQnRuID0gbmV3QnV0dG9uSXRlbSh7ICdidG5DbGFzcyc6ICdzYXZlLWJ0bicgfSwgeyAnaW1nQ2xhc3MnOiAnc2F2ZS1pY29uJyB9LCB7ICdpbWdTcmMnOiBzYXZlIH0pO1xuXG4gICAgICAgIGVkaXRCdG4uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGNhbmNlbEJ0bik7XG4gICAgICAgIGNhbmNlbEJ0bi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgc2F2ZUJ0bik7XG5cbiAgICAgICAgY29uc3QgZGF0ZUlucHV0ID0gbmV3RGF0ZUlucHV0KCk7XG5cbiAgICAgICAgY29uc3QgdGFza0l0ZW1Mb2NhdGlvbkRyb3Bkb3duID0gdXBkYXRlTG9jYXRpb25Ecm9wZG93bigpO1xuICAgICAgICBjb25zdCB0YXNrSXRlbUxvY2F0aW9uSW5kZXggPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKVtlLnRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJykuZGF0YXNldC5pbmRleF1bJ2xvY2F0aW9uJ107XG4gICAgICAgIHRhc2tJdGVtTG9jYXRpb25Ecm9wZG93bi5jaGlsZE5vZGVzLmZvckVhY2gobG9jYXRpb24gPT4ge1xuICAgICAgICAgICAgbG9jYXRpb24udmFsdWUgPT09IHRhc2tJdGVtTG9jYXRpb25JbmRleCA/IGxvY2F0aW9uLnNlbGVjdGVkID0gdHJ1ZSA6IGxvY2F0aW9uLnNlbGVjdGVkID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICB0YXNrSW5mby5jaGlsZE5vZGVzLmZvckVhY2gobm9kZSA9PiB7XG4gICAgICAgICAgICBub2RlLmNvbnRlbnRFZGl0YWJsZSA9ICd0cnVlJztcbiAgICAgICAgICAgIG5vZGUuc3R5bGUuYm9yZGVyID0gJzFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMzU2KSc7XG5cbiAgICAgICAgICAgIGlmIChub2RlLmdldEF0dHJpYnV0ZSgnaWQnKSA9PT0gJ25hbWUnKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbm9kZS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZUJ0bi5kaXNhYmxlZCA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVCdG4uY2hpbGROb2Rlc1swXS5zcmMgPSBzYXZlRGlzYWJsZWQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzYXZlQnRuLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVCdG4uY2hpbGROb2Rlc1swXS5zcmMgPSBzYXZlO1xuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYobm9kZS5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdkYXRlJykge1xuICAgICAgICAgICAgICAgIGlmIChub2RlLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGVJbnB1dC52YWx1ZSA9IGdldEZ1bGxEYXRlRm9ySW5wdXQobmV3IERhdGUoZ2V0U3RvcmFnZSgndGFza0FycmF5JylbZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpLmRhdGFzZXQuaW5kZXhdWydkYXRlJ10pKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZGlzYWJsZUVkaXRhYmxlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBpZiAodGFza0luZm8uY2hpbGROb2Rlcy5sZW5ndGggPT09IDQpIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBkYXRlIGFuZCBsb2NhdGlvbiBlbGVtZW50cywgd2lsbCBiZSByZS1jcmVhdGVkIHdoZW4gcGFnZSByZS1yZW5kZXJzXG4gICAgICAgICAgICB0YXNrSW5mby5yZW1vdmVDaGlsZCh0YXNrSW5mby5sYXN0Q2hpbGQpO1xuICAgICAgICAgICAgdGFza0luZm8ucmVtb3ZlQ2hpbGQodGFza0luZm8ubGFzdENoaWxkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBsb2NhdGlvbiBlbGVtZW50LCB3aWxsIGJlIHJlLWNyZWF0ZWQgd2hlbiBwYWdlIHJlLXJlbmRlcnNcbiAgICAgICAgICAgIHRhc2tJbmZvLnJlbW92ZUNoaWxkKHRhc2tJbmZvLmxhc3RDaGlsZCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhcHBlbmQgZWRpdCBkYXRlIGFuZCBlZGl0IGxvY2F0aW9uIGVsZW1lbnRzLCB3aWxsIGJlIHJlbW92ZWQgd2hlbiBwYWdlIHJlLXJlbmRlcnNcbiAgICAgICAgdGFza0luZm8uYXBwZW5kKGRhdGVJbnB1dCk7XG4gICAgICAgIHRhc2tJbmZvLmFwcGVuZCh0YXNrSXRlbUxvY2F0aW9uRHJvcGRvd24pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGRpc2FibGVFZGl0YWJsZShlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnRhc2staXRlbScpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJy5zYXZlLWJ0bicpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCB1cGRhdGVkSW5mbyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgIHRhc2tJbmZvLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkSW5mby5wdXNoKFsgY2hpbGQuZ2V0QXR0cmlidXRlKCdpZCcpLCBjaGlsZC5ub2RlTmFtZSA9PSAnSU5QVVQnID8gY2hpbGQudmFsdWUgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZC5ub2RlTmFtZSA9PSAnU0VMRUNUJyA/IGNoaWxkLnZhbHVlIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZC50ZXh0Q29udGVudCBdKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGFzay5lZGl0KHRhc2tJdGVtLmRhdGFzZXQuaW5kZXgsIHVwZGF0ZWRJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZGlzYWJsZUVkaXRhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYigpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUYXNrQ291bnRlcigpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcuY2FuY2VsLWJ0bicpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZGlzYWJsZUVkaXRhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYigpO1xuXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbG9zZXN0KCcucmVtb3ZlLWJ0bicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2sucmVtb3ZlKGUudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgICAgICAgICAgYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZGlzYWJsZUVkaXRhYmxlKTtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhYigpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUYXNrQ291bnRlcigpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBkaXNhYmxlRWRpdGFibGUpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYWIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xvc2VzdCgnLnJlbW92ZS1idG4nKSkge1xuICAgICAgICB0YXNrLnJlbW92ZShlLnRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJykuZGF0YXNldC5pbmRleCk7XG4gICAgICAgIGN1cnJlbnRUYWIoKTtcbiAgICAgICAgdXBkYXRlVGFza0NvdW50ZXIoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG5ld1Rhc2tJdGVtKHRhc2tPYmopIHtcbiAgICBjb25zdCB0YXNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgdGFza0l0ZW0uZGF0YXNldC5pbmRleCA9IHRhc2tPYmouaW5kZXg7XG5cbiAgICBjb25zdCB0YXNrQ29tcGxldGVCdG4gPSBuZXdCdXR0b25JdGVtKHsgJ2J0bkNsYXNzJzogJ2NvbXBsZXRlLWJ0bicgfSwgeydpbWdDbGFzcyc6ICdjaGVjay1pY29uJyB9LCB7J2ltZ1NyYyc6IGNpcmNsZSB9KTtcbiAgICBjb25zdCB0YXNrRWRpdEJ0biA9IG5ld0J1dHRvbkl0ZW0oeyAnYnRuQ2xhc3MnOiAnZWRpdC1idG4nIH0sIHsgJ2ltZ0NsYXNzJzogJ2VkaXQtaWNvbicgfSwgeyAnaW1nU3JjJzogZWRpdCB9KTtcbiAgICBjb25zdCB0YXNrUmVtb3ZlQnRuID0gbmV3QnV0dG9uSXRlbSh7ICdidG5DbGFzcyc6ICdyZW1vdmUtYnRuJyB9LCB7ICdpbWdDbGFzcyc6ICd0cmFzaC1pY29uJyB9LCB7ICdpbWdTcmMnOiB0cmFzaCB9KTtcblxuICAgIGNvbnN0IHRhc2tJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tJdGVtSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcblxuICAgIGNvbnN0IHRhc2tJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB0YXNrSXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgdGFza0l0ZW1OYW1lLnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZScpO1xuICAgIHRhc2tJdGVtTmFtZS50ZXh0Q29udGVudCA9IHRhc2tPYmoudGFzay5uYW1lO1xuXG4gICAgY29uc3QgdGFza0l0ZW1EZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRhc2tJdGVtRGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlc2MnKTtcbiAgICB0YXNrSXRlbURlc2Muc2V0QXR0cmlidXRlKCdpZCcsICdkZXNjJyk7XG4gICAgdGFza0l0ZW1EZXNjLnRleHRDb250ZW50ID0gdGFza09iai50YXNrLmRlc2M7XG5cbiAgICBjb25zdCB0YXNrSXRlbURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdGFza0l0ZW1EYXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGF0ZScpO1xuICAgIHRhc2tJdGVtRGF0ZS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICBsZXQgZGF0ZSA9ICcnO1xuICAgIGlmICghIXRhc2tPYmoudGFzay5kYXRlKSB7XG4gICAgICAgIGRhdGUgPSBwYXJzZURhdGUodGFza09iai50YXNrLmRhdGUpO1xuICAgIH1cbiAgICB0YXNrSXRlbURhdGUudGV4dENvbnRlbnQgPSBkYXRlO1xuXG4gICAgdGFza0l0ZW1JbmZvLmFwcGVuZCh0YXNrSXRlbU5hbWUsIHRhc2tJdGVtRGVzYywgdGFza0l0ZW1EYXRlKTtcblxuICAgIGNvbnN0IHNlbGVjdGVkVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlbGVjdGVkJyk7XG4gICAgaWYgKHNlbGVjdGVkVGFiLmRhdGFzZXQuaW5kZXggPT09ICd0b2RheScgfHwgc2VsZWN0ZWRUYWIuZGF0YXNldC5pbmRleCA9PT0gJ3VwY29taW5nJykge1xuICAgICAgICBjb25zdCB0YXNrSXRlbUxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrSXRlbUxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbG9jYXRpb24nKTtcbiAgICAgICAgdGFza0l0ZW1Mb2NhdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2xvY2F0aW9uJyk7XG4gICAgICAgIGNvbnN0IHRhc2tMb2NhdGlvbiA9IHRhc2tPYmoudGFzay5sb2NhdGlvbiAhPT0gJ2luYm94JyA/IGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpW3Rhc2tPYmoudGFzay5sb2NhdGlvbl1bJ25hbWUnXSA6ICdpbmJveCc7XG4gICAgICAgIHRhc2tJdGVtTG9jYXRpb24udGV4dENvbnRlbnQgPSB0YXNrTG9jYXRpb247XG5cbiAgICAgICAgdGFza0l0ZW1JbmZvLmFwcGVuZCh0YXNrSXRlbUxvY2F0aW9uKTtcbiAgICB9XG5cbiAgICBcbiAgICB0YXNrSXRlbS5hcHBlbmQodGFza0NvbXBsZXRlQnRuLCB0YXNrSXRlbUluZm8sIHRhc2tFZGl0QnRuLCB0YXNrUmVtb3ZlQnRuKTtcblxuICAgIHJldHVybiB0YXNrSXRlbTtcbn07XG5cbmZ1bmN0aW9uIG5ld0J1dHRvbkl0ZW0oLi4uYXR0cmlidXRlcykge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuXG4gICAgYXR0cmlidXRlcy5mb3JFYWNoKGF0dHJpYnV0ZSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGF0dHJpYnV0ZSlbMF07XG4gICAgICAgIGNvbnN0IHZhbHVlID0gT2JqZWN0LnZhbHVlcyhhdHRyaWJ1dGUpWzBdO1xuICAgICAgICBpZihrZXkgPT09ICdidG5DbGFzcycpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdpbWdDbGFzcycpIHtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdpbWdTcmMnKSB7XG4gICAgICAgICAgICBpbWcuc3JjID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgYnV0dG9uLmFwcGVuZChpbWcpO1xuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn07XG5cbmZ1bmN0aW9uIG5ld0RhdGVJbnB1dCgpIHtcbiAgICBjb25zdCBkYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRhdGVJbnB1dC50eXBlID0gJ2RhdGUnO1xuICAgIGRhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2RhdGUnKTtcbiAgICBkYXRlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1kYXRlJyk7XG4gICAgZGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCBnZXRGdWxsRGF0ZUZvcklucHV0KG5ldyBEYXRlKCkpKTtcblxuICAgIHJldHVybiBkYXRlSW5wdXQ7XG59O1xuXG5mdW5jdGlvbiBwYXJzZURhdGUoX3Rhc2tEYXRlKSB7XG4gICAgbGV0IHRvZGF5RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHRoaXNZZWFyID0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpO1xuICAgIHRvZGF5RGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcblxuICAgIGNvbnN0IHRvZGF5QW5kTmV4dFNldmVuRGF5cyA9IFt0b2RheURhdGUuZ2V0VGltZSgpXTtcbiAgICBsZXQgZGF5ID0gdG9kYXlEYXRlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgICAgZGF5ID0gZGF5LnNldERhdGUoZGF5LmdldERhdGUoKSArIDEpXG4gICAgICAgIGNvbnN0IG5ld0RheSA9IGRheTtcbiAgICAgICAgdG9kYXlBbmROZXh0U2V2ZW5EYXlzLnB1c2gobmV3RGF5KTtcbiAgICAgICAgZGF5ID0gbmV3IERhdGUoZGF5KTtcbiAgICB9O1xuICAgIHRvZGF5RGF0ZSA9IHRvZGF5RGF0ZS5nZXRUaW1lKCk7XG5cbiAgICAvLyB0YXNrIGRhdGUgaW5mb1xuICAgIGxldCB0YXNrRGF0ZSA9IG5ldyBEYXRlKF90YXNrRGF0ZSk7XG4gICAgbGV0IHRhc2tUaW1lID0gdGFza0RhdGUuZ2V0VGltZSgpO1xuICAgIGxldCBzdHJpbmcgPSAnJztcbiAgICB0b2RheUFuZE5leHRTZXZlbkRheXMuZm9yRWFjaCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgICBpZiAoZGF5ID09PSB0YXNrVGltZSkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSBzdHJpbmcgPSAnVG9kYXknO1xuICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IDEpIHN0cmluZyA9ICdUb21vcnJvdyc7XG4gICAgICAgICAgICBlbHNlIHN0cmluZyA9IG5ldyBEYXRlKGRheSkudG9Mb2NhbGVTdHJpbmcoJ2RlZmF1bHQnLCB7IHdlZWtkYXk6ICdsb25nJyB9KTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBpZiAoc3RyaW5nICE9PSAnJykgcmV0dXJuIHN0cmluZztcbiAgICBlbHNlIGlmICh0aGlzWWVhciA9PT0gdGFza0RhdGUuZ2V0RnVsbFllYXIoKSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgZGF5OiAnbnVtZXJpYycsXG4gICAgICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRhc2tEYXRlLnRvTG9jYWxlU3RyaW5nKCdkZWZhdWx0Jywgb3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGRheTogJ251bWVyaWMnLFxuICAgICAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgICAgICB5ZWFyOiAnbnVtZXJpYycsXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB0YXNrRGF0ZS50b0xvY2FsZVN0cmluZygnZGVmYXVsdCcsIG9wdGlvbnMpO1xuICAgIH1cblxufTtcblxuZnVuY3Rpb24gZ2V0RnVsbERhdGVGb3JJbnB1dChkYXRlKSB7XG4gICAgaWYgKCFkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF5ID0gKFwiMFwiICsgZGF0ZS5nZXREYXRlKCkpLnNsaWNlKC0yKTtcbiAgICBjb25zdCBtb250aCA9IChcIjBcIiArIChkYXRlLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpO1xuICAgIGNvbnN0IGZ1bGxEYXRlID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAobW9udGgpICsgXCItXCIgKyAoZGF5KTtcbiAgICByZXR1cm4gZnVsbERhdGU7XG59O1xuXG5leHBvcnQgeyBpbmJveFRhc2tzLCB0b2RheVRhc2tzLCB1cGNvbWluZ1Rhc2tzLCBjb21wbGV0ZWRUYXNrcywgaW5ib3hUYWIsIHRvZGF5VGFiLCB1cGNvbWluZ1RhYiwgcHJvamVjdFRhYiwgY3VycmVudFRhYiwgbmV3RGF0ZUlucHV0IH07IiwiaW1wb3J0ICcuLi9zdHlsZXMvc2lkZWJhci1zdHlsZS5jc3MnO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IHRvZ2dsZVNpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcblxuXG5mdW5jdGlvbiBjb2xsYXBzZVNpZGViYXIoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICB0b2dnbGVTaWRlYmFyQnRuLmNsYXNzTGlzdC5hZGQoJ29mZnNldCcpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVTaWRlYmFyKCkge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgdG9nZ2xlU2lkZWJhckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvZmZzZXQnKTtcbn1cblxuZXhwb3J0IHsgY29sbGFwc2VTaWRlYmFyLCBlbmFibGVTaWRlYmFyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3R5bGVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9