// Topics: map, filter, reduce, sort, find

// Description

// You are given an array of sales records.

// Each sale has:

// product
// category
// price
// quantity

// Return an object containing:

// totalRevenue → Total revenue (price × quantity)
// bestSellingProduct → Product with the highest quantity sold
// electronicsRevenue → Revenue from the "Electronics" category
// expensiveProducts → Products costing more than 1000
// sortedProducts → Product names sorted by price (highest to lowest)

function salesReports(sales) {
    
    const totalRevenue = sales.reduce((sum, sale) => sum + (sale.price * sale.quantity), 0);

    const bestSellingProduct = sales.length === 0 ? null : sales.reduce((current, best) => {
         return current.quantity > best.quantity ? current : best;
   });
   const electronicsRevenue = sales.filter(sale => sale.category === "Electronics")
    .reduce((sum, sale) => sum + (sale.price * sale.quantity), 0);

    const expensiveProducts = sales.filter(sale => sale.price > 1000).map(sale => sale.product);

    const sortedProducts = [...sales].sort((a, b) => b.price - a.price).map(sale => sale.product);
 
    return{
        totalRevenue,
        bestSellingProduct,
        electronicsRevenue,
        expensiveProducts,
        sortedProducts
    }
 };

 // test cases
    const sales = [
    { product: "Laptop", category: "Electronics", price: 50000, quantity: 3 },
    { product: "Mouse", category: "Electronics", price: 800, quantity: 10 },
    { product: "Chair", category: "Furniture", price: 2500, quantity: 5 },
    { product: "Desk", category: "Furniture", price: 7000, quantity: 2 },
    { product: "Keyboard", category: "Electronics", price: 1500, quantity: 4 }
];

console.log(salesReports(sales));