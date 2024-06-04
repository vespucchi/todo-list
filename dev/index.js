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
/* harmony import */ var _modules_inbox_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/inbox.js */ "./src/modules/inbox.js");
/* harmony import */ var _modules_domController_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/domController.js */ "./src/modules/domController.js");
/* harmony import */ var _modules_localStorage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/localStorage.js */ "./src/modules/localStorage.js");








const main = document.querySelector('main');
const sidebar = document.querySelector('.sidebar');

// Start with Inbox model
main.textContent = '';
main.append((0,_modules_inbox_js__WEBPACK_IMPORTED_MODULE_4__["default"])());
(0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_5__.updateProjectList)();
(0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_5__.updateFavoriteList)();

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

const taskDescInput = document.getElementById('task-desc');
const taskDateInput = document.getElementById('task-date');
submitTaskBtn.addEventListener('click', (e) => {
    e.preventDefault();
    _modules_tasks_js__WEBPACK_IMPORTED_MODULE_2__["default"].add(taskNameInput.value, taskDescInput.value, taskDateInput.value);
    newTaskModal.close();
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_5__.sectionDom)();
    taskForm.reset();
    submitTaskBtn.disabled = true
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
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_5__.updateProjectList)();
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_5__.updateFavoriteList)();
    projectForm.reset();
});



// event listener for switching tabs
const categoryDiv = document.querySelector('.categories');
const buttons = categoryDiv.querySelectorAll('.tab');
buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        buttons.forEach(b => b.classList.remove('selected'));
        (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_5__.categoryItemDom)(btn);
    })
})

/***/ }),

/***/ "./src/modules/domController.js":
/*!**************************************!*\
  !*** ./src/modules/domController.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   categoryItemDom: () => (/* binding */ categoryItemDom),
/* harmony export */   sectionDom: () => (/* binding */ sectionDom),
/* harmony export */   updateFavoriteList: () => (/* binding */ updateFavoriteList),
/* harmony export */   updateProjectList: () => (/* binding */ updateProjectList)
/* harmony export */ });
/* harmony import */ var _modules_inbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/inbox.js */ "./src/modules/inbox.js");
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/projects.js */ "./src/modules/projects.js");
/* harmony import */ var _assets_icons_hashtag_blue_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/hashtag-blue.svg */ "./src/assets/icons/hashtag-blue.svg");
/* harmony import */ var _assets_icons_hashtag_red_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/hashtag-red.svg */ "./src/assets/icons/hashtag-red.svg");
/* harmony import */ var _assets_icons_hashtag_coal_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/hashtag-coal.svg */ "./src/assets/icons/hashtag-coal.svg");
/* harmony import */ var _assets_icons_hashtag_lime_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/hashtag-lime.svg */ "./src/assets/icons/hashtag-lime.svg");
/* harmony import */ var _assets_icons_hashtag_mag_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/hashtag-mag.svg */ "./src/assets/icons/hashtag-mag.svg");
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./localStorage.js */ "./src/modules/localStorage.js");










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
    main.append((0,_modules_inbox_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
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

    for(let i = 0; i < _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"].instances.length; i++) {
        const btn = newProjectBtn(_modules_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"].instances, i);

        list.append(btn);
    };
}

function updateFavoriteList() {
    const list = document.querySelector('.favorite-items');
    list.textContent = '';

    const favProjects = _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"].instances.filter(pro => pro.favorite === true);

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
            hash.src = _assets_icons_hashtag_blue_svg__WEBPACK_IMPORTED_MODULE_3__;
            break;
        case 'red':
            hash.src = _assets_icons_hashtag_red_svg__WEBPACK_IMPORTED_MODULE_4__;
            break;
        case 'charCoal':
            hash.src = _assets_icons_hashtag_coal_svg__WEBPACK_IMPORTED_MODULE_5__;
            break;
        case 'magenta':
            hash.src = _assets_icons_hashtag_mag_svg__WEBPACK_IMPORTED_MODULE_7__;
            break;
        case 'limeGreen':
            hash.src = _assets_icons_hashtag_lime_svg__WEBPACK_IMPORTED_MODULE_6__;
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
                _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"].remove(item.dataset.index);
                return sectionDom();
            }
        })
    })
}



/***/ }),

/***/ "./src/modules/inbox.js":
/*!******************************!*\
  !*** ./src/modules/inbox.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ inboxTab)
/* harmony export */ });
/* harmony import */ var _styles_inbox_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/inbox-style.css */ "./src/styles/inbox-style.css");
/* harmony import */ var _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/icons/circle.svg */ "./src/assets/icons/circle.svg");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./localStorage */ "./src/modules/localStorage.js");





function inboxTab() {
    const inbox = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const taskList = document.createElement('ul');
    sectionTitle.classList.add('sectionTitle');
    sectionTitle.textContent = 'Inbox';
    inbox.setAttribute('id', 'inbox');
    taskList.setAttribute('id', 'task-list');

    // get tasks from storage
    let taskArray = [];

    if(_localStorage__WEBPACK_IMPORTED_MODULE_2__.getStorage !== false) {
        taskArray = (0,_localStorage__WEBPACK_IMPORTED_MODULE_2__.getStorage)('taskArray');
    }

    // dynamically create tasks list items
    for(let i = 0; i < taskArray.length; i++) {
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

    const inboxTaskCount = document.querySelector('#inbox');
    inboxTaskCount.textContent = taskArray.length;


    inbox.append(sectionTitle, taskList);

    return inbox;
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
        if (element.date) element.date = new Date (element.date);
    });

    return saved;
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

    return { get instances() { return projectArray; }, add, remove };
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
    }

    const add = (name, desc, date) => {
        taskArray.push({ name, desc, date });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ2lEO0FBQ3RDO0FBQ007QUFDRjtBQUNzRTtBQUN6RDs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsWUFBWSw2REFBUTtBQUNwQiw0RUFBaUI7QUFDakIsNkVBQWtCOztBQUVsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0VBQWE7QUFDckIsTUFBTTtBQUNOLFFBQVEsMEVBQWU7QUFDdkI7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHlEQUFJO0FBQ1I7QUFDQSxJQUFJLHFFQUFVO0FBQ2Q7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksNERBQU87QUFDWDtBQUNBLElBQUksNEVBQWlCO0FBQ3JCLElBQUksNkVBQWtCO0FBQ3RCO0FBQ0EsQ0FBQzs7OztBQUlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsMEVBQWU7QUFDdkIsS0FBSztBQUNMLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEgwQztBQUNKO0FBQ007QUFDYztBQUNGO0FBQ0U7QUFDQTtBQUNGO0FBQ0w7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZEQUFRO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLElBQUksNERBQU8sbUJBQW1CO0FBQ2pELGtDQUFrQyw0REFBTzs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsNERBQU87O0FBRS9CO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIsMkRBQVc7QUFDbEM7QUFDQTtBQUNBLHVCQUF1QiwwREFBVTtBQUNqQztBQUNBO0FBQ0EsdUJBQXVCLDJEQUFXO0FBQ2xDO0FBQ0E7QUFDQSx1QkFBdUIsMERBQVU7QUFDakM7QUFDQTtBQUNBLHVCQUF1QiwyREFBVztBQUNsQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHlEQUFJO0FBQ3BCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhtQztBQUNhO0FBQ0o7OztBQUc3QjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsT0FBTyxxREFBVTtBQUNqQixvQkFBb0IseURBQVU7QUFDOUI7O0FBRUE7QUFDQSxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixxREFBTTtBQUNyQzs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekRBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCd0Q7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVU7QUFDbEI7QUFDQSxNQUFNO0FBQ04sdUJBQXVCLHlEQUFVO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEIsdUJBQXVCO0FBQ25ELGVBQWUseURBQVU7QUFDekI7O0FBRUE7QUFDQTtBQUNBLGVBQWUseURBQVU7QUFDekI7O0FBRUEsYUFBYSxrQkFBa0Isc0JBQXNCO0FBQ3JEOztBQUVBLGlFQUFlLFNBQVM7Ozs7Ozs7Ozs7Ozs7OztBQ3pCZ0M7O0FBRXhEO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQVU7QUFDbEI7QUFDQSxNQUFNO0FBQ04sb0JBQW9CLHlEQUFVO0FBQzlCOztBQUVBO0FBQ0EseUJBQXlCLGtCQUFrQjtBQUMzQyxlQUFlLHlEQUFVO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQSxlQUFlLHlEQUFVO0FBQ3pCOztBQUVBLGFBQWE7QUFDYjs7QUFFQSxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJnQjs7QUFFckM7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmJveC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zaWRlYmFyLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9nZ2xlU2lkZWJhci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCJpbXBvcnQgJy4vaW5kZXgtc3R5bGUuY3NzJztcbmltcG9ydCB7IGNvbGxhcHNlU2lkZWJhciwgZW5hYmxlU2lkZWJhciB9IGZyb20gJy4vbW9kdWxlcy90b2dnbGVTaWRlYmFyLmpzJztcbmltcG9ydCB0YXNrIGZyb20gJy4vbW9kdWxlcy90YXNrcy5qcyc7XG5pbXBvcnQgcHJvamVjdCBmcm9tICcuL21vZHVsZXMvcHJvamVjdHMuanMnO1xuaW1wb3J0IGluYm94VGFiIGZyb20gJy4vbW9kdWxlcy9pbmJveC5qcyc7XG5pbXBvcnQgeyBzZWN0aW9uRG9tLCBjYXRlZ29yeUl0ZW1Eb20sIHVwZGF0ZVByb2plY3RMaXN0LCB1cGRhdGVGYXZvcml0ZUxpc3QgfSBmcm9tICcuL21vZHVsZXMvZG9tQ29udHJvbGxlci5qcyc7XG5pbXBvcnQgeyBzZXRTdG9yYWdlIH0gZnJvbSAnLi9tb2R1bGVzL2xvY2FsU3RvcmFnZS5qcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcblxuLy8gU3RhcnQgd2l0aCBJbmJveCBtb2RlbFxubWFpbi50ZXh0Q29udGVudCA9ICcnO1xubWFpbi5hcHBlbmQoaW5ib3hUYWIoKSk7XG51cGRhdGVQcm9qZWN0TGlzdCgpO1xudXBkYXRlRmF2b3JpdGVMaXN0KCk7XG5cbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciB0b2dnbGluZyBzaWRlYmFyXG5jb25zdCB0b2dnbGVTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG50b2dnbGVTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgIGVuYWJsZVNpZGViYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZVNpZGViYXIoKTtcbiAgICB9XG59KTtcblxuLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBhZGRpbmcgdGFza3NcbmNvbnN0IG5ld1Rhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrLW1vZGFsJyk7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrLWZvcm0nKTtcblxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpO1xuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdUYXNrTW9kYWwuc2hvd01vZGFsKCk7XG59KTtcblxuY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtdGFzaycpO1xuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBuZXdUYXNrTW9kYWwuY2xvc2UoKTtcbiAgICB9XG4pO1xuXG5jb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10YXNrJyk7XG5jb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpO1xudGFza05hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBpZih0YXNrTmFtZUlucHV0LnZhbHVlID09PSAnJykgc3VibWl0VGFza0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZWxzZSBzdWJtaXRUYXNrQnRuLmRpc2FibGVkID0gZmFsc2U7XG59KTtcblxuY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2MnKTtcbmNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJyk7XG5zdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFzay5hZGQodGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0Rlc2NJbnB1dC52YWx1ZSwgdGFza0RhdGVJbnB1dC52YWx1ZSk7XG4gICAgbmV3VGFza01vZGFsLmNsb3NlKCk7XG4gICAgc2VjdGlvbkRvbSgpO1xuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG4gICAgc3VibWl0VGFza0J0bi5kaXNhYmxlZCA9IHRydWVcbn0pO1xuXG5cblxuLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBhZGRpbmcgcHJvamVjdHNcbmNvbnN0IG5ld1Byb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0LWZvcm0nKTtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdQcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XG59KTtcblxuY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcbmNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICBjaGVja2JveC52YWx1ZSA9PT0gJ2ZhbHNlJyA/IGNoZWNrYm94LnZhbHVlID0gJ3RydWUnIDogY2hlY2tib3gudmFsdWUgPSAnZmFsc2UnO1xufSlcblxuY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtcHJvamVjdCcpO1xuY2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG5ld1Byb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgIGNoZWNrYm94LnZhbHVlID0gJ2ZhbHNlJztcbiAgICBjaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG59KTtcblxuY29uc3Qgc3VibWl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQtcHJvamVjdCcpO1xuY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKTtcbnByb2plY3ROYW1lSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB7XG4gICAgaWYgKHByb2plY3ROYW1lSW5wdXQudmFsdWUgPT09ICcnKSBzdWJtaXRQcm9qZWN0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBlbHNlIHN1Ym1pdFByb2plY3RCdG4uZGlzYWJsZWQgPSBmYWxzZTtcbn0pO1xuXG5jb25zdCBwcm9qZWN0Q29sb3JJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWNvbG9yJyk7XG5zdWJtaXRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvamVjdC5hZGQocHJvamVjdE5hbWVJbnB1dC52YWx1ZSwgcHJvamVjdENvbG9ySW5wdXQudmFsdWUsIGNoZWNrYm94LnZhbHVlKTtcbiAgICBuZXdQcm9qZWN0TW9kYWwuY2xvc2UoKTtcbiAgICB1cGRhdGVQcm9qZWN0TGlzdCgpO1xuICAgIHVwZGF0ZUZhdm9yaXRlTGlzdCgpO1xuICAgIHByb2plY3RGb3JtLnJlc2V0KCk7XG59KTtcblxuXG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciBzd2l0Y2hpbmcgdGFic1xuY29uc3QgY2F0ZWdvcnlEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcmllcycpO1xuY29uc3QgYnV0dG9ucyA9IGNhdGVnb3J5RGl2LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbmJ1dHRvbnMuZm9yRWFjaChidG4gPT4ge1xuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGJ1dHRvbnMuZm9yRWFjaChiID0+IGIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKSk7XG4gICAgICAgIGNhdGVnb3J5SXRlbURvbShidG4pO1xuICAgIH0pXG59KSIsImltcG9ydCBpbmJveFRhYiBmcm9tICcuLi9tb2R1bGVzL2luYm94LmpzJztcbmltcG9ydCB0YXNrIGZyb20gJy4uL21vZHVsZXMvdGFza3MuanMnO1xuaW1wb3J0IHByb2plY3QgZnJvbSAnLi4vbW9kdWxlcy9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgaGFzaHRhZ0JsdWUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2hhc2h0YWctYmx1ZS5zdmcnO1xuaW1wb3J0IGhhc2h0YWdSZWQgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2hhc2h0YWctcmVkLnN2Zyc7XG5pbXBvcnQgaGFzaHRhZ0NvYWwgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2hhc2h0YWctY29hbC5zdmcnO1xuaW1wb3J0IGhhc2h0YWdMaW1lIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLWxpbWUuc3ZnJztcbmltcG9ydCBoYXNodGFnTWFnIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9oYXNodGFnLW1hZy5zdmcnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZVRhc2tzIH0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UuanMnO1xuXG4vLyBIYW5kbGUgaW5kZXggZG9tIG1hbmlwdWxhdGlvblxuZnVuY3Rpb24gc2VjdGlvbkRvbSgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuXG4gICAgaWYoc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdpbmJveCcpIHtcbiAgICAgICAgaW5ib3hEb20oKTtcbiAgICAgICAgdGFza0xpc3RlbmVycygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2F0ZWdvcnlJdGVtRG9tKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgaWYoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaW5ib3gnKSkge1xuICAgICAgICBpbmJveERvbSgpO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygndG9kYXknKSkge1xuICAgICAgICB0b2RheURvbSgpO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygndXBjb21pbmcnKSkge1xuICAgICAgICB1cGNvbWluZ0RvbSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5ib3hEb20oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmQoaW5ib3hUYWIoKSk7XG59O1xuXG5mdW5jdGlvbiB0b2RheURvbSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICAvLyBtYWluLmFwcGVuZCh0b2RheVRhYigpKTtcbn07XG5cbmZ1bmN0aW9uIHVwY29taW5nRG9tKCkge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG4gICAgbWFpbi50ZXh0Q29udGVudCA9ICcnO1xuICAgIC8vIG1haW4uYXBwZW5kKHVwY29taW5nVGFiKCkpO1xufTtcblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdExpc3QoKSB7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LWl0ZW1zJyk7XG4gICAgbGlzdC50ZXh0Q29udGVudCA9ICcnO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHByb2plY3QuaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ld1Byb2plY3RCdG4ocHJvamVjdC5pbnN0YW5jZXMsIGkpO1xuXG4gICAgICAgIGxpc3QuYXBwZW5kKGJ0bik7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlRmF2b3JpdGVMaXN0KCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmF2b3JpdGUtaXRlbXMnKTtcbiAgICBsaXN0LnRleHRDb250ZW50ID0gJyc7XG5cbiAgICBjb25zdCBmYXZQcm9qZWN0cyA9IHByb2plY3QuaW5zdGFuY2VzLmZpbHRlcihwcm8gPT4gcHJvLmZhdm9yaXRlID09PSB0cnVlKTtcblxuICAgIGZhdlByb2plY3RzLmZvckVhY2goZnVuY3Rpb24gKHByb2plY3QsIGluZGV4KSB7XG4gICAgICAgIGNvbnN0IGJ0biA9IG5ld1Byb2plY3RCdG4oZmF2UHJvamVjdHMsIGluZGV4KTtcbiAgICAgICAgbGlzdC5hcHBlbmQoYnRuKTtcbiAgICB9KVxufVxuXG5mdW5jdGlvbiBuZXdQcm9qZWN0QnRuKGFycmF5LCBpbmRleCkge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWl0ZW0nKTtcbiAgICBidG4uZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gICAgY29uc3QgaGFzaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGhhc2guY2xhc3NMaXN0LmFkZCgnaGFzaCcpO1xuXG4gICAgc3dpdGNoIChhcnJheVtpbmRleF0uY29sb3IpIHtcbiAgICAgICAgY2FzZSAnc2t5Qmx1ZSc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdCbHVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JlZCc6XG4gICAgICAgICAgICBoYXNoLnNyYyA9IGhhc2h0YWdSZWQ7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY2hhckNvYWwnOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnQ29hbDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdtYWdlbnRhJzpcbiAgICAgICAgICAgIGhhc2guc3JjID0gaGFzaHRhZ01hZztcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsaW1lR3JlZW4nOlxuICAgICAgICAgICAgaGFzaC5zcmMgPSBoYXNodGFnTGltZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cblxuXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZScpO1xuICAgIHAudGV4dENvbnRlbnQgPSBhcnJheVtpbmRleF0ubmFtZTtcblxuICAgIGJ0bi5hcHBlbmQoaGFzaCwgcCk7XG4gICAgcmV0dXJuIGJ0bjtcbn07XG5cbi8vIEV2ZW50IGxpc3RlbmVycyBmb3IgcmVtb3ZpbmcgdGFza3NcbmZ1bmN0aW9uIHRhc2tMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3QgbGlzdEl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaScpO1xuICAgIGxpc3RJdGVtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW1CdG4gPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbicpO1xuICAgICAgICBpdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygndGFzay1pdGVtJykpIHtcbiAgICAgICAgICAgICAgICB0YXNrLnJlbW92ZShpdGVtLmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWN0aW9uRG9tKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSlcbn1cblxuZXhwb3J0IHsgc2VjdGlvbkRvbSwgY2F0ZWdvcnlJdGVtRG9tLCB1cGRhdGVQcm9qZWN0TGlzdCwgdXBkYXRlRmF2b3JpdGVMaXN0IH07IiwiaW1wb3J0ICcuLi9zdHlsZXMvaW5ib3gtc3R5bGUuY3NzJztcbmltcG9ydCBjaXJjbGUgZnJvbSAnLi4vYXNzZXRzL2ljb25zL2NpcmNsZS5zdmcnO1xuaW1wb3J0IHsgZ2V0U3RvcmFnZSB9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmJveFRhYigpIHtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBpbmJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luYm94Jyk7XG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWxpc3QnKTtcblxuICAgIC8vIGdldCB0YXNrcyBmcm9tIHN0b3JhZ2VcbiAgICBsZXQgdGFza0FycmF5ID0gW107XG5cbiAgICBpZihnZXRTdG9yYWdlICE9PSBmYWxzZSkge1xuICAgICAgICB0YXNrQXJyYXkgPSBnZXRTdG9yYWdlKCd0YXNrQXJyYXknKTtcbiAgICB9XG5cbiAgICAvLyBkeW5hbWljYWxseSBjcmVhdGUgdGFza3MgbGlzdCBpdGVtc1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdGFza0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICB0YXNrSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgdGFza0l0ZW0uZGF0YXNldC5pbmRleCA9IGk7XG5cbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdjb21wbGV0ZS1idG4nKTtcbiAgICAgICAgY29uc3QgdGFza0NvbXBsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0YXNrQ29tcGxldGVJY29uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrLWljb24nKTtcbiAgICAgICAgdGFza0NvbXBsZXRlSWNvbi5zcmMgPSBjaXJjbGU7XG4gICAgICAgIHRhc2tDb21wbGV0ZUJ0bi5hcHBlbmQodGFza0NvbXBsZXRlSWNvbik7XG5cbiAgICAgICAgY29uc3QgdGFza0l0ZW1JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJdGVtSW5mby5jbGFzc0xpc3QuYWRkKCd0YXNrLWluZm8nKTtcblxuICAgICAgICBjb25zdCB0YXNrSXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRhc2tJdGVtTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLW5hbWUnKTtcbiAgICAgICAgdGFza0l0ZW1OYW1lLnRleHRDb250ZW50ID0gdGFza0FycmF5W2ldLm5hbWU7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0l0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzYycpO1xuICAgICAgICB0YXNrSXRlbURlc2MudGV4dENvbnRlbnQgPSB0YXNrQXJyYXlbaV0uZGVzYztcblxuICAgICAgICB0YXNrSXRlbUluZm8uYXBwZW5kKHRhc2tJdGVtTmFtZSwgdGFza0l0ZW1EZXNjKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kKHRhc2tDb21wbGV0ZUJ0biwgdGFza0l0ZW1JbmZvKTtcblxuICAgICAgICB0YXNrTGlzdC5hcHBlbmQodGFza0l0ZW0pO1xuICAgIH1cblxuICAgIGNvbnN0IGluYm94VGFza0NvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luYm94Jyk7XG4gICAgaW5ib3hUYXNrQ291bnQudGV4dENvbnRlbnQgPSB0YXNrQXJyYXkubGVuZ3RoO1xuXG5cbiAgICBpbmJveC5hcHBlbmQoc2VjdGlvblRpdGxlLCB0YXNrTGlzdCk7XG5cbiAgICByZXR1cm4gaW5ib3g7XG59IiwiLy8gVEFTS1MgJiBQUk9KRUNUU1xuZnVuY3Rpb24gc2V0U3RvcmFnZShpdGVtLCBuYW1lKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xufTtcblxuZnVuY3Rpb24gZ2V0U3RvcmFnZShuYW1lKSB7XG4gICAgbGV0IHNhdmVkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obmFtZSk7XG4gICAgaWYgKCFzYXZlZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgc2F2ZWQgPSBKU09OLnBhcnNlKHNhdmVkKTtcbiAgICBzYXZlZCA9IE9iamVjdC52YWx1ZXMoc2F2ZWQpO1xuICAgIFxuICAgIHNhdmVkLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50LmRhdGUpIGVsZW1lbnQuZGF0ZSA9IG5ldyBEYXRlIChlbGVtZW50LmRhdGUpO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHNhdmVkO1xufTtcblxuZXhwb3J0IHsgc2V0U3RvcmFnZSwgZ2V0U3RvcmFnZSB9OyIsImltcG9ydCB7IHNldFN0b3JhZ2UsIGdldFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcblxuLy8gcHJvamVjdCBvYmplY3RzXG5jb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0QXJyYXk7XG4gICAgaWYgKGdldFN0b3JhZ2UoJ3Byb2plY3RBcnJheScpID09PSBmYWxzZSkge1xuICAgICAgICBwcm9qZWN0QXJyYXkgPSBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBwcm9qZWN0QXJyYXkgPSBnZXRTdG9yYWdlKCdwcm9qZWN0QXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGQgPSAobmFtZSwgY29sb3IsIGZhdikgPT4ge1xuICAgICAgICBjb25zdCBmYXZvcml0ZSA9IChmYXYgPT09ICd0cnVlJyk7XG4gICAgICAgIHByb2plY3RBcnJheS5wdXNoKHsgbmFtZSwgY29sb3IsIGZhdm9yaXRlIH0pO1xuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZShwcm9qZWN0QXJyYXksICdwcm9qZWN0QXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmUgPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UocHJvamVjdEFycmF5LCAncHJvamVjdEFycmF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgZ2V0IGluc3RhbmNlcygpIHsgcmV0dXJuIHByb2plY3RBcnJheTsgfSwgYWRkLCByZW1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2plY3QoKTsiLCJpbXBvcnQgeyBnZXRTdG9yYWdlLCBzZXRTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbi8vIHRhc2sgb2JqZWN0c1xuY29uc3QgdGFzayA9ICgpID0+IHtcbiAgICBsZXQgdGFza0FycmF5O1xuICAgIGlmIChnZXRTdG9yYWdlKCd0YXNrQXJyYXknKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgdGFza0FycmF5ID0gW107XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGFza0FycmF5ID0gZ2V0U3RvcmFnZSgndGFza0FycmF5Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgYWRkID0gKG5hbWUsIGRlc2MsIGRhdGUpID0+IHtcbiAgICAgICAgdGFza0FycmF5LnB1c2goeyBuYW1lLCBkZXNjLCBkYXRlIH0pO1xuICAgICAgICByZXR1cm4gc2V0U3RvcmFnZSh0YXNrQXJyYXksICd0YXNrQXJyYXknKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmUgPSAodGFza0luZGV4KSA9PiB7XG4gICAgICAgIHRhc2tBcnJheS5zcGxpY2UodGFza0luZGV4LCAxKTtcbiAgICAgICAgcmV0dXJuIHNldFN0b3JhZ2UodGFza0FycmF5LCAndGFza0FycmF5Jyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkLCByZW1vdmUgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRhc2soKTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9zaWRlYmFyLXN0eWxlLmNzcyc7XG5cbmNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xuY29uc3QgdG9nZ2xlU2lkZWJhckJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2dnbGUtc2lkZWJhcicpO1xuXG5cbmZ1bmN0aW9uIGNvbGxhcHNlU2lkZWJhcigpIHtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlZCcpO1xuICAgIHRvZ2dsZVNpZGViYXJCdG4uY2xhc3NMaXN0LmFkZCgnb2Zmc2V0Jyk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZVNpZGViYXIoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZWQnKTtcbiAgICBzaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICB0b2dnbGVTaWRlYmFyQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ29mZnNldCcpO1xufVxuXG5leHBvcnQgeyBjb2xsYXBzZVNpZGViYXIsIGVuYWJsZVNpZGViYXIgfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMCxcblx0XCJzdHlsZXNcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rdG9kb19saXN0XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdFwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1wic3R5bGVzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=