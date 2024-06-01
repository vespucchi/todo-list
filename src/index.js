import './index-style.css';
import { collapseSidebar, enableSidebar } from './modules/toggleSidebar';

const body = document.querySelector('body');
const sidebar = document.querySelector('.sidebar');

// event listener for toggling sidebar
const toggleSidebar = document.getElementById('toggle-sidebar');
toggleSidebar.addEventListener('click', (e) => {
    if (sidebar.classList.contains('collapsed')) {
        enableSidebar();
    } else {
        collapseSidebar();
    }
});