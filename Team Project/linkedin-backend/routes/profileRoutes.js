const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
    getMyProfile,
    updateProfile,
    getProfileById
} = require("../controllers/profileController");

router.get("/me", auth, getMyProfile);
router.put("/", auth, updateProfile);
router.get("/:id", auth, getProfileById);

module.exports = router;