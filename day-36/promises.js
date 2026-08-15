// Topics: Promises, Promise Chaining

// Description

// Simulate an online order process.

// The order should pass through these steps:

// order received
// payment confirmed
// order prepared
// order delivered

// Each step must return a Promise.

// If payment is rejected, the process must stop.

// Example
// Input:
// processOrder({ id: 101, paymentApproved: true })

// Output:
// "Order 101 delivered"

// Starter Code
// function receiveOrder(order) {}

// function confirmPayment(order) {}

// function prepareOrder(order) {}

// function deliverOrder(order) {}

// function processOrder(order) {
//   // Chain the promises
// }
// Bonus

// Add a random failure during preparation.

function receiveOrder(order) {
    const receivePromise = new Promise((resolve, reject) => {
        return setTimeout(() => {
            console.log("Order " + order.id + " received");
        resolve(order);
        },1000);
    });
    return receivePromise;
}

function confirmPayment(order) {

    const status = order.paymentApproved;

    const paymentStatus = status ? "Payment confirmed" : "Payment rejected";

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(paymentStatus);
            return status ? resolve(order) : reject("Payment rejected for order " + order.id);
        }, 1000);
    });
}

function prepareOrder(order) {
    const preparationFailed = Math.random() < 0.2; // 20% chance of failure

    const preparationStatus = preparationFailed ? "Order preparation failed" : "Order prepared";
    
    const preparationPromise = new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log(preparationStatus);
            return preparationFailed ? reject("Order preparation failed for order " + order.id) : resolve(order);
        }, 1000);
    });
    return preparationPromise;
}

function deliverOrder(order) {
    const deliverySuccess = true;
  
    const deliverStatus = deliverySuccess ? "Order delivered" : "Order delivery failed";

    const deliveryPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(deliverStatus);
            return deliverySuccess ? resolve(order) : reject("Order delivery failed for order " + order.id);
        }, 1000);
    });
    return deliveryPromise;
}

function processOrder(order) {
    const orderProcess = 
         receiveOrder(order)
        .then(() => confirmPayment(order))
        .then(() => prepareOrder(order))
        .then(() => deliverOrder(order))
        .catch((error) => {
            console.log(error);
        });
}
// test cases
const order1 = { id:101, paymentApproved: true };
// const order2 = { id:102, paymentApproved: false };

processOrder(order1);
// processOrder(order2);


