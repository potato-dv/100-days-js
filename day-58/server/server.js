import express from "express";

const server = express();
server.use(express.json());

server.get("/health", (req, res) => {
    res.status(200).json({ status: "ok" });
});

server.get("/greet", (req, res) => {
    const name = req.query.name;
    res.status(200).json({ message: `Hello, ${name}` });
});

server.post("/tasks", (req, res) => {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({ error: "Request body is required" });
    } else {
        res.status(201).json({ received: data });
    }
});

server.use((req, res) => {
    res.status(404).json({ error: "Not Found" });
});


export { server };