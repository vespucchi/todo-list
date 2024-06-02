// task objects
const task = () => {
    let taskArray = [];

    const add = (name, desc, date) => {
        let taskName = name;
        let taskDesc = desc;
        let taskDate = date;
        // this.prio = prio;

        return taskArray.push({
            get name() { return taskName },
            get desc() { return taskDesc; },
            get date() { return taskDate; },
            // get prio() { prio; },

            set name(newName) { taskName = newName; },
            set desc(newDesc) { taskDesc = newDesc; },
            set date(newDate) { taskDate = newDate; },
            // set prio(newPrio) { this.prio = newPrio; },
        });
    }

    const remove = (taskIndex) => {
        taskArray.splice(taskIndex, 1);
    }

    return { get instances() { return taskArray; }, add, remove };
};

export default task();