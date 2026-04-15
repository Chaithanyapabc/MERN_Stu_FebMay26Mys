//Handles user profile creation, updates
let users = [];
let currentUser = null;

function createProfile(name, headline) {
    return new Promise((resolve) => {
        const user = {
            id: Date.now().toString(),
            name,
            headline,
            skills: [],
            experience: [],
            education: [],
            connections: []
        };
        users.push(user);
        currentUser = user;
        resolve(user);
    });
}

function getCurrentUser() {
    return currentUser;
}

function getAllUsers() {
    return users;
}

function setCurrentUser(user) {
    currentUser = user;
}

module.exports = {
    createProfile,
    getCurrentUser,
    getAllUsers,
    setCurrentUser
};