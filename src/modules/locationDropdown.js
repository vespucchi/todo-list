import { setStorage, getStorage } from './localStorage.js';


export default function updateLocationDropdown() {
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
    if (getStorage('projectArray')) {
        const projects = getStorage('projectArray');
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