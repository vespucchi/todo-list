import { getStorageTasks, setStorageTasks } from "./localStorage";

// task objects
const task = () => {
    let taskArray;
    if(getStorageTasks() === false) {
        taskArray = [];
    } else {
        taskArray = getStorageTasks();
    }

    const add = (name, desc, date) => {
        taskArray.push({ name, desc, date });
        return setStorageTasks(taskArray);
    }

    const remove = (taskIndex) => {
        taskArray.splice(taskIndex, 1);
        return setStorageTasks(taskArray);
    }

    return { add, remove };
};

export default task();