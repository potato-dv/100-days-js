import { 
    createTask,
    getTasks,
    getTaskById,
    updateTaskById,
    deleteTaskById,
    replaceTaskById
    } from "../services/taskService.js";

export function createTaskController(req, res) {
    const task = createTask(req.body);

    if(!task) {
        res.status(400).json({ error: "Invalid task data" });
    }
    res.status(201).json(task);
}

export function getTasksController(req, res) {
    const tasks = getTasks();
    res.status(200).json(tasks);
}

export function getTaskByIdController(req, res) {
    const task = getTaskById(req.params.id);
    
    if(!task) {
        res.status(404).json({ error: `Task with ID ${req.params.id} not found` });
    } else {
        res.status(200).json(task);
    }
}

export function updateTaskByIdController(req, res) {
    const { title, completed } = req.body;

    if ( title !== undefined && (typeof title !== "string" || title.trim() === "")) {
        return res.status(400).json({ message: "title must be a non-empty string" });
    }

    if ( completed !== undefined && typeof completed !== "boolean") {
        return res.status(400).json({ message: "completed must be a boolean" });
    }

    const task = updateTaskById(req.params.id, req.body);

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    } else {
        res.status(200).json(task);
    }
}

export function deleteTaskByIdController(req, res) {
    const success = deleteTaskById(req.params.id);

    if(!success) {
        res.status(404).json({ error: `Task with ID ${req.params.id} not found` });
    } else {
        res.status(204).send();
    }
}

export function replaceTaskByIdController(req, res) {
    const { title, completed } = req.body;
    const task = replaceTaskById(req.params.id, req.body);
    
    if (typeof title !== "string" || title.trim() === "") {
        return res.status(400).json({ message: "title must be a non-empty string" });
    }

    if (typeof completed !== "boolean") {
        return res.status(400).json({ message: "completed must be a boolean" });
    }

    if (!task) {
        return res.status(404).json({ message: "Task not found" });
    } else {
        res.status(200).json(task);
    }
}