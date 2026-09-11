import { EventEmitter } from "node:events";

class jobQueue extends EventEmitter {
    constructor() {
        super();
        this.jobs = [];
    }
    add(job) {
        this.jobs.push(job);
    }
    process() {
        const job = this.jobs.shift();

        if(!job) {
            return;
        }

        const startTime = Date.now();

        setTimeout(() => {
            const duration = Date.now() - startTime;
            console.log(`Processing job: ${job.id}`);

            if (job.shouldFail) {
                const err = new Error(`Job ${job.id} failed`);

                this.emit("error", { err, duration });
                this.emit("failed", { job, duration });

            } else {
            this.emit("completed", { job, duration });
            }

            this.process();
        });

    }
} 

export default jobQueue;