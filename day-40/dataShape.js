// EASY  |  Objects vs arrays, destructuring, parameters, return values
// Objective: Remove uncertainty about what kind of value each function receives and returns.
// Challenge: Build analyzeOrders(orders), which returns totalRevenue, paidOrderIds, and the highest-value order.
// Requirements
//     • Reject non-array input with TypeError.
//     • Do not mutate the input.
//     • Return one object with exactly the three requested properties.
// Example: [{id: 1, total: 500, paid: true}] -> {totalRevenue: 500, paidOrderIds: [1], highestValueOrder: {...}}
// Starter code
// export function analyzeOrders(orders) {
//   // validate, transform, return
// }
// Constraints
//     • Use map/filter/reduce/find or sort intentionally.
//     • Write down the input and output shape before coding.
// Bonus: Support an empty array without crashing.

export function analyzeOrders(orders) {
    const isArray = Array.isArray(orders);
    if (!isArray) {
        throw new TypeError("Input must be an array");
    } else {

    const totalRevenue = orders.reduce((acc, order) => acc + order.total, 0);

    const paidOrderIds = orders.filter(order => order.paid).map(order => order.id);
    
    const highestValueOrder = orders.length === 0 
    ? null 
    : orders.reduce((currentHighest, currentOrder) => 

         currentOrder.total > currentHighest.total 
    ? currentOrder 
    : currentHighest, {total: 0});

    return { totalRevenue, paidOrderIds, highestValueOrder }; 
     }
    }

// test cases
// const orders = [
//     { id: 1, total: 500, paid: true },
//     { id: 2, total: 300, paid: false },
//     { id: 3, total: 700, paid: true }
// ];

const orders = [];

console.log(analyzeOrders(orders));