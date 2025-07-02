const User = require("../models/User");
const MidProjectModel = require("../models/MidProject");

const clubMiddleware = async (req, res, next) => {
    const projectId = req.params.id;
    const project = await MidProjectModel.findById(projectId);

    if (!project) {
        return res.status(404).json({ error: "Project not found" });
    }

    // Always fetch the latest user data
    const user = await User.findById(req.user._id);
    if (project.clubOnly && (!user || !user.isClub)) {
        return res.status(403).json({ error: "You are not a Club Member" });
    }
    console.log("User is Club Member");
    next();
};

module.exports = clubMiddleware;