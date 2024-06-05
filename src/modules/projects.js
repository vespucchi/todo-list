import { setStorage, getStorage } from "./localStorage";

// project objects
const project = () => {
    let projectArray;
    if (getStorage('projectArray') === false) {
        projectArray = [];
    } else {
        projectArray = getStorage('projectArray');
    }

    const add = (name, color, fav) => {
        const favorite = (fav === 'true');
        projectArray.push({ name, color, favorite });
        return setStorage(projectArray, 'projectArray');
    }

    const remove = (projectIndex) => {
        projectArray.splice(projectIndex, 1);
        return setStorage(projectArray, 'projectArray');
    }

    return { add, remove };
};

export default project();