const tasks = [];

export function createTask(data) {
     if (typeof data.title !== "string" || data.title.trim() === "") {
        return null;
    }
    
    if (typeof data.completed !== "boolean") {
        return null;
    }

    const task = {
        id: `t${tasks.length + 1}`,
        title: data.title,
        completed: data.completed
    };
    tasks.push(task);
    return task;
}

export function getTasks() {
    return tasks;
}

export function getTaskById(id) {
    return tasks.find(t => t.id === id);
}

export function updateTaskById(id, data) {
    const task = tasks.find((task) => task.id === id);

    if (!task) {
        return null;
    }

    if (data.title !== undefined) {
        task.title = data.title;
    }

    if (data.completed !== undefined) {
        task.completed = data.completed;
    }

    return task;
}

export function deleteTaskById(id) {
    const index = tasks.findIndex(t => t.id === id);

    if( index === -1) {
        return false;
    } else {
        tasks.splice(index, 1);
        return true;
    }
}

export function replaceTaskById(id, data) {
    const task = tasks.find(task => task.id === id);

    if (!task) {
        return null;
    }

    task.title = data.title;
    task.completed = data.completed;

    return task;
}