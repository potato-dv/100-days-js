// EASY  |  Node runtime, terminal, process, global objects, runtime differences
// Objective: Run JavaScript as a server-side program and distinguish browser APIs from Node APIs.
// Challenge: Build a system-info CLI that reads command-line arguments and prints a JSON summary.
// Requirements
//     • Use process.argv.
//     • Include Node version, platform, and current working directory.
//     • Return a nonzero exit code for invalid arguments.
// Example: node app.js --name Lauris -> {name: "Lauris", runtime: "node", ...}
// Starter code
// const args = process.argv.slice(2);
// // parse flags and print JSON
// Constraints
//     • No prompt library.
//     • No DOM, window, or document.
// Bonus: Add --help.

const args = process.argv.slice(2);

if (args.includes("--help")) {
    console.log("Usage: node script.js --name <name>");

} else if (!args.includes("--name") || !args[1]) {
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
