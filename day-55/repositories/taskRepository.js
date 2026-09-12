import file from "node:fs/promises";

export function createTaskRepository(filePath) {

    async function findAll() {
        const text = await file.readFile(filePath, "utf-8");
        return JSON.parse(text);
    }

    async function findById(id) {
        const tasks = await findAll();
        return tasks.find(task => task.id === id) ?? null;
    }

    async function create(task) {
        const tasks = await findAll();

        function getNextId() {
            if (tasks.length === 0) {
                return 1;
            } else {
                return Math.max(...tasks.map(task => task.id)) + 1;
            }
        };

        const newTask = {
            id: getNextId(),
            ...task
        };

        tasks.push(newTask);
        await file.writeFile(filePath, JSON.stringify(tasks, null, 2), "utf-8");

        return newTask;
    }

    async function remove(id) {
        const tasks = await findAll();

        const index = tasks.findIndex(task => task.id === id);

        const removedTask = tasks[index];

        tasks.splice(index, 1);
        await file.writeFile(filePath, JSON.stringify(tasks, null, 2), "utf-8");
        
        return removedTask;
    }

    async function status(id, newStatus) {
        const tasks = await findAll();

        const index = tasks.findIndex(task => task.id === id);
        
        tasks[index] = { ...tasks[index], status: newStatus };
        await file.writeFile(filePath, JSON.stringify(tasks, null, 2), "utf-8");

        return tasks[index];
    };

return {
    findAll,
    findById,
    create,
    remove,
    status
}
}