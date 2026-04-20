let profiles = [];

exports.getMyProfile = (req, res) => {
    const profile = profiles.find(p => p.userId === req.user.id);
    res.json(profile);
};

exports.updateProfile = (req, res) => {
    let profile = profiles.find(p => p.userId === req.user.id);

    if (!profile) {
        profile = { userId: req.user.id };
        profiles.push(profile);
    }

    Object.assign(profile, req.body);

    res.json(profile);
};

exports.getProfileById = (req, res) => {
    const profile = profiles.find(p => p.userId === req.params.id);
    if (!profile) {
        return res.status(404).json({ message: "Not found" });
    }

    res.json(profile);
};