// Create a function:

// createBankAccount(initialBalance = 0)

// It must return these methods:

// deposit()
// withdraw()
// getBalance()
// Requirements
// 1. deposit(amount)

// Adds money to the account.

// account.deposit(500);

// If the balance was 1000:

// 1000 → 1500
// 2. withdraw(amount)

// Removes money from the account.

// account.withd
// But there is an important rule:

// You cannot withdraw more money than the current balance.

// For example:

// account.withdraw(2000);

// If the balance is only 1200, the withdrawal should be rejected and the balance should remain:

// 1200

// You can decide whether to return a message such as:

// "Insufficient balance"
// 3. getBalance()

// Returns the current balance:

// console.log(account.getBalance());raw(300);

// If the balance was 1500:

// 1500 → 1200

function createBankAccount (initialBalance = 0) {
    let balance = initialBalance;
    
    return {
        deposit: (amount) => {
            balance += amount;
        },
        withdraw: (amount) => {
            if (amount > balance) {
                return "Insufficient balance"
            } else {
                balance -= amount;
            }
        },
        getBalance: function() {
            return balance;
        },   
        transfer (amount, targetAccount) {

        const withDrawResult = this.withdraw(amount);

        if (withDrawResult === "Insufficient balance") {
            return "Insufficient balance";

        } else {

            targetAccount.deposit(amount);
            return "Successfully transferred " + amount + " to target account";
        }
        }
    }
}

// test cases
const myAccount = createBankAccount(5000);
const targetAccount = createBankAccount(1000);

console.log("Account Balance:", myAccount.getBalance()); 

myAccount.deposit(3000);
console.log("Account Balance with Deposit:", myAccount.getBalance());

myAccount.withdraw(2500);
console.log("Account Balance with Withdraw:", myAccount.getBalance());

console.log("Account Balance with Withdraw:", myAccount.withdraw(10000));

console.log("Current Account Balance :", myAccount.getBalance());

console.log("---------------------------------------------------");

console.log("Target Account Balance :", targetAccount.getBalance());

console.log("Transfer Amount ", myAccount.transfer(2000, targetAccount));

console.log("Current Account Balance :", myAccount.getBalance());

console.log("Target Account Balance :", targetAccount.getBalance());