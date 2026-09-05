import { calculateTotalPrice } from "./services/orderService.js";
import { priceFormat } from "./utils.js";

const items = [
    { name: "Mouse", price: 900 },
    { name: "Keyboard", price: 1200 },
    { name: "Monitor", price: 5000 }
]

const totalPrice = calculateTotalPrice(items);
console.log(`Order total: ${priceFormat(totalPrice)}`);