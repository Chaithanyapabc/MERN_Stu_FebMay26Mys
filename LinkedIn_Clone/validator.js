function validateInput(input, callback, attempts = 0) {
    if (attempts >= 3) {
        return callback("Max attempts reached");
    }

    if (!input || input.trim() === "") {
        console.log("Invalid input, try again");
        return callback(null, false);
    }

    callback(null, true);
}

module.exports = { validateInput };