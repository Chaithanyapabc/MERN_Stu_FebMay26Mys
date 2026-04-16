//can see posts from connected users
const { getCurrentUser, getAllUsers } = require("./user");
const { getAllPosts } = require("./posts");

function viewFeed() {
    const currentUser = getCurrentUser();
    const users = getAllUsers();
    const posts = getAllPosts();

    if (!currentUser) {
        throw "Login required";
    }

    // Get posts only from connections
    const feed = posts.filter(p =>
    currentUser.connections.includes(p.authorId) || p.authorId === currentUser.id);

    return feed.map(p => {
        const author = users.find(u => u.id === p.authorId);

        return {
            postId: p.id,
            author: author ? author.name : "Unknown",
            content: p.content,
            likes: p.likes.length,
            comments: p.comments.length
        };
    });
}

module.exports = { viewFeed };