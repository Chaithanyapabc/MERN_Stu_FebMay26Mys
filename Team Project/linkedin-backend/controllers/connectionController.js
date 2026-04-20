let requests = [];
let connections = [];

exports.sendRequest = (req, res) => {
    const sender = req.user.id;
    const receiver = req.params.userId;

    if (sender === receiver) {
        return res.status(400).json({ message: "Self request not allowed" });
    }

    const exists = requests.find(r => r.sender === sender && r.receiver === receiver);
    if (exists) {
        return res.status(400).json({ message: "Already requested" });
    }

    const request = {
        id: Date.now().toString(),
        sender,
        receiver,
        status: "pending"
    };

    requests.push(request);
    res.json(request);
};

exports.acceptRequest = (req, res) => {
    const request = requests.find(r => r.id === req.params.requestId);

    request.status = "accepted";

    connections.push({
        users: [request.sender, request.receiver]
    });

    res.json({ message: "Accepted" });
};

exports.getConnections = (req, res) => {
    const userId = req.user.id;

    const userConnections = connections.filter(c => c.users.includes(userId));
    res.json(userConnections);
};