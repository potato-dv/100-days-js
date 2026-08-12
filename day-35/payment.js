// Topic: Custom Error Handling

// Description: Create a payment function that accepts an amount and a payment method. 
// The function should throw an error if the amount is not a number or is less than or equal to 0, 
// or if the payment method is not one of the available payment methods (cash, gcash, paypal).

// The function should return a success message if the payment is successful.

// Example usage:
// payment(100, 'gcash'); // returns "Payment of 100 made using gcash is successful."
// payment(0, 'gcash'); // throws an error "Invalid amount."
// payment(100, 'credit card'); // throws an error "Invalid payment method."




// create custom error classes for invalid amount and invalid payment method
// invalidPaymentAmount extends Error is the blueprint for the error message.
class invalidPaymentAmount extends Error { // InvalidPaymentAmount = your own custom error.
                                           // extends = inherits from Error.
                                           // Error = the built-in JavaScript error class.
    constructor() { // receives the value into the new object.
        super('Invalid amount.'); // super = calls the constructor of the parent class (Error) and passes the message to it.
        this.name = "invalidPaymentAmount"; // this mean the current object or CURRENT 
                                            // how to read (this current object name to the value of "invalidPaymentAmount")
    };
}

class invalidPaymentMethod extends Error {
    constructor() {
        super('Invalid payment method.');
        this.name = "invalidPaymentMethod";
    };
}

function payment(amount, paymentMethod) {
    const availablePaymentMethods = ['cash', 'gcash', 'paypal'];

    if (typeof amount !== 'number' || amount <= 0) {
        throw new invalidPaymentAmount(amount);
    }
    if (!availablePaymentMethods.includes(paymentMethod)) {
        throw new invalidPaymentMethod(paymentMethod);
    } else {
        return "Payment of " + amount + " made using " + paymentMethod + " is successful.";
    }
};

// test cases
try {
console.log(payment(0, 'gcash'));

} catch (error) {
    console.log(error.message);
}


// console.log(payment(50, 'paypal'));
// console.log(payment(200, 'cash'));