function validateUser(user) {
    const validationSuccess = true;

    const validationStatus = validationSuccess ? "User validated" : "Invalid user";
    
    const validationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(validationStatus);
            return validationSuccess ? resolve(user) : reject("Invalid User");
        }, 1000); 
    })
    return validationPromise;
}

function checkEmail(user) {
    
    const emailExists = true;
    
    const emailStatus = emailExists ? "Email already exists" : "Email is available";

    const emailPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(emailStatus);
            return emailExists ? reject("Change email") : resolve(user);   
        }, 1000);
    })
    return emailPromise;
}

function createUser(user) {
    const registrationSuccess = true;
    
    const registrationStatus = registrationSuccess ? "User registered" : "User registration failed";
    const registrationPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(registrationStatus);
            return registrationSuccess ? resolve(user) : reject("User registraion failed");
        }, 1000);
    });
    return registrationPromise;
}

function sendWelcomeEmail(user) {
    const emailSent = true;

    const emailStatus = emailSent ? "Welcome email sent" : "Email sending failed";
 
    const emailPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(emailStatus);
            return emailSent ? resolve(user) : reject("Email sending failed");
        }, 1000);
    })
    return emailPromise;
}

function registerUser(user) { 

    const userRegistration =
        validateUser(user)
        .then(checkEmail)
        .then(createUser)
        .then(sendWelcomeEmail)
        .catch((error) => {
            console.log(error);
        });
        return userRegistration;
}

// test cases
const user1 = {
    name: "Lauris Lorenzo",
    email: "lj@example.com",
    password: "password123"
}


registerUser(user1);
