const EventEmitter = require("events");
const chalk = require("chalk");

const eventEmitter = new EventEmitter();

// Event listeners
eventEmitter.on("profileCreated", (user) => {
    console.log(chalk.green(`Profile created for ${user.name}`));
});

eventEmitter.on("connectionRequested", () => {
    console.log(chalk.blue("Connection request sent"));
});

eventEmitter.on("connectionAccepted", () => {
    console.log(chalk.green("Connection accepted"));
});

eventEmitter.on("postCreated", () => {
    console.log(chalk.cyan("Post created successfully"));
});

eventEmitter.on("operationFailed", (msg) => {
    console.log(chalk.red(`${msg}`));
});

module.exports = eventEmitter;