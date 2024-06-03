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







const main = document.querySelector('main');
const sidebar = document.querySelector('.sidebar');

// Start with Inbox model
main.textContent = '';
main.append((0,_modules_inbox_js__WEBPACK_IMPORTED_MODULE_4__["default"])());

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
});

// event listeners for adding projects
const newProjectModal = document.getElementById('newProject-modal');
const projectForm = document.getElementById('newProject-form');

const addProjectBtn = document.querySelector('#add-project');
addProjectBtn.addEventListener('click', () => {
    newProjectModal.showModal();
});

const closeProjectModal = document.getElementById('close-project');
closeProjectModal.addEventListener('click', (e) => {
    newProjectModal.close();
});

const submitProjectBtn = document.getElementById('submit-project');
const projectNameInput = document.getElementById('project-name');
projectNameInput.addEventListener('keyup', () => {
    if (projectNameInput.value === '') submitProjectBtn.disabled = true;
    else submitProjectBtn.disabled = false;
});

const projectColorInput = document.getElementById('project-color');
const projectFavoriteInput = document.getElementById('project-fav');
submitProjectBtn.addEventListener('click', (e) => {
    e.preventDefault();
    _modules_projects_js__WEBPACK_IMPORTED_MODULE_3__["default"].add(projectNameInput.value, projectColorInput.value, projectFavoriteInput.value);
    newProjectModal.close();
    (0,_modules_domController_js__WEBPACK_IMPORTED_MODULE_5__.projectList)();
    projectForm.reset();
});



// event listener for switching tabs
const categoryDiv = document.querySelector('.categories');
const buttons = categoryDiv.querySelectorAll('tab');
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
/* harmony export */   projectList: () => (/* binding */ projectList),
/* harmony export */   sectionDom: () => (/* binding */ sectionDom)
/* harmony export */ });
/* harmony import */ var _modules_inbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/inbox.js */ "./src/modules/inbox.js");
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/projects.js */ "./src/modules/projects.js");




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

    const inboxTaskCount = document.querySelector('#inbox');
    inboxTaskCount.textContent = _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"].instances.length;
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

    for(let i = 0; i < _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"].instances.length; i++) {
        const btn = document.createElement('button');
        btn.classList.add('project-item');
        btn.dataset.index = i;

        const p = document.createElement('p');
        p.classList.add('project-name');
        p.textContent = _modules_projects_js__WEBPACK_IMPORTED_MODULE_2__["default"].instances[i].name;

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
/* harmony import */ var _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/tasks.js */ "./src/modules/tasks.js");
/* harmony import */ var _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/icons/circle.svg */ "./src/assets/icons/circle.svg");





function inboxTab() {
    const inbox = document.createElement('section');
    const sectionTitle = document.createElement('h1');
    const taskList = document.createElement('ul');
    sectionTitle.classList.add('sectionTitle');
    sectionTitle.textContent = 'Inbox';
    inbox.setAttribute('id', 'inbox');
    taskList.setAttribute('id', 'task-list');

    // dynamically create tasks list items
    for(let i = 0; i < _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"].instances.length; i++) {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        taskItem.dataset.index = i;

        const taskCompleteBtn = document.createElement('button');
        taskCompleteBtn.classList.add('complete-btn');
        const taskCompleteIcon = document.createElement('img');
        taskCompleteIcon.classList.add('check-icon');
        taskCompleteIcon.src = _assets_icons_circle_svg__WEBPACK_IMPORTED_MODULE_2__;
        taskCompleteBtn.append(taskCompleteIcon);

        const taskItemInfo = document.createElement('div');
        taskItemInfo.classList.add('task-info');

        const taskItemName = document.createElement('p');
        taskItemName.classList.add('task-name');
        taskItemName.textContent = _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i].name;
        const taskItemDesc = document.createElement('p');
        taskItemDesc.classList.add('task-desc');
        taskItemDesc.textContent = _modules_tasks_js__WEBPACK_IMPORTED_MODULE_1__["default"].instances[i].desc;

        taskItemInfo.append(taskItemName, taskItemDesc);
        taskItem.append(taskCompleteBtn, taskItemInfo);

        taskList.append(taskItem);
    }


    inbox.append(sectionTitle, taskList);

    return inbox;
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
// project objects
const project = () => {
    let projectArray = [];

    const add = (name, color, favorite) => {
        let projectName = name;
        let projectColor = color;
        let projectFavorite = favorite;
        // this.prio = prio;

        return projectArray.push({
            get name() { return projectName },
            get color() { return projectColor; },
            get favorite() { return projectFavorite; },
            // get prio() { prio; },

            set name(newName) { projectName = newName; },
            set color(newDesc) { projectColor = newDesc; },
            set favorite(newDate) { projectFavorite = newDate; },
            // set prio(newPrio) { this.prio = newPrio; },
        });
    }

    const remove = (projectIndex) => {
        projectArray.splice(projectIndex, 1);
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
// task objects
const task = () => {
    let taskArray = [];

    const add = (name, desc, date) => {
        let taskName = name;
        let taskDesc = desc;
        let taskDate = date;
        // this.prio = prio;

        return taskArray.push({
            get name() { return taskName },
            get desc() { return taskDesc; },
            get date() { return taskDate; },
            // get prio() { prio; },

            set name(newName) { taskName = newName; },
            set desc(newDesc) { taskDesc = newDesc; },
            set date(newDate) { taskDate = newDate; },
            // set prio(newPrio) { this.prio = newPrio; },
        });
    }

    const remove = (taskIndex) => {
        taskArray.splice(taskIndex, 1);
    }

    return { get instances() { return taskArray; }, add, remove };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVqREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9pbmJveC1zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlcy9zaWRlYmFyLXN0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90YXNrcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2dnbGVTaWRlYmFyLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCAnLi9pbmRleC1zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY29sbGFwc2VTaWRlYmFyLCBlbmFibGVTaWRlYmFyIH0gZnJvbSAnLi9tb2R1bGVzL3RvZ2dsZVNpZGViYXIuanMnO1xuaW1wb3J0IHRhc2sgZnJvbSAnLi9tb2R1bGVzL3Rhc2tzLmpzJztcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0cy5qcyc7XG5pbXBvcnQgaW5ib3hUYWIgZnJvbSAnLi9tb2R1bGVzL2luYm94LmpzJztcbmltcG9ydCB7IHNlY3Rpb25Eb20sIGNhdGVnb3J5SXRlbURvbSwgcHJvamVjdExpc3QgfSBmcm9tICcuL21vZHVsZXMvZG9tQ29udHJvbGxlci5qcyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcblxuLy8gU3RhcnQgd2l0aCBJbmJveCBtb2RlbFxubWFpbi50ZXh0Q29udGVudCA9ICcnO1xubWFpbi5hcHBlbmQoaW5ib3hUYWIoKSk7XG5cbmNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJyk7XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGZvciB0b2dnbGluZyBzaWRlYmFyXG5jb25zdCB0b2dnbGVTaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZ2dsZS1zaWRlYmFyJyk7XG50b2dnbGVTaWRlYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBpZiAoc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbGxhcHNlZCcpKSB7XG4gICAgICAgIGVuYWJsZVNpZGViYXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjb2xsYXBzZVNpZGViYXIoKTtcbiAgICB9XG59KTtcblxuLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBhZGRpbmcgdGFza3NcbmNvbnN0IG5ld1Rhc2tNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrLW1vZGFsJyk7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdUYXNrLWZvcm0nKTtcblxuY29uc3QgYWRkVGFzayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtdGFzaycpO1xuYWRkVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdUYXNrTW9kYWwuc2hvd01vZGFsKCk7XG59KTtcblxuY29uc3QgY2xvc2VUYXNrTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtdGFzaycpO1xuY2xvc2VUYXNrTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBuZXdUYXNrTW9kYWwuY2xvc2UoKTtcbiAgICB9XG4pO1xuXG5jb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC10YXNrJyk7XG5jb25zdCB0YXNrTmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbmFtZScpO1xudGFza05hbWVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHtcbiAgICBpZih0YXNrTmFtZUlucHV0LnZhbHVlID09PSAnJykgc3VibWl0VGFza0J0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZWxzZSBzdWJtaXRUYXNrQnRuLmRpc2FibGVkID0gZmFsc2U7XG59KTtcblxuY29uc3QgdGFza0Rlc2NJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWRlc2MnKTtcbmNvbnN0IHRhc2tEYXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1kYXRlJyk7XG5zdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGFzay5hZGQodGFza05hbWVJbnB1dC52YWx1ZSwgdGFza0Rlc2NJbnB1dC52YWx1ZSwgdGFza0RhdGVJbnB1dC52YWx1ZSk7XG4gICAgbmV3VGFza01vZGFsLmNsb3NlKCk7XG4gICAgc2VjdGlvbkRvbSgpO1xuICAgIHRhc2tGb3JtLnJlc2V0KCk7XG59KTtcblxuLy8gZXZlbnQgbGlzdGVuZXJzIGZvciBhZGRpbmcgcHJvamVjdHNcbmNvbnN0IG5ld1Byb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0LW1vZGFsJyk7XG5jb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXdQcm9qZWN0LWZvcm0nKTtcblxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBuZXdQcm9qZWN0TW9kYWwuc2hvd01vZGFsKCk7XG59KTtcblxuY29uc3QgY2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xvc2UtcHJvamVjdCcpO1xuY2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIG5ld1Byb2plY3RNb2RhbC5jbG9zZSgpO1xufSk7XG5cbmNvbnN0IHN1Ym1pdFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0LXByb2plY3QnKTtcbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJyk7XG5wcm9qZWN0TmFtZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKCkgPT4ge1xuICAgIGlmIChwcm9qZWN0TmFtZUlucHV0LnZhbHVlID09PSAnJykgc3VibWl0UHJvamVjdEJ0bi5kaXNhYmxlZCA9IHRydWU7XG4gICAgZWxzZSBzdWJtaXRQcm9qZWN0QnRuLmRpc2FibGVkID0gZmFsc2U7XG59KTtcblxuY29uc3QgcHJvamVjdENvbG9ySW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1jb2xvcicpO1xuY29uc3QgcHJvamVjdEZhdm9yaXRlSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mYXYnKTtcbnN1Ym1pdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qZWN0LmFkZChwcm9qZWN0TmFtZUlucHV0LnZhbHVlLCBwcm9qZWN0Q29sb3JJbnB1dC52YWx1ZSwgcHJvamVjdEZhdm9yaXRlSW5wdXQudmFsdWUpO1xuICAgIG5ld1Byb2plY3RNb2RhbC5jbG9zZSgpO1xuICAgIHByb2plY3RMaXN0KCk7XG4gICAgcHJvamVjdEZvcm0ucmVzZXQoKTtcbn0pO1xuXG5cblxuLy8gZXZlbnQgbGlzdGVuZXIgZm9yIHN3aXRjaGluZyB0YWJzXG5jb25zdCBjYXRlZ29yeURpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yaWVzJyk7XG5jb25zdCBidXR0b25zID0gY2F0ZWdvcnlEaXYucXVlcnlTZWxlY3RvckFsbCgndGFiJyk7XG5idXR0b25zLmZvckVhY2goYnRuID0+IHtcbiAgICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBidXR0b25zLmZvckVhY2goYiA9PiBiLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJykpO1xuICAgICAgICBjYXRlZ29yeUl0ZW1Eb20oYnRuKTtcbiAgICB9KVxufSkiLCJpbXBvcnQgaW5ib3hUYWIgZnJvbSAnLi4vbW9kdWxlcy9pbmJveC5qcyc7XG5pbXBvcnQgdGFzayBmcm9tICcuLi9tb2R1bGVzL3Rhc2tzLmpzJztcbmltcG9ydCBwcm9qZWN0IGZyb20gJy4uL21vZHVsZXMvcHJvamVjdHMuanMnO1xuXG4vLyBIYW5kbGUgaW5kZXggZG9tIG1hbmlwdWxhdGlvblxuZnVuY3Rpb24gc2VjdGlvbkRvbSgpIHtcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2VjdGlvbicpO1xuXG4gICAgaWYoc2VjdGlvbi5nZXRBdHRyaWJ1dGUoJ2lkJykgPT09ICdpbmJveCcpIHtcbiAgICAgICAgaW5ib3hEb20oKTtcbiAgICAgICAgdGFza0xpc3RlbmVycygpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2F0ZWdvcnlJdGVtRG9tKGJ1dHRvbikge1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgaWYoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnaW5ib3gnKSkge1xuICAgICAgICBpbmJveERvbSgpO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygndG9kYXknKSkge1xuICAgICAgICB0b2RheURvbSgpO1xuICAgIH0gZWxzZSBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygndXBjb21pbmcnKSkge1xuICAgICAgICB1cGNvbWluZ0RvbSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5ib3hEb20oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgbWFpbi5hcHBlbmQoaW5ib3hUYWIoKSk7XG5cbiAgICBjb25zdCBpbmJveFRhc2tDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmJveCcpO1xuICAgIGluYm94VGFza0NvdW50LnRleHRDb250ZW50ID0gdGFzay5pbnN0YW5jZXMubGVuZ3RoO1xufTtcblxuZnVuY3Rpb24gdG9kYXlEb20oKSB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKTtcbiAgICBtYWluLnRleHRDb250ZW50ID0gJyc7XG4gICAgLy8gbWFpbi5hcHBlbmQodG9kYXlUYWIoKSk7XG59O1xuXG5mdW5jdGlvbiB1cGNvbWluZ0RvbSgpIHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpO1xuICAgIG1haW4udGV4dENvbnRlbnQgPSAnJztcbiAgICAvLyBtYWluLmFwcGVuZCh1cGNvbWluZ1RhYigpKTtcbn07XG5cbmZ1bmN0aW9uIHByb2plY3RMaXN0KCkge1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pdGVtcycpO1xuICAgIGxpc3QudGV4dENvbnRlbnQgPSAnJztcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwcm9qZWN0Lmluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICAgICAgICBidG4uZGF0YXNldC5pbmRleCA9IGk7XG5cbiAgICAgICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgcC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgcC50ZXh0Q29udGVudCA9IHByb2plY3QuaW5zdGFuY2VzW2ldLm5hbWU7XG5cbiAgICAgICAgYnRuLmFwcGVuZChwKTtcbiAgICAgICAgbGlzdC5hcHBlbmQoYnRuKTtcbiAgICB9O1xufVxuXG4vLyBFdmVudCBsaXN0ZW5lcnMgZm9yIHJlbW92aW5nIHRhc2tzL3Byb2plY3RzXG5mdW5jdGlvbiB0YXNrTGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbGknKTtcbiAgICBsaXN0SXRlbS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICBjb25zdCBpdGVtQnRuID0gaXRlbS5xdWVyeVNlbGVjdG9yKCdidXR0b24nKTtcbiAgICAgICAgaXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3Rhc2staXRlbScpKSB7XG4gICAgICAgICAgICAgICAgdGFzay5yZW1vdmUoaXRlbS5kYXRhc2V0LmluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbkRvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH0pXG59XG5cbmV4cG9ydCB7IHNlY3Rpb25Eb20sIGNhdGVnb3J5SXRlbURvbSwgcHJvamVjdExpc3QgfTsiLCJpbXBvcnQgJy4uL3N0eWxlcy9pbmJveC1zdHlsZS5jc3MnO1xuaW1wb3J0IHRhc2sgZnJvbSAnLi4vbW9kdWxlcy90YXNrcy5qcyc7XG5pbXBvcnQgY2lyY2xlIGZyb20gJy4uL2Fzc2V0cy9pY29ucy9jaXJjbGUuc3ZnJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbmJveFRhYigpIHtcbiAgICBjb25zdCBpbmJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKTtcbiAgICBjb25zdCBzZWN0aW9uVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBzZWN0aW9uVGl0bGUuY2xhc3NMaXN0LmFkZCgnc2VjdGlvblRpdGxlJyk7XG4gICAgc2VjdGlvblRpdGxlLnRleHRDb250ZW50ID0gJ0luYm94JztcbiAgICBpbmJveC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2luYm94Jyk7XG4gICAgdGFza0xpc3Quc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrLWxpc3QnKTtcblxuICAgIC8vIGR5bmFtaWNhbGx5IGNyZWF0ZSB0YXNrcyBsaXN0IGl0ZW1zXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhc2suaW5zdGFuY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgdGFza0l0ZW0uY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIHRhc2tJdGVtLmRhdGFzZXQuaW5kZXggPSBpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0YXNrQ29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZCgnY29tcGxldGUtYnRuJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb21wbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgdGFza0NvbXBsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKCdjaGVjay1pY29uJyk7XG4gICAgICAgIHRhc2tDb21wbGV0ZUljb24uc3JjID0gY2lyY2xlO1xuICAgICAgICB0YXNrQ29tcGxldGVCdG4uYXBwZW5kKHRhc2tDb21wbGV0ZUljb24pO1xuXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtSW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSXRlbUluZm8uY2xhc3NMaXN0LmFkZCgndGFzay1pbmZvJyk7XG5cbiAgICAgICAgY29uc3QgdGFza0l0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0YXNrSXRlbU5hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1uYW1lJyk7XG4gICAgICAgIHRhc2tJdGVtTmFtZS50ZXh0Q29udGVudCA9IHRhc2suaW5zdGFuY2VzW2ldLm5hbWU7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGFza0l0ZW1EZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVzYycpO1xuICAgICAgICB0YXNrSXRlbURlc2MudGV4dENvbnRlbnQgPSB0YXNrLmluc3RhbmNlc1tpXS5kZXNjO1xuXG4gICAgICAgIHRhc2tJdGVtSW5mby5hcHBlbmQodGFza0l0ZW1OYW1lLCB0YXNrSXRlbURlc2MpO1xuICAgICAgICB0YXNrSXRlbS5hcHBlbmQodGFza0NvbXBsZXRlQnRuLCB0YXNrSXRlbUluZm8pO1xuXG4gICAgICAgIHRhc2tMaXN0LmFwcGVuZCh0YXNrSXRlbSk7XG4gICAgfVxuXG5cbiAgICBpbmJveC5hcHBlbmQoc2VjdGlvblRpdGxlLCB0YXNrTGlzdCk7XG5cbiAgICByZXR1cm4gaW5ib3g7XG59IiwiLy8gcHJvamVjdCBvYmplY3RzXG5jb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgIGxldCBwcm9qZWN0QXJyYXkgPSBbXTtcblxuICAgIGNvbnN0IGFkZCA9IChuYW1lLCBjb2xvciwgZmF2b3JpdGUpID0+IHtcbiAgICAgICAgbGV0IHByb2plY3ROYW1lID0gbmFtZTtcbiAgICAgICAgbGV0IHByb2plY3RDb2xvciA9IGNvbG9yO1xuICAgICAgICBsZXQgcHJvamVjdEZhdm9yaXRlID0gZmF2b3JpdGU7XG4gICAgICAgIC8vIHRoaXMucHJpbyA9IHByaW87XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3RBcnJheS5wdXNoKHtcbiAgICAgICAgICAgIGdldCBuYW1lKCkgeyByZXR1cm4gcHJvamVjdE5hbWUgfSxcbiAgICAgICAgICAgIGdldCBjb2xvcigpIHsgcmV0dXJuIHByb2plY3RDb2xvcjsgfSxcbiAgICAgICAgICAgIGdldCBmYXZvcml0ZSgpIHsgcmV0dXJuIHByb2plY3RGYXZvcml0ZTsgfSxcbiAgICAgICAgICAgIC8vIGdldCBwcmlvKCkgeyBwcmlvOyB9LFxuXG4gICAgICAgICAgICBzZXQgbmFtZShuZXdOYW1lKSB7IHByb2plY3ROYW1lID0gbmV3TmFtZTsgfSxcbiAgICAgICAgICAgIHNldCBjb2xvcihuZXdEZXNjKSB7IHByb2plY3RDb2xvciA9IG5ld0Rlc2M7IH0sXG4gICAgICAgICAgICBzZXQgZmF2b3JpdGUobmV3RGF0ZSkgeyBwcm9qZWN0RmF2b3JpdGUgPSBuZXdEYXRlOyB9LFxuICAgICAgICAgICAgLy8gc2V0IHByaW8obmV3UHJpbykgeyB0aGlzLnByaW8gPSBuZXdQcmlvOyB9LFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdmUgPSAocHJvamVjdEluZGV4KSA9PiB7XG4gICAgICAgIHByb2plY3RBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICB9XG5cbiAgICByZXR1cm4geyBnZXQgaW5zdGFuY2VzKCkgeyByZXR1cm4gcHJvamVjdEFycmF5OyB9LCBhZGQsIHJlbW92ZSB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvamVjdCgpOyIsIi8vIHRhc2sgb2JqZWN0c1xuY29uc3QgdGFzayA9ICgpID0+IHtcbiAgICBsZXQgdGFza0FycmF5ID0gW107XG5cbiAgICBjb25zdCBhZGQgPSAobmFtZSwgZGVzYywgZGF0ZSkgPT4ge1xuICAgICAgICBsZXQgdGFza05hbWUgPSBuYW1lO1xuICAgICAgICBsZXQgdGFza0Rlc2MgPSBkZXNjO1xuICAgICAgICBsZXQgdGFza0RhdGUgPSBkYXRlO1xuICAgICAgICAvLyB0aGlzLnByaW8gPSBwcmlvO1xuXG4gICAgICAgIHJldHVybiB0YXNrQXJyYXkucHVzaCh7XG4gICAgICAgICAgICBnZXQgbmFtZSgpIHsgcmV0dXJuIHRhc2tOYW1lIH0sXG4gICAgICAgICAgICBnZXQgZGVzYygpIHsgcmV0dXJuIHRhc2tEZXNjOyB9LFxuICAgICAgICAgICAgZ2V0IGRhdGUoKSB7IHJldHVybiB0YXNrRGF0ZTsgfSxcbiAgICAgICAgICAgIC8vIGdldCBwcmlvKCkgeyBwcmlvOyB9LFxuXG4gICAgICAgICAgICBzZXQgbmFtZShuZXdOYW1lKSB7IHRhc2tOYW1lID0gbmV3TmFtZTsgfSxcbiAgICAgICAgICAgIHNldCBkZXNjKG5ld0Rlc2MpIHsgdGFza0Rlc2MgPSBuZXdEZXNjOyB9LFxuICAgICAgICAgICAgc2V0IGRhdGUobmV3RGF0ZSkgeyB0YXNrRGF0ZSA9IG5ld0RhdGU7IH0sXG4gICAgICAgICAgICAvLyBzZXQgcHJpbyhuZXdQcmlvKSB7IHRoaXMucHJpbyA9IG5ld1ByaW87IH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZSA9ICh0YXNrSW5kZXgpID0+IHtcbiAgICAgICAgdGFza0FycmF5LnNwbGljZSh0YXNrSW5kZXgsIDEpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGdldCBpbnN0YW5jZXMoKSB7IHJldHVybiB0YXNrQXJyYXk7IH0sIGFkZCwgcmVtb3ZlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB0YXNrKCk7IiwiaW1wb3J0ICcuLi9zdHlsZXMvc2lkZWJhci1zdHlsZS5jc3MnO1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbmNvbnN0IHRvZ2dsZVNpZGViYXJCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9nZ2xlLXNpZGViYXInKTtcblxuXG5mdW5jdGlvbiBjb2xsYXBzZVNpZGViYXIoKSB7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZWQnKTtcbiAgICB0b2dnbGVTaWRlYmFyQnRuLmNsYXNzTGlzdC5hZGQoJ29mZnNldCcpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVTaWRlYmFyKCkge1xuICAgIHNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2VkJyk7XG4gICAgc2lkZWJhci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgdG9nZ2xlU2lkZWJhckJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdvZmZzZXQnKTtcbn1cblxuZXhwb3J0IHsgY29sbGFwc2VTaWRlYmFyLCBlbmFibGVTaWRlYmFyIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDAsXG5cdFwic3R5bGVzXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3RvZG9fbGlzdFwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmt0b2RvX2xpc3RcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInN0eWxlc1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9