// // leetcode
// // Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

// // Your Calculator class should have the following methods:

// //     add - This method adds the given number value to the result and returns the updated Calculator.
// //     subtract - This method subtracts the given number value from the result and returns the updated Calculator.
// //     multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
// //     divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
// //     power - This method raises the result to the power of the given number value and returns the updated Calculator.
// //     getResult - This method returns the result.

// // Solutions within 10-5 of the actual result are considered correct.

// make a class
class Calculator {

    // runs when the class is called
    constructor(initialValue) {

        // initialize the result with the initial value
        this.result = initialValue;
    }
    add(value) {
        this.result += value;

        // return the updated calculator so we can contnue chaining
        return this;
    }
    subtract(value) {
        this.result -= value;

        // return the updated calculator so we can contnue chaining
        return this;
    }
    multiply(value) {
        this.result *= value;

        // return the updated calculator so we can contnue chaining
        return this;
    }
    divide(value) {
        if ( value === 0 ) {
            throw new Error ("Division by ZERO is not allowed. ENGOT!!");
        }
        this.result /= value;

        // return the updated calculator so we can contnue chaining
        return this;
        }
        power(value) {
            this.result **= value;

            // return the updated calculator so we can contnue chaining
            return this;
        }
        getResult() {

            // return the final result
            return this.result;
        }
    }

// test cases

// const solution = new Calculator(10);
// console.log(
//     solution
//     .add(5)
//     .subtract(3)
//     .multiply(4)
//     .divide(2)
//     .power(3)
//     .getResult());

    const calc = new Calculator(45);
    console.log(calc
        .multiply(4)
        .divide(0)
        .getResult());

    

// class Company {
    
//     constructor() {
//         this.employee = {};
//     }

//     setName(name) {
//         this.employee.name = name;
//         return this;
//     }
//     setAge(age) {
//         this.employee.age = age;
//         return this;
//     }
//     setPosition(position) {
//         this.employee.position = position;
//        return this;
//     }
//     setEmail(email) {
//         this.employee.email = email;
//         return this;
//     }
//     get() {
//         return this.employee;
//     }
// }
//     const employee = new Company();
//     console.log(employee
//         .setName("Cong tibe")
//         .setAge(20)
//         .setPosition("Software Engineer")
//         .setEmail("cong.tibe@example.com")
//         .get());


//     save() {
//         console.log(this.employee);
//     }
// }

// new Company()
// .setName("Cong tibe")
// .setAge(20)
// .setPosition("Software Engineer")
// .setEmail("cong.tibe@example.com")
// .save();