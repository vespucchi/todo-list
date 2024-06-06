import { setStorage, getStorage } from './localStorage.js';


export default function updateLocationDropdown() {
    const locationList = document.getElementById('task-location');

    // remove current options starting from option 3 included
    const options = locationList.querySelectorAll('.project');
    options.forEach(option => option.remove());

    // create new options
    if (getStorage('projectArray')) {
        const projects = getStorage('projectArray');
        projects.forEach((project, index) => {
            const projectSelect = document.createElement('option');
            projectSelect.textContent = project.name;
            projectSelect.value = index;
            projectSelect.classList.add('project');

            locationList.append(projectSelect);
        })
    }
};