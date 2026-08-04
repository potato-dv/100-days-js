// // Topics: Arrays, reduce(), objects

// // You are given an array of product objects.
z
// // Return an object containing:

// // totalProducts → total number of products

// // totalStock → sum of all stock values

// // lowStock → names of products with stock less than 5

// // mostStocked → the product with the highest stock

function inventorySummary(products) {

    const totalProducts = products.length;

    const totalStock = products.reduce((sum, product) => sum + product.stock, 0);

    const lowStock = products.filter(product => product.stock < 5).map(product => product.name);
    
    // products.length === 0 ? null :. Is use for initial value if the products array is empty, it will return null. If not empty, it will use reduce() to find the product with the highest stock.
    const mostStocked = products.length === 0 ? null : products.reduce((highestProduct, currentProduct) => {
        return currentProduct.stock > highestProduct.stock ? currentProduct : highestProduct;
    }); 

    return {
        totalProducts,
        totalStock,
        lowStock,
        mostStocked
    };
}

// function inventorySummary(guapo) {

//     const totalProducts = guapo.length;

//     const totalStock = guapo.reduce((sum, product) => sum + product.likes, 0);

//     const lowStock = guapo.filter(product => product.likes < 4000).map(product => product.name);

//     const mostStocked = guapo.length === 0 ? null : guapo.reduce((highestProduct, currentProduct) => {
//         return currentProduct.likes > highestProduct.likes ? currentProduct : highestProduct;
//     }); 

//     return {
//         totalProducts,
//         totalStock,
//         lowStock,
//         mostStocked
//     };
// }

// test cases

const products = [
    { name: "Wheel Chair", stock: 190 },
    { name: "Oxygen Tank", stock: 87 },
    { name: "Bed", stock: 3 },
    { name: "Stretcher", stock: 5 },
    { name: "Crutches", stock: 2 },
    { name: "Walker", stock: "" }
]

console.log(inventorySummary(products));

// const guapoSaMontalban = [
//    { name: "Moriel Anderon", likes: 3400 },
//    { name: "Alden Richard", likes: 6000 },
//    { name: "Franciss Macho", likes: 2400 },
//    { name: "Lauris Lorenzo", likes: 1000 }
// ];

// console.log(inventorySummary(guapoSaMontalban));
