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

export { setStorage, getStorage };