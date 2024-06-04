// project objects
const project = () => {
    let projectArray = [];

    const add = (name, color, favorite) => {
        return projectArray.push({ name, color, favorite });
    }

    const remove = (projectIndex) => {
        projectArray.splice(projectIndex, 1);
    }

    return { get instances() { return projectArray; }, add, remove };
};

export default project();