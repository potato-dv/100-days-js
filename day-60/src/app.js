import express from "express";
import bookRoutes from "./routes/bookRoutes.js";
import { sendError } from "./utils/sendError.js";

const app = express();

app.use(express.json());

app.use("/books", bookRoutes);

app.use((err, req, res, next) => {
    console.error(err);

    return sendError(
        res,
        500,
        "INTERNAL_SERVER_ERROR",
        "An unexpected error occurred"
    );
});

export default app;