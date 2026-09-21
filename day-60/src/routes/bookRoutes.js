import express from "express";
import {
     getBooks, 
     getBook,  
    createBookController,
    deleteBookController
} from "../controllers/bookController.js";

const router = express.Router();

router.get("/", getBooks);
router.get("/:id", getBook);
router.post("/", createBookController);
router.delete("/:id", deleteBookController);

export default router;