let posts = [];

exports.createPost = (req, res) => {
    const post = {
        id: Date.now().toString(),
        userId: req.user.id,
        content: req.body.content,
        likes: [],
        comments: [],
        createdAt: new Date()
    };

    posts.push(post);
    res.json(post);
};

exports.getFeed = (req, res) => {
    const sorted = posts.sort((a, b) => b.createdAt - a.createdAt);
    res.json(sorted);
};

exports.likePost = (req, res) => {
    const post = posts.find(p => p.id === req.params.id);

    if (!post.likes.includes(req.user.id)) {
        post.likes.push(req.user.id);
    }

    res.json(post);
};

exports.commentPost = (req, res) => {
    const post = posts.find(p => p.id === req.params.id);

    post.comments.push({
        userId: req.user.id,
        text: req.body.text
    });

    res.json(post);
};