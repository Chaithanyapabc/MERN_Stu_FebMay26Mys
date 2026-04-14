const store = require("./store");
const eventEmitter = require("./events");

// ===== SEND REQUEST =====
function sendRequest(targetId) {
    return new Promise((resolve, reject) => {

        const targetUser = store.users.find(u => u.id === targetId);

        if (!targetUser) {
            return reject("User not found");
        }

        if (targetId === store.currentUser.id) {
            return reject("Cannot connect with yourself");
        }

        const alreadyConnected = store.currentUser.connections.includes(targetId);

        if (alreadyConnected) {
            return reject("Already connected");
        }

        const alreadyRequested = store.connectionRequests.find(
            r => r.senderId === store.currentUser.id && r.receiverId === targetId
        );

        if (alreadyRequested) {
            return reject("Request already sent");
        }

        const request = {
            senderId: store.currentUser.id,
            receiverId: targetId,
            status: "pending",
            timestamp: new Date()
        };

        store.connectionRequests.push(request);

        eventEmitter.emit("connectionRequested", request);
        resolve(request);
    });
}

// ===== VIEW REQUESTS =====
function viewRequests() {
    return new Promise((resolve) => {

        const requests = store.connectionRequests.filter(
            r => r.receiverId === store.currentUser.id && r.status === "pending"
        );

        resolve(requests);
    });
}

// ===== ACCEPT REQUEST =====
function acceptRequest(senderId) {
    return new Promise((resolve, reject) => {

        const request = store.connectionRequests.find(
            r => r.senderId === senderId &&
                 r.receiverId === store.currentUser.id &&
                 r.status === "pending"
        );

        if (!request) {
            return reject("Request not found");
        }

        request.status = "accepted";

        // Add connection both sides
        store.currentUser.connections.push(senderId);

        const sender = store.users.find(u => u.id === senderId);
        sender.connections.push(store.currentUser.id);

        eventEmitter.emit("connectionAccepted", request);

        resolve("Request accepted");
    });
}

// ===== REJECT REQUEST =====
function rejectRequest(senderId) {
    return new Promise((resolve, reject) => {

        const index = store.connectionRequests.findIndex(
            r => r.senderId === senderId &&
                 r.receiverId === store.currentUser.id &&
                 r.status === "pending"
        );

        if (index === -1) {
            return reject("Request not found");
        }

        const removed = store.connectionRequests.splice(index, 1);

        eventEmitter.emit("connectionRejected", removed[0]);

        resolve("Request rejected");
    });
}

// ===== VIEW CONNECTIONS =====
function viewConnections() {
    return new Promise((resolve) => {

        const connections = store.users.filter(u =>
            store.currentUser.connections.includes(u.id)
        );

        resolve(connections);
    });
}

module.exports = {
    sendRequest,
    viewRequests,
    acceptRequest,
    rejectRequest,
    viewConnections
};