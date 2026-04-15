//Aggregates posts from connected users
const { getCurrentUser } = require("./user");
const { getAllPosts } = require("./posts");

async function viewFeed() {
    const user = getCurrentUser();

    const posts = getAllPosts().filter(p =>
        user.connections.includes(p.authorId)
    );

    return posts.sort((a, b) => b.time - a.time);
}

module.exports = { viewFeed };