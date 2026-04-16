//To Handles sending, receiving, accepting, and rejecting connection requests
const { getCurrentUser, getAllUsers } = require("./user");
const events = require("./events");

let connectionRequests = [];


// Send Connection Request
function sendRequest(receiverUsername) {
    const currentUser = getCurrentUser();
    const users = getAllUsers();

    if (!currentUser) {
        events.emit("operationFailed", "Login required");
        return;
    }

    // Find by username instead of id
    const receiver = users.find(u => u.username === receiverUsername);

    if (!receiver) {
        events.emit("operationFailed", "User not found");
        return;
    }

    if (receiver.id === currentUser.id) {
        events.emit("operationFailed", "Cannot connect to yourself");
        return;
    }

    // Already connected check
    if (currentUser.connections.includes(receiver.id)) {
        events.emit("operationFailed", "Already connected");
        return;
    }

    // Duplicate request check
    const alreadySent = connectionRequests.find(r =>
        r.senderId === currentUser.id &&
        r.receiverId === receiver.id &&
        r.status === "pending"
    );

    if (alreadySent) {
        events.emit("operationFailed", "Request already sent");
        return;
    }

    connectionRequests.push({
        senderId: currentUser.id,
        receiverId: receiver.id,
        status: "pending",
        time: new Date()
    });

    events.emit("connectionRequested");
}

// View Requests (with names)
function viewRequests() {
    const currentUser = getCurrentUser();
    const users = getAllUsers();

    if (!currentUser) {
        events.emit("operationFailed", "Login required");
        return [];
    }

    return connectionRequests
        .filter(r => r.receiverId === currentUser.id)
        .map(r => {
            const sender = users.find(u => u.id === r.senderId);

            return {
                senderId: r.senderId,
                senderName: sender ? sender.name : "Unknown",
                senderUsername: sender ? sender.username : "Unknown",
                status: r.status
            };
        });
}

// View Other Profiles (exclude current user)
function viewOtherProfiles() {
    const currentUser = getCurrentUser();
    const users = getAllUsers();

    return users
        .filter(u => u.id !== currentUser.id)
        .map(u => ({
            id: u.id,
            name: u.name,
            role: u.role
        }));
}
// to accept/reject requests
function respondToRequest(senderId, action) {
    const currentUser = getCurrentUser();
    const users = getAllUsers();

    if (!currentUser) {
        events.emit("operationFailed", "Login required");
        return;
    }

    const request = connectionRequests.find(r =>
        r.senderId === senderId &&
        r.receiverId === currentUser.id &&
        r.status === "pending"
    );

    if (!request) {
        events.emit("operationFailed", "No pending request");
        return;
    }

    const sender = users.find(u => u.id === senderId);

    if (action === "accept") {
        request.status = "accepted";

        currentUser.connections.push(sender.id);
        sender.connections.push(currentUser.id);

        events.emit("connectionAccepted");
    } else if (action === "reject") {
        request.status = "rejected";
        events.emit("connectionRejected");
    }
}
//to check connections
function viewConnections() {
    const currentUser = getCurrentUser();
    const users = getAllUsers();

    if (!currentUser) {
        events.emit("operationFailed", "Login required");
        return [];
    }

    // If no connections
    if (!currentUser.connections || currentUser.connections.length === 0) {
        return [];
    }

    // Map connection IDs → user details
    return currentUser.connections.map(id => {
        const user = users.find(u => u.id === id);

        return {
            name: user ? user.name : "Unknown",
            username: user ? user.username : "unknown"
        };
    });
}

module.exports ={
    viewOtherProfiles ,
    sendRequest,
    viewRequests,
    respondToRequest,
    viewConnections
}