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

export { setStorage, getStorage };