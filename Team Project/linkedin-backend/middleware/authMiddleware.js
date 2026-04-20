const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization;

        if (!token) {
            return res.status(401).json({ message: "No token" });
        }

        const decoded = jwt.verify(token, "jwtSecret");
        req.user = decoded;

        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};