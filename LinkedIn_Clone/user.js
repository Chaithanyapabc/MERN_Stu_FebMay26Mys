const store = require("./store");
const eventEmitter = require("./events");

function createProfile(name, headline) {
    return new Promise((resolve, reject) => {
        const existing = store.users.find(u => u.name === name);

        if (existing) {
            eventEmitter.emit("operationFailed", "User already exists");
            return reject("Duplicate user");
        }

        const user = {
            id: Date.now(),
            name,
            headline,
            skills: [],
            experience: [],
            education: [],
            connections: []
        };

        store.users.push(user);
        store.currentUser = user;

        eventEmitter.emit("profileCreated", user);
        resolve(user);
    });
}

module.exports = { createProfile };