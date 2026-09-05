import { TAX_RATE } from "../config.js";
// import { priceFormat } from "../utils.js";

export function calculateTotalPrice(items) {

    const subtotal = items.reduce((total, item) => {
        return total + item.price;
}, 0);

    const tax = subtotal * TAX_RATE;
    return subtotal + tax;
};