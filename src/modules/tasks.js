import { getStorage, setStorage } from "./localStorage";

// task objects
const task = () => {

    let taskArray;
    if (getStorage('taskArray') === false) {
        taskArray = [];
    } else {
        taskArray = getStorage('taskArray');
    };

    const add = (name, desc, _date, completed, location) => {
        const date = !!_date ? new Date(_date) : '';
        taskArray.push({ name, desc, date, completed, location });
        return setStorage(taskArray, 'taskArray');
    };

    const edit = (index, newInfo) => {
        newInfo.forEach(property => {
            taskArray[index][property[0]] = property[1];
        })

        return setStorage(taskArray, 'taskArray');
    };

    const remove = (taskIndex) => {
        taskArray.splice(taskIndex, 1);
        return setStorage(taskArray, 'taskArray');
    };

    return { add, edit, remove };
};

export default task();