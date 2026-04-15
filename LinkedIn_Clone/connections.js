//To Handles sending, receiving, accepting, and rejecting connection requests
const { getCurrentUser, getAllUsers } = require("./user");

let requests = [];

function sendRequest(targetId) {
    return new Promise((resolve, reject) => {
        const sender = getCurrentUser();
        const target = getAllUsers().find(u => u.id === targetId);

        if (!target) return reject("User not found");
        if (target.id === sender.id) return reject("Cannot connect yourself");

        const already = requests.find(r =>
            r.senderId === sender.id && r.receiverId === targetId
        );

        if (already) return reject("Request already sent");

        const request = {
            senderId: sender.id,
            receiverId: targetId,
            status: "pending",
            time: new Date()
        };

        requests.push(request);
        resolve(request);
    });
}

function getRequests() {
    const user = getCurrentUser();
    return requests.filter(r => r.receiverId === user.id);
}

async function acceptRequest(senderId) {
    const user = getCurrentUser();
    const req = requests.find(r =>
        r.senderId === senderId && r.receiverId === user.id
    );

    if (!req) throw "Request not found";

    req.status = "accepted";

    const users = getAllUsers();
    const sender = users.find(u => u.id === senderId);

    user.connections.push(senderId);
    sender.connections.push(user.id);

    return req;
}

module.exports = {
    sendRequest,
    getRequests,
    acceptRequest
};