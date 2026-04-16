//Handles user profile creation,login, updation
let users = [];
let currentUser = null;

function createProfile(name, role, username, password) {
    return new Promise((resolve, reject) => {

        //check if username already exists
        const exists = users.find(u => u.username === username);
        if (exists) {
            return reject("Username already exists");
        }

        const user = {
            id: Date.now().toString(),
            name,
            role,
            username,
            password,
            skills: [],
            experience: [],
            education: [],
            connections: []
        };

        users.push(user);
        resolve(user);
    });
}

//login function
function login(username, password) {
    return new Promise((resolve, reject) => {
        const user = users.find(
            u => u.username === username && u.password === password
        );

        if (!user) {
            return reject("Invalid login credentials");
        }

        currentUser = user;
        resolve(user);
    });
}

//update function according to edit profile
function updateProfile(updates) {
    return new Promise((resolve, reject) => {
        if (!currentUser) {
            return reject("Please login first");
        }
        if (updates.role) currentUser.role = updates.role;
        if(updates.skill) currentUser.skill=updates.skill;
        if(updates.education) currentUser.education=updates.education;
        if(updates.experience) currentUser.experience=updates.experience

        resolve(currentUser);
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
    login,
    updateProfile,
    getCurrentUser,
    getAllUsers,
    setCurrentUser
};