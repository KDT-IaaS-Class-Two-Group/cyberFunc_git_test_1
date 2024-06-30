// index.js

// Function to greet first
function greetUser(name) {
    return `Hello, ${name}!`;
}

// a little experiement with the function to display current date and time
function displayDateTime() {
    const now = new Date();
    return `Current date and time: ${now}`;
}

// Main function
function main() {
    const userName = "하이"; // You can change this to any name you prefer, but I would go with the user on one of your branches "하이"
    console.log(greetUser(userName));
    console.log(displayDateTime());
}

// Run the main function
main();
