function greet(name) {
    console.log("Hello " + name);
}

function getName() {
    console.log("getName() is running");
    return "Lauris";
}

greet(getName());