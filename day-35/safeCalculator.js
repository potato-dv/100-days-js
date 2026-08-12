// Topics: Error Handling, Custom Errors

// Description

// Create a calculator that accepts two numbers and an operator.

class InvalidNumberError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidNumberError";
    };
}
class InvalidOperatorError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperatorError";
    };
}

class DivisionByZeroError extends Error {
    constructor(message) {
        super(message);
        this.name = "DivisionByZeroError";
    };
}



function safeCalculator(a, b, operator) {

    const supportedOperators = ['+', '-', '*', '/'];
    
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new InvalidNumberError('Both a and b must be numbers');
    }
    if (!supportedOperators.includes(operator)) {
        throw new InvalidOperatorError('Operator must be one of the following: +, -, *, /');
    }

    switch (operator) {
        case '+':
            return a + b;

        case '-':
            return a - b;
            
        case '*':
            return a * b;
            
        case '/':
            if (a / b === 0) {
                throw new DivisionByZeroError('Division by zero is not allowed');
            }
            return a / b;
            };
    }


// test cases
try {
    console.log(safeCalculator(0, 5, '/'));
    }
      catch (error) {
        console.log(error.message);
        };
    

