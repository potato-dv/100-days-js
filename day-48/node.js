const args = process.argv.slice(2);

if (!args.includes("--name") || !args[1]) {
    console.error("Error: Missing required argument '--name'");
    process.exitCode = 1
} else {

const name = args[1];

const result = {
    name: name,
    runtime: "node",
    nodeVersion: process.version,
    platform: process.platform,
    cwd: process.cwd()
};

console.log(result);
}
