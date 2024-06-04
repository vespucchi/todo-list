

// Populate storage with Tasks
function setStorageTasks(taskArray) {
    // convert functions into strings
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
};

function getStorageTasks() {
    let taskArray = localStorage.getItem('taskArray');
    if(!taskArray) return false;

    taskArray = JSON.parse(taskArray);
    taskArray = Object.values(taskArray);
    
    taskArray.forEach(element => {
        element.date = new Date(element.date);
    });

    return taskArray;
};

export { setStorageTasks, getStorageTasks };