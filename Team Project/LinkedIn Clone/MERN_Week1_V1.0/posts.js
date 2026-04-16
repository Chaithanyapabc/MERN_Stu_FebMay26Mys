//Handles post creation, likes, and comments
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

function commentOnPost(postId, text) {
    const user = getCurrentUser();
    const post = posts.find(p => p.id === postId);

    if (!post) throw "Post not found";

    post.comments.push({
        userId: user.id,
        text
    });
}

function likePost(postId) {
    const user = getCurrentUser();
    const post = posts.find(p => p.id === postId);

    if (!post) throw "Post not found";

    if (!post.likes.includes(user.id)) {
        post.likes.push(user.id);
    }
}

function getAllPosts() {
    return posts;
}

module.exports = {
    createPost,
    likePost,
    getAllPosts,
    commentOnPost

};