import { createServer } from "http";
import { URL } from "node:url";

const server = createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);

    if(req.method === "GET" && url.pathname === "/health") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "ok" }));

    } else if (req.method === "GET" && url.pathname === "/greet") {
        const name = url.searchParams.get("name");

        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ message: `Hello, ${name}!` }));

    } else if (req.method === "POST" && url.pathname === "/tasks") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });
 
        req.on("end", () => {
            if (!body) {
                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");
                res.end(JSON.stringify({ error: "Request body is required" }));
                return;
            }

            try {
            const data = JSON.parse(body);

            res.statusCode = 201;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ received: data }));
        } catch {
            res.statusCode = 400;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Invalid JSON" }));
        }
    });

    } else {
        res.statusCode = 404;
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({ error: "Not Found"}));
    }
});

export { server };