import test from "node:test";
import assert from "node:assert";
import { createTaskRepository } from "../src/repositories/taskRepository.js";
import { createTaskService } from "../src/service/taskService.js";

const filePath = new URL("./tasks.test.json", import.meta.url);

const repo = createTaskRepository(filePath);
const service = createTaskService(repo);

test("listTasks returns all tasks", async () => {
    const task = await service.listTasks();

    assert.strictEqual(task.length, 4);
})

test("create creates a pending task", async () => {
    const task = await service.create("Learn Express");

    assert.strictEqual(task.title, "Learn Express");
    assert.strictEqual(task.status, "pending");
})

test("test reject empty title", async () => {
    await assert.rejects(() => service.create(""), 
  {   
    message: "Task tittle is required" 
  }
 );
});

test ("findTaskById returns a task by id", async () => {
    const task = await service.findTaskById(1);

    assert.strictEqual(task.title, "Learn Node.js");
    assert.strictEqual(task.status, "completed");
})

test ("findTaskById throws an error if task not found", async () => {

    const id = 100;

    await assert.rejects(() => service.findTaskById(id), 
  {
    message: `Task with id ${id} not found` 
  }
 );
});

test ("completeTask updates the status of a task to completed", async () => {

    const id = 1;

    const task = await service.completeTask(id);
    assert.strictEqual(task.status, "completed");
    assert.strictEqual(task.id, id);
});

test ("removeTask removes a task by id", async () => {
    const id = 3;

    const task = await service.removeTask(id);
    assert.strictEqual(task.id, id);
});

