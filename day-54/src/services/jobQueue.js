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
        
        setTimeout(() => {
            console.log(`Processing job: ${job.id}`);

            if (job.shouldFail) {
                const error = new Error(`Job ${job.id} failed`);

                this.emit("error", error);

                this.emit("failed", job);
            } else {
            this.emit("completed", job);
            }

            this.process();
        }, job.duration);

    }
} 

export default jobQueue;