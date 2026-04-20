const jwt = require("jsonwebtoken");
let users = [];

exports.register = (req, res) => {
    const { username, password } = req.body;

    const existing = users.find(u => u.username === username);
    if (existing) {
        return res.status(400).json({ message: "User exists" });
    }

    const user = { id: Date.now().toString(), username, password };
    users.push(user);

    res.status(201).json({ message: "Registered" });
};

exports.login = (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, "jwtSecret", { expiresIn: "1h" });

    res.cookie("token", token, { httpOnly: true });

    res.json({ message: "Login successful", token });
};