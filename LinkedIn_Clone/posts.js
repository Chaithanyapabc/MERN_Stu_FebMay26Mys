//Handles post creation, feed generation, likes, and comments
const { getCurrentUser } = require("./user");

let posts = [];

async function createPost(content) {
    const user = getCurrentUser();

    if (!user) throw "No active user";

    const post = {
        id: Date.now().toString(),
        authorId: user.id,
        content,
        likes: [],
        comments: [],
        time: new Date()
    };

    posts.push(post);
    return post;
}

function likePost(postId) {
    const user = getCurrentUser();
    const post = posts.find(p => p.id === postId);

    if (!post) throw "Post not found";

    post.likes.push(user.id);
}

function getAllPosts() {
    return posts;
}

module.exports = {
    createPost,
    likePost,
    getAllPosts
};