const express = require("express");
const router = express.Router();

const auth = require("../middleware/authMiddleware");
const {
    sendRequest,
    acceptRequest,
    getConnections
} = require("../controllers/connectionController");

router.post("/request/:userId", auth, sendRequest);
router.put("/accept/:requestId", auth, acceptRequest);
router.get("/", auth, getConnections);

module.exports = router;