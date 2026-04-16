//handles skills, education, and experience sections
const { getCurrentUser } = require("./user");

function addSkill(skill) {
    const user = getCurrentUser();
    user.skills.push(skill);
}

function addEducation(edu) {
    const user = getCurrentUser();
    user.education.push(edu);
}

function addExperience(exp) {
    const user = getCurrentUser();
    user.experience.push(exp);
}

module.exports = {
    addSkill,
    addEducation,
    addExperience
};