// HARD  |  Combined JS fundamentals, async flow, errors, data transformation
// Objective: Prove that the JavaScript foundation is strong enough to begin Node.js.
// Challenge: Build a service-booking processor from a written specification and fix three supplied bugs.
// Requirements
//     • Validate input shape.
//     • Calculate totals and group bookings by status.
//     • Simulate async price lookup and return one summary object.
//     • Write at least five assertions.
// Example: bookings array -> {counts, revenue, invalidIds, processedAt}
// Starter code
// export async function processBookings(bookings, getPrice) {
//   // plan the data flow before coding
// }
// Constraints
//     • No DOM or browser APIs.
//     • Maximum three top-level functions unless each has a clear purpose.
// Bonus: Explain the full execution order in your own words.

class ValidationError extends Error {
    constructor(message, details) {
        super(message);
        this.name = "ValidationError";
        this.details = details;
    }
}

export async function processBookings(bookings, getPrice) {

    const allowedStatus = ["pending", "confirmed", "cancelled"];

    const counts = { pending: 0, confirmed: 0, cancelled: 0 };

    let revenue = 0;

    if(!Array.isArray(bookings)) {
        throw new ValidationError("Bookings must be an array", { field: "bookings" });
    }

for (const booking of bookings) {
    if (!booking.id) {
        throw new ValidationError("ID is required", { field: "id" });
    }
    if (typeof booking.id !== "number"){
        throw new TypeError("ID must be a number");
    }

    if (!booking.status) {
        throw new ValidationError("Status is required", { field: "status" });
    }
    if(typeof booking.status !== "string") {
        throw new TypeError("Status must be a string");
    }

    if (!booking.service) {
        throw new ValidationError("Service is required", { field: "service" });
    }
    if(typeof booking.service !== "string") {
        throw new TypeError("Service must be a string");
    }
    if (allowedStatus.includes(booking.status)) {
    counts[booking.status]++;
    
    const price = await getPrice(booking.service);
    revenue += price;
    }
}

const invalidIds = bookings
.filter(booking => !allowedStatus.includes(booking.status))
.map(booking => booking.id);

return { counts, revenue, invalidIds, processedAt: new Date() };

}

// test cases

const getPrice = async (service) => {
    const prices = {
        cleaning: 100,
        plumbing:150,
        electrical: 200

    };
    return prices[service]; 
}

const bookings = [{
    id: 1,
    status: "confirmed",
    service: "cleaning"
},
{
    id: 2,
    status: "pending",
    service: "plumbing"
},
{
    id: 3,
    status: "cancelled",
    service: "electrical"
},
{
    id: 4,
    status: "invalid",
    service: "cleaning"
}]

const result = await processBookings(bookings, getPrice);
console.log(result);


// Five assertions: verify that the processor gives the expected result
console.assert(result.counts.confirmed === 1, "Confirmed count should be 1");

console.assert(result.counts.pending === 1, "Pending count should be 1");

console.assert(result.counts.cancelled === 1, "Cancelled count should be 1");

console.assert(result.revenue === 450, "Revenue should be 450");

console.assert(
    result.invalidIds.length === 1 && result.invalidIds[0] === 4,
    "Invalid IDs should contain booking 4"
);

