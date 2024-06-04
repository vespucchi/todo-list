import { setStorage, getStorage } from './localStorage.js';


export default function updateLocationDropdown() {
    const locationList = document.getElementById('task-location');

    const projects = getStorage('projectArray');

    projects.forEach((project, index) => {
        const projectSelect = document.createElement('option');
        projectSelect.textContent = project.name;
        projectSelect.value = index;

        locationList.append(projectSelect);
    })
};