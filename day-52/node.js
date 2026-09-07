import { readFile, writeFile } from "node:fs/promises";

async function readJson(path) {

    const text = await readFile(path, "utf-8");
    
try {
    const data = JSON.parse(text);
    return data;
} catch (error) {
    throw new Error("Invalid JSON: ");
}
} 

const result = await readJson("data/users.json");

// console.log(result);

async function writeJson(path, data) {
    const text = JSON.stringify(data, null, 2);
    
    await writeFile(path, text, "utf-8");
}
