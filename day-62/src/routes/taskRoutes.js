import { 
    createTaskController,
    getTasksController,
    getTaskByIdController,
    updateTaskByIdController,
    deleteTaskByIdController,
    replaceTaskByIdController
    } from "../controllers/taskController.js";
import express from "express";

const router = express.Router();

router.get("/", getTasksController);
router.post("/", createTaskController);
router.get("/:id", getTaskByIdController);
router.patch("/:id", updateTaskByIdController);
router.put("/:id", replaceTaskByIdController);
router.delete("/:id", deleteTaskByIdController);    

export default router;