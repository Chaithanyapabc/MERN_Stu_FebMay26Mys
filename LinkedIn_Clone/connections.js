const store = require("./user");


// View Other Profiles (exclude current user)
function viewOtherProfiles() {

    if (!store.currentUser) {
        events.emit("operationFailed", "Login required");
        return [];
    }

    return store.users
        .filter(u => u.id !== store.currentUser.id)
        .map(u => ({
            id: u.id,
            name: u.name,
            headline: u.headline
        }));
}


// Send Connection Request
function sendRequest(receiverId) {

    if (!store.currentUser) {
        events.emit("operationFailed", "Login required");
        return;
    }

    const receiver = store.users.find(u => u.id == receiverId);

    if (!receiver) {
        events.emit("operationFailed", "User not found");
        return;
    }

    if (receiver.id === store.currentUser.id) {
        events.emit("operationFailed", "Cannot connect to yourself");
        return;
    }

    store.connectionRequests.push({
        senderId: store.currentUser.id,
        receiverId: receiver.id,
        status: "pending"
    });

    events.emit("connectionRequested");
}


// View Connection Requests (with names)
function viewRequests() {

    if (!store.currentUser) {
        events.emit("operationFailed", "Login required");
        return [];
    }

    return store.connectionRequests
        .filter(r => r.receiverId === store.currentUser.id)
        .map(r => {
            const sender = store.users.find(u => u.id === r.senderId);

            return {
                senderId: r.senderId,
                senderName: sender ? sender.name : "Unknown",
                status: r.status
            };
        });
}

module.exports ={
    viewOtherProfiles,
    sendRequest,
    viewRequests
}