import express from "express";

const app = express();
app.use(express.json());

app.get("/books/:id", (req, res) => {
    const bookId = Number(req.params.id);
    res.status(200).json({ message: `Details of book with ID: ${bookId}`});
});

app.get("/books", (req, res) => {
    const author = req.query.author;
    const limit = Number(req.query.limit);

    if (!author && req.query.limit === undefined) {
        return res.status(200).json({ message: "List of all books"});
    }

    if (!author) {
        return res.status(200).json({ message: `List of books with limit: ${limit}`});
    }

    // if (!limit) {
    //     return res.status(200).json({ message: `List of books by author: ${author}`});
    // }

    if (req.query.limit === undefined) {
        return res.status(200).json({ message: `List of books by author: ${author}`});
    }

    res.status(200).json({ message: `List of books by author: ${author}, limit: ${limit}`});
});

app.post("/books", (req, res) => {
    const data = req.body;
    const requiredFields = ["title", "author", "year"];

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
    } 

    for (const field of requiredFields) {
        if (!data[field]) {
            return res.status(400).json({ error: `Missing required field: ${field}` });
        }
    }
    res.status(201).json({ received: data });
});

app.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});

export { app };