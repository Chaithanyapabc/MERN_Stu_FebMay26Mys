//input validation 
function validateInput(input, callback, attempts = 1) {
    if (!input || input.trim() === "") {
        if (attempts >= 3) {
            return callback("Max attempts reached", null);
        }
        return callback(null, "retry");
    }
    callback(null, input);
}

module.exports = validateInput;