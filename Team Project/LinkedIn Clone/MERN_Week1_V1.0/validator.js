//validates login attempts
function validateInput(attempts) {
    if (attempts >= 2) {
        return { error: "Max attempts reached" };
    }
    return { attempts: attempts + 1 };
}

module.exports = validateInput;