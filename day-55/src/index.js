import path from "node:path";
import { fileURLToPath } from "node:url";
import { createTaskRepository } from "./repositories/taskRepository.js";
import { createTaskService } from "./service/taskService.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, "..", "data", "tasks.json");

const repo = createTaskRepository(filePath);
const service = createTaskService(repo);

const [,, command] = process.argv;
const args = process.argv.slice(3);

try {
    if (command === "create") {
       const task = await service.create(args[0]);
    
       console.log(task);

    } else if (command === "list") {
        const tasks = await service.listTasks();

        console.log(tasks);

    } else if (command === "complete") {
        const task = await service.completeTask(Number(args[0]));
        
        console.log(task);
    } else if (command === "remove") {
        const task = await service.removeTask(Number(args[0]));

        console.log(task);

    } else {
        console.log("Invalid command.");
    }
} catch(error) {
    console.error(error.message);
} 