// project objects
const project = () => {
    let projectArray = [];

    const add = (name, color, favorite) => {
        let projectName = name;
        let projectColor = color;
        let projectFavorite = favorite;
        // this.prio = prio;

        return projectArray.push({
            get name() { return projectName },
            get color() { return projectColor; },
            get favorite() { return projectFavorite; },
            // get prio() { prio; },

            set name(newName) { projectName = newName; },
            set color(newDesc) { projectColor = newDesc; },
            set favorite(newDate) { projectFavorite = newDate; },
            // set prio(newPrio) { this.prio = newPrio; },
        });
    }

    const remove = (projectIndex) => {
        projectArray.splice(projectIndex, 1);
    }

    return { get instances() { return projectArray; }, add, remove };
};

export default project();