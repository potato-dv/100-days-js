import { readFile, writeFile, rename } from "node:fs/promises";

async function readJson(path) {

    const text = await readFile(path, "utf-8");
    
try {
       const data = JSON.parse(text);
       return data;

    } catch (error) {
       throw new Error(`Invalid JSON in file: ${path}`);
   }
} 

async function writeJson(path, data) {
    const text = JSON.stringify(data, null, 2);
 
    const tempPath = `${path}.tmp`;

    await writeFile(tempPath, text, "utf-8");

    // for testing
    throw new Error("Simulating an error before renaming the temp file.");
   
    // for testing 
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    await rename(tempPath, path); 
}

const newUser = [
    {
    id: 1,
        name: "Jay Jay",
        email: "jay@gmail.com"
    },
    {
    id: 2,
        name: "rr dantes",
        email: ""
    },
    {
    id: 3,
        name: "mori pangilinan",
        email: "mori.pangilinan@gmail.com"
    },
    {
        id: 4, 
        name: "bossing vic",
        email: "vic@gmail.com"
    }
]

await writeJson("data/users.json", newUser);

const result = await readJson ("data/users.json");

console.log(result);