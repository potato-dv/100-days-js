import jobQueue from "./services/jobQueue.js";

const queue = new jobQueue();

queue.on("error", (err) => {
    console.error(`Queue error: ${err.message}`);
});

queue.on("completed", (job) => {
    console.log(`Job completed: ${job.id}`);
});

queue.on("failed", (job) => {
    console.log(`Job failed: ${job.id}`);
});

const jobs = [
    { id: 1, duration: 1000, shouldFail: false },
    { id: 2, duration: 500, shouldFail: true },
    { id: 3, duration: 2000, shouldFail: false },
];

for (const job of jobs) {
    queue.add(job);
}

queue.process();