const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
    createPost,
    getFeed,
    likePost,
    commentPost
} = require("../controllers/postController");

router.post("/", auth, createPost);
router.get("/feed", auth, getFeed);
router.post("/:id/like", auth, likePost);
router.post("/:id/comment", auth, commentPost);

module.exports = router;