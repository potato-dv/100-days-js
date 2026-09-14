export function createTaskService(repo) {

    async function create(title) {
        if (!title || title.trim() === "") {
            throw new Error("Task tittle is required");
        } else {

        const task = {
            title, 
            status: "pending"
        }
        return await repo.create(task);
    }
}
    async function listTasks() {
        return await repo.findAll();
    }; 

    async function findTaskById(id) {
        const task = await repo.findById(id);

        if(!task) {
            throw new Error(`Task with id ${id} not found`);
        } else {
            return task;    
        }
    }

    async function completeTask(id) {
        await findTaskById(id);

        return await repo.status(id, "completed");
        }
    

    async function removeTask(id) {
        await findTaskById(id);

        return await repo.remove(id);
        }

 return {
        create,
        listTasks, 
        findTaskById,
        completeTask,
        removeTask
    }
}