const store = require("./store");
const eventEmitter = require("./events");

// Add Skill
function addSkill(skill) {
    return new Promise((resolve, reject) => {
        const user = store.currentUser;

        if (!user) {
            eventEmitter.emit("operationFailed", "No active session");
            return reject("Login required");
        }

        if (user.skills.includes(skill)) {
            eventEmitter.emit("operationFailed", "Skill already exists");
            return reject("Duplicate skill");
        }

        user.skills.push(skill);

        eventEmitter.emit("profileUpdated", user);
        resolve(user.skills);
    });
}

// Remove Skill
function removeSkill(skill) {
    return new Promise((resolve, reject) => {
        const user = store.currentUser;

        if (!user) {
            eventEmitter.emit("operationFailed", "No active session");
            return reject("Login required");
        }

        const index = user.skills.indexOf(skill);

        if (index === -1) {
            eventEmitter.emit("operationFailed", "Skill not found");
            return reject("Skill not found");
        }

        user.skills.splice(index, 1);

        eventEmitter.emit("profileUpdated", user);
        resolve(user.skills);
    });
}

// Add Experience
async function addExperience(role) {
    try {
        const user = store.currentUser;

        if (!user) throw "Login required";

        user.experience.push(role);

        eventEmitter.emit("profileUpdated", user);
        return user.experience;

    } catch (error) {
        eventEmitter.emit("operationFailed", error);
    }
}

// Add Education
async function addEducation(education) {
    try {
        const user = store.currentUser;

        if (!user) throw "Login required";

        user.education.push(education);

        eventEmitter.emit("profileUpdated", user);
        return user.education;

    } catch (error) {
        eventEmitter.emit("operationFailed", error);
    }
}

// View Profile
function viewProfile(userId = null) {
    return new Promise((resolve, reject) => {

        let user;

        if (userId) {
            user = store.users.find(u => u.id === userId);
        } else {
            user = store.currentUser;
        }

        if (!user) {
            eventEmitter.emit("operationFailed", "Profile not found");
            return reject("User not found");
        }

        resolve(user);
    });
}

module.exports = {
    addSkill,
    removeSkill,
    addExperience,
    addEducation,
    viewProfile
};