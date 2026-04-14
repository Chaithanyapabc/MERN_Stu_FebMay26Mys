const store = require("./store");
const eventEmitter = require("./events");

async function createPost(content) {
    try {
        if (!store.currentUser) throw "Login required";

        const post = {
            id: Date.now(),
            authorId: store.currentUser.id,
            content,
            timestamp: new Date(),
            likes: [],
            comments: []
        };

        store.posts.push(post);

        eventEmitter.emit("postCreated");
        return post;

    } catch (error) {
        eventEmitter.emit("operationFailed", error);
    }
}

module.exports = { createPost };