import { getStorage, setStorage } from "./localStorage";

// task objects
const task = () => {
    let taskArray;
    if (getStorage('taskArray') === false) {
        taskArray = [];
    } else {
        taskArray = getStorage('taskArray');
    }

    const add = (name, desc, date, location) => {
        taskArray.push({ name, desc, date, location });
        return setStorage(taskArray, 'taskArray');
    }

    const remove = (taskIndex) => {
        taskArray.splice(taskIndex, 1);
        return setStorage(taskArray, 'taskArray');
    }

    return { add, remove };
};

export default task();