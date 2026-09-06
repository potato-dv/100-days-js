import path from "node:path";
import { fileURLToPath } from "node:url";

const allowedEnvironments = [
    "development",
    "production",
    "test"
];

const nodeEnvironment = process.env.NODE_ENV ?? "development";

if (!allowedEnvironments.includes(nodeEnvironment)) {
    throw new Error(`Invalid Node_ENV value: ${nodeEnvironment}`);
}

// const dataPath = path.join("data");
const port = Number(process.env.PORT ?? 3000);

if (!Number.isInteger(port) || port <= 0) {
    throw new Error("Invalid port number");
}

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.join(__dirname, "..", "data");

// console.log(port);
// console.log(dataPath);
console.log(__filename);
// console.log(__dirname);
// console.log(dataPath);

const config = {
    port,
    dataPath,
    nodeEnvironment
};

console.log(config);
